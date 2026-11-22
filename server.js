'use strict';

const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || 'change-me-please';

const DATA_FILE = path.join(__dirname, 'data', 'bookings.json');
const PUBLIC_DIR = path.join(__dirname, 'public');

if (ADMIN_KEY === 'change-me-please') {
  console.warn('\n⚠️ WARNING: Using default ADMIN_KEY. Set ADMIN_KEY env var before deploying!\n');
}

app.set('trust proxy', true);
app.use(express.json({ limit: '64kb' }));

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(express.static(PUBLIC_DIR));

async function readBookings() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch (e) {
    if (e.code === 'ENOENT') return [];
    if (e instanceof SyntaxError) {
      try { await fs.rename(DATA_FILE, DATA_FILE + '.corrupt-' + Date.now()); } catch (_) {}
      return [];
    }
    throw e;
  }
}

async function writeBookings(list) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  const tmp = DATA_FILE + '.tmp';
  await fs.writeFile(tmp, JSON.stringify(list, null, 2));
  await fs.rename(tmp, DATA_FILE);
}

let chain = Promise.resolve();
function serialize(fn) {
  const p = chain.then(fn, fn);
  chain = p.catch(() => {});
  return p;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 120, email: 200, phone: 60, budget: 60, notes: 4000, service: 120, type: 120, when: 120 };

function clean(v, max) {
  return String(v == null ? '' : v)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim().slice(0, max);
}

function validate(body) {
  const errors = [];
  const r = {
    service: clean(body.service, MAX.service),
    type: clean(body.type, MAX.type),
    when: clean(body.when, MAX.when),
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    budget: clean(body.budget, MAX.budget),
    notes: clean(body.notes, MAX.notes)
  };
  if (!r.name) errors.push('Name is required.');
  if (!r.email || !EMAIL_RE.test(r.email)) errors.push('A valid email is required.');
  if (!r.service) errors.push('Service is required.');
  if (!r.type) errors.push('Booking type is required.');
  return { errors, value: r };
}

const buckets = new Map();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 10;

function rateLimit(req, res, next) {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const hits = (buckets.get(ip) || []).filter(t => now - t < WINDOW);
  if (hits.length >= LIMIT) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' });
  }
  hits.push(now);
  buckets.set(ip, hits);
  next();
}

function requireAdmin(req, res, next) {
  const key = req.get('x-admin-key') || req.query.key;
  if (!key || key !== ADMIN_KEY) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
  next();
}

app.post('/api/bookings', rateLimit, async (req, res) => {
  const { errors, value } = validate(req.body || {});
  if (errors.length) {
    return res.status(400).json({ ok: false, error: errors.join(' ') });
  }
  const record = { id: crypto.randomBytes(6).toString('hex'), createdAt: new Date().toISOString(), ...value };
  try {
    await serialize(async () => {
      const list = await readBookings();
      list.push(record);
      await writeBookings(list.slice(-500));
    });
    res.json({ ok: true, id: record.id });
  } catch (e) {
    console.error('Failed to save booking:', e);
    res.status(500).json({ ok: false, error: 'Could not save your request. Please use email or WhatsApp.' });
  }
});

app.get('/api/bookings', requireAdmin, async (req, res) => {
  try {
    const list = await readBookings();
    list.sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
    res.json({ ok: true, bookings: list });
  } catch (e) {
    console.error('Failed to read bookings:', e);
    res.status(500).json({ ok: false, error: 'Could not read bookings.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ ok: false, error: 'Not found' });
  }
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`\n🎨 The Artists running → http://localhost:${PORT}`);
  console.log(`🔐 Admin dashboard → http://localhost:${PORT}/admin.html`);
  console.log(`   Admin key → ${ADMIN_KEY === 'change-me-please' ? '(DEFAULT — set ADMIN_KEY!)' : '(from env)'}\n`);
});
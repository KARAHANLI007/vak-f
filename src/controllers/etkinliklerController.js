// controllers/etkinliklerController.js
const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM etkinlikler', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { baslik, aciklama, tarih, saat, yer } = req.body;
  db.query(
    'INSERT INTO etkinlikler (baslik, aciklama, tarih, saat, yer) VALUES (?, ?, ?, ?, ?)',
    [baslik, aciklama, tarih, saat, yer],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: '✅ Yeni etkinlik eklendi', id: result.insertId });
    }
  );
};

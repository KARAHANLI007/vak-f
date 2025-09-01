const db = require('../config/db');

// Tüm üyeleri listele
exports.getAllUyeler = (req, res) => {
  db.query('SELECT * FROM uyeler', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// Yeni üye ekle
exports.createUye = (req, res) => {
  const { ad, soyad, tc_kimlik, email, telefon, adres } = req.body;
  db.query(
    'INSERT INTO uyeler (ad, soyad, tc_kimlik, email, telefon, adres) VALUES (?, ?, ?, ?, ?, ?)',
    [ad, soyad, tc_kimlik, email, telefon, adres],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: '✅ Yeni üye eklendi', id: result.insertId });
    }
  );
};

// Üye güncelle
exports.updateUye = (req, res) => {
  const { id } = req.params;
  const { ad, soyad, email, telefon, adres } = req.body;
  db.query(
    'UPDATE uyeler SET ad=?, soyad=?, email=?, telefon=?, adres=? WHERE id=?',
    [ad, soyad, email, telefon, adres, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ message: '✏️ Üye bilgisi güncellendi' });
    }
  );
};

// Üye sil
exports.deleteUye = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM uyeler WHERE id=?', [id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: '🗑️ Üye silindi' });
  });
};

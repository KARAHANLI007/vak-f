const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 


const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { index: false }));

// Rotalar
//app.use('/uyeler', require('./routes/uyeler'));
//app.use('/gonulluler', require('./routes/gonulluler'));
//app.use('/etkinlikler', require('./routes/etkinlikler'));
//app.use('/projeler', require('./routes/projeler'));
//app.use('/bagislar', require('./routes/bagislar'));
//app.use('/burslar', require('./routes/burslar'));
//app.use('/giderler', require('./routes/giderler'));
//app.use('/kullanicilar', require('./routes/kullanicilar'));


app.get("/", (req, res) => {
    res.redirect("/login.html");
});
// Login post isteğini yönetir
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email === "admin@mail.com" && password === "12345") {
        res.redirect("/index.html");
    } else {
        res
            .status(401)
            .send('Geçersiz e-posta veya şifre. <a href="/login.html">Geri Dön</a>');
    }
});

// Server başlat
app.listen(PORT, () => {
  console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});

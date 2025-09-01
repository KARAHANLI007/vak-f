const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",        // XAMPP default kullanıcı
  password: "",        // şifre boşsa boş bırak
  database: "genc_hareket",
  waitForConnections: true,
  connectionLimit: 10, // aynı anda max 10 bağlantı
  queueLimit: 0
});

// Bağlantıyı test et
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ MySQL veritabanına bağlanıldı.");
    conn.release(); // bağlantıyı geri bırak
  } catch (err) {
    console.error("❌ MySQL bağlantı hatası:", err);
  }
})();

module.exports = pool;

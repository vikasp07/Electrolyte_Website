// server.js
require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");
const fs = require("fs");

// connect DB
connectDB(process.env.MONGO_URI);

// middlewares
const cors = require("cors");
app.use(cors());
app.use(express.json()); // parse application/json

// serve uploads
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
app.use("/uploads", express.static(uploadsDir));

// routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/photos", require("./routes/photos"));
app.use("/api/sponsors", require("./routes/sponsors"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/blogs", require("./routes/blogs"));

// health
app.get("/api/health", (req, res) => res.json({ ok: true, time: new Date() }));

// initial admin auto-creation (first-run convenience)
// If admin doesn't exist, create from env ADMIN_EMAIL / ADMIN_PASSWORD
const Admin = require("./models/Admin");
const bcrypt = require("bcryptjs");
const createInitialAdmin = async () => {
  try {
    const email = process.env.ADMIN_EMAIL;
    const password = process.env.ADMIN_PASSWORD;
    if (!email || !password) return;
    const existing = await Admin.findOne({ email: email.toLowerCase() });
    if (!existing) {
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      const admin = new Admin({
        email: email.toLowerCase(),
        passwordHash,
        name: "Admin",
      });
      await admin.save();
      console.log("Initial admin created:", email);
      console.log("DEBUG - Stored email:", admin.email);
      console.log("DEBUG - Password hash exists:", !!admin.passwordHash);
      console.log("DEBUG - Password hash length:", admin.passwordHash?.length);
      // Verify we can find it
      const check = await Admin.findOne({ email: email.toLowerCase() });
      console.log("DEBUG - Can retrieve admin:", !!check);
      console.log("DEBUG - Retrieved email:", check?.email);
    }
  } catch (e) {
    console.error(e);
  }
};
createInitialAdmin();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

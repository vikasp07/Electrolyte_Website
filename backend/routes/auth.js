// routes/auth.js
const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// POST /api/auth/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("\n=== LOGIN ATTEMPT ===");
  console.log("DEBUG - Login email:", email);
  console.log("DEBUG - Password provided:", password ? "YES (length: " + password.length + ")" : "NO");
  
  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  const admin = await Admin.findOne({ email: email.toLowerCase() });
  console.log("DEBUG - Admin found:", !!admin);
  console.log("DEBUG - Admin email:", admin?.email);
  console.log("DEBUG - Admin passwordHash exists:", !!admin?.passwordHash);
  console.log("DEBUG - Admin passwordHash length:", admin?.passwordHash?.length);
  
  if (!admin) {
    console.log("DEBUG - FAILURE: Admin not found in DB");
    return res.status(401).json({ message: "Invalid credentials" });
  }

  console.log("DEBUG - Comparing password with hash...");
  const valid = await bcrypt.compare(password, admin.passwordHash);
  console.log("DEBUG - Password match result:", valid);
  
  if (!valid) {
    console.log("DEBUG - FAILURE: Password mismatch");
    return res.status(401).json({ message: "Invalid credentials" });
  }
  
  console.log("DEBUG - SUCCESS: Login valid, generating token");

  const token = jwt.sign(
    { id: admin._id, email: admin.email },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );
  res.json({ token, admin: { email: admin.email, name: admin.name } });
});

/* OPTIONAL: Register route for initial setup (disable in production)
router.post('/register', async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password required' });
  const exists = await Admin.findOne({ email: email.toLowerCase() });
  if (exists) return res.status(400).json({ message: 'Admin already exists' });
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);
  const admin = new Admin({ email: email.toLowerCase(), passwordHash, name });
  await admin.save();
  res.json({ message: 'Admin created' });
});
*/

module.exports = router;

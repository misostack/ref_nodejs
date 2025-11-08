const { randomBytes } = require("crypto");
/**
 * Generates a cryptographically-secure random key.
 *
 * @param bytes  Number of random bytes to generate.
 *               • 32 bytes  = 256-bit key (default – good for AES-256, HMAC-SHA-256, etc.)
 *               • 16 bytes  = 128-bit key  (AES-128)
 * @param format Output format: "hex" | "base64" | "base64url"
 * @returns      Key string in the chosen encoding.
 */
function generateKey(bytes = 32, format = "hex") {
  // crypto.randomBytes() is non-blocking, CSPRNG-backed
  return randomBytes(bytes).toString(format);
}

/* ======== EXAMPLES ========= */

// 256-bit hex-encoded secret (64 chars)
const jwtSecret = generateKey(); // default 32 bytes, hex

// 256-bit key for AES-GCM, stored in base64 for env vars
const aesKeyB64 = generateKey(32, "base64");

// URL-safe API key you can embed in query params or headers
const apiKey = generateKey(32, "base64url");

const generatePassword = (length = 12) => {
  // password must include letters, numbers, and special characters
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[]{}|;:,.<>?";

  const allChars = letters + numbers + specialChars;

  let password = "";
  password += letters.charAt(Math.floor(Math.random() * letters.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += specialChars.charAt(
    Math.floor(Math.random() * specialChars.length)
  );

  for (let i = 3; i < length; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Shuffle the password to ensure randomness
  password = password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");

  return password;
};

const password = generatePassword(16);

console.log({ jwtSecret, aesKeyB64, apiKey, password });

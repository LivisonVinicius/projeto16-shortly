import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export function generateToken(user, res) {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    return jwt.sign(user, jwtSecretKey, { expiresIn: "1d" });
  } catch {
    return false;
  }
}

export function validateToken(token) {
  try {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    jwt.verify(token, jwtSecretKey);
    return true;
  } catch {
    return false;
  }
}

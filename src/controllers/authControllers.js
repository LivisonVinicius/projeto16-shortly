import connection from "../db/database.js";
import { generateToken } from "../jwtToken.js";
import bcrypt from "bcrypt";

export async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${passwordHash}')`
    );

    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const token = generateToken(req.body);
  if (token) {
    return res.status(200).send(token);
  }
  res.sendStatus(500);
}

import { loginSchema, registerSchema } from "../schemas/authSchemas.js";
import connection from "../db/database.js";
import bcrypt from "bcrypt";

export async function signUpMiddlewareValidation(req, res, next) {
  try {
    const validation = registerSchema.validate(req.body);
    const { rows: registers } = await connection.query(
      `SELECT * FROM users WHERE email = '${req.body.email}'`
    );

    if (validation.error) {
      return res.sendStatus(422);
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.sendStatus(422);
    }
    if (registers.length !== 0) {
      return res.sendStatus(409);
    }
  } catch {
    return res.sendStatus(500);
  }
  next();
}

export async function signInMiddlewareValidation(req, res, next) {
  try {
    const validation = loginSchema.validate(req.body);
    const { rows: register } = await connection.query(
      `SELECT * FROM users WHERE email = '${req.body.email}'`
    );

    if (validation.error) {
      return res.sendStatus(422);
    }

    if (!bcrypt.compareSync(req.body.password, register[0].password)) {
      return res.sendStatus(401);
    }
  } catch {
    return res.sendStatus(500);
  }
  next();
}

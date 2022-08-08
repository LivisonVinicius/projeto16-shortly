import { validateToken } from "../token.js";
import connection from "../db/database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export async function userMeMiddlewareValidation(req, res, next) {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");

        if (!validateToken(token)){
            return res.sendStatus(401);
        }

        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        const { rows : user } = await connection.query(`SELECT * FROM users WHERE email = '${jwt.verify(token, jwtSecretKey).email}'`);

        if (user.length===0){
            return res.sendStatus(404);
        }
    }
    catch {
        return res.sendStatus(500);
    }
    next();
}
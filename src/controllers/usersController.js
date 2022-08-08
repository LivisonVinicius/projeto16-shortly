import connection from "../db/database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export async function getUserMe(req, res) {
    try {
        const token = req.headers.authorization.replace("Bearer ", "");
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        const { rows : me } = await connection.query(`
        SELECT users.id AS id, users.name AS name, SUM(url."visitCount") AS "visitCount", json_agg(json_build_object('id', url.id, 'shortUrl', url."shortUrl",'url', url."fullUrl", 'visitCount', url."visitCount)) AS "shortenedUrls"
        FROM url
        JOIN users ON url."userId" = users.id
        WHERE users.email =  '${jwt.verify(token, jwtSecretKey).email}'
        GROUP BY users.id
        `);
        return res.status(200).send(me)
    }
    catch{
        return res.sendStatus(500)
    }
}
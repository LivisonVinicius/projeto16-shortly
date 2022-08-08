import connection from "../db/database.js";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function postShorten(req, res) {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let shortUrl = nanoid(10);
    const { rows: users } = await connection.query(
      `SELECT id FROM users WHERE email = '${
        jwt.verify(token, jwtSecretKey).email
      }'`
    );
    connection.query(
      `INSERT INTO url ("userId", "shortUrl", "fullUrl") VALUES ('${users[0].id}', '${shortUrl}', '${req.body.url}' )`
    );

    return res.status(200).send({ shortUrl });
  } catch {
    return res.sendStatus(500);
  }
}

export async function getUrlId(req, res){
    try{
        const {rows : urlId} = await connection.query(`SELECT id, "shortUrl", "fullUrl" as url FROM url WHERE id = '${req.params.id}'`);

        return res.status(200).send(urlId[0]);
    }
    catch{
        return res.sendStatus(500);
    }
}

export async function deleteUrlId(req, res){
    try {
        connection.query(`DELETE FROM url WHERE id = '${req.params.id}'`);
        return res.sendStatus(204);
    }
    catch{
        return res.sendStatus(500);
    }
}

export async function openShortUrl(req, res){
    try{
        const {rows : shortUrls} = await connection.query(`SELECT * FROM url WHERE "shortUrl" = '${req.params.shortUrl}'`);
        connection.query(`UPDATE url SET "visitCount" = "visitCount"+1 WHERE "shortUrl" = '${req.params.shortUrl}'`);
        return res.redirect(shortUrls[0].fullUrl);
    }
    catch{
        return res.sendStatus(500);
    }
}

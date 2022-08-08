import connection from "../db/database.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export async function getRanking(req, res){
    try {
        const { rows : ranking } = await connection.query(`
        SELECT users.id AS id, users.name AS name, COUNT(url."userId") as "linksCount", SUM(url."visitCount") AS "visitCount"
        FROM user
        LEFT JOIN url ON url."userId" = users.id
        GROUP BY users.id
        ORDER BY "visitCount"
        `);
        return res.status(200).send(ranking.map(user => user.visitCount ? user : {...user, visitCount:0}));
    }
    catch {
        return res.sendStatus(500);
    }
}
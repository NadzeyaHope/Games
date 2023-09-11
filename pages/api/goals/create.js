// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/lib/mongoDb";

export default async function handler(req, res) {
    const db = await mongoDb();
    const users = await db.collection('goals');
    const data = JSON.parse(req.body);
    const result = await users.insertOne(data);
    // const userId = result.insertedId.toString();
    // res.setHeader('Set-Cookie', [`userId=${userId}; HttpOnly; Path=/`])

    res.status(201).json(result);
}

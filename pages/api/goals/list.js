// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/lib/mongoDb";

export default async function handler(req, res) {
    const db = await mongoDb();
    const users = await db.collection('goals');
    const result = await users.find().toArray();
    res.status(200).json(result);
}

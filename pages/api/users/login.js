// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {mongoDb} from "@/lib/mongoDb";

export default async function handler(req, res) {
    const db = await mongoDb();
    const users = await db.collection('users');
    const data = JSON.parse(req.body)
    const result = await users.find({email : data.email, password : data.password}).toArray();
    if(result.length <= 0){
        res.status(403).json(403)
    }
    res.status(200).json(result);
}

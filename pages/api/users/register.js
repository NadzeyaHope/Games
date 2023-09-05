import {mongoDb} from "@/lib/mongoDb";

export default async function handler(req, res) {
  const db = await mongoDb();
  const users = await db.collection('users');
  // const data = JSON.parse(req.body);

  /*if () {
    res.status(422).json({});
    return;
  }

  const result = await users.insertOne(data);

  // res.setHeader('Content-Type', 'application/json');

  console.log(result)
*/
  res.status(201).json({a: 11111});
}

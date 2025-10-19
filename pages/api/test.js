import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("aimindia");
    const collections = await db.listCollections().toArray();
    res.status(200).json({ success: true, collections });
  } catch (e) {
    res.status(500).json({ success: false, error: e.message });
  } finally {
    await client.close();
  }
}

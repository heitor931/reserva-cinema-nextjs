// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDataBase, getData, postData } from "./mongo";

export default async function handler(req, res) {
  await connectDataBase();
  if (req.method === "GET") {
    const data = await getData();
    console.log(data);
    res.status(200).json(data);
  }
  if (req.method === "POST") {
    console.log(req.body);
    await postData(req.body);
    res.status(201).json({ message: "Status updated successfully" });
  }
}

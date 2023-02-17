// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../Data/data.json";
import { RootObject } from "../Data/type";
const { products } = data as RootObject;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RootObject["products"]>
) {
  res.status(200).json(products);
}

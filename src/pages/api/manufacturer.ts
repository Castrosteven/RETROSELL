// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../Data/data.json";
import { RootObject } from "../Data/type";
const { manufacturers } = data as RootObject;
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RootObject["manufacturers"]>
) {
  res.status(200).json(manufacturers);
}

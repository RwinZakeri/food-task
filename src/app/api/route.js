import { NextApiRequest, NextApiResponse } from "next";
// data
import data from "@/db/product.json";
export function GET(req) {
  return Response.json(data);
}

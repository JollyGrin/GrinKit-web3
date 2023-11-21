import { NextApiRequest, NextApiResponse } from "next";
import { roundTime, verifySignature } from "@/services/web3/helpers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;
  const { signature, address } = body;

  // use this in any endpoint to verify address ownership
  const result = await verifySignature({
    message: roundTime().toString(),
    signature,
    address,
  });

  // in an other endpoint, you can fail the request if false

  res.status(200).json({ verified: result });
}

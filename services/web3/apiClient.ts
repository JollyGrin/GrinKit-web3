import fetch from "axios";
import { SignaturePayload } from "./helpers";

export const postVerifySignature = async (
  props: Omit<SignaturePayload, "message">,
) => {
  const url = "/api/web3/verify";
  try {
    const result = await fetch.post<{ verified: boolean }>(url, props);
    return result?.data;
  } catch (err) {
    throw err;
  }
};

import { recoverMessageAddress } from "viem";

export type SignaturePayload = {
  message: string;
  signature: `0x${string}`;
  address: `0x${string}`;
};

export const verifySignature = async ({
  message,
  signature,
  address,
}: SignaturePayload) => {
  const recoveredAddress = await recoverMessageAddress({
    message,
    signature,
  });
  const isEqual = recoveredAddress.toLowerCase() === address.toLowerCase();
  return isEqual;
};

export const now = () => new Date().getTime();

export const durationToTimeoutSeconds = 20;

/**
 * Provides a timestamp to the nearest duration.
 *
 * For example: if duration is 20 (seconds) then would consistently
 * provide the same timestamp if asked within 20 seconds.
 *
 * Used to generate a timestamp on client to be passed and verified by server
 * without a timing delay producing a different signature.
 * */
export const roundTime = (time?: number, dur?: number) => {
  const timestamp = time ?? new Date().getTime();
  const duration = (dur ?? durationToTimeoutSeconds) * 1000;
  const roundedTimestamp = Math.round(timestamp / duration) * duration;
  return roundedTimestamp;
};

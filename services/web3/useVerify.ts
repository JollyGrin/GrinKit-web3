import { postVerifySignature } from "./apiClient";
import { useMutation } from "@tanstack/react-query";

export const useVerify = () => {
  const key = "web3-verify";

  return useMutation({
    mutationFn: postVerifySignature,
    mutationKey: [key],
  });
};

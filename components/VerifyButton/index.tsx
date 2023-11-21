import { roundTime } from "@/services/web3/helpers";
import { useVerify } from "@/services/web3/useVerify";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

import { useAccount, useSignMessage } from "wagmi";

export const VerifyButton = () => {
  const { address } = useAccount();
  const [isVerified, setIsVerified] = useState(false);
  const { mutate } = useVerify();

  const onSubmit = (signature: `0x${string}`) => {
    if (!address) return console.error("No Address");
    const onSuccess = (e: { verified: boolean }) => {
      setIsVerified(e.verified);
    };
    mutate({ signature, address }, { onSuccess });
  };

  const { signMessage } = useSignMessage({
    onSuccess: onSubmit,
  });

  return (
    <Button
      fontSize="4rem"
      fontWeight={700}
      bg={isVerified ? "aquamarine" : "tomato"}
      color="#333"
      p="2rem"
      borderRadius="1rem"
      isDisabled={isVerified}
      onClick={() =>
        signMessage({
          message: roundTime().toString(),
        })
      }
    >
      {isVerified ? "Verified" : "Unverified"}
    </Button>
  );
};

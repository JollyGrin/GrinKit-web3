import { HStack, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
  return (
    <HStack p="1rem" justifyContent="space-between">
      <Text>Header</Text>
      <ConnectButton />
    </HStack>
  );
};

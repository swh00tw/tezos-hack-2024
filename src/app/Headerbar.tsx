"use client";

import { Flex, Text } from "@radix-ui/themes";
import { useAuth } from "./AuthProvider";
import { DisconnectButton } from "@/components/DisconnectButton";
import { useWallet } from "@/hooks/useWallet";

export function Headerbar() {
  const { user } = useAuth();
  const { userAddress } = useWallet();
  return (
    <div className="w-full h-16 border-b-[1px] border-gray-6 sticky top-0 bg-white flex justify-between items-center p-4">
      <Flex className="gap-x-1">
        <Text className="text-green-8 text-[24px]">PWR</Text>
        <Text className="text-[24px]">Perks</Text>
      </Flex>
      {user && userAddress ? <DisconnectButton /> : null}
    </div>
  );
}

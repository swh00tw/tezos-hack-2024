"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import { useAuth } from "./AuthProvider";

export function Headerbar() {
  const { user, logout } = useAuth();
  return (
    <div className="w-full h-16 border-b-[1px] border-gray-6 sticky top-0 bg-white flex justify-between items-center p-4">
      <Flex className="gap-x-1">
        <Text className="text-green-8 text-[24px]">PWR</Text>
        <Text className="text-[24px]">Perks</Text>
      </Flex>
      {user ? (
        <Button
          color="red"
          onClick={() => {
            logout();
          }}
        >
          Log out
        </Button>
      ) : null}
    </div>
  );
}

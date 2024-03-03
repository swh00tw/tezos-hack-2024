"use client";

import { Text } from "@radix-ui/themes";
import { useAuth } from "../AuthProvider";

export function UserInfoSection() {
  const { user } = useAuth();
  const now = new Date();
  const dateString = `${now.toLocaleDateString()}`;

  return (
    <div className="flex flex-col gap-y-4 w-full">
      <div className="flex flex-row justify-end">
        <Text size="1" className="text-gray-10">
          As of {dateString}
        </Text>
      </div>
      {user ? (
        <div className="flex flex-col gap-y-2 border-[1px] border-gray-6 p-4 rounded-4">
          <Text weight={"medium"} className="text-green-10" size="4">
            Unit Type
          </Text>
          <div className="w-full h-[1px] bg-gray-4" />
          <div className="flex flex-col gap-y-2 text-gray-10 text-[14px] mb-8">
            <Text>
              Apt. {user.apt}
              {user.unit}
            </Text>
            <Text>{user.aptType}</Text>
            <Text>{user.numResident} residents</Text>
          </div>
        </div>
      ) : null}
    </div>
  );
}

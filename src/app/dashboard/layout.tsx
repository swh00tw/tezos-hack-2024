"use client";

import { cn } from "@/utils/cn";
import { Text, Flex } from "@radix-ui/themes";
import { UserInfoSection } from "./UserInfoSection";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavButton(props: { route: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const { route, children } = props;
  const isActive = pathname === `/dashboard${route}`;
  console.log(isActive);

  return (
    <Link href={`/dashboard${route}`}>
      <div>
        <Flex
          className={cn(
            {
              "text-green-10 font-medium": isActive,
            },
            "pb-2 relative"
          )}
        >
          {children}
        </Flex>
        <div
          className={cn(
            "w-full h-[2px] transition-all ease-in-out duration-200",
            {
              "bg-green-10": isActive,
              "bg-transparent": !isActive,
            }
          )}
        />
      </div>
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col p-8 min-h-[90svh] gap-y-4">
      <Flex
        className="min-h-[70svh] justify-between"
        direction={{
          initial: "column-reverse",
          md: "row",
        }}
      >
        <div className="flex flex-col w-full md:w-[60%] gap-y-4">
          <Flex gap="8" className="justify-start">
            <NavButton route="">Current Bill</NavButton>
            <NavButton route="/activity">Activity</NavButton>
            <NavButton route="/rebates">Rebates</NavButton>
          </Flex>
          <div>{children}</div>
        </div>
        <div className="flex w-full md:w-[35%]">
          <UserInfoSection />
        </div>
      </Flex>
      <div
        className={cn(
          "bg-accent-4",
          "p-4",
          "rounded-4",
          "flex",
          "flex-col",
          "gap-y-2"
        )}
      >
        <Text className="text-[16px] text-gray-12" weight={"medium"}>
          💡 Did you know?
        </Text>
        <Text className="text-[14px] text-gray-11">
          Random BS Random BS Random BS Random BS Random BS
        </Text>
      </div>
    </div>
  );
}

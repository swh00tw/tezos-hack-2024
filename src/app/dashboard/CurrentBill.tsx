"use client";

import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Text, Flex, Button } from "@radix-ui/themes";
import { useAuth } from "../AuthProvider";
import { useState, useEffect } from "react";

function EligibleUI() {
  return (
    <div className="w-full flex flex-row justify-between text-gray-12 p-4 gap-x-4">
      <div className="w-[50%] flex flex-col gap-y-2">
        <Text weight={"bold"} size="5" className="mb-2">
          Electricity
        </Text>
        <div className="flex-col">
          <div>12/29/2023 - 01/27/2024</div>
          <div className="font-medium">602.21 kWh</div>
        </div>
        <div className="flex-col">
          <div>01/27/2024 - 02/29/2024</div>
          <div className="font-medium">420.30 kWh</div>
        </div>
        <div className="mt-4 p-4 bg-green-4 rounded-4">
          <Text>Stats: </Text>
          <Flex className="items-center gap-x-1 pl-2">
            {" "}
            <TriangleDownIcon width={18} height={18} color="green" />
            from last month 30%
          </Flex>
        </div>
      </div>
      <div className="w-[50%] flex flex-col p-4 justify-center items-center border-[1px] border-gray-6 rounded-2">
        <Text weight={"medium"} size="5">
          Congratulations! 🎊
        </Text>
        <Text>Check out your energy savings payout:</Text>
        <Button
          className="mt-4 w-[50%]"
          onClick={() => {
            alert("To be implemented");
          }}
        >
          Payout
        </Button>
      </div>
    </div>
  );
}

function NotEligibleUI() {
  const { user } = useAuth();
  return (
    <div className="w-full flex flex-row justify-between text-gray-12 p-4 gap-x-4">
      <div className="w-[50%] flex flex-col gap-y-2">
        <Text weight={"bold"} size="5" className="mb-2">
          Electricity
        </Text>
        <div className="flex-col">
          <div>12/29/2023 - 01/27/2024</div>
          <div className="font-medium">902.21 kWh</div>
        </div>
        <div className="flex-col">
          <div>01/27/2024 - 02/29/2024</div>
          <div className="font-medium">1200.30 kWh</div>
        </div>
        <div className="mt-4 p-4 bg-red-4 rounded-4">
          <Text>Stats: </Text>
          <Flex className="items-center gap-x-1 pl-2">
            {" "}
            <TriangleUpIcon width={18} height={18} color="red" />
            from last month 33%
          </Flex>
        </div>
      </div>
      <div className="w-[50%] flex flex-col p-4 justify-center items-start border-[1px] border-gray-6 rounded-2">
        <Text weight={"medium"} size="3">
          {`Dear ${user?.name}, while your energy consumption didn't qualify for rebates
          this month`}
        </Text>
        <Text size="1">{`Don't worry – you can try again next month!`}</Text>
        <Text size="1">{`Check out our learning portal for tips on reducing your consumption.`}</Text>
        <Button
          className="mt-4 w-[100%]"
          onClick={() => {
            alert("To be implemented");
          }}
        >
          Learn more 📚
        </Button>
      </div>
    </div>
  );
}

export default function CurrentBill() {
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  useEffect(() => {
    // fetch data from local storage
    const data = localStorage.getItem("isEligible");
    setIsEligible(data === "1");
  }, []);

  return isEligible === null ? null : isEligible ? (
    <EligibleUI />
  ) : (
    <NotEligibleUI />
  );
}

import { Flex, Text } from "@radix-ui/themes";

export function Headerbar() {
  return (
    <div className="w-full h-16 border-b-[1px] border-gray-6 sticky top-0 bg-white flex justify-between items-center p-4">
      <Flex className="gap-x-1">
        <Text className="text-green-8 text-[24px]">PWR</Text>
        <Text className="text-[24px]">Perks</Text>
      </Flex>
    </div>
  );
}

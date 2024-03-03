"use client";
import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { Text, Flex } from "@radix-ui/themes";
import { UserInfoSection } from "./UserInfoSection";
import Link from "next/link";
import { usePathname } from "next/navigation";

const didYouKnowMessages = [
  "you could receive a 30% rebate on a cost up of up to $2,000 on an Air-Source Heat pump?",
  "Electric vehicles can reduce greenhouse gas emissions by up to 50% compared to traditional gasoline cars.",
  "Installing solar panels on your home can increase its value by up to 4.1% more than homes without solar panels.",
  "A single tree can absorb approximately one ton of carbon dioxide during its lifetime.",
  "LED light bulbs use at least 75% less energy, and last 25 times longer, than incandescent lighting.",
  "Recycling just one aluminum can save enough energy to power a TV for three hours.",
  "Using a smart thermostat can save up to 10% a year on heating and cooling costs.",
  "Low-flow showerheads can save up to 15 gallons of water during a 10-minute shower.",
  "Green roofs can reduce the amount of heat absorbed by buildings, lowering cooling costs by up to 25%.",
  "Rainwater harvesting systems can reduce your water bill by up to 40%.",
  "Energy Star appliances can save up to 50% more energy than standard appliances.",
  "Planting native plants in your garden can significantly reduce water usage and maintenance costs.",
  "Biodegradable cleaning products can minimize harmful chemicals released into the environment.",
  "Eco-friendly insulation made from materials like sheep's wool can be more efficient than fiberglass.",
  "Double-pane windows can reduce energy loss by up to 50% compared to single-pane windows.",
  "Motion sensor lights can save on energy bills by turning off automatically when no one is in the room.",
  "Solar water heaters can reduce water heating bills by 50 to 80%.",
  "Bamboo flooring is not only sustainable but also more durable than traditional hardwood floors.",
  "Using rechargeable batteries can save more energy and reduce waste compared to disposable batteries.",
  "Public transportation can reduce carbon emissions by 37 million metric tons annually in the U.S.",
  "Wind turbines can generate electricity without emitting greenhouse gases.",
  "Geothermal heat pumps can be more efficient than traditional HVAC systems, reducing energy use by 30 to 60%.",
  "Community solar projects allow individuals to benefit from solar power without installing panels on their property.",
  "Eating locally grown food can reduce the carbon footprint associated with transportation.",
  "Composting organic waste can reduce methane emissions from landfills.",
  "Carpooling just twice a week can cut greenhouse gas emissions by hundreds of pounds a year.",
  "Paperless billing can save millions of trees and reduce greenhouse gas emissions significantly.",
  "A programmable coffee maker can save energy by automatically turning off after brewing.",
  "Eco-friendly packaging made from recycled materials can reduce waste and energy consumption.",
  "LED street lights use at least 40% less energy than traditional street lights.",
  "Energy-efficient elevators can use up to 40% less energy than standard models.",
  "Plant-based diets can significantly reduce water usage and greenhouse gas emissions.",
  "Reusable water bottles can save an average of 156 plastic bottles per person each year.",
  "E-bikes emit 90% less CO2 than cars and motorcycles for the same distance traveled.",
  "Smart grids can improve the efficiency of electricity distribution, reducing energy waste.",
  "Insulating your water pipes can reduce heat loss and save energy.",
  "Organic farming practices can increase soil fertility and reduce carbon emissions.",
  "Solar-powered chargers for devices can reduce reliance on non-renewable energy sources.",
  "Eco-friendly roofing materials can reflect more sunlight, reducing the need for air conditioning.",
  "Energy-efficient windows can block up to 70% of solar heat gain, reducing cooling needs.",
  "Washing clothes in cold water can save up to 90% of the energy used by washing machines."
];

const DidYouKnowComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * didYouKnowMessages.length);
    setMessage(didYouKnowMessages[randomIndex]);
  }, []);
};


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
  // State for the random message
  const [message, setMessage] = useState('');

  // Effect to set a random message on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * didYouKnowMessages.length);
    setMessage(didYouKnowMessages[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col p-8 min-h-[90svh] gap-y-4">
      <Flex
        className="min-h-[70svh] justify-between"
        direction={{
          initial: "column",
          md: "row",
        }}
      >
        <div className="flex flex-col w-full md:w-[60%] gap-y-4">
          <Flex gap="8" className="justify-start">
            <NavButton route="">Current Bill</NavButton>
            <NavButton route="/activity">Activity</NavButton>
            <NavButton route="/rebates">Rebates</NavButton>
          </Flex>
          <div className="max-h-[60svh] overflow-scroll border-[1px] border-gray-6 rounded-4">
            {children}
          </div>
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
          {message}
        </Text>
      </div>
    </div>
  );
}

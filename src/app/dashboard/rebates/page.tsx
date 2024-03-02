import { Grid, Button } from "@radix-ui/themes";
import Image from "next/image";

function SponsorCard() {
  // random pick a number from 1 to 6
  const randomIdx = Math.floor(Math.random() * 6) + 1;
  const sponsorImage = `/rebate-${randomIdx}.png`;

  return (
    <div className="p-4 flex flex-col gap-y-4 justify-center items-center">
      <Image src={sponsorImage} alt="sponsor image" width={150} height={150} />
      <Button className="w-full">Buy</Button>
    </div>
  );
}

export default function Page() {
  return (
    <div>
      <Grid columns="3" gap="3" width="auto">
        {Array.from({ length: 10 }).map((_, i) => (
          <SponsorCard key={i} />
        ))}
      </Grid>
    </div>
  );
}

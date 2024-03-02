"use client";

import { Button } from "@radix-ui/themes";
import { useWallet } from "@/hooks/useWallet";

export default function CurrentBill() {
  const { Tezos } = useWallet();

  return (
    <div>
      <Button
        onClick={() => {
          Tezos.contract
            .at("KT1M1XHYKuE9M4QZKxLGyXHPsh17cdbfNSA5")
            .then((c) => {
              console.log(c);
              let methods = c.parameterSchema.ExtractSignatures();
              console.log(JSON.stringify(methods, null, 2));
              console.log(methods);
            })
            .catch((error) => console.log(`Error: ${error}`));
        }}
      >
        Test
      </Button>
    </div>
  );
}

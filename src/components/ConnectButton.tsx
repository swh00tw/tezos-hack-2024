"use client";

import { NetworkType } from "@airgap/beacon-sdk";
import { useWallet } from "@/hooks/useWallet";
import { Button } from "@radix-ui/themes";

export const ConnectButton = (): JSX.Element => {
  const { Tezos, wallet, setUserAddress, setUserBalance, userAddress } =
    useWallet();
  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
          rpcUrl: "https://ghostnet.tezos.marigold.dev",
        },
      });
      // gets user's address
      const userAddress = await wallet.getPKH();
      const balance = await Tezos.tz.getBalance(userAddress);
      setUserBalance(balance.toNumber());
      setUserAddress(userAddress);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-1">
      <Button onClick={connectWallet}>Connect wallet</Button>
      {userAddress !== "" ? "Your wallet is connected" : "Not connected"}
    </div>
  );
};

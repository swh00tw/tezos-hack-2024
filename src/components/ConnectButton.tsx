"use client";

import { NetworkType } from "@airgap/beacon-sdk";
import { useWallet } from "@/hooks/useWallet";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import clientEnv from "@/clientEnv";

interface ConnectButtonProps {
  onConnectCallback?: () => {};
}

export const ConnectButton = (props: ConnectButtonProps): JSX.Element => {
  const router = useRouter();
  const { Tezos, wallet, setUserAddress, setUserBalance, userAddress } =
    useWallet();
  const connectWallet = async (): Promise<void> => {
    try {
      await wallet.requestPermissions();
      // gets user's address
      const userAddress = await wallet.getPKH();
      const balance = await Tezos.tz.getBalance(userAddress);
      Tezos.setProvider({ wallet });

      setUserBalance(balance.toNumber());
      setUserAddress(userAddress);
      // after connecting,
      // set cookie
      await fetch(
        `${clientEnv.NEXT_PUBLIC_BASE_URL}/api/wallet/connect?address=${userAddress}`
      );
      // reload the window
      window.location.reload();
      // redirect to the dashboard
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-1 py-4">
      <Button onClick={connectWallet}>Connect wallet</Button>
    </div>
  );
};

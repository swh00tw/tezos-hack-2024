"use client";

import { useWallet } from "@/hooks/useWallet";
import { useAuth } from "@/app/AuthProvider";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export const DisconnectButton = (): JSX.Element => {
  const { logout } = useAuth();
  const router = useRouter();
  const { wallet, setUserAddress, setUserBalance } = useWallet();
  const disconnectWallet = async (): Promise<void> => {
    setUserAddress("");
    setUserBalance(0);
    console.log("disconnecting wallet");
    await wallet.clearActiveAccount();
    // logout the user, clear to cookie
    await logout();
    // redirect to the home page
    router.push("/");
    window.location.reload();
  };

  return (
    <Button onClick={disconnectWallet} className="bg-red-9 text-white">
      Logout & Disconnect
    </Button>
  );
};

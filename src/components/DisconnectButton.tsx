"use client";

import { useWallet } from "@/hooks/useWallet";

export const DisconnectButton = (): JSX.Element => {
  const { wallet, setUserAddress, setUserBalance } = useWallet();
  const disconnectWallet = async (): Promise<void> => {
    setUserAddress("");
    setUserBalance(0);
    console.log("disconnecting wallet");
    await wallet.clearActiveAccount();
    // reload the window to reset the state
    window.location.reload();
  };

  return (
    <div className="buttons">
      <button className="button" onClick={disconnectWallet}>
        <i className="fas fa-times"></i>&nbsp; Disconnect wallet
      </button>
    </div>
  );
};

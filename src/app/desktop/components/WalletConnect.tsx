"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";
import type { Eip1193Provider } from "ethers";

export default function WalletConnect() {
  const [account, setAccount] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Auto-hide error after 5 seconds
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const connectWallet = async () => {
    setError(null);
    setLoading(true);
    try {
      // Detect MetaMask provider
      const detectedProvider = await detectEthereumProvider();

      // Ensure detectedProvider is cast to the correct type for ethers.js
      if (!detectedProvider) {
        throw new Error("MetaMask not detected. Please install or enable it.");
      }

      // ✅ FIX: Cast `detectedProvider` to `Eip1193Provider`
      const provider = new ethers.BrowserProvider(detectedProvider as unknown as Eip1193Provider);

      const accounts = await provider.send("eth_requestAccounts", []);
      if (accounts.length === 0) throw new Error("No account selected.");
      setAccount(accounts[0]);
    } catch (err: unknown) {
      if (
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        (err as { code?: number }).code === 4001
      ) {
        setError("Wallet connection rejected.");
      } else {
        setError("Failed to connect wallet.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative flex items-center justify-between p-1 bg-black text-white font-handwriting rounded-lg shadow-md">

      {/* Connect Button */}
      <button
        onClick={connectWallet}
        className="text-xl px-4 py-1 rounded-md hover:bg-black hover:text-yellow-500 transition-all"
        disabled={loading}
      >
        {loading ? "Connecting..." : account ? "Connected" : "Connect Wallet"}
      </button>

      {/* ✅ Cleaner Error Message (Auto-Hides) */}
      {error && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-md text-sm shadow-lg transition-opacity duration-500">
          {error}
        </div>
      )}
    </div>
  );
}

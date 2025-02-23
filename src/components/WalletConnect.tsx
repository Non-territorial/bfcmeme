"use client";

import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers, BrowserProvider, Eip1193Provider } from "ethers";

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [provider, setProvider] = useState<BrowserProvider | null>(null);

  useEffect(() => {
    async function initProvider() {
      const detectedProvider = (await detectEthereumProvider()) as Eip1193Provider | null;
      if (detectedProvider && "request" in detectedProvider) {
        try {
          const ethersProvider = new BrowserProvider(detectedProvider);
          setProvider(ethersProvider);
          console.log("✅ MetaMask detected and provider set.");
        } catch (error) {
          console.error("❌ Error initializing provider:", error);
        }
      } else {
        console.error("❌ No Ethereum provider detected. Please install MetaMask.");
      }
    }
    initProvider();
  }, []);

  const connectWallet = async () => {
    if (!provider) {
      alert("❌ No provider available.");
      return;
    }
    try {
      // Check if any accounts are already exposed
      console.log("🔍 Checking for existing accounts...");
      let accounts = await window.ethereum.request({ method: "eth_accounts" });
      console.log("Existing accounts:", accounts);
  
      // If no accounts, request connection
      if (!accounts || accounts.length === 0) {
        console.log("No accounts found. Requesting connection...");
        accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      }
      console.log("Accounts after request:", accounts);
      if (!accounts || accounts.length === 0) {
        throw new Error("Wallet must have at least one account.");
      }
      const address = accounts[0];
      setWalletAddress(address);
  
      const balanceBN = await provider.getBalance(address);
      setBalance(ethers.formatEther(balanceBN));
  
      console.log("✅ Wallet connected:", address);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("❌ Wallet connection failed:", error, JSON.stringify(error, null, 2));
        alert(`❌ Wallet connection failed: ${error.message}`);
      } else {
        console.error("❌ Wallet connection failed with an unknown error", error);
        alert("❌ Wallet connection failed: Unknown error");
      }
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md bg-gray-100">
      {walletAddress ? (
        <>
          <p className="text-lg font-semibold">Connected: {walletAddress}</p>
          <p>Balance: {balance} ETH</p>
        </>
      ) : (
        <button
          onClick={connectWallet}
          disabled={!provider}
          className={`px-4 py-2 rounded-lg text-lg font-bold ${
            provider ? "bg-black text-white hover:text-yellow-400" : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {provider ? "Connect Wallet" : "No Wallet Detected"}
        </button>
      )}
    </div>
  );
}

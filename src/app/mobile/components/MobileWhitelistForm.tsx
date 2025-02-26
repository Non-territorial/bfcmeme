"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileWhitelistForm() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState<string | null>(null);
 

  const handleWhitelistJoin = async () => {
    if (!wallet.trim()) {
      alert("Please enter your wallet address!");
      return;
    }

    try {
      const res = await fetch("/api/whitelist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      console.error("Whitelist request failed:", error);
      alert("Error submitting wallet. Please try again.");
    }
  };



  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-black text-white px-4 py-10 relative">
      {/* Flying Cow */}
      <div className="relative w-full flex justify-center">
        <Image
          src="/images/flying.png"
          alt="Flying Cow"
          width={240}
          height={240}
          className="w-40 h-40 md:w-60 md:h-60"
          priority
        />
      </div>

      {/* Whitelist Form */}
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-full max-w-sm mt-8">
        <h1 className="text-2xl font-bold mb-4 text-yellow-300">🔥 Join the BFCMEME Whitelist</h1>
        <p className="text-sm mb-4 text-gray-300">
          Enter your <strong>Ethereum wallet</strong> to get exclusive access to **NFTs & Burp-to-Earn rewards.**
        </p>

        <input
          type="text"
          placeholder="Enter your wallet address"
          className="w-full p-3 mb-4 text-black rounded-md"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />

        <button
          onClick={handleWhitelistJoin}
          className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg text-lg"
        >
          Get Whitelisted 🚀🐄
        </button>

        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
}

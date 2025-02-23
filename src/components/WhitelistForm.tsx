"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Fart {
  id: number;
  x: number;
  y: number;
}

export default function WhitelistPage() {
  const [wallet, setWallet] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [farts, setFarts] = useState<Fart[]>([]);
  const [fartId, setFartId] = useState(0);

  // Static cow position (if needed for animation)
  const cowPosition = { x: 50, y: 50 };

  // Handle whitelist join by sending the wallet address to the API
  const handleWhitelistJoin = async () => {
    console.log("Wallet Input:", wallet);

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

  // Generate animated farts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFarts((prevFarts) => [
        ...prevFarts,
        {
          id: fartId,
          x: cowPosition.x - 80,
          y: cowPosition.y + 70,
        },
      ]);

      setFartId((prevId) => prevId + 1);

      // Remove the oldest fart after 2 seconds
      setTimeout(() => {
        setFarts((prevFarts) => prevFarts.slice(1));
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, [fartId, cowPosition.x, cowPosition.y]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 relative">
      {/* Static Fart (Aligned Behind Cow) */}
      <motion.img
        src="/images/fart.png"
        alt="Fart Puff"
        className="absolute w-72 h-72 opacity-90"
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0.3, scale: 1.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{
          top: "25%",
          left: "-30%",
        }}
      />

      <Image
        src="/images/flying.png"
        alt="Flying Cow"
        width={360}
        height={360}
        className="absolute"
        style={{
          top: "10%",
          left: "-65%",
        }}
        priority
      />

      {/* Render dynamic farts */}
      {farts.map((fart) => (
        <motion.img
          key={fart.id}
          src="/images/fart.png"
          alt="Animated Fart"
          className="absolute w-16 h-16 opacity-90"
          style={{
            top: `${fart.y}%`,
            left: `${fart.x}%`,
          }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 2, repeat: 0 }}
        />
      ))}

      {/* Whitelist Form */}
      <h1 className="text-5xl font-bold mb-6">🔥 Join the BFCMEME Whitelist</h1>
      <p className="text-xl mb-6">
        Enter your <strong>Ethereum wallet</strong> to get exclusive access to **NFTs & Burp-to-Earn rewards.**
      </p>

      <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-96">
        <h2 className="text-red-400 text-2xl font-bold mb-4">💰 Don’t miss that out!</h2>
        <input
          type="text"
          placeholder="Enter your wallet address"
          className="w-full p-3 mb-4 text-black rounded-md"
          value={wallet}
          onChange={(e) => {
            setWallet(e.target.value);
            console.log("Wallet Updated:", e.target.value);
          }}
        />

        <button
          onClick={handleWhitelistJoin}
          className="w-full bg-green-500 hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg text-xl"
        >
          Join Whitelist 🚀🐄
        </button>
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </section>
  );
}

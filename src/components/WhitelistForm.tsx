"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mockContract } from "@/utils/mockContract"; // Import the mock contract
import Image from "next/image";

interface Fart {
  id: number;
  x: number;
  y: number;
}

export default function WhitelistPage() {
  const [wallet, setWallet] = useState("");
  const [farts, setFarts] = useState<Fart[]>([]);
  const [fartId, setFartId] = useState(0);

  // If you want the cow to move or have a position, define it here:
  const cowPosition = { x: 50, y: 50 };

  const handleWhitelistJoin = async () => {
    console.log("Wallet Input:", wallet);

    if (!wallet.trim()) {
      alert("Please enter your wallet address!");
      return;
    }

    try {
      // Use mockContract instead of making a real API request
      const data = await mockContract.claimFreeCow();

      if (data.success) {
        alert("You're on the whitelist! 🎉");
      } else {
        alert(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Whitelist request failed:", error);
      alert("Mock contract error, try again.");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate **MEGA FART** 💨
      setFarts((prevFarts) => [
        ...prevFarts,
        {
          id: fartId,
          x: cowPosition.x - 80, // Goes much further left
          y: cowPosition.y + 70, // Goes much lower
        },
      ]);

      setFartId((prevId) => prevId + 1);

      // Remove farts after 2 seconds
      setTimeout(() => {
        setFarts((prevFarts) => prevFarts.slice(1));
      }, 2000);
    }, 3000); // Generate new fart every 3 sec

    return () => clearInterval(interval);
    // Include dependencies so ESLint doesn't complain:
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
      </div>
    </section>
  );
}

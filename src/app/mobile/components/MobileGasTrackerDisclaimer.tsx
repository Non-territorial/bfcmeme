"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function MobileGasTrackerDisclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("gas-tracker-box");
      if (section) {
        const rect = section.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col w-full px-6 py-16 bg-black text-white space-y-12">
      
      {/* 🌍 Gas Emission Tracker */}
      <div className="w-full flex flex-col items-center">
        <motion.div
          id="gas-tracker-box"
          className="w-full max-w-lg p-6 bg-gray-900 rounded-2xl shadow-lg text-center flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Centered Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <Image src="/images/05_lui.png" alt="Gas Emission Tracker" width={200} height={200} />
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">🌍 Gas Emission Tracker</h2>
          <p className="text-xl">Track the total methane emissions produced by NFT cows.</p>

          <Link href="/mobile/gas-tracker" replace>
            <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg text-xl w-full">
              Track Emissions 📊
            </button>
          </Link>
        </motion.div>
      </div>


      {/* ⚠️ Disclaimer */}
      <div className="w-full flex flex-col items-center">
        <motion.div
          id="disclaimer-box"
          className="w-full max-w-lg p-6 bg-gray-900 rounded-2xl shadow-lg text-center flex flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Centered Image */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <Image src="/images/04_lui.png" alt="Disclaimer Cow" width={200} height={200} />
          </motion.div>

          <h2 className="text-3xl font-bold mb-4">⚠️ Disclaimer</h2>
          <p className="text-xl">$BFCMEME is a meme coin. Not financial advice. Just farts.</p>

          <Link href="/mobile/disclaimer" replace>
            <button className="mt-6 bg-red-500 hover:bg-red-600 text-black font-bold py-3 px-6 rounded-lg text-xl w-full">
              Read Disclaimer 📜
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

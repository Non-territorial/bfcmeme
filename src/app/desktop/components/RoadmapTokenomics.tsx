"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "./BuyButton";

export default function RoadmapTokenomics() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("roadmap-box");
            if (section) {
                const rect = section.getBoundingClientRect();
                setIsVisible(rect.top < window.innerHeight * 0.8);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="relative flex justify-between items-start px-10 py-20 bg-black text-white">
            {/* Left: Roadmap */}
            <motion.div
                className="relative w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg z-10"
                id="roadmap-box"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-4xl font-bold mb-6">🚀 Roadmap</h2>
                <ul className="space-y-4 text-xl">
                    <li>📆 <b>Phase 1:</b> Meme Domination - Deploy $BFCMEME, Start Meme Wars</li>
                    <li>📆 <b>Phase 2:</b> Mining & Trading - Uniswap, Burp-to-Earn</li>
                    <li>📆 <b>Phase 3:</b> The Final Fart - Supply runs out, Moon or Doom</li>
                </ul>

                {/* Whitelist CTA Button */}
                <Link href="/desktop/whitelist">
                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg text-xl">
                        Join Whitelist 🚀
                    </button>
                </Link>
            </motion.div>

            {/* Left Cow Popping Out from Behind (adjusted position) */}
            <motion.div
                className="absolute -left-32 bottom-8 w-56 z-0"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image src="/images/BFC_6.png" width={300} height={300} alt="Burping Cow" />
            </motion.div>

            {/* Right: Tokenomics + How to Buy */}
            <motion.div
                className="relative w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg text-center z-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Tokenomics */}
                <h2 className="text-3xl font-bold mb-4">💰 Tokenomics</h2>
                <p className="text-xl">💨 40% Mining | 🛒 30% Liquidity | 📢 20% Marketing | 🛠 10% Dev</p>

                {/* How to Buy */}
                <h2 className="text-3xl font-bold mt-6 mb-4">🛒 How to Buy</h2>
                <p className="text-lg mb-4">Swap ETH/BNB for $BFCMEME on Uniswap.</p>

                {/* Buttons for Opensea & Exchange */}
                <div className="flex flex-col space-y-4">
                    <a href="/desktop/marketplace" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
                            Buy NFTs on Marketplace 🎨
                        </button>
                    </a>
                    {/* Buy Button with different text */}
      <BuyButton text="Buy BFCMEME on Exchange 💰" className="bg-green-700 hover:bg-green-900 " />

                
                </div>
            </motion.div>

            {/* Right Cow Popping from Behind (adjusted position) */}
            <motion.div
                className="absolute top-[-40px] -right-32 w-56 z-0"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image src="/images/BFC_7.png" width={300} height={300} alt="Cow NFT Samurai" />
            </motion.div>
        </section>
    );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import BuyButton from "@/app/desktop/components/BuyButton";

export default function MobileRoadmapTokenomics() {
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
        <section className="flex flex-col items-center px-6 py-16 bg-black text-white space-y-12 w-full">
            
            {/* 🐄 Cow Image Above Roadmap */}
            <motion.div
                className="w-40 mx-auto"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image src="/images/BFC_6.png" width={200} height={200} alt="Burping Cow" />
            </motion.div>

            {/* 🚀 Roadmap Section */}
            <motion.div
                className="w-full max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg text-center flex flex-col"
                id="roadmap-box"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className="text-3xl font-bold mb-4">🚀 Roadmap</h2>
                <ul className="space-y-3 text-lg">
                    <li>📆 <b>Phase 1:</b> Meme Domination - Deploy $BFCMEME, Start Meme Wars</li>
                    <li>📆 <b>Phase 2:</b> Mining & Trading - Uniswap, Burp-to-Earn</li>
                    <li>📆 <b>Phase 3:</b> The Final Fart - Supply runs out, Moon or Doom</li>
                </ul>

                {/* Whitelist CTA Button */}
                <Link href="/mobile/whitelist">
                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-5 rounded-lg text-lg w-full">
                        Join Whitelist 🚀
                    </button>
                </Link>
            </motion.div>

            {/* 🐄 Cow Image Between Sections */}
            <motion.div
                className="w-40 mx-auto"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Image src="/images/BFC_7.png" width={200} height={200} alt="Cow NFT Samurai" />
            </motion.div>

            {/* 💰 Tokenomics Section */}
            <motion.div
                className="w-full max-w-lg p-6 bg-gray-900 rounded-lg shadow-lg text-center flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Tokenomics */}
                <h2 className="text-3xl font-bold mb-4">💰 Tokenomics</h2>
                <p className="text-lg">💨 40% Mining | 🛒 30% Liquidity | 📢 20% Marketing | 🛠 10% Dev</p>

                {/* How to Buy */}
                <h2 className="text-3xl font-bold mt-6 mb-4">🛒 How to Buy</h2>
                <p className="text-lg mb-4">Swap ETH/BNB for $BFCMEME on Uniswap.</p>

                {/* Buttons for Marketplace & Exchange */}
                <div className="flex flex-col space-y-4">
                    <Link href="/mobile/marketplace">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg w-full">
                            Buy NFTs on Marketplace 🎨
                        </button>
                    </Link>
                    
                    <BuyButton text="Buy BFCMEME on Exchange 💰" className="bg-green-700 hover:bg-green-900 w-full" />
                </div>
            </motion.div>
        </section>
    );
}

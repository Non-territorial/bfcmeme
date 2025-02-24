"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function GasTrackerDisclaimer() {
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
        <section className="relative flex justify-between items-start px-10 py-20 bg-black text-white">
            {/* Left: Gas Emission Tracker */}
            <motion.div
                id="gas-tracker-box"
                className="relative w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Image appearing from behind */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -left-36 -top-24 w-80"
                >
                    <Image src="/images/05_lui.png" alt="Gas Emission Tracker" width={300} height={300} />
                </motion.div>

                <h2 className="text-3xl font-bold mb-4">🌍 Gas Emission Tracker</h2>
                <p className="text-xl">
                    Track the total methane emissions produced by NFT cows.
                </p>

                <Link href="/desktop/gas-tracker">
                    <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-lg text-xl">
                        Track Emissions 📊
                    </button>
                </Link>
            </motion.div>

            {/* Right: Disclaimer */}
            <motion.div
                id="disclaimer-box"
                className="relative w-1/3 p-6 bg-gray-900 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Image appearing from behind */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -right-48 -top-24 w-80"
                >
                    <Image src="/images/04_lui.png" alt="Disclaimer Cow" width={300} height={300} />
                </motion.div>

                <h2 className="text-3xl font-bold mb-4">⚠️ Disclaimer</h2>
                <p className="text-xl">
                    $BFCMEME is a meme coin. Not financial advice. Just farts.
                </p>

                <Link href="/desktop/disclaimer">
                    <button className="mt-6 bg-red-500 hover:bg-red-600 text-black font-bold py-3 px-6 rounded-lg text-xl">
                        Read Disclaimer 📜
                    </button>
                </Link>
            </motion.div>
        </section>
    );
}

"use client";

import { useEffect, useState } from "react"; // Removed useCallback since it's not used
import { motion } from "framer-motion";
import Link from "next/link";
// import { ethers } from "ethers";  // Remove if not used

// 🔗 Smart Contract Configuration
// const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || ""; // Remove if not used
// const ABI = [
//   "function getTotalMethaneProduced() view returns (uint256)",
//   "function getRegionMethane(string memory region) view returns (uint256)",
// ]; // Remove if not used


export default function GasTrackerPage() {
    const [globalEmissions, setGlobalEmissions] = useState(0);
    const [regions, setRegions] = useState([
        { name: "North America", cows: 1450, methaneRate: 0, title: "🥩 Land of Big Burgers" },
        { name: "Europe", cows: 970, methaneRate: 0, title: "💨 Silent but Deadly" },
        { name: "Asia", cows: 2200, methaneRate: 0, title: "🔥 Supreme Burpers" },
        { name: "South America", cows: 1600, methaneRate: 0, title: "🐮 The Farting Pampas" },
        { name: "Africa", cows: 800, methaneRate: 0, title: "🌿 Eco-Friendly Methane Lords" },
        { name: "Australia", cows: 600, methaneRate: 0, title: "🤠 Down Under Thunder" },
    ]);

    // const fetchMethaneData = useCallback(async () => {
//   // ...
// }, [regions]);


    // ✅ Ensure auto-update only runs if emissions exist
    useEffect(() => {
        setGlobalEmissions(0);
        setRegions(prevRegions => prevRegions.map(region => ({ ...region, methaneRate: 0 })));
    }, []); // ✅ Runs only once when the component mounts
    


    return (
        <div className="bg-black text-white min-h-screen">
            {/* Top Navbar */}
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black z-50 border-b border-gray-700">
                {/* Left Section */}
                <div className="flex items-center">
                    <Link href="/desktop/marketplace" className="text-white font-semibold hover:text-yellow-400">GO TO MARKETPLACE</Link>
                </div>

                {/* Center Section */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link href="/" className="text-xl font-bold text-white hover:text-yellow-400">BFCMEME</Link>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <Link href="https://x.com/BfcMeme1681" target="_blank" className="text-white hover:text-yellow-400">X</Link>
                    <Link href="https://t.me/bfcmeme" target="_blank" className="text-white hover:text-yellow-400">TG</Link>
                </div>
            </nav>

            {/* Main Content */}
            <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
                <motion.h1 
                    className="text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    🌍 Gas Emission Tracker
                </motion.h1>

                <p className="text-2xl mb-6 text-gray-300">Tracking the total methane emissions produced by NFT cows.</p>

                <motion.div
    className="w-full max-w-4xl text-center text-6xl font-bold text-green-400 bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden"
    style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
    initial={{ scale: 0.8 }}
    animate={{ scale: 1.05 }}
    transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
>
    <span className="block md:inline text-5xl md:text-6xl lg:text-7xl">
        {globalEmissions.toLocaleString()} Liters of Methane 💨
    </span>
</motion.div>


                <p className="text-lg text-gray-400 mt-4">Live counter based on NFT cow activity worldwide.</p>

                {/* Leaderboard Section */}
                <div className="mt-10 w-full max-w-4xl">
                    <table className="w-full border-collapse bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                        <thead>
                            <tr className="bg-gray-700">
                                <th className="p-4 text-left text-xl">🌎 Region</th>
                                <th className="p-4 text-left text-xl">🐄 NFT Cows</th>
                                <th className="p-4 text-left text-xl">💨 Methane per Sec (L)</th>
                                <th className="p-4 text-left text-xl">🏆 Rank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {regions.map((region, index) => (
                                <motion.tr
                                    key={index}
                                    className="border-b border-gray-700 text-lg bg-gray-900 hover:bg-gray-700 transition-all"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <td className="p-4">{region.name}</td>
                                    <td className="p-4">{region.cows.toLocaleString()}</td>
                                    <td className="p-4 text-green-400">{region.methaneRate.toLocaleString()} L</td>
                                    <td className="p-4 text-yellow-400 font-bold">{region.title}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

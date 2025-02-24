"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function MobileGasTrackerPage() {
    const [globalEmissions, setGlobalEmissions] = useState(0);
    const [regions, setRegions] = useState([
        { name: "North America", cows: 1450, methaneRate: 0, title: "🥩 Land of Big Burgers" },
        { name: "Europe", cows: 970, methaneRate: 0, title: "💨 Silent but Deadly" },
        { name: "Asia", cows: 2200, methaneRate: 0, title: "🔥 Supreme Burpers" },
        { name: "South America", cows: 1600, methaneRate: 0, title: "🐮 The Farting Pampas" },
        { name: "Africa", cows: 800, methaneRate: 0, title: "🌿 Eco-Friendly Methane Lords" },
        { name: "Australia", cows: 600, methaneRate: 0, title: "🤠 Down Under Thunder" },
    ]);

    useEffect(() => {
        setGlobalEmissions(0);
        setRegions(prevRegions => prevRegions.map(region => ({ ...region, methaneRate: 0 })));
    }, []);

    return (
        <div className="bg-black text-white min-h-screen px-4 sm:px-6">
            
            {/* Header */}
            <section className="flex flex-col items-center text-center py-10">
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    🌍 Gas Emission Tracker
                </motion.h1>

                <p className="text-lg sm:text-xl text-gray-300">Tracking the total methane emissions produced by NFT cows.</p>
            </section>

            {/* Global Methane Counter */}
            <motion.div
                className="w-full max-w-md sm:max-w-lg text-center text-4xl sm:text-5xl font-bold text-green-400 bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg mx-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1.05 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            >
                {globalEmissions.toLocaleString()} Liters of Methane 💨
            </motion.div>

            <p className="text-sm sm:text-lg text-gray-400 mt-4 text-center">
                Live counter based on NFT cow activity worldwide.
            </p>

            {/* Responsive Leaderboard (Grid Instead of Table) */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg sm:max-w-3xl mx-auto">
                {regions.map((region, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-4 rounded-lg shadow-md text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <p className="text-lg sm:text-xl font-bold">{region.name}</p>
                        <p className="text-yellow-400">{region.title}</p>
                        <p className="text-sm sm:text-lg">🐄 {region.cows.toLocaleString()} NFT Cows</p>
                        <p className="text-green-400">💨 {region.methaneRate.toLocaleString()} L/sec</p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}

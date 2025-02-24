"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function DisclaimerPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
              {/* Top Navbar */}
<nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black z-50 border-b border-gray-700">
  
  {/* Left Section */}
  <div className="flex items-center">
    <Link href="/desktop/marketplace" className="text-white hover:text-yellow-400">GO TO MARKETPLACE</Link>
  </div>

  {/* Center Section */}
  <div className="absolute left-1/2 transform -translate-x-1/2">
    <Link href="/" className="text-xl font-bold text-white hover:text-yellow-400">BFCMEME</Link>
  </div>

  {/* Right Section */}
  <div className="flex items-center space-x-4">
    <Link href="https://x.com/BfcMeme1681" className="text-white hover:text-yellow-400">X</Link>
    <Link href="https://t.me/bfcmeme" className="text-white hover:text-yellow-400">TG</Link>

  </div>

</nav>

<div>
<Image
      src="/images/BFC_8.jpg"
      layout="intrinsic"
      width={200} // Adjust this to your actual image width
      height={200} // Adjust this to your actual image height
      alt="Burping Cow"
      className="max-w-full max-h-full"
    />
  </div>
            <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                ⚠️ Disclaimer
            </motion.h1>

            <motion.p 
                className="text-xl text-center max-w-2xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                $BFCMEME is a **meme coin.** It has **zero financial utility.**  
                The only utility it provides is **laughs** and **gas emissions.**  
                **Not financial advice. Just farts. 💨**
            </motion.p>

            <motion.div 
                className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <p className="text-xl font-semibold">If you buy $BFCMEME expecting gains, you&apos;re beyond saving.</p>
                <p className="text-lg text-gray-400 mt-4">But hey, thanks for contributing to the methane economy! 💨</p>
            </motion.div>
        </section>
    );
}

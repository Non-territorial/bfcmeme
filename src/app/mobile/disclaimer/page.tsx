"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileDisclaimerPage() {  // ✅ Ensure it's exported as default
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
            
            {/* Burping Cow Image */}
            <div>
                <Image
                    src="/images/BFC_8.jpg"
                    width={200}  // ✅ Corrected width
                    height={200} // ✅ Corrected height
                    alt="Burping Cow"
                    className="max-w-full max-h-full"
                />
            </div>

            {/* Disclaimer Title */}
            <motion.h1 
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                ⚠️ Disclaimer
            </motion.h1>

            {/* Disclaimer Text */}
            <motion.p 
                className="text-xl text-center max-w-2xl mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                $BFCMEME is a <strong>meme coin.</strong> It has <strong>zero financial utility.</strong>  
                The only utility it provides is <strong>laughs</strong> and <strong>gas emissions.</strong>  
                <strong>Not financial advice. Just farts. 💨</strong>
            </motion.p>

            {/* Fun Warning Box */}
            <motion.div 
                className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <p className="text-xl font-semibold">
                    If you buy $BFCMEME expecting gains, you&apos;re beyond saving.
                </p>
                <p className="text-lg text-gray-400 mt-4">
                    But hey, thanks for contributing to the methane economy! 💨
                </p>
            </motion.div>
        </section>
    );
}

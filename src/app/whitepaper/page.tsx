import Whitepaper from "../../components/Whitepaper"; // Adjust the path if needed
import Link from "next/link";
import Image from "next/image";

export default function WhitepaperPage() {
    return (
        <div className="bg-black text-white min-h-screen">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-black z-50 border-b border-gray-700">
                {/* Left Section */}
                <div className="flex items-center">
                    <Link href="/marketplace" className="text-white hover:text-yellow-400">GO TO MARKETPLACE</Link>
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

            {/* Whitepaper Section with Side Images */}
            <section className="flex justify-center items-start gap-10 px-10 py-20">
                {/* Left Image */}
                <div className="hidden md:block w-1/4 text-center">
                    <Image
                        src="/images/09_lui.png" // Adjust the path
                        width={400}
                        height={400}
                        alt="BFCMEME NFT Samurai Cow"
                        className="rounded-lg"
                    />
                </div>

                {/* Whitepaper Content (Takes Half of the Screen) */}
                <div className="w-1/2">
                    <Whitepaper />
                </div>

                {/* Right Image */}
                <div className="hidden md:block w-1/4 text-center">
                    <Image
                        src="/images/02_lui.png" // Adjust the path
                        width={400}
                        height={400}
                        alt="BFCMEME NFT Dripped-Out Cow"
                        className="rounded-lg"
                    />
                </div>
            </section>
        </div>
    );
}

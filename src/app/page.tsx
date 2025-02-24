"use client";
 
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import RoadmapTokenomics from "@/components/RoadmapTokenomics";
import GasTrackerDisclaimer from "@/components/GasTrackerDisclaimer";
import CowGallery from "../components/CowGallery";
import WalletConnect from "@/components/WalletConnect";

export default function Home() {


  return (
    <div className="relative w-full min-h-screen bg-black text-white">
     {/* Top Navbar */}
<nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-black z-50 border-b border-gray-700">
  
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
    <WalletConnect />
  </div>

</nav>


    {/* Hero Section */}
<section className="relative w-full h-screen flex justify-center items-center bg-black">
  <div className="absolute inset-0 flex justify-center items-center">
    <Image
      src="/images/BFC_MEME.png"
      layout="intrinsic"
      width={1920} // Adjust this to your actual image width
      height={1080} // Adjust this to your actual image height
      alt="Burping Cow"
      className="max-w-full max-h-full"
    />
  </div>
</section>




      

      {/* Bottom Navbar */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-center space-x-6 bg-black py-4 border-t border-gray-700 z-50">
        <Link href="#about" className="text-white text-lg">About</Link>
        <Link href="/whitepaper" className="text-white text-lg">Whitepaper</Link>
        <Link href="#roadmaptokenomics" className="text-white text-lg">Tokenomics</Link>
        <Link href="#roadmaptokenomics" className="text-white text-lg">Roadmap</Link>
        <Link href="/whitelist" className="text-white text-lg">Whitelist</Link>
        <Link href="#roadmaptokenomics" className="text-white text-lg">How to Buy</Link>
        <Link href="/gas-tracker" className="text-white text-lg">Gas Emission Tracker</Link>
        <Link href="/disclaimer" className="text-white text-lg">Disclaimer</Link>
      </nav>

      {/* Scrollable Sections */}
      <section id="about" className="min-h-screen flex justify-center items-center">
      <About /> 
      </section>
      <section id="cowgallery" className="min-h-screen flex justify-center items-center">
      <CowGallery />
      </section>
      <section id="roadmaptokenomics" className="min-h-screen flex justify-center items-center">
      <RoadmapTokenomics />  
      </section>
      <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white">
    {/* Background Video */}
    <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
        <source src="/gas-cow.webm" type="video/webm" />
        <source src="/gas-cow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    {/* Content on top of video */}
    <div className="relative z-10 flex flex-col items-center justify-center pt-26 mt-4">
        <h1 className="text-6xl font-bold mb-6 drop-shadow-lg">🐄 JOIN THE METHANE REVOLUTION 💨</h1>
    </div>
</section>



      <section id="gastrackerdisclaimer" className="min-h-screen flex justify-center items-center bg-black">
        <GasTrackerDisclaimer />
      </section>
      
    </div>
  );
}

    

    
  
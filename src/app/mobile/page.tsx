"use client";

import Image from "next/image";
import MobileAbout from "@/app/mobile/components/MobileAbout";
import MobileRoadmapTokenomics from "@/app/mobile/components/MobileRoadmapTokenomics";
import MobileGasTrackerDisclaimer from "@/app/mobile/components/MobileGasTrackerDisclaimer";
import CowGallery from "@/app/desktop/components/CowGallery";
import WalletConnect from "@/app/desktop/components/WalletConnect";


export default function MobileHome() {
  
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* 🚀 Fix Horizontal Scrolling */}
      <div className="w-full overflow-x-hidden">

      <section className="w-full flex justify-center items-center py-2">
  <WalletConnect />
</section>
        {/* Hero Section (Mobile Only) */}
        <section className="relative w-full min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
          <Image
            src="/images/BFC_MEME.png"
            width={1080} // Optimized for mobile
            height={720}
            alt="Burping Cow"
            className="w-full h-full object-cover"
            priority
          />
        </section>

        {/* Scrollable Sections */}
        <section id="MobileAbout" className="w-full min-h-screen flex justify-center items-center">
          <MobileAbout />
        </section>

        <section id="cowgallery" className="w-full min-h-screen flex justify-center items-center">
          <CowGallery />
        </section>

        <section id="MobileRoadmapTokenomics" className="w-full min-h-screen flex justify-center items-center">
          <MobileRoadmapTokenomics />
        </section>

       

        {/* Background Video Section */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
          {/* Background Video Fix */}
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

          {/* Content Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center mt-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-lg leading-tight">
              🐄 JOIN THE METHANE REVOLUTION 💨
            </h1>
          </div>
        </section>

        <section id="mobilegastrackerdisclaimer" className="w-full min-h-screen flex justify-center items-center">
         <MobileGasTrackerDisclaimer />
        </section>

      </div>
    </div>
  );
}

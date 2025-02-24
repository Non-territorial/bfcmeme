import MobileWhitepaper from "@/app/mobile/components/MobileWhitepaper";
import Image from "next/image";

export default function MobileWhitepaperPage() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-10 px-6 sm:px-10 py-10 sm:py-20">
            
            {/* Images on Mobile: Side by Side Above Whitepaper */}
<div className="flex flex-row md:hidden items-center justify-center gap-4">
    <Image
        src="/images/09_lui.png"
        width={150} // Smaller size for mobile
        height={150}
        alt="BFCMEME NFT Samurai Cow"
        className="rounded-lg"
    />
    <Image
        src="/images/02_lui.png"
        width={150} // Smaller size for mobile
        height={150}
        alt="BFCMEME NFT Dripped-Out Cow"
        className="rounded-lg"
    />
</div>


            {/* Whitepaper Content (Takes Full Width on Mobile, Half on Desktop) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <MobileWhitepaper />
            </div>

        </section>
    );
}

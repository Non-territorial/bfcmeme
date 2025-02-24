import BuyButton from "@/app/desktop/components/BuyButton";

export default function MobileAbout() {
    return (
        <section id="about" className="py-16 px-4 bg-black text-white text-center">
            <div className="max-w-lg mx-auto">
                <h2 className="text-4xl font-bold mb-6">🐄 The Great Environmental Flip</h2>
                
                <p className="text-xl leading-relaxed mb-4">
                    For years, scientists have claimed that cows are destroying the planet, contributing to 
                    <span className="font-bold text-green-400"> 10% of global methane emissions.</span>  
                </p>

                <p className="text-xl font-bold text-yellow-400 mb-4">
                    💡 What if cow farts could fund the crypto economy?
                </p>

                <p className="text-xl leading-relaxed mb-4">
                    🚀 Every time a cow burps or farts, it generates 
                    <span className="font-bold"> $BFCMEME</span> tokens—
                    turning livestock into a revolutionary mining network! 
                </p>

                <p className="text-xl font-semibold text-red-400 mb-4">
                    Thus, the **Burping & Farting Cow Coin (BFCMEME)** was born—  
                    the world’s first cryptocurrency powered by methane emissions.  
                </p>

                <p className="text-xl leading-relaxed mb-6">
                    Forget about energy-hungry mining rigs; the real fuel of the future is  
                    <span className="font-bold text-green-400"> cow burps and farts.</span> 💨💰
                </p>

                {/* Buy Button optimized for mobile */}
                <BuyButton 
                    text="Buy BFCMEME! 💨" 
                    className="bg-green-700 hover:bg-green-900 text-lg px-4 py-3 w-full rounded-md"
                />
            </div>
        </section>
    );
}

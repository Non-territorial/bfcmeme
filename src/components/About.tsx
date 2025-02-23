
import BuyButton from "./BuyButton";


export default function About() {
    return (
        <section id="about" className="py-20 px-6 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-6xl font-bold mb-6">🐄 The Great Environmental Flip</h2>
                <p className="text-3xl leading-relaxed mb-6">
                    For years, scientists have complained that cows are destroying the planet, contributing to 
                    <span className="font-bold text-green-400"> 10% of global methane emissions.</span>  
                    But instead of seeing cows as a problem, we saw an opportunity:
                </p>
                <p className="text-3xl font-bold text-yellow-400 mb-6">
                    💡 What if, instead of destroying the planet, cow farts could fund the crypto economy?
                </p>
                <p className="text-3xl leading-relaxed mb-6">
                    🚀 Now, every time a cow burps or farts, it generates <span className="font-bold">$BFCMEME</span> tokens—
                    turning livestock into a revolutionary decentralized mining network! 
                </p>
                <p className="text-3xl font-semibold text-red-400 mb-6">
                    Thus, the **Burping & Farting Cow Coin (BFCMEME)** was born— 
                    the world’s first cryptocurrency powered by methane emissions.  
                </p>
                <p className="text-3xl leading-relaxed mb-8">
                    Forget about energy-hungry mining rigs; the real fuel of the future is  
                    <span className="font-bold text-green-400"> cow burps and farts.</span> 💨💰
                </p>
                {/* Buy Button with specific text */}
              <BuyButton text="Buy BFCMEME & Join the Methane Revolution 💨" className="bg-green-700 hover:bg-green-900" />
            </div>
        </section>
    );
}

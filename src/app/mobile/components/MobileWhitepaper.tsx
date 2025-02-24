import BuyButton from "@/app/desktop/components/BuyButton";


export default function MobileWhitepaper() {
  return (
    <section id="whitepaper" className="py-12 px-4 bg-black text-white">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">📜 BFCMEME - The Most Serious Meme Coin Ever</h2>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">🐄 A Scientific Breakthrough in Crypto</h3>
        <p className="text-base sm:text-lg mb-4">
          Crypto miners rely on expensive GPUs. We said, <span className="italic">“This is stupid. Cows can do better.”</span>
        </p>
        <p className="text-base sm:text-lg font-semibold text-green-400 mb-6">
          **Burping & Farting Cow Coin (BFCMEME)**—the first cryptocurrency powered by methane emissions.
        </p>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">💨 Climate Change & Wasted Methane</h3>
        <p className="text-base sm:text-lg mb-4">
          Scientists claim cows are <span className="font-bold">destroying the planet</span> with methane.
          But what if they could mine crypto and make you rich?
        </p>

        <ul className="text-base sm:text-lg text-left mx-auto max-w-xs sm:max-w-md mb-6">
          <li>🔬 **FACT:** A single cow emits <span className="font-bold text-yellow-400">200-500 liters</span> of methane daily.</li>
          <li>📉 **SOLUTION:** Convert emissions into <span className="font-bold">$BFCMEME tokens</span>.</li>
        </ul>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">🚀 Tokenomics: Proof-of-Burp (PoB)</h3>
        <ul className="text-base sm:text-lg text-left mx-auto max-w-xs sm:max-w-md mb-6">
          <li>🔹 **Total Supply:** <span className="font-bold text-yellow-400">10,000,000,000 BFCMEME</span></li>
          <li>🔹 **Mining Method:** Burps & farts generate tokens via NFT cows.</li>
          <li>🔹 **Burn Mechanism:** <span className="font-bold text-red-400">0.5% of transactions burned.</span></li>
        </ul>

        <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4">🎁 First 500 NFT Cows: Free Airdrop</h3>
        <p className="text-base sm:text-lg mb-4">
          **First 500 NFT cows** will be **claimable for free** by whitelisted wallets.
        </p>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">🌎 Roadmap: From Pasture to the Moon 🌕</h3>
        <div className="text-left mx-auto max-w-xs sm:max-w-md">
          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">📆 Phase 1: Meme Domination</h4>
          <ul className="mb-3 text-sm sm:text-base">
            <li>- Deployment of **$BFCMEME** on Ethereum.</li>
            <li>- Meme Wars begin on X, Telegram, and Discord.</li>
            <li>- NFT Cow sale (burping = mining power).</li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">📆 Phase 2: Mining & Trading</h4>
          <ul className="mb-3 text-sm sm:text-base">
            <li>- Official DEX launch (Uniswap, PancakeSwap).</li>
            <li>- Burp-to-Earn farming goes live.</li>
          </ul>

          <h4 className="text-lg sm:text-xl font-semibold text-yellow-400">📆 Phase 3: The Final Fart</h4>
          <ul className="mb-6 text-sm sm:text-base">
            <li>- **BFCMEME supply runs out**</li>
            <li>- Exchanges list BFCMEME as the greatest meme coin ever.</li>
          </ul>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold mb-4">📢 Join the Fart-Powered Revolution</h3>
        <p className="text-base sm:text-lg leading-relaxed mb-6">
          $BFCMEME is **not financial advice** but it is **financial absurdity at its finest.** 
          Ride the methane-fueled rocket before the last cow farts.
        </p>

        {/* Buy Button with specific text */}
        <BuyButton text="Buy Before the Final Burp!💰" className="bg-green-700 hover:bg-green-900" />
      </div>
    </section>
  );
}

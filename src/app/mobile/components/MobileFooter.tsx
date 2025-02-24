import Link from "next/link";

export default function MobileFooter() {
  return (
    <footer className="bg-black text-white p-4 fixed bottom-0 w-full flex justify-between items-center text-sm">
      
      {/* Year on the Left */}
      <p className="ml-4">© 2025 BFCMEME</p>
      
      {/* Social Links on the Right */}
      <div className="mr-4 flex space-x-4">
        <Link href="https://x.com/BfcMeme1681" className="hover:text-yellow-400 transition">
          X
        </Link>
        <Link href="https://t.me/bfcmeme" className="hover:text-yellow-400 transition">
          Telegram
        </Link>
      </div>
      
    </footer>
  );
}

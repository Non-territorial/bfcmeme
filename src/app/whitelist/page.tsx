import WhitelistForm from "../../components/WhitelistForm";
import Link from "next/link";

export default function WhitelistPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-6">
              {/* Top Navbar */}
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
    <Link href="#socials" className="text-white hover:text-yellow-400">X</Link>
    <Link href="#telegram" className="text-white hover:text-yellow-400">TG</Link>

  </div>

</nav>
            {/* Render Whitelist Form */}
            <WhitelistForm />
        </section>
    );
}


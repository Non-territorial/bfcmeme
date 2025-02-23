"use client";

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
import BuyButton from "@/components/BuyButton";

interface NFT {
  id: number;
  image: string;
  name: string;
  description: string;
  // include any additional fields from your metadata if needed
}

const METADATA_CID = "bafybeifrrm7ifyife2ywj7m7i3b2uhnfum2uqz476wm46hlt663q4dd7nm";
const COW_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_COW_CONTRACT_ADDRESS || "";
// const MINING_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MINING_CONTRACT_ADDRESS || "";
// const TOKEN_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_CONTRACT_ADDRESS || "";
const PINATA_GATEWAY = "https://rose-legislative-swordtail-248.mypinata.cloud/ipfs";
const ABI = [
  {
    "constant": false,
    "inputs": [],
    "name": "claimFreeCow",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [{ "name": "tokenURI", "type": "string" }],
    "name": "buyAndMintCow",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  }
];

const PAGE_SIZE = 12;

export default function Marketplace() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [walletConnected, setWalletConnected] = useState(false);

  // Connect Wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
      } catch (error) {
        console.error("Wallet connection failed", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Check Whitelist
  const checkWhitelist = async () => {
    if (!COW_CONTRACT_ADDRESS) {
      console.log("COW_CONTRACT_ADDRESS is empty, skipping whitelist check.");
      return false;
    }
    if (typeof window === "undefined" || !window.ethereum) {
      console.error("Ethereum provider not found");
      return false;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(COW_CONTRACT_ADDRESS, ABI, signer);
      const address = await signer.getAddress();
      // Assuming the contract has an isWhitelisted method
      return await contract.isWhitelisted(address);
    } catch (error) {
      console.error("Whitelist check failed", error);
      return false;
    }
  };

  // Claim Free Cow
  const claimFreeCow = async () => {
    if (!window.ethereum || !COW_CONTRACT_ADDRESS) {
      return alert("Please connect your wallet or wait for contract deployment");
    }
    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(COW_CONTRACT_ADDRESS, ABI, signer);
      const tx = await contract.claimFreeCow();
      await tx.wait();
      alert("Successfully claimed a free BFCMEME Cow!");
    } catch (error) {
      console.error("Claim failed", error);
      alert("Claim failed. You may not be whitelisted or another error occurred. Check console for details.");
    }
    setLoading(false);
  };

 // const buyNFT = async (id: number) => {
//   alert(`Buying is not available until the contract is deployed. NFT #${id} is not for sale yet.`);
// };



  // Verify Whitelist on Mount
  useEffect(() => {
    async function verifyWhitelist() {
      setIsWhitelisted(await checkWhitelist());
    }
    verifyWhitelist();
  }, []);

  // Fetch NFTs on page change
  useEffect(() => {
    async function fetchNFTs() {
      setLoading(true);
      const fetchedNFTs: NFT[] = [];
      const start = (page - 1) * PAGE_SIZE + 1;
      const end = page * PAGE_SIZE;

      for (let i = start; i <= end; i++) {
        try {
          const nftId = i.toString().padStart(4, "0");
          const res = await fetch(`${PINATA_GATEWAY}/${METADATA_CID}/${nftId}.json`);
          if (!res.ok) {
            throw new Error(`Failed to fetch NFT ${nftId}: ${res.status}`);
          }
          const data = await res.json();
          fetchedNFTs.push({ id: i, ...data });
        } catch (error) {
          console.error(`Failed to fetch NFT ${i}:`, error);
        }
      }

      // Combine new and old, then deduplicate by 'id'
      setNfts((prev) => {
        const combined = [...prev, ...fetchedNFTs];
        const unique = combined.filter(
          (item, index) => combined.findIndex((n) => n.id === item.id) === index
        );
        return unique;
      });

      setLoading(false);
    }
    fetchNFTs();
  }, [page]);

  return (
    <div className="relative w-full min-h-screen bg-black text-white p-10">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-black z-50 border-b border-gray-700 px-6 flex items-center">
        {/* Centered Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-yellow-400 absolute left-1/2 transform -translate-x-1/2"
        >
          BFCMEME
        </Link>

        {/* Right Section */}
        <div className="absolute right-6 flex items-center space-x-4">
          <Link href="#socials" className="text-white hover:text-yellow-400">
            X
          </Link>
          <Link href="#telegram" className="text-white hover:text-yellow-400">
            TG
          </Link>
          <button
            onClick={connectWallet}
            className="bg-black px-4 py-2 rounded-lg text-lg text-white hover:text-yellow-400 font-bold"
          >
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
      </nav>

      <h1 className="text-4xl font-bold text-center mt-20 mb-2">
        BFCMEME Cows Marketplace
      </h1>
      <h2 className="text-lg text-center text-gray-400 mb-6">
        Marketplace and Free Claim will start operating on March 28 for whitelisted addresses and on April 2 for the public
      </h2>

      {/* NFT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div
            key={nft.id} // make sure 'id' is unique
            className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg flex flex-col items-center justify-between min-h-[450px]"
          >
            {/* Image Container */}
            <div className="flex items-center justify-center w-full flex-grow">
              <Image
                src={nft.image.replace("ipfs://", `${PINATA_GATEWAY}/`)}
                alt={nft.name}
                width={300}
                height={300}
                className="object-contain max-h-60 cursor-pointer"
                onClick={() => setSelectedImage(nft.image.replace("ipfs://", `${PINATA_GATEWAY}/`))}
              />
            </div>

            {/* NFT Name and Description */}
            <h2 className="text-2xl font-bold mt-4 text-center">{nft.name}</h2>
            <p className="text-gray-400 mt-2 text-center">{nft.description}</p>

            {/* Buy Button */}
      <div className="mt-4 w-full">
        <BuyButton text="Buy" 
         className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-blue-700 transition"/>
      </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-6 flex justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg text-lg font-bold hover:bg-purple-800 transition"
          >
            Load More
          </button>
        )}
      </div>

      {/* Claim Free Cow Button */}
      <button
        onClick={claimFreeCow}
        className="mt-10 w-full bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-700 transition"
        disabled={loading || !isWhitelisted}
      >
        {loading ? "Processing..." : "Claim Free Cow"}
      </button>

      {/* Modal for zoomed image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl max-h-full">
            <Image
              src={selectedImage}
              alt="Enlarged NFT"
              width={500}
              height={500}
              className="object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

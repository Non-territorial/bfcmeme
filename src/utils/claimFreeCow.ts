import { ethers, BrowserProvider, Eip1193Provider } from "ethers";


declare global {
    interface Window {
        ethereum?: Eip1193Provider ;
    }
}

// Dynamically load ABI
let BFCMEMECowABI: Record<string, unknown> | null = null;

async function loadABI() {
    try {
        const abiModule = await import("../contracts/BFCMEMECow.json");
        BFCMEMECowABI = abiModule.default;
    } catch {
        console.warn("BFCMEMECow ABI not found. Claim function will be disabled.");
        BFCMEMECowABI = null;
    }
}

// Load ABI when script runs
loadABI();

// Remove CONTRACT_ADDRESS if using mockContract
export const canClaim = BFCMEMECowABI !== null;

// Ensure Contract Initialization Only if ABI is Loaded
export async function claimFreeCow(): Promise<void> {
    if (!BFCMEMECowABI) {
        console.error("Contract ABI is not loaded.");
        alert("Claim function is currently disabled.");
        return;
    }

    try {
        if (!window.ethereum) {
            throw new Error("MetaMask is not installed!");
        }

        const provider = new BrowserProvider(window.ethereum as Eip1193Provider);
        await provider.send("eth_requestAccounts", []); // Request wallet connection
        const signer = await provider.getSigner();

        // ✅ FIX: Ensure ABI is properly loaded and type-cast it
        const contractABI = BFCMEMECowABI as unknown as ethers.InterfaceAbi;
        const contract = new ethers.Contract("", contractABI, signer);

        const metadataURI: string = "ipfs://QmExampleMetadata";
        const tx = await contract.claimFreeCow(metadataURI);
        await tx.wait();

        alert("You successfully claimed your free NFT Cow!");
    } catch (error) {
        console.error("Error claiming cow:", error);
        alert("Transaction failed. Please try again.");
    }
}

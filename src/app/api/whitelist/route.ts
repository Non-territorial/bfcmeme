import { NextResponse } from "next/server";

// Only allow POST requests
export async function POST(req: Request) {
    try {
        const { wallet } = await req.json();

        if (!wallet) {
            return NextResponse.json({ success: false, message: "Wallet address is required" }, { status: 400 });
        }

        console.log("Whitelist request received for wallet:", wallet);

        // ✅ Store in DB, JSON, or memory (Not implemented here)
        return NextResponse.json({ success: true, message: "Wallet whitelisted successfully!" }, { status: 200 });

    } catch (error) {
        console.error("API Error:", error); // Log the error to the console
        return new Response(JSON.stringify({ success: false, message: "Something went wrong" }), { status: 500 });
    }
    
}

// ❌ Block other methods (GET, PUT, DELETE)
export function GET() {
    return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405 });
}

import { NextResponse } from "next/server";
import { Pool } from "pg";

// 🔗 Connect to Neon database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for Neon SSL connection
});

// ✅ Handle POST Request to Save Wallet
export async function POST(req: Request) {
  try {
    const { wallet } = await req.json();
    if (!wallet) {
      return NextResponse.json({ success: false, message: "Wallet address is required" }, { status: 400 });
    }

    console.log("Whitelist request received for wallet:", wallet);

    // Insert wallet into whitelist table, prevent duplicates
    const client = await pool.connect();
    try {
      await client.query(
        "INSERT INTO whitelist (wallet_address) VALUES ($1) ON CONFLICT (wallet_address) DO NOTHING;",
        [wallet]
      );
    } finally {
      client.release();
    }

    return NextResponse.json({ success: true, message: "Wallet whitelisted successfully!" }, { status: 200 });

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}

// ❌ Block other methods
export function GET() {
  return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405 });
}

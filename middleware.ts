import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";
  const isMobile = /Mobi|Android|iPhone/i.test(userAgent);

  if (isMobile) {
    return NextResponse.redirect(new URL("/mobile", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to specific paths (optional)
export const config = {
  matcher: "/", // This applies the middleware to the homepage only
};

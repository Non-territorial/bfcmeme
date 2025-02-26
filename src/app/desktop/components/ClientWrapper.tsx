
"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ClientWrapper() {
  const router = useRouter();
  const pathname = usePathname(); // ✅ Use `usePathname()` to get the current route

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent);

      if (isMobile && !pathname.startsWith("/mobile")) {
        router.replace("/mobile");
      }
    }
  }, [router, pathname]); // ✅ Now correctly tracks dependencies

  return null; // No UI, just handles redirection.
}

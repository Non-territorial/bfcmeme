
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClientWrapper() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|mobile/i.test(userAgent);

      if (isMobile && !window.location.pathname.startsWith("/mobile")) {
        router.replace("/mobile");
      }
    }
  }, []);

  return null; // This component only handles redirection, no UI needed.
}

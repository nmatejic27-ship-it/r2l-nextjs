"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function StickyMobileCTA() {
  const pathname = usePathname();

  // Don't show on apply page (they're already there)
  if (pathname === "/apply") return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-brand-black/95 backdrop-blur-md border-t border-brand-border p-3 safe-area-inset-bottom"
      style={{ paddingBottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      <Link
        href="/apply"
        className="btn-primary w-full py-4 text-sm rounded-sm min-h-[52px] block text-center"
      >
        🔥 Apply for Coaching — Limited Spots
      </Link>
    </div>
  );
}

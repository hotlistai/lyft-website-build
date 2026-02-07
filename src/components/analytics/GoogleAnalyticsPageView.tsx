"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

export function GoogleAnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams?.toString();
    const safePathname = pathname || "/";
    const url = query ? `${safePathname}?${query}` : safePathname;
    trackPageView(url);
  }, [pathname, searchParams]);

  return null;
}

"use client";

import { usePathname } from "next/navigation";
import { Nav } from "./nav";

export function ConditionalNav() {
  const pathname = usePathname();
  if (pathname.startsWith("/hvac")) return null;
  return <Nav />;
}

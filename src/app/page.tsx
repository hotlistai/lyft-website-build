import type { Metadata } from "next";
import { HomePage } from "@/marketing/HomePage";

export const metadata: Metadata = {
  title: "Outbound that sounds human",
  alternates: { canonical: "/" },
};

export default function Page() {
  return <HomePage />;
}

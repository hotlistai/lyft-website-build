import type { Metadata } from "next";
import { ContactPage } from "@/marketing/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return <ContactPage />;
}

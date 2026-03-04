import type { Metadata } from "next";
import CaseStudiesPage from "@/components/wabs/authority/CaseStudiesPage";

export const metadata: Metadata = {
  title: "Client Case Studies & Success Stories",
  description:
    "Real People. Real Brands. Real Results. Documented outcomes from executives, consultants, and founders who chose to invest in strategic brand building with WABS Digital.",
  openGraph: {
    title: "Client Case Studies & Success Stories | WABS Digital",
    description:
      "Documented outcomes from executives, consultants, and founders who chose to invest in strategic brand building with WABS Digital.",
  },
};

export default function Page() {
  return <CaseStudiesPage />;
}

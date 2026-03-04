import type { Metadata } from "next";
import FractionalStrategistPage from "@/components/wabs/services/FractionalStrategistPage";

export const metadata: Metadata = {
  title: "Fractional Brand & Marketing Strategist",
  description:
    "Executive-level brand, marketing, and digital oversight — without the cost of a full-time hire. Strategic brand positioning for CEOs, founders, and senior consultants across Africa.",
  openGraph: {
    title: "Fractional Brand & Marketing Strategist | WABS Digital",
    description:
      "Executive-level brand, marketing, and digital oversight — without the cost of a full-time hire.",
  },
};

export default function Page() {
  return <FractionalStrategistPage />;
}

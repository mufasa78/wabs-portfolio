import type { Metadata } from "next";
import MediaCoveragePage from "@/components/wabs/authority/MediaCoveragePage";

export const metadata: Metadata = {
  title: "Media Coverage & Features",
  description:
    "As Seen & Heard. Amplifying conversations that matter — on maternal health, workplace policy, and online entrepreneurship with Wambui Kuria.",
  openGraph: {
    title: "Media Coverage & Features | WABS Digital",
    description:
      "Beyond brand strategy and client work, Wambui Kuria has been sought out by media platforms across Kenya and beyond as a voice on maternal health and professional life.",
  },
};

export default function Page() {
  return <MediaCoveragePage />;
}

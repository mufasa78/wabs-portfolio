import type { Metadata } from "next";
import MarketingStrategistPage from "@/components/wabs/services/MarketingStrategistPage";

export const metadata: Metadata = {
  title: "Marketing Strategist | Strategic Marketing & Visibility",
  description:
    "Strategic marketing oversight and visibility planning for established leaders. Transform your expertise into market authority through targeted marketing strategies.",
  openGraph: {
    title: "Marketing Strategist | Strategic Marketing & Visibility | WABS Digital",
    description:
      "Strategic marketing oversight and visibility planning for established leaders ready to amplify their market presence.",
  },
};

export default function Page() {
  return <MarketingStrategistPage />;
}

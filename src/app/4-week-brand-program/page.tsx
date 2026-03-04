import type { Metadata } from "next";
import FourWeekBrandProgramPage from "@/components/wabs/services/FourWeekBrandProgramPage";

export const metadata: Metadata = {
  title: "4-Week Strategic Brand Launch & Growth Program",
  description:
    "A focused, done-with-you engagement for senior professionals, consultants, coaches, and founders ready to transform their expertise into a credible, visible, and opportunity-generating brand.",
  openGraph: {
    title: "4-Week Strategic Brand Launch & Growth Program | WABS Digital",
    description:
      "Stop guessing. Start building a brand that works. Transform your expertise into authority in 4 structured weeks.",
  },
};

export default function Page() {
  return <FourWeekBrandProgramPage />;
}

"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function MobileFloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80vh (hero height)
      const heroHeight = window.innerHeight * 0.8;
      setVisible(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#111111] border-t border-[#FFFFFF]/10 px-4 py-3 safe-area-inset-bottom">
        <a
          href="#booking"
          className="flex items-center justify-center gap-2 bg-[#D91A6B] text-[#FFFFFF] py-3.5 px-6 rounded-sm font-body font-semibold text-sm w-full group"
        >
          Book Free Brand Clarity Session
          <ArrowRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </div>
    </div>
  );
}

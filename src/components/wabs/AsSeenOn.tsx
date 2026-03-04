"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const platforms = [
  {
    name: "Being Kambua",
    src: "/images/seen/Being-Kambua-logo.png",
    width: 160,
    height: 60,
  },
  {
    name: "Pearl Radio",
    src: "/images/seen/pearl-radio.png",
    width: 160,
    height: 60,
  },
  {
    name: "People Daily",
    src: "/images/seen/People-Daily-logo.jpeg",
    width: 160,
    height: 60,
  },
];

export default function AsSeenOn() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  return (
    <section
      className="py-16 border-t border-b border-[#E8E8E8] bg-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div
          className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-[opacity,transform] duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Label */}
          <div className="shrink-0">
            <p className="font-stat text-[#111111]/40 text-xs uppercase tracking-widest font-semibold text-center md:text-left">
              As Seen On
            </p>
          </div>

          {/* Divider — desktop only */}
          <div className="hidden md:block w-px h-10 bg-[#E8E8E8]" />

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 md:gap-14">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="relative opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                style={{ height: 48, width: "auto" }}
              >
                <Image
                  src={platform.src}
                  alt={platform.name}
                  width={platform.width}
                  height={platform.height}
                  className="h-10 w-auto object-contain"
                  sizes="160px"
                  quality={80}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Programs", href: "#programs" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Media Coverage", href: "/media-coverage" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/wabs-favicon.png"
                alt="WABS Digital"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
                priority
                sizes="40px"
                quality={90}
              />
            </Link>

            {/* Center Nav Links — Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="font-body text-[#FFFFFF]/80 hover:text-[#FFFFFF] text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button — Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 bg-[#D91A6B] text-[#FFFFFF] px-5 py-2.5 text-sm font-semibold rounded-sm hover:bg-[#A01050] transition-all duration-200 hover:scale-[1.03] hover:shadow-lg font-body"
              >
                Book Brand Clarity
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-[#FFFFFF] p-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] bg-[#111111] flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <Image
              src="/images/wabs-favicon.png"
              alt="WABS Digital"
              width={36}
              height={36}
              className="h-9 w-auto object-contain"
              sizes="36px"
              quality={90}
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="text-[#FFFFFF] p-2"
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 gap-8">
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  handleAnchorClick(e, link.href);
                  setMobileOpen(false);
                }}
                className="font-display text-[#FFFFFF] text-4xl font-semibold hover:text-[#D91A6B] transition-colors"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#booking"
              onClick={() => setMobileOpen(false)}
              className="mt-8 inline-block bg-[#D91A6B] text-[#FFFFFF] px-8 py-4 text-lg font-semibold rounded-sm text-center font-body"
            >
              Book Brand Clarity Session
            </a>
          </div>
        </div>
      )}
    </>
  );
}

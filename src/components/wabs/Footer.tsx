"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Programs: [
    { label: "4-Week Brand Launch", href: "#programs" },
    { label: "Social Media Management", href: "#programs" },
    { label: "12-Week Startup Launch Kit", href: "#programs" },
    { label: "Book a Strategy Call", href: "#booking" },
  ],
  Company: [
    { label: "About Wambui", href: "#about-wambui" },
    { label: "Our Services", href: "#services" },
    { label: "Client Work", href: "#case-studies" },
    { label: "Free Brand Blueprint", href: "#lead-magnet" },
  ],
  Connect: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wambui-kuria-contentandbrandingstrategist/", external: true },
    { label: "Instagram", href: "https://www.instagram.com/wambuibrandingstrategist/", external: true },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61553301187748", external: true },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wambui-kuria-contentandbrandingstrategist/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/wambuibrandingstrategist/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61553301187748",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-[#1C1208] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8 pb-16 border-b border-[#F5EFE0]/10">
          {/* Brand + Newsletter */}
          <div>
            <a href="#" className="inline-flex items-center mb-6">
              <Image
                src="/images/wabs-favicon.png"
                alt="WABS Digital"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                sizes="160px"
                quality={90}
              />
            </a>
            <p className="font-body text-[#F5EFE0]/55 text-base leading-relaxed mb-8 max-w-sm">
              Africa's premier branding and positioning agency for knowledge professionals ready to lead their market.
            </p>

            {/* Newsletter */}
            <div>
              <h4 className="font-body text-[#F5EFE0] text-sm font-semibold mb-4">
                Brand Authority Insights — weekly
              </h4>
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 bg-[#F5EFE0]/10 border border-[#F5EFE0]/15 text-[#F5EFE0] placeholder-[#F5EFE0]/35 px-4 py-2.5 rounded-sm font-body text-sm focus:outline-none focus:border-[#C4622D] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#C4622D] text-[#F5EFE0] px-4 py-2.5 rounded-sm hover:bg-[#b05526] transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
              ) : (
                <p className="font-body text-[#4A5E4F] text-sm font-medium">
                  ✓ You're subscribed. Watch your inbox.
                </p>
              )}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-stat text-[#F5EFE0]/40 text-xs uppercase tracking-widest font-semibold mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="font-body text-[#F5EFE0]/60 hover:text-[#F5EFE0] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-10">
          <p className="font-body text-[#F5EFE0]/35 text-sm">
            © {new Date().getFullYear()} WABS Digital. All rights reserved. Africa's Authority Brand Agency.
          </p>

          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-sm border border-[#F5EFE0]/15 flex items-center justify-center text-[#F5EFE0]/50 hover:text-[#F5EFE0] hover:border-[#F5EFE0]/40 transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex items-center gap-4">
              <a href="#" className="font-body text-[#F5EFE0]/35 hover:text-[#F5EFE0]/60 text-xs transition-colors">
                Privacy
              </a>
              <a href="#" className="font-body text-[#F5EFE0]/35 hover:text-[#F5EFE0]/60 text-xs transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const services = [
  "Fractional Brand & Marketing Strategist",
  "4-Week Brand Launch & Growth Program",
  "Brand Strategy Consulting",
  "Brand Clarity Session",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If Brand Clarity Session is selected, redirect to Selar
    if (formData.service === "Brand Clarity Session") {
      window.open("https://selar.com/dlo5455b8f", "_blank");
      setIsSubmitting(false);
      setIsDone(true);
      return;
    }

    // Construct WhatsApp message for other services
    const whatsappNumber = "254769168665";
    const text = `Hello WABS!%0A%0AMy name is *${formData.name}*.%0A${
      formData.phone ? `Phone: ${formData.phone}%0A` : ""
    }I'm interested in: *${formData.service}*%0A%0A*Message:*%0A${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsDone(true);
  };

  if (isDone) {
    return (
      <div className="bg-[#D91A6B]/5 border border-[#D91A6B]/20 rounded-sm p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D91A6B]/10 mb-6">
          <CheckCircle2 size={32} className="text-[#D91A6B]" />
        </div>
        <h3 className="font-display text-[#111111] text-2xl font-semibold mb-3">
          Message Ready!
        </h3>
        <p className="font-body text-[#111111]/60 mb-8">
          {formData.service === "Brand Clarity Session" 
            ? "I've opened the Selar booking page for your complimentary Brand Clarity Session."
            : "I've opened WhatsApp for you to send the message directly to our team."
          }
        </p>
        <button
          onClick={() => setIsDone(false)}
          className="text-[#D91A6B] font-body font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-sm p-8 lg:p-10 wabs-shadow border border-[#E8E8E8]">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-[#F5F5F5] border border-[#E8E8E8] rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-[#D91A6B] transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-2"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254..."
              className="w-full bg-[#F5F5F5] border border-[#E8E8E8] rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-[#D91A6B] transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="block font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-2"
          >
            I'm interested in *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-[#F5F5F5] border border-[#E8E8E8] rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-[#D91A6B] transition-colors appearance-none"
          >
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-stat text-xs uppercase tracking-widest font-semibold text-[#111111]/40 mb-2"
          >
            How can we help? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us a bit about your brand goals..."
            className="w-full bg-[#F5F5F5] border border-[#E8E8E8] rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-[#D91A6B] transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-3 bg-[#111111] text-[#FFFFFF] px-8 py-4 text-base font-semibold rounded-sm hover:bg-[#2D2D2D] transition-all duration-200 hover:scale-[1.02] font-body group disabled:opacity-50"
        >
          {isSubmitting 
            ? "Opening..." 
            : formData.service === "Brand Clarity Session" 
              ? "Book Free Session" 
              : "Send via WhatsApp"
          }
          <Send
            size={18}
            className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

        <p className="font-body text-[#111111]/40 text-[10px] text-center uppercase tracking-wider">
          {formData.service === "Brand Clarity Session" 
            ? "Redirects to Selar Booking Platform" 
            : "Redirects to WhatsApp Business · +254 769 168 665"
          }
        </p>
      </form>
    </div>
  );
}

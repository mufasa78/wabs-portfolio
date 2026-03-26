import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] px-6">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="font-display text-6xl lg:text-7xl font-bold text-[#111111] mb-4" style={{ fontVariationSettings: '"WONK" 0.5' }}>
            404
          </h1>
          <p className="font-body text-xl text-[#D91A6B] mb-8">
            Page Not Found
          </p>
        </div>
        
        <div className="space-y-6">
          <p className="font-body text-[#111111]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-[#D91A6B] text-[#FFFFFF] px-6 py-3 rounded-sm font-body font-semibold hover:bg-[#A01050] transition-colors duration-200"
            >
              Go Home
            </Link>
            
            <Link
              href="/fractional-strategist"
              className="inline-flex items-center justify-center gap-2 border border-[#D91A6B] text-[#D91A6B] px-6 py-3 rounded-sm font-body font-semibold hover:bg-[#D91A6B] hover:text-[#FFFFFF] transition-all duration-200"
            >
              View Services
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#E8E8E8]">
          <p className="font-body text-[#111111]/50 text-sm text-center">
            If you believe this is an error, please{" "}
            <a 
              href="mailto:hello@wabsdigital.com" 
              className="text-[#D91A6B] hover:underline font-medium"
            >
              contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

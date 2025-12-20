import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Metallic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-gray-300 via-purple-400 to-indigo-500"></div>
      
      {/* Metallic overlay with iridescent effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-gray-400/20 via-indigo-300/40 to-purple-600/30"></div>
      
      {/* Additional metallic sheen */}
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent"></div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Airplane icon */}
        <div className="absolute top-20 left-1/4 text-white/30 transform -rotate-12">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>

        {/* Graduation cap */}
        <div className="absolute top-32 right-1/4 text-white/30 transform rotate-12">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 2L1 7l11 5 9-4.09V17h2V7L12 2z"/>
          </svg>
        </div>

        {/* Gear icon */}
        <div className="absolute top-1/4 right-16 text-white/30 transform rotate-45">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
          </svg>
        </div>

        {/* Wrench */}
        <div className="absolute bottom-1/3 right-20 text-white/30 transform -rotate-30">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.7,19l-9.1-9.1c0.9-2.3,0.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9,6L6,9L1.6,4.7C0.4,7.1,0.9,10.1,2.9,12.1c1.9,1.9,4.6,2.4,6.9,1.5l9.1,9.1c0.4,0.4,1,0.4,1.4,0l2.3-2.3C22.7,20,22.7,19.4,22.7,19z"/>
          </svg>
        </div>

        {/* Lightning bolt */}
        <div className="absolute bottom-1/4 left-1/3 text-white/30 transform rotate-15">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11,21H9L13,3H15L11,21Z"/>
          </svg>
        </div>

        {/* Computer/laptop */}
        <div className="absolute bottom-32 right-1/3 text-white/30 transform -rotate-15">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z"/>
          </svg>
        </div>

        {/* Circuit/chip */}
        <div className="absolute top-3/4 left-1/4 text-white/30 transform rotate-30">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8,2V4H6V6H8V8H6V10H8V12H6V14H8V16H6V18H8V20H6V22H8V20H10V22H12V20H14V22H16V20H18V22H20V20H18V18H20V16H18V14H20V12H18V10H20V8H18V6H20V4H18V2H16V4H14V2H12V4H10V2H8M10,6H14V8H16V12H14V14H10V12H8V8H10V6Z"/>
          </svg>
        </div>

        {/* Teapot (for fun engineering touch) */}
        <div className="absolute bottom-20 left-20 text-white/30 transform rotate-12">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17,19H7V17H8V16A5,5 0 0,1 13,11H15A3,3 0 0,0 18,8V7A1,1 0 0,0 17,6H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V6H7A1,1 0 0,0 6,7V8A3,3 0 0,0 9,11H11A5,5 0 0,1 16,16V17H17M19,8V9A1,1 0 0,1 18,10H17V8M10,4H14V6H10"/>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 drop-shadow-2xl tracking-tight">
            <Image src="/t25.svg" alt="tron 25' Logo" width={150} height={150} className="inline-block mb-4" />
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Mechatronics Engineering Class of 2025 Survey Results
          </p>

          {/* Survey categories preview */}
          <div className="mt-16 text-white/80">
            <p className="text-lg mb-4">Explore survey data across these categories:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {['Demographics', 'School', 'Co-op', 'Lifestyle', 'Mental Health', 'Relationships', 'Personal Dev', 'Future Plans', 'Advice', 'Photos'].map((category) => (
                <span key={category} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

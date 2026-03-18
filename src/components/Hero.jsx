export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80"
          alt="Tokyo skyline with Mt Fuji"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <p className="text-white/80 text-lg sm:text-xl font-heading tracking-widest uppercase mb-4">
            ✈️ April 21 – May 4, 2026
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-white mb-4 leading-tight">
            Zexo & Keiko's
            <br />
            <span className="text-sakura">Japan Adventure</span>
          </h1>
          <p className="text-3xl sm:text-4xl mb-8">🌸</p>
          <p className="text-white/90 text-lg sm:text-xl font-heading max-w-2xl mx-auto mb-8">
            14 days exploring Tokyo, Kyoto, and beyond — card hunting, temple hopping, and endless ramen
          </p>
          <p className="text-white/60 font-heading text-base mb-10">
            日本の冒険 — 14 Days of Adventure
          </p>
          <a
            href="#overview"
            className="inline-flex items-center gap-2 bg-sakura hover:bg-sakura-dark text-white px-8 py-4 rounded-full font-heading font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore the Plan
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path d="M0,80 C360,120 720,40 1080,80 C1260,100 1380,90 1440,80 L1440,120 L0,120 Z" fill="#FFFAF5" />
        </svg>
      </div>
    </section>
  )
}

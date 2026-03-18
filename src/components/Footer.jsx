export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-transparent to-sakura/10 py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-6">🌸</div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-dark mb-3">
          いってらっしゃい！
        </h3>
        <p className="text-dark-light text-lg mb-2">Have an amazing trip, Zexo & Keiko!</p>
        <p className="text-dark-light/60 text-sm mb-8">
          April 21 – May 4, 2026 • 14 Days • Tokyo → Kyoto → Nagoya → Tokyo
        </p>
        
        <div className="flex justify-center gap-6 text-3xl mb-8">
          <span className="hover:scale-125 transition-transform cursor-default">⛩️</span>
          <span className="hover:scale-125 transition-transform cursor-default">🚅</span>
          <span className="hover:scale-125 transition-transform cursor-default">🍜</span>
          <span className="hover:scale-125 transition-transform cursor-default">🃏</span>
          <span className="hover:scale-125 transition-transform cursor-default">🌸</span>
        </div>

        <p className="text-xs text-dark-light/40">
          Made with 💗 by THRONE • Photos from Unsplash
        </p>
      </div>
    </footer>
  )
}

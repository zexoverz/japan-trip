const stats = [
  { emoji: '📅', value: '14', label: 'Days', jp: '日間' },
  { emoji: '🏙️', value: '5', label: 'Cities', jp: '都市' },
  { emoji: '🚲', value: '2', label: 'Cycling Days', jp: '自転車' },
  { emoji: '⛩️', value: '20+', label: 'Temples & Sites', jp: '寺社' },
  { emoji: '🃏', value: '∞', label: 'Cards to Hunt', jp: 'カード' },
  { emoji: '💰', value: 'Rp21-35M', label: 'Budget Range', jp: '予算' },
]

export default function Overview() {
  return (
    <section id="overview" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">旅の概要 — Trip Overview</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">The Adventure at a Glance</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            Two weeks across Japan with Keiko — from the neon of Akihabara to bamboo groves, alpine villages, and countryside cycling.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-sakura/10"
            >
              <div className="text-3xl mb-3">{stat.emoji}</div>
              <div className="text-2xl sm:text-3xl font-heading font-bold text-dark mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-dark-light">{stat.label}</div>
              <div className="text-xs text-sakura/70 mt-1">{stat.jp}</div>
            </div>
          ))}
        </div>

        {/* Route visualization */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-xl mb-6 text-center">🗺️ Route Map</h3>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base">
            {[
              { city: '🛬 Narita', days: 'Apr 21' },
              { city: '🏙️ Tokyo', days: 'Days 1-3' },
              { city: '🏔️ Hakone', days: 'Days 3-4' },
              { city: '🚄 Shinkansen', days: '' },
              { city: '⛩️ Kyoto', days: 'Days 5-8' },
              { city: '🦌 Nara', days: 'Day 9' },
              { city: '🏯 Nagoya/Gifu', days: 'Days 9-10' },
              { city: '🌲 Takayama', days: 'Days 11-12' },
              { city: '🏙️ Tokyo', days: 'Days 13-14' },
              { city: '🛫 Departure', days: 'May 4' },
            ].map((stop, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-cream rounded-xl px-4 py-2 text-center">
                  <div className="font-heading font-semibold">{stop.city}</div>
                  {stop.days && <div className="text-xs text-dark-light">{stop.days}</div>}
                </div>
                {i < arr.length - 1 && <span className="text-sakura text-lg hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const stats = [
  { emoji: '📅', value: '14', label: 'Days', jp: '日間' },
  { emoji: '🏙️', value: '4', label: 'Stops', jp: '拠点' },
  { emoji: '🚲', value: '2', label: 'Cycling Days', jp: '自転車' },
  { emoji: '🏔️', value: '1', label: 'Alpine Hike', jp: '上高地' },
  { emoji: '🃏', value: '∞', label: 'Cards to Hunt', jp: 'カード' },
  { emoji: '💰', value: 'Rp24-37M', label: 'Budget Range', jp: '予算' },
]

export default function Overview() {
  return (
    <section id="overview" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">旅の概要 — Trip Overview</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">The Adventure at a Glance</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            Two weeks across Japan — Kyoto first, Gifu onsen town, Takayama Alps base with Kamikochi day trip, Tokyo last for card hunting & flea market. Two private couples onsen days, one free day. No rushing.
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
              { city: '🚄', days: '' },
              { city: '⛩️ Kyoto', days: '4 nights' },
              { city: '🚄', days: '' },
              { city: '🏯 Gifu', days: '2 nights' },
              { city: '🚃', days: '' },
              { city: '🌲 Takayama', days: '4 nights' },
              { city: '🚄', days: '' },
              { city: '🏙️ Tokyo', days: '2 nights' },
              { city: '🛫', days: 'May 4' },
            ].map((stop, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`rounded-xl px-4 py-2 text-center ${
                  stop.days && stop.days.includes('night') ? 'bg-cream' : 'bg-transparent'
                }`}>
                  <div className="font-heading font-semibold">{stop.city}</div>
                  {stop.days && <div className="text-xs text-dark-light">{stop.days}</div>}
                </div>
                {i < arr.length - 1 && <span className="text-sakura text-lg hidden sm:inline">→</span>}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-dark-light mt-4">
            Clean west→east line. Zero backtracking. 3 hotel changes in 14 days.
          </p>
        </div>
      </div>
    </section>
  )
}

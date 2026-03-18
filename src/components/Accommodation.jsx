const cities = [
  {
    city: 'Tokyo',
    emoji: '🏙️',
    nights: '5 nights (Apr 21-25) + 2 nights (May 3-4)',
    area: 'Shinjuku or Asakusa',
    options: [
      { type: 'Budget', name: 'Hostel/Capsule Hotel', price: '¥4,000-6,000/night', idr: 'Rp 400-600K', note: 'Great social vibe, clean, lockers for belongings' },
      { type: 'Mid', name: 'Business Hotel (APA, Toyoko Inn)', price: '¥8,000-12,000/night', idr: 'Rp 800K-1.2M', note: 'Private room, bathroom, breakfast often included' },
    ],
    tip: '⚠️ Book early! Golden Week (Apr 29-May 5) makes prices spike 2-3x',
  },
  {
    city: 'Kyoto',
    emoji: '⛩️',
    nights: '4 nights (Apr 26-29)',
    area: 'Near Kyoto Station or Gion',
    options: [
      { type: 'Budget', name: 'Guesthouse/Hostel', price: '¥4,000-6,000/night', idr: 'Rp 400-600K', note: 'Many traditional-style guesthouses available' },
      { type: 'Special', name: 'Traditional Ryokan (1 night)', price: '¥15,000-25,000/night', idr: 'Rp 1.5-2.5M', note: '🌟 Tatami rooms, futon beds, onsen bath, kaiseki dinner — DO THIS at least once!' },
    ],
    tip: '💡 Stay 1 night in a ryokan for the authentic experience, hostel for the rest',
  },
  {
    city: 'Nagoya',
    emoji: '🏯',
    nights: '2 nights (May 1-2)',
    area: 'Near Nagoya Station',
    options: [
      { type: 'Budget', name: 'Business Hotel', price: '¥5,000-8,000/night', idr: 'Rp 500-800K', note: 'Nagoya is cheaper than Tokyo/Kyoto for hotels' },
    ],
    tip: '💡 If skipping Nagoya, use these nights for Nara day trip + extra Osaka from Kyoto',
  },
]

export default function Accommodation() {
  return (
    <section id="accommodation" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">宿泊 — Where to Stay</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Accommodation Guide</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            13 nights total. Mix budget stays with one special ryokan night for the full experience.
          </p>
        </div>

        <div className="space-y-6">
          {cities.map((city) => (
            <div key={city.city} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-sakura/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{city.emoji}</span>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-dark">{city.city}</h3>
                  <p className="text-sm text-dark-light">{city.nights} • Best area: {city.area}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5">
                {city.options.map((opt) => (
                  <div key={opt.type} className={`rounded-2xl p-4 ${opt.type === 'Special' ? 'bg-gradient-to-br from-sakura/10 to-cream border border-sakura/20' : 'bg-cream/40'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        opt.type === 'Special' ? 'bg-sakura/20 text-sakura-dark' :
                        opt.type === 'Budget' ? 'bg-green-100 text-green-700' : 'bg-sky/20 text-sky'
                      }`}>{opt.type}</span>
                      <span className="font-heading font-bold text-sakura-dark text-sm">{opt.idr}</span>
                    </div>
                    <div className="font-heading font-semibold text-dark">{opt.name}</div>
                    <div className="text-xs text-dark-light mt-1">{opt.price}</div>
                    <p className="text-sm text-dark-light mt-2">{opt.note}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-dark-light bg-cream/30 rounded-xl px-4 py-2">{city.tip}</p>
            </div>
          ))}
        </div>

        {/* Total estimate */}
        <div className="mt-8 bg-gradient-to-r from-sakura/10 to-sky/10 rounded-2xl p-6 text-center">
          <p className="font-heading font-bold text-lg text-dark mb-1">Total Accommodation Estimate (13 nights)</p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="text-dark-light">Budget:</span>{' '}
              <span className="font-bold text-sakura-dark">Rp 8M</span>
            </div>
            <div>
              <span className="text-dark-light">Mid:</span>{' '}
              <span className="font-bold text-sakura-dark">Rp 13M</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const cities = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    nights: '5 nights (Apr 21-26)',
    area: 'Near Kyoto Station or Gion',
    order: 1,
    options: [
      {
        type: 'Budget', name: '🏨 Piece Hostel Kyoto', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: 'Modern design hostel near Kyoto Station. Private double rooms for couples. Rooftop terrace.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/piece-hostel-kyoto/hotel/kyoto-jp.html?checkIn=2026-04-21&checkOut=2026-04-26&rooms=1&adults=2' },
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/piece-hostel-kyoto.html?checkin=2026-04-21&checkout=2026-04-26&group_adults=2' },
          { label: 'Hostelworld', url: 'https://www.hostelworld.com/st/hostels/p/273625/piece-hostel-kyoto/' },
        ],
      },
      {
        type: 'Budget', name: '🏨 The Millennials Kyoto', price: '¥5,000-7,000/night', idr: 'Rp 500-700K',
        note: 'Smart pod hotel — futuristic but comfy. Individual pods with motorized beds.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-26&rooms=1&adults=2&searchText=The%20Millennials%20Kyoto' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=The+Millennials+Kyoto&checkin=2026-04-21&checkout=2026-04-26&group_adults=2' },
        ],
      },
    ],
    tip: '💡 Same hostel all 5 nights = no checkout hassle. Ryokan moved to Okuhida (mountain onsen!).',
    recommended: '💡 Piece Hostel for all 5 nights — simple, no luggage shuffling',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    nights: '4 nights guesthouse (Apr 26-30)',
    area: 'Near Takayama Station',
    order: 2,
    options: [
      {
        type: 'Budget', name: '🏨 K\'s House Takayama', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: 'Top-rated guesthouse. Private rooms, common kitchen, bike rental help. Your base for Kamikochi & Shirakawa-go.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/k-s-house-takayama/hotel/takayama-jp.html?checkIn=2026-04-26&checkOut=2026-04-30&rooms=1&adults=2' },
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/k-s-house-takayama.html?checkin=2026-04-26&checkout=2026-04-30&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏨 Guesthouse Tomaru', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Cozy traditional guesthouse in old town. Walking distance to morning market and Sanmachi Suji.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=4955&checkIn=2026-04-26&checkOut=2026-04-30&rooms=1&adults=2&searchText=guesthouse%20takayama' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=guesthouse+takayama&checkin=2026-04-26&checkout=2026-04-30&group_adults=2' },
        ],
      },
    ],
    tip: '💡 4 nights at same guesthouse — stable base for Takayama old town, Kamikochi day trip, Shirakawa-go, and Okuhida departure.',
    recommended: '💡 K\'s House — well-known among backpackers, great common area, walking distance to everything',
  },
  {
    city: 'Okuhida Onsen',
    emoji: '♨️',
    nights: '1 night ryokan (Apr 30 - May 1)',
    area: 'Okuhida Onsen Village (Hirayu/Shinhotaka)',
    order: 3,
    options: [
      {
        type: 'Special', name: '🏯 Okuhida Onsen Ryokan', price: '¥15,000-25,000/night', idr: 'Rp 1.5-2.5M',
        note: '🌟 THE ryokan night of the trip! Mountain onsen, kaiseki dinner + breakfast included, tatami + futon. Way more authentic than city ryokan.',
        bookLinks: [
          { label: 'Rakuten Travel', url: 'https://travel.rakuten.com/search/?checkin=2026-04-30&checkout=2026-05-01&rooms=1&adults=2&keyword=okuhida+onsen+ryokan' },
          { label: 'Jalan.net', url: 'https://www.jalan.net/en/japan_hotels_ryokan/Takayama/' },
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=4955&checkIn=2026-04-30&checkOut=2026-05-01&rooms=1&adults=2&searchText=okuhida%20onsen%20ryokan' },
        ],
      },
    ],
    tip: '💡 Okuhida ryokan is smarter than Kyoto — cheaper (¥15-25K vs ¥30K+ in Kyoto), mountain onsen >> city onsen, and 2 meals included!',
    recommended: '💡 Book one with outdoor rotenburo (open-air bath). Shinhotaka area has the best mountain views.',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    nights: '3 nights (May 1-4)',
    area: 'Akihabara or Ueno',
    order: 4,
    options: [
      {
        type: 'Mid', name: '🏢 APA Hotel Akihabara Station', price: '¥9,000-14,000/night', idr: 'Rp 900K-1.4M',
        note: 'Walking distance to ALL card shops! Private double room. Perfect base for card hunting Day 12.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14125&checkIn=2026-05-01&checkOut=2026-05-04&rooms=1&adults=2&searchText=akihabara' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Akihabara%2C+Tokyo&checkin=2026-05-01&checkout=2026-05-04&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏢 Toyoko Inn Ueno', price: '¥8,000-12,000/night', idr: 'Rp 800K-1.2M',
        note: 'Free breakfast, near Ameyoko Market + Ueno Station (easy airport access on departure day).',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14125&checkIn=2026-05-01&checkOut=2026-05-04&rooms=1&adults=2&searchText=toyoko%20inn%20ueno' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Toyoko+Inn+Ueno&checkin=2026-05-01&checkout=2026-05-04&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏨 Khaosan World Asakusa', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Top-rated hostel. Private couple rooms available. Near Senso-ji. Good budget option.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14125&checkIn=2026-05-01&checkOut=2026-05-04&rooms=1&adults=2&searchText=Khaosan%20World%20Asakusa' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Khaosan+World+Asakusa&checkin=2026-05-01&checkout=2026-05-04&group_adults=2' },
        ],
      },
    ],
    tip: '⚠️ May 1-3 is PEAK Golden Week. Prices 2-3x normal. BOOK NOW or you\'ll pay premium.',
    recommended: '💡 APA Akihabara = walk to card shops. Worth the extra for card hunting convenience.',
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
            13 nights total. Kyoto (5) → Takayama guesthouse (4) → Okuhida ryokan (1) → Tokyo (3). Book Golden Week dates NOW!
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
                  <div key={opt.name} className={`rounded-2xl p-4 ${opt.type === 'Special' ? 'bg-gradient-to-br from-sakura/10 to-cream border border-sakura/20' : 'bg-cream/40'}`}>
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
                    
                    {/* Booking links */}
                    {opt.bookLinks && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {opt.bookLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-sakura/10 text-sakura-dark hover:bg-sakura/20 transition-colors"
                          >
                            🔗 {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-sm text-dark-light bg-cream/30 rounded-xl px-4 py-2 mb-2">{city.tip}</p>
              {city.recommended && <p className="text-sm font-semibold text-sakura-dark bg-sakura/5 rounded-xl px-4 py-2">{city.recommended}</p>}
            </div>
          ))}
        </div>

        {/* Total estimate */}
        <div className="mt-8 bg-gradient-to-r from-sakura/10 to-sky/10 rounded-2xl p-6 text-center">
          <p className="font-heading font-bold text-lg text-dark mb-1">Total Accommodation Estimate (13 nights)</p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="text-dark-light">Budget:</span>{' '}
              <span className="font-bold text-sakura-dark">Rp 7.5M (~¥75K)</span>
            </div>
            <div>
              <span className="text-dark-light">Mid:</span>{' '}
              <span className="font-bold text-sakura-dark">Rp 13M (~¥130K)</span>
            </div>
          </div>
          <p className="text-xs text-dark-light mt-2">Includes 1 ryokan night with 2 meals. Golden Week surcharges may apply.</p>
        </div>

        {/* Quick book CTA */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
          <p className="text-sm font-semibold text-red-700 mb-2">⚠️ BOOK NOW — Golden Week Warning!</p>
          <p className="text-xs text-red-600 mb-3">Apr 29 - May 5 is Golden Week. Hotels sell out and prices 2-3x normal. Don't wait!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-26&rooms=1&adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">🔍 Search Agoda</a>
            <a href="https://www.booking.com/searchresults.html?ss=Kyoto&checkin=2026-04-21&checkout=2026-05-04&group_adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">🔍 Search Booking.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

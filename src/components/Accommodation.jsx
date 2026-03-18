const cities = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    nights: '4 nights hostel + 1 night ryokan (Apr 21-25)',
    area: 'Near Kyoto Station or Gion',
    order: 1,
    options: [
      {
        type: 'Budget', name: '🏨 Piece Hostel Kyoto', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: 'Modern design hostel near Kyoto Station. Private double rooms for couples. Rooftop terrace.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-25&rooms=1&adults=2&searchText=Piece%20Hostel%20Kyoto' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Piece+Hostel+Kyoto&checkin=2026-04-21&checkout=2026-04-25&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏨 The Millennials Kyoto', price: '¥5,000-7,000/night', idr: 'Rp 500-700K',
        note: 'Smart pod hotel — futuristic but comfy. Individual pods with motorized beds.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-25&rooms=1&adults=2&searchText=The%20Millennials%20Kyoto' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=The+Millennials+Kyoto&checkin=2026-04-21&checkout=2026-04-25&group_adults=2' },
        ],
      },
      {
        type: 'Special', name: '🏯 Ryokan in Gion (1 night!)', price: '¥18,000-25,000/night', idr: 'Rp 1.8-2.5M',
        note: '🌟 Traditional ryokan. Tatami rooms, futon beds, onsen, kaiseki dinner. MUST DO at least once.',
        bookLinks: [
          { label: 'Rakuten Travel', url: 'https://travel.rakuten.com/search/?checkin=2026-04-25&checkout=2026-04-26&rooms=1&adults=2&keyword=ryokan+gion+kyoto' },
          { label: 'Jalan.net', url: 'https://www.jalan.net/en/japan_hotels_ryokan/Kyoto/' },
        ],
      },
    ],
    tip: '💡 Stay 4 nights hostel + 1 night ryokan (Day 5). The ryokan is an experience, not just a hotel.',
    recommended: '💡 Piece Hostel (4 nights) + any Gion ryokan (Apr 25) = perfect balance of budget & experience',
  },
  {
    city: 'Nagoya',
    emoji: '🏯',
    nights: '2 nights (Apr 26-27)',
    area: 'Near Nagoya Station',
    order: 2,
    options: [
      {
        type: 'Budget', name: '🏢 Toyoko Inn Nagoya Station', price: '¥6,000-9,000/night', idr: 'Rp 600-900K',
        note: 'Free breakfast included! Close to station for early Gifu/Seki day trip. Reliable chain.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=3846&checkIn=2026-04-26&checkOut=2026-04-28&rooms=1&adults=2&searchText=Toyoko%20Inn%20Nagoya%20Ekimae' },
          { label: 'Toyoko Inn', url: 'https://www.toyoko-inn.com/eng/search/detail/00081' },
        ],
      },
      {
        type: 'Budget', name: '🏨 Hostel Nagonoya', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Social hostel in Osu district — near card shops and street food scene.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=3846&checkIn=2026-04-26&checkOut=2026-04-28&rooms=1&adults=2&searchText=Hostel%20Nagonoya' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Hostel+Nagonoya&checkin=2026-04-26&checkout=2026-04-28&group_adults=2' },
        ],
      },
    ],
    tip: '💡 Nagoya = base for Monet\'s Pond day trip (Day 7) + Osu card shopping.',
    recommended: '💡 Toyoko Inn — free breakfast saves ¥1,000/day, and close to station for early trains',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    nights: '2 nights (Apr 28-29)',
    area: 'Near Takayama Station',
    order: 3,
    options: [
      {
        type: 'Budget', name: '🏨 Takayama Guesthouse Tomaru', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Traditional-style guesthouse with tatami rooms. Walk to old town and morning market.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=4955&checkIn=2026-04-28&checkOut=2026-04-30&rooms=1&adults=2&searchText=Tomaru%20Takayama' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Guesthouse+Tomaru+Takayama&checkin=2026-04-28&checkout=2026-04-30&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏨 K\'s House Takayama', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: 'Popular hostel chain. Private rooms, common kitchen, bike rental help. Great vibes.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=4955&checkIn=2026-04-28&checkOut=2026-04-30&rooms=1&adults=2&searchText=K%27s%20House%20Takayama' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=K%27s+House+Takayama&checkin=2026-04-28&checkout=2026-04-30&group_adults=2' },
        ],
      },
    ],
    tip: '💡 Takayama is Japan\'s CHEAPEST tourist city. Hotels ¥4-6K, food ¥500-1,500. Save money here!',
    recommended: '💡 Save money here → spend savings on Hida beef instead! 🥩',
  },
  {
    city: 'Hakone',
    emoji: '🏔️',
    nights: '2 nights (Apr 30 - May 1)',
    area: 'Hakone-Yumoto',
    order: 4,
    options: [
      {
        type: 'Budget', name: '🏨 Hakone Tent Guesthouse', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: 'Cozy guesthouse near station. Shared kitchen, mountain atmosphere, friendly staff.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14636&checkIn=2026-04-30&checkOut=2026-05-02&rooms=1&adults=2&searchText=Hakone%20Tent' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Hakone+Tent&checkin=2026-04-30&checkout=2026-05-02&group_adults=2' },
        ],
      },
      {
        type: 'Mid', name: '♨️ Hotel Okada', price: '¥10,000-15,000/night', idr: 'Rp 1-1.5M',
        note: 'Onsen hotel with in-house hot spring baths. Great value for a hot spring stay.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14636&checkIn=2026-04-30&checkOut=2026-05-02&rooms=1&adults=2&searchText=Hotel%20Okada%20Hakone' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Hotel+Okada+Hakone&checkin=2026-04-30&checkout=2026-05-02&group_adults=2' },
        ],
      },
    ],
    tip: '⚠️ Golden Week prices! Book NOW or pay 2-3x normal. Hakone is popular Golden Week destination.',
    recommended: '💡 Guesthouse is fine — you\'ll be out at the onsen town baths anyway (way better than hotel bath)',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    nights: '2 nights (May 2-3)',
    area: 'Akihabara or Ueno',
    order: 5,
    options: [
      {
        type: 'Mid', name: '🏢 APA Hotel Akihabara Station', price: '¥9,000-14,000/night', idr: 'Rp 900K-1.4M',
        note: 'Walking distance to ALL card shops! Private double room. Perfect base for card hunting Day 12.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14197&checkIn=2026-05-02&checkOut=2026-05-04&rooms=1&adults=2&searchText=APA%20Hotel%20Akihabara' },
          { label: 'APA Hotels', url: 'https://www.apahotel.com/en/hotel/shutoken/tokyo/akihabara-ekimae/' },
        ],
      },
      {
        type: 'Budget', name: '🏢 Toyoko Inn Ueno', price: '¥8,000-12,000/night', idr: 'Rp 800K-1.2M',
        note: 'Free breakfast, near Ameyoko Market + Ueno Station (easy airport access on departure day).',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14197&checkIn=2026-05-02&checkOut=2026-05-04&rooms=1&adults=2&searchText=Toyoko%20Inn%20Ueno' },
          { label: 'Toyoko Inn', url: 'https://www.toyoko-inn.com/eng/search/detail/00037' },
        ],
      },
      {
        type: 'Budget', name: '🏨 Khaosan World Asakusa', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Top-rated hostel. Private couple rooms available. Near Senso-ji. Good budget option.',
        bookLinks: [
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14197&checkIn=2026-05-02&checkOut=2026-05-04&rooms=1&adults=2&searchText=Khaosan%20World%20Asakusa' },
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Khaosan+World+Asakusa&checkin=2026-05-02&checkout=2026-05-04&group_adults=2' },
        ],
      },
    ],
    tip: '⚠️ May 2-3 is PEAK Golden Week. Prices 2-3x normal. BOOK NOW or you\'ll pay premium.',
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
            13 nights total. Order: Kyoto → Nagoya → Takayama → Hakone → Tokyo. Book Golden Week dates NOW!
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
              <span className="font-bold text-sakura-dark">Rp 12M (~¥120K)</span>
            </div>
          </div>
          <p className="text-xs text-dark-light mt-2">Includes 1 ryokan night. Golden Week surcharges may apply.</p>
        </div>

        {/* Quick book CTA */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
          <p className="text-sm font-semibold text-red-700 mb-2">⚠️ BOOK NOW — Golden Week Warning!</p>
          <p className="text-xs text-red-600 mb-3">Apr 29 - May 5 is Golden Week. Hotels sell out and prices 2-3x normal. Don't wait!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-25&rooms=1&adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">🔍 Search Agoda</a>
            <a href="https://www.booking.com/searchresults.html?ss=Kyoto&checkin=2026-04-21&checkout=2026-05-04&group_adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">🔍 Search Booking.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

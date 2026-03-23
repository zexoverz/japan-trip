const cities = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    nights: '4 nights (Apr 21-25)',
    area: 'Near Kyoto Station',
    order: 1,
    options: [
      {
        type: 'Recommended', name: '🏨 Piece Hostel Kyoto', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: '✅ OUR PICK. Modern design hostel, private double room, rooftop terrace. 8 min walk from Kyoto Station Hachijo Exit. Clean, couple-friendly, cheapest private room near station.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/piece-hostel-kyoto.html?checkin=2026-04-21&checkout=2026-04-25&group_adults=2' },
          { label: 'Agoda', url: 'https://www.agoda.com/piece-hostel-kyoto/hotel/kyoto-jp.html?checkIn=2026-04-21&checkOut=2026-04-25&rooms=1&adults=2' },
        ],
      },
      {
        type: 'Alternative', name: '🏨 Len Kyoto Kawaramachi', price: '¥5,000-8,000/night', idr: 'Rp 500-800K',
        note: 'Trendy hostel with café, near Gion & Nishiki Market. Better location for sightseeing but farther from station.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Len+Kyoto+Kawaramachi&checkin=2026-04-21&checkout=2026-04-25&group_adults=2' },
        ],
      },
    ],
    tip: '💡 Same hostel all 4 nights = no checkout hassle. Kyoto station access is key for Nara day trip (Day 5) and departure to Gifu.',
    recommended: '💡 Piece Hostel — best value private double near station. ¥20-24K total for 4 nights.',
  },
  {
    city: 'Gifu',
    emoji: '🏯',
    nights: '2 nights (Apr 26-28)',
    area: 'Near JR Gifu Station',
    order: 2,
    options: [
      {
        type: 'Recommended', name: '🏨 Dormy Inn Gifu Ekimae', price: '¥8,000-12,000/night', idr: 'Rp 800K-1.2M',
        note: '✅ OUR PICK. 5 min walk from JR Gifu Station. Rooftop onsen bath, FREE late-night ramen (21:30!). Right at the station = easy for Monet\'s Pond bus + Hida Express departure. Saves Rp 800K-1.6M vs Miyako.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/dormy-inn-gifu-ekimae.html?checkin=2026-04-26&checkout=2026-04-28&group_adults=2' },
          { label: 'Agoda', url: 'https://www.agoda.com/dormy-inn-gifu-ekimae/hotel/gifu-jp.html?checkIn=2026-04-26&checkOut=2026-04-28&rooms=1&adults=2' },
        ],
      },
      {
        type: 'Splurge', name: '🏨 Miyako Hotel Gifu Nagaragawa', price: '¥12,000-20,000/night', idr: 'Rp 1.2-2M',
        note: '4-star riverside hotel, natural onsen, river-view rooms. Beautiful but 3.5km from station (bus/taxi needed). Worth it for a date night splurge.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/gifu-miyako.html?checkin=2026-04-26&checkout=2026-04-28&group_adults=2' },
          { label: 'Official', url: 'http://en.miyakohotels.ne.jp/gifu/' },
        ],
      },
    ],
    onsen: {
      title: '♨️ Private Couples Onsen — Day 7',
      text: 'Juhachiro (十八楼) — 300-year ryokan on Nagara River. Day-use private bath (貸切風呂) ~¥3,000-5,000/couple for 45-60 min. Riverside rotenburo (outdoor bath). Bus from Gifu Station → Nagaragawa Onsen (15 min). Ask Keiko to call: "貸切風呂の日帰り利用をお願いします"',
      url: 'https://www.18rou.com/',
    },
    tip: '💡 Same hotel both nights — leave bags in room for Monet\'s Pond day trip.',
    recommended: '💡 Dormy Inn — better value, better location, still has onsen. Book private onsen at Juhachiro separately for the couples experience!',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    nights: '4 nights (Apr 28 - May 2)',
    area: 'Near Takayama Station',
    order: 3,
    options: [
      {
        type: 'Recommended', name: '🏨 K\'s House Takayama', price: '¥4,000-6,000/night', idr: 'Rp 400-600K',
        note: '✅ OUR PICK. #1 rated hostel in Takayama. Private double rooms, shared kitchen, bike rental help. 3 min walk from station. Staff helps with Kamikochi bus info.',
        bookLinks: [
          { label: 'Official', url: 'https://kshouse.jp/takayama-e/index.html' },
          { label: 'Booking', url: 'https://www.booking.com/hotel/jp/k-s-house-takayama.html?checkin=2026-04-28&checkout=2026-05-02&group_adults=2' },
          { label: 'Agoda', url: 'https://www.agoda.com/k-s-house-takayama/hotel/takayama-jp.html?checkIn=2026-04-28&checkOut=2026-05-02&rooms=1&adults=2' },
        ],
      },
      {
        type: 'Alternative', name: '🏨 Guesthouse Tomaru', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Cozy traditional guesthouse in old town. Walking distance to morning market. Slightly cheaper, slightly farther.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=guesthouse+takayama&checkin=2026-04-28&checkout=2026-05-02&group_adults=2' },
        ],
      },
    ],
    onsen: {
      title: '♨️ Private Couples Onsen — Day 10 (Free Day)',
      text: 'Spa Hotel Alpina Hida Takayama — 5 min walk from station. Day-use private bath ~¥3,000/couple. Natural Hida Takayama Onsen (天然温泉). Perfect for your free day recharge!',
      url: 'https://www.spa-hotel-alpina.com/',
    },
    tip: '💡 Same guesthouse all 4 nights — stable base for Kamikochi (Day 9), FREE DAY (Day 10), Shirakawa-go (Day 11).',
    recommended: '💡 K\'s House — nothing else in this price range beats it. Kitchen saves money on breakfast. Email: takayama@kshouse.jp',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    nights: '2 nights (May 2-4)',
    area: 'Akihabara',
    order: 4,
    options: [
      {
        type: 'Recommended', name: '🏢 Super Hotel Lohas Akihabara', price: '¥9,000-14,000/night', idr: 'Rp 900K-1.4M',
        note: '✅ OUR PICK. Higher rated than APA (8.0 vs 7.5), cheaper, free breakfast included. 5 min walk to Akihabara card shops. Natural hot spring bath.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/searchresults.html?ss=Super+Hotel+Lohas+Akihabara&checkin=2026-05-02&checkout=2026-05-04&group_adults=2' },
          { label: 'Agoda', url: 'https://www.agoda.com/search?city=14125&checkIn=2026-05-02&checkOut=2026-05-04&rooms=1&adults=2&searchText=Super%20Hotel%20Akihabara' },
        ],
      },
      {
        type: 'Alternative', name: '🏢 APA Hotel Akihabara Station', price: '¥12,000-18,000/night', idr: 'Rp 1.2-1.8M',
        note: 'Closest to card shops (3 min walk). Reliable chain. But more expensive and lower rated.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=APA+Hotel+Akihabara&checkin=2026-05-02&checkout=2026-05-04&group_adults=2' },
        ],
      },
      {
        type: 'Budget', name: '🏨 Khaosan World Asakusa', price: '¥3,500-5,000/night', idr: 'Rp 350-500K',
        note: 'Cheapest option. Private couple rooms. Near Senso-ji. But 20 min train to Akihabara — bad for card hunting.',
        bookLinks: [
          { label: 'Booking', url: 'https://www.booking.com/search.html?ss=Khaosan+World+Asakusa&checkin=2026-05-02&checkout=2026-05-04&group_adults=2' },
        ],
      },
    ],
    tip: '⚠️ May 2-4 is PEAK Golden Week. Prices 2-3x normal. BOOK NOW or pay premium!',
    recommended: '💡 Super Hotel — saves ~Rp 600K vs APA over 2 nights, free breakfast, natural hot spring. Card shops still walkable.',
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
            12 nights total. Kyoto (4) → Gifu (2) → Takayama (4) → Tokyo (2). Only 3 hotel changes! Plus 2 private couples onsen days ♨️
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
                  <div key={opt.name} className={`rounded-2xl p-4 ${
                    opt.type === 'Recommended' ? 'bg-gradient-to-br from-sakura/10 to-cream border border-sakura/20' :
                    opt.type === 'Splurge' ? 'bg-gradient-to-br from-amber-50 to-cream border border-amber-200' :
                    'bg-cream/40'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        opt.type === 'Recommended' ? 'bg-sakura/20 text-sakura-dark' :
                        opt.type === 'Splurge' ? 'bg-amber-100 text-amber-700' :
                        opt.type === 'Budget' ? 'bg-green-100 text-green-700' : 'bg-sky/20 text-sky'
                      }`}>{opt.type}</span>
                      <span className="font-heading font-bold text-sakura-dark text-sm">{opt.idr}</span>
                    </div>
                    <div className="font-heading font-semibold text-dark">{opt.name}</div>
                    <div className="text-xs text-dark-light mt-1">{opt.price}</div>
                    <p className="text-sm text-dark-light mt-2">{opt.note}</p>
                    
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

              {/* Private onsen info */}
              {city.onsen && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 mb-3 border border-blue-200">
                  <div className="font-heading font-semibold text-blue-800 mb-1">{city.onsen.title}</div>
                  <p className="text-sm text-blue-700">{city.onsen.text}</p>
                  <a href={city.onsen.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors mt-2">
                    🔗 Website
                  </a>
                </div>
              )}

              <p className="text-sm text-dark-light bg-cream/30 rounded-xl px-4 py-2 mb-2">{city.tip}</p>
              {city.recommended && <p className="text-sm font-semibold text-sakura-dark bg-sakura/5 rounded-xl px-4 py-2">{city.recommended}</p>}
            </div>
          ))}
        </div>

        {/* Total estimate */}
        <div className="mt-8 bg-gradient-to-r from-sakura/10 to-sky/10 rounded-2xl p-6 text-center">
          <p className="font-heading font-bold text-lg text-dark mb-1">Total Accommodation Estimate (12 nights)</p>
          <div className="flex justify-center gap-8 text-sm">
            <div>
              <span className="text-dark-light">Our Picks:</span>{' '}
              <span className="font-bold text-sakura-dark">~Rp 9.4M (~¥94K)</span>
            </div>
          </div>
          <p className="text-xs text-dark-light mt-2">Kyoto ¥20K + Gifu ¥20K + Takayama ¥20K + Tokyo ¥24K + Private onsen ¥7K. Golden Week surcharges may apply.</p>
        </div>

        {/* Quick book CTA */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-4 text-center">
          <p className="text-sm font-semibold text-red-700 mb-2">⚠️ BOOK NOW — Golden Week Warning!</p>
          <p className="text-xs text-red-600 mb-3">Apr 29 - May 5 is Golden Week. Hotels sell out and prices 2-3x normal. Book Tokyo FIRST!</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a href="https://www.agoda.com/search?city=72306&checkIn=2026-04-21&checkOut=2026-04-25&rooms=1&adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">🔍 Search Agoda</a>
            <a href="https://www.booking.com/searchresults.html?ss=Kyoto&checkin=2026-04-21&checkout=2026-05-04&group_adults=2" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">🔍 Search Booking.com</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const cities = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    nights: '5 nights (Apr 21-26)',
    area: 'Sanjo / Central Kyoto',
    order: 1,
    booked: true,
    hotel: {
      name: '🏨 Sakura Terrace The Atelier',
      price: 'USD 320.03',
      idr: 'Rp 5.44M',
      nights: 5,
      dates: 'Apr 21-26',
      note: '✅ BOOKED & PAID. Boutique hotel in central Kyoto, Sanjo area. Walking distance to Nishiki Market, Gion, Pontocho. Premium pick for the longest stay.',
    },
    onsen: null,
    tip: '✅ All sorted! 5 nights, no checkout stress. Central location = no wasted transit time.',
  },
  {
    city: 'Gifu',
    emoji: '🏯',
    nights: '2 nights (Apr 26-28)',
    area: 'Near JR Gifu Station',
    order: 2,
    booked: true,
    hotel: {
      name: '🏨 Hotel Livemax Gifu-ekimae',
      price: 'USD 63.27',
      idr: 'Rp 1.07M',
      nights: 2,
      dates: 'Apr 26-28',
      note: '✅ BOOKED & PAID. Right next to JR Gifu Station. Easy for Monet\'s Pond bus + Hida Express departure to Takayama.',
    },
    onsen: {
      title: '♨️ Private Couples Onsen — Day 7',
      text: 'Juhachiro (十八楼) — 300-year ryokan on Nagara River. Day-use private bath (貸切風呂) ~¥3,000-5,000/couple for 45-60 min. Riverside rotenburo (outdoor bath). Bus from Gifu Station → Nagaragawa Onsen (15 min).',
      url: 'https://www.18rou.com/',
    },
    tip: '✅ All sorted! Leave bags in room for Monet\'s Pond day trip. Book Juhachiro onsen separately.',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    nights: '4 nights (Apr 28 - May 2)',
    area: 'Near Takayama Station',
    order: 3,
    booked: true,
    hotel: {
      name: '🏨 Country Hotel Takayama',
      price: 'USD 188.24',
      idr: 'Rp 3.20M',
      nights: 4,
      dates: 'Apr 28 - May 2',
      note: '✅ BOOKED & PAID. K\'s House was fully booked (Golden Week). Country Hotel is centrally located, clean, standard business hotel. 5 min walk to Takayama Station. Bike rentals available nearby independently.',
    },
    onsen: {
      title: '♨️ Private Couples Onsen — Free Day',
      text: 'Spa Hotel Alpina Hida Takayama — 5 min walk from station. Day-use private bath ~¥3,000/couple. Natural Hida Takayama Onsen (天然温泉). Perfect for your free day recharge!',
      url: 'https://www.spa-hotel-alpina.com/',
    },
    tip: '✅ All sorted! Bike rental shops are near Takayama Station — fully independent from hotel.',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    nights: '2 nights (May 2-4)',
    area: 'Akihabara',
    order: 4,
    booked: true,
    hotel: {
      name: '🏨 AND HOSTEL AKIHABARA',
      price: 'USD 214.45',
      idr: 'Rp 3.64M',
      nights: 2,
      dates: 'May 2-4',
      note: '✅ BOOKED & PAID. Right in Akihabara — card shop central. Perfect base for 2 days of TCG hunting. Modern hostel, couple-friendly.',
    },
    onsen: null,
    tip: '✅ All sorted! Card shops within walking distance. Mandarake, Surugaya, Yuyu-tei all nearby.',
  },
]

export default function Accommodation() {
  const totalUSD = 785.99
  const totalIDR = 13.35

  return (
    <section id="accommodation" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">宿泊 — Where to Stay</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Accommodation</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            13 nights total. Kyoto (5) → Gifu (2) → Takayama (4) → Tokyo (2). All hotels booked & paid! ✅
          </p>
        </div>

        {/* All Booked Banner */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-5 mb-8 text-white text-center shadow-lg">
          <div className="text-2xl mb-1">🎉 All Hotels Booked & Paid!</div>
          <div className="text-white/90 text-sm">Total: <strong>USD {totalUSD} (~Rp {totalIDR}M)</strong> for 13 nights · 2 people</div>
        </div>

        <div className="space-y-5">
          {cities.map((city) => (
            <div key={city.city} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{city.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-2xl text-dark">{city.city}</h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">✅ BOOKED</span>
                  </div>
                  <p className="text-sm text-dark-light">{city.nights} • {city.area}</p>
                </div>
                <div className="text-right">
                  <div className="font-heading font-bold text-lg text-sakura-dark">{city.hotel.idr}</div>
                  <div className="text-xs text-dark-light">{city.hotel.price} · {city.hotel.nights} nights</div>
                </div>
              </div>

              {/* Booked Hotel */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200 mb-4">
                <div className="font-heading font-semibold text-dark text-lg">{city.hotel.name}</div>
                <div className="text-xs text-dark-light mt-0.5 mb-2">{city.hotel.dates}</div>
                <p className="text-sm text-dark-light">{city.hotel.note}</p>
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

              <p className="text-sm text-dark-light bg-cream/30 rounded-xl px-4 py-2">{city.tip}</p>
            </div>
          ))}
        </div>

        {/* Total paid */}
        <div className="mt-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 text-center border border-green-200">
          <p className="font-heading font-bold text-lg text-dark mb-3">✅ Total Accommodation — PAID</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm mb-3">
            <div className="bg-white rounded-xl p-3">
              <div className="font-bold text-sakura-dark">Kyoto</div>
              <div className="text-dark-light">Rp 5.44M</div>
              <div className="text-xs text-dark-light">5 nights</div>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="font-bold text-sakura-dark">Gifu</div>
              <div className="text-dark-light">Rp 1.07M</div>
              <div className="text-xs text-dark-light">2 nights</div>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="font-bold text-sakura-dark">Takayama</div>
              <div className="text-dark-light">Rp 3.20M</div>
              <div className="text-xs text-dark-light">4 nights</div>
            </div>
            <div className="bg-white rounded-xl p-3">
              <div className="font-bold text-sakura-dark">Tokyo</div>
              <div className="text-dark-light">Rp 3.64M</div>
              <div className="text-xs text-dark-light">2 nights</div>
            </div>
          </div>
          <div className="font-heading font-bold text-2xl text-green-700">Total: USD 785.99 (~Rp 13.35M)</div>
          <div className="text-xs text-dark-light mt-1">That's ~Rp 1.03M/night average for 2 people 🎉</div>
        </div>
      </div>
    </section>
  )
}

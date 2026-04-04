const hacks = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    color: 'bg-orange-50 border-orange-200',
    headerColor: 'text-orange-700',
    passes: [
      {
        name: 'Kyoto Subway & Bus 1-Day Pass',
        price: '¥1,100/person',
        idr: 'Rp 110K/person',
        verdict: '✅ USE THIS on heavy sightseeing days',
        when: 'Days 2, 3, 4 — when you\'re hopping between many spots (Fushimi Inari → Nishiki → Gion → etc)',
        breaks_even: 'Break-even: 3+ bus/subway rides/day (each ride ¥230-280)',
        covers: 'All Kyoto city buses + subway + Kyoto Bus + Keihan Bus. Also gives museum discounts!',
        buy: 'Buy at any subway station or on the bus.',
        buy_url: 'https://www2.city.kyoto.lg.jp/kotsu/webguide/en/ticket/regular_1day_card_comm.html',
        save: '~¥400-600/person vs paying individually',
      },
      {
        name: 'Suica IC Card (default)',
        price: 'Pay as you go',
        idr: '¥230-280/ride',
        verdict: '✅ USE THIS on light days or JR trains',
        when: 'Day 5 (Nara day trip) — JR trains don\'t accept the city pass. Just tap Suica.',
        breaks_even: 'Better if <3 rides/day',
        covers: 'JR lines (Inari, Arashiyama), convenience stores, vending machines',
        buy: 'Get Suica at Narita Airport immediately on arrival.',
        buy_url: null,
        save: 'No pass needed — simple and flexible',
      },
    ],
    tip: '💡 Strategy: Buy 1-Day Pass on Days 2, 3, 4 (busy sightseeing). Use Suica on Day 1 arrival and Day 5 (Nara — JR only).',
  },
  {
    city: 'Gifu',
    emoji: '🏯',
    color: 'bg-amber-50 border-amber-200',
    headerColor: 'text-amber-700',
    passes: [
      {
        name: 'Suica Only',
        price: 'Pay as you go',
        idr: '¥170-300/ride',
        verdict: '✅ Just use Suica — no pass needed',
        when: 'Only 2 nights, limited city travel. Monet\'s Pond bus is private (cash only).',
        breaks_even: 'Too few rides to justify any pass',
        covers: 'Nagoya → Gifu JR, local buses',
        buy: null,
        buy_url: null,
        save: 'No pass overhead',
      },
    ],
    tip: '💡 Gifu is simple. Hotel is next to station. Monet\'s Pond bus = cash. Onsen = cash. No pass needed.',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    color: 'bg-green-50 border-green-200',
    headerColor: 'text-green-700',
    passes: [
      {
        name: 'Nohi Bus 1-Day Free Pass',
        price: '¥2,800/person',
        idr: 'Rp 280K/person',
        verdict: '⚠️ Only worth it if doing Shirakawa-go + Hida Folk Village same day',
        when: 'Day 11 (Shirakawa-go day). RT to Shirakawa-go alone = ¥2,600 — pass barely saves anything.',
        breaks_even: 'Only saves ¥200/person if you\'re just doing Shirakawa-go RT',
        covers: 'Nohi Bus routes including Shirakawa-go + Hirayu Onsen area',
        buy: 'Takayama Nohi Bus Center (across from station)',
        buy_url: 'https://www.nouhibus.co.jp/english/',
        save: 'Minimal — just buy individual RT Shirakawa-go ticket',
      },
      {
        name: 'Bike Rental (best hack in Takayama)',
        price: '¥1,500/person/day',
        idr: 'Rp 150K/person/day',
        verdict: '✅ BEST VALUE — replaces all local transport',
        when: 'Days 8-10. Ride old town, morning market, sake breweries, Hida countryside.',
        breaks_even: 'A single bike day covers more than 5 bus rides',
        covers: 'Old town Sanmachi Suji, market, outskirts, countryside — all walkable/bikeable',
        buy: 'Multiple shops near station. No booking needed.',
        buy_url: null,
        save: 'Way faster + more fun than buses in Takayama',
      },
    ],
    tip: '💡 In Takayama: bike > bus for daily city exploration. Only buy bus tickets for Shirakawa-go and Kamikochi (those are mandatory).',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    color: 'bg-sky-50 border-sky-200',
    headerColor: 'text-sky-700',
    passes: [
      {
        name: 'Tokyo Subway 48-Hour Ticket',
        price: '¥1,500/person',
        idr: 'Rp 150K/person',
        verdict: '✅ BEST DEAL for Tokyo — buy this!',
        when: 'May 2-4 (2 nights). 48h from first use. Covers ALL Tokyo Metro + Toei Subway lines.',
        breaks_even: 'Break-even: 6 rides over 2 days (easy to hit with Akihabara, Nakano, Tsukiji, Ueno, Shibuya)',
        covers: 'ALL Tokyo Metro + ALL Toei Subway lines. QR code — buy on phone!',
        buy: 'Buy online before arriving at tokyo-subway-ticket.triplabo.jp',
        buy_url: 'https://tokyo-subway-ticket.triplabo.jp/en/',
        save: '~¥1,000-2,000/person vs paying individually over 2 days',
      },
      {
        name: 'Tokyo Subway 72-Hour Ticket',
        price: '¥2,000/person',
        idr: 'Rp 200K/person',
        verdict: '⚠️ Only needed if you arrive Tokyo on Day 11 (not your case)',
        when: 'You only have 2 nights in Tokyo, 48h is enough',
        breaks_even: 'Only 2 nights = 48h ticket wins',
        covers: 'Same as 48h but longer window',
        buy: 'Same as above',
        buy_url: 'https://tokyo-subway-ticket.triplabo.jp/en/',
        save: 'Save ¥500/person by choosing 48h over 72h',
      },
      {
        name: '⚠️ Note: JR lines NOT covered',
        price: '—',
        idr: '—',
        verdict: '⚠️ Subway pass doesn\'t cover JR (Yamanote, Chuo)',
        when: 'Nakano is on JR Chuo Line — use Suica for that leg (¥200 each way)',
        breaks_even: '—',
        covers: 'Only Tokyo Metro + Toei. Akihabara ↔ Nakano = JR line, pay with Suica.',
        buy: null,
        buy_url: null,
        save: 'Just top up Suica ¥2,000 for JR rides on top of subway pass',
      },
    ],
    tip: '💡 Tokyo strategy: Buy 48h Subway Ticket online before flying. Top up Suica ¥2,000 for JR legs. Best combo.',
  },
]

export default function TransportHacks() {
  return (
    <section id="transport-hacks" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">裏ワザ — Hacks</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Transport Hacks</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            Passes vs pay-as-you-go — by city. Updated April 2026.
          </p>
        </div>

        {/* Quick summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { city: 'Kyoto', rec: '1-Day Bus Pass (¥1,100)', days: 'Days 2-4', emoji: '⛩️' },
            { city: 'Gifu', rec: 'Suica only', days: 'Days 6-7', emoji: '🏯' },
            { city: 'Takayama', rec: 'Bike rental', days: 'Days 8-11', emoji: '🚲' },
            { city: 'Tokyo', rec: '48h Subway (¥1,500)', days: 'Days 12-14', emoji: '🏙️' },
          ].map(item => (
            <div key={item.city} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-sakura/10">
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="font-heading font-bold text-dark text-sm">{item.city}</div>
              <div className="text-xs text-sakura-dark font-semibold mt-1">{item.rec}</div>
              <div className="text-xs text-dark-light mt-0.5">{item.days}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {hacks.map((city) => (
            <div key={city.city} className={`rounded-3xl p-6 border ${city.color}`}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{city.emoji}</span>
                <h3 className={`font-heading font-bold text-2xl ${city.headerColor}`}>{city.city}</h3>
              </div>

              <div className="space-y-4">
                {city.passes.map((pass) => (
                  <div key={pass.name} className="bg-white rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="font-heading font-bold text-dark">{pass.name}</div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-heading font-bold text-sakura-dark">{pass.price}</div>
                        <div className="text-xs text-dark-light">{pass.idr}</div>
                      </div>
                    </div>
                    <div className={`text-sm font-semibold mb-2 ${
                      pass.verdict.startsWith('✅') ? 'text-green-700' :
                      pass.verdict.startsWith('⚠️') ? 'text-amber-700' : 'text-dark'
                    }`}>{pass.verdict}</div>
                    <div className="text-xs text-dark-light space-y-1">
                      <div>🕐 <strong>When:</strong> {pass.when}</div>
                      <div>📊 <strong>Break-even:</strong> {pass.breaks_even}</div>
                      <div>🎫 <strong>Covers:</strong> {pass.covers}</div>
                      {pass.save && <div>💰 <strong>Saves:</strong> {pass.save}</div>}
                    </div>
                    {pass.buy_url && (
                      <a href={pass.buy_url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-sakura/10 text-sakura-dark hover:bg-sakura/20 transition-colors mt-3">
                        🔗 Buy / Info
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-3 bg-white/70 rounded-xl px-4 py-2 text-sm font-semibold text-dark-light">
                {city.tip}
              </div>
            </div>
          ))}
        </div>

        {/* Total savings */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-6 text-white text-center shadow-lg">
          <div className="font-heading font-bold text-xl mb-1">💰 Total Pass Savings vs Pay-As-You-Go</div>
          <div className="text-white/90 text-sm mb-3">Kyoto 1-Day Pass ×3 + Tokyo 48h Subway ×2</div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="font-heading font-bold text-2xl">¥6,600</div>
              <div className="text-white/80 text-xs">pass cost (2 people)</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl">≈ Rp 660K</div>
              <div className="text-white/80 text-xs">in IDR</div>
            </div>
            <div>
              <div className="font-heading font-bold text-2xl">~¥4,000</div>
              <div className="text-white/80 text-xs">estimated savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

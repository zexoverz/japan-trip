const ticketGroups = [
  {
    leg: 'Day 1 — Arrival: Narita → Tokyo → Kyoto',
    date: 'Apr 21 (Tue)',
    emoji: '🛬',
    color: 'bg-orange-50 border-orange-200',
    headerColor: 'text-orange-700',
    tickets: [
      {
        name: 'Narita Express (N\'EX)',
        route: 'Narita Airport → Tokyo Station',
        duration: '~1h',
        price_per: '¥3,250',
        price_two: '¥6,500',
        idr_two: 'Rp 650K',
        note: 'Buy at JR ticket machine at airport. Or book online via SmartEX.',
        buy_url: 'https://www.jreast.co.jp/e/nex/',
        buy_label: 'JR East',
      },
      {
        name: 'Shinkansen Hikari',
        route: 'Tokyo → Kyoto',
        duration: '~2h 40min',
        price_per: '¥14,170',
        price_two: '¥28,340',
        idr_two: 'Rp 2.83M',
        note: '⚠️ BOOK IN ADVANCE — Golden Week trains fill up! Use Hikari (not Nozomi). Reserve seats at JR Ticket Office (みどりの窓口) or SmartEX app.',
        buy_url: 'https://smart-ex.jp/en/index.php',
        buy_label: 'SmartEX',
      },
    ],
    subtotal_jpy: '¥34,840',
    subtotal_idr: 'Rp 3.48M',
  },
  {
    leg: 'Kyoto Local Transport',
    date: 'Apr 22-25',
    emoji: '⛩️',
    color: 'bg-red-50 border-red-200',
    headerColor: 'text-red-700',
    tickets: [
      {
        name: 'JR Nara Line',
        route: 'Kyoto → Inari (Fushimi Inari)',
        duration: '5 min',
        price_per: '¥150',
        price_two: '¥300',
        idr_two: 'Rp 30K',
        note: 'Use Suica/IC card. Just tap and go.',
        buy_url: null,
      },
      {
        name: 'JR Sagano Line',
        route: 'Kyoto → Saga-Arashiyama',
        duration: '15 min',
        price_per: '¥240',
        price_two: '¥480',
        idr_two: 'Rp 48K',
        note: 'Use Suica/IC card.',
        buy_url: null,
      },
      {
        name: 'Sagano Scenic Railway (Torokko)',
        route: 'Saga-Torokko → Kameoka (mountain gorge ride)',
        duration: '25 min',
        price_per: '¥880',
        price_two: '¥1,760',
        idr_two: 'Rp 176K',
        note: '⚠️ Books out fast on Golden Week! Buy tickets at Saga-Torokko Station early morning on Day 3.',
        buy_url: 'https://www.sagano-kanko.co.jp/en/',
        buy_label: 'Sagano Railway',
      },
      {
        name: 'Suica IC Card top-ups',
        route: 'City buses, Subway, misc local',
        duration: '—',
        price_per: '¥1,500',
        price_two: '¥3,000',
        idr_two: 'Rp 300K',
        note: 'Load Suica at any station. Covers all city buses + subway in Kyoto.',
        buy_url: null,
      },
    ],
    subtotal_jpy: '¥5,540',
    subtotal_idr: 'Rp 554K',
  },
  {
    leg: 'Day 6 — Kyoto → Gifu',
    date: 'Apr 26 (Sun)',
    emoji: '🏯',
    color: 'bg-amber-50 border-amber-200',
    headerColor: 'text-amber-700',
    tickets: [
      {
        name: 'Shinkansen Hikari',
        route: 'Kyoto → Nagoya',
        duration: '~35 min',
        price_per: '¥3,440',
        price_two: '¥6,880',
        idr_two: 'Rp 688K',
        note: 'Short hop. Book in advance or buy at station same day.',
        buy_url: 'https://smart-ex.jp/en/index.php',
        buy_label: 'SmartEX',
      },
      {
        name: 'JR Tokaido Line',
        route: 'Nagoya → Gifu',
        duration: '~20 min',
        price_per: '¥470',
        price_two: '¥940',
        idr_two: 'Rp 94K',
        note: 'Use Suica. Runs every 10-15 min.',
        buy_url: null,
      },
    ],
    subtotal_jpy: '¥7,820',
    subtotal_idr: 'Rp 782K',
  },
  {
    leg: 'Gifu Local Transport',
    date: 'Apr 26-28',
    emoji: '🎨',
    color: 'bg-lime-50 border-lime-200',
    headerColor: 'text-lime-700',
    tickets: [
      {
        name: 'Monet\'s Pond Bus (Round Trip)',
        route: 'Gifu Station → Itadori (Monet\'s Pond)',
        duration: '~1h each way',
        price_per: '¥1,500',
        price_two: '¥3,000',
        idr_two: 'Rp 300K',
        note: 'Seino Bus. Runs a few times daily. Check schedule before going!',
        buy_url: 'https://www.seinou.co.jp/',
        buy_label: 'Seino Bus',
      },
      {
        name: 'Local IC card tops',
        route: 'City bus, Nagaragawa area',
        duration: '—',
        price_per: '¥500',
        price_two: '¥1,000',
        idr_two: 'Rp 100K',
        note: 'Use Suica.',
        buy_url: null,
      },
    ],
    subtotal_jpy: '¥4,000',
    subtotal_idr: 'Rp 400K',
  },
  {
    leg: 'Day 8 — Gifu → Takayama',
    date: 'Apr 28 (Tue)',
    emoji: '🌲',
    color: 'bg-green-50 border-green-200',
    headerColor: 'text-green-700',
    tickets: [
      {
        name: 'JR Hida Limited Express',
        route: 'Gifu → Takayama',
        duration: '~1h 40min',
        price_per: '¥3,340',
        price_two: '¥6,680',
        idr_two: 'Rp 668K',
        note: '⚠️ Reserve seats in advance — scenic mountain train, popular during Golden Week! Book at JR ticket office or SmartEX.',
        buy_url: 'https://smart-ex.jp/en/index.php',
        buy_label: 'SmartEX',
      },
    ],
    subtotal_jpy: '¥6,680',
    subtotal_idr: 'Rp 668K',
  },
  {
    leg: 'Takayama Local Transport',
    date: 'Apr 28 - May 2',
    emoji: '🏔️',
    color: 'bg-teal-50 border-teal-200',
    headerColor: 'text-teal-700',
    tickets: [
      {
        name: 'Kamikochi Bus (Round Trip)',
        route: 'Takayama → Hirayu Onsen → Kamikochi',
        duration: '~1.5h each way',
        price_per: '¥3,200',
        price_two: '¥6,400',
        idr_two: 'Rp 640K',
        note: '⚠️ Private Alpico bus — NOT covered by any rail pass. Book early, especially Golden Week! Required transfer at Hirayu Onsen.',
        buy_url: 'https://www.alpico.co.jp/en/',
        buy_label: 'Alpico Bus',
      },
      {
        name: 'Shirakawa-go Bus (Round Trip)',
        route: 'Takayama → Shirakawa-go',
        duration: '~50 min each way',
        price_per: '¥2,600',
        price_two: '¥5,200',
        idr_two: 'Rp 520K',
        note: 'Nohi Bus. Buy tickets at Takayama Nohi Bus Center (across from station). Runs a few times daily.',
        buy_url: 'https://www.nouhibus.co.jp/english/',
        buy_label: 'Nohi Bus',
      },
      {
        name: 'Bike Rental (2 days)',
        route: 'Takayama old town + countryside',
        duration: '—',
        price_per: '¥1,500/day',
        price_two: '¥3,000',
        idr_two: 'Rp 300K',
        note: 'Available from multiple shops near Takayama Station. No booking needed — just walk in.',
        buy_url: null,
      },
    ],
    subtotal_jpy: '¥14,600',
    subtotal_idr: 'Rp 1.46M',
  },
  {
    leg: 'Day 12 — Takayama → Tokyo',
    date: 'May 2 (Sat)',
    emoji: '🏙️',
    color: 'bg-sky-50 border-sky-200',
    headerColor: 'text-sky-700',
    tickets: [
      {
        name: 'JR Hida Limited Express',
        route: 'Takayama → Nagoya',
        duration: '~2h 20min',
        price_per: '¥6,140',
        price_two: '¥12,280',
        idr_two: 'Rp 1.23M',
        note: '⚠️ Reserve seats! Scenic and popular. Book via SmartEX in advance.',
        buy_url: 'https://smart-ex.jp/en/index.php',
        buy_label: 'SmartEX',
      },
      {
        name: 'Shinkansen Nozomi / Hikari',
        route: 'Nagoya → Tokyo',
        duration: '~1h 40min',
        price_per: '¥11,090',
        price_two: '¥22,180',
        idr_two: 'Rp 2.22M',
        note: 'Nozomi is fastest (1h 40min). Hikari also works (1h 50min). Book early for Golden Week!',
        buy_url: 'https://smart-ex.jp/en/index.php',
        buy_label: 'SmartEX',
      },
    ],
    subtotal_jpy: '¥34,460',
    subtotal_idr: 'Rp 3.45M',
  },
  {
    leg: 'Tokyo Local Transport',
    date: 'May 2-4',
    emoji: '🃏',
    color: 'bg-purple-50 border-purple-200',
    headerColor: 'text-purple-700',
    tickets: [
      {
        name: 'Suica IC Card top-ups',
        route: 'Akihabara, Nakano, Tsukiji, Ueno, Shibuya — all metros/JR',
        duration: '—',
        price_per: '¥2,000',
        price_two: '¥4,000',
        idr_two: 'Rp 400K',
        note: 'Tokyo metro + JR lines all accept Suica. Top up as needed. Best value vs single tickets.',
        buy_url: null,
      },
    ],
    subtotal_jpy: '¥4,000',
    subtotal_idr: 'Rp 400K',
  },
  {
    leg: 'Day 14 — Tokyo → Narita Airport',
    date: 'May 4 (Mon)',
    emoji: '✈️',
    color: 'bg-gray-50 border-gray-200',
    headerColor: 'text-gray-700',
    tickets: [
      {
        name: 'Narita Express (N\'EX) or Skyliner',
        route: 'Tokyo → Narita Airport',
        duration: 'NEX: 1h | Skyliner: 41min',
        price_per: '¥3,250 / ¥2,520',
        price_two: '¥6,500',
        idr_two: 'Rp 650K',
        note: 'NEX from Tokyo Station or Skyliner from Ueno (faster, cheaper). Arrive 3h before international flight — Golden Week queues!',
        buy_url: 'https://www.jreast.co.jp/e/nex/',
        buy_label: 'JR East',
      },
    ],
    subtotal_jpy: '¥6,500',
    subtotal_idr: 'Rp 650K',
  },
]

const grandTotal = {
  jpy: '¥118,440',
  idr: 'Rp 11.84M',
  per_person_jpy: '¥59,220',
  per_person_idr: 'Rp 5.92M',
}

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">交通 — Transport</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Train & Bus Tickets</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            No JR Pass — individual tickets are cheaper for this route. All prices 2026.
          </p>
        </div>

        {/* No JR Pass banner */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 mb-8 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <div className="text-3xl">💡</div>
            <div>
              <div className="font-heading font-bold text-lg">Skipping JR Pass — saves ~Rp 2.16M</div>
              <div className="text-white/90 text-sm">JR Pass 14-day = ¥80,000/person (¥160,000 total). Our individual tickets = ¥118,440 total. Individual wins by ¥41,560 (~Rp 4.16M)!</div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {ticketGroups.map((group) => (
            <div key={group.leg} className={`rounded-3xl p-6 border ${group.color}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{group.emoji}</span>
                  <div>
                    <div className={`font-heading font-bold text-lg ${group.headerColor}`}>{group.leg}</div>
                    <div className="text-xs text-dark-light">{group.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-heading font-bold text-sakura-dark">{group.subtotal_idr}</div>
                  <div className="text-xs text-dark-light">{group.subtotal_jpy}</div>
                </div>
              </div>

              <div className="space-y-3">
                {group.tickets.map((t) => (
                  <div key={t.name} className="bg-white rounded-2xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="font-heading font-semibold text-dark">{t.name}</div>
                        <div className="text-sm text-dark-light">{t.route}</div>
                        <div className="text-xs text-dark-light mt-0.5">⏱ {t.duration}</div>
                        <div className="text-xs text-dark-light mt-1 bg-cream/50 rounded-lg p-2">{t.note}</div>
                        {t.buy_url && (
                          <a href={t.buy_url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-sakura/10 text-sakura-dark hover:bg-sakura/20 transition-colors mt-2">
                            🔗 {t.buy_label}
                          </a>
                        )}
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="font-heading font-bold text-sakura-dark">{t.price_two}</div>
                        <div className="text-xs text-dark-light">{t.idr_two}</div>
                        <div className="text-xs text-dark-light">{t.price_per}/person</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Grand Total */}
        <div className="mt-8 bg-gradient-to-r from-sakura to-sakura-dark rounded-2xl p-6 text-white shadow-lg text-center">
          <div className="font-heading font-bold text-xl mb-1">Total Transport Cost</div>
          <div className="text-white/80 text-sm mb-3">For 2 people · All tickets · 14 days</div>
          <div className="font-heading font-bold text-4xl">{grandTotal.idr}</div>
          <div className="text-white/80 text-sm">{grandTotal.jpy} total ({grandTotal.per_person_jpy}/person)</div>
        </div>

        {/* Suica tip */}
        <div className="mt-5 bg-white rounded-2xl p-5 border border-sakura/10">
          <div className="font-heading font-bold text-dark mb-2">💳 Suica IC Card Tips</div>
          <ul className="text-sm text-dark-light space-y-1">
            <li>• Get Suica at Narita Airport (JR East ticket machine) — load ¥5,000-10,000 each</li>
            <li>• Works on ALL trains, buses, taxis, konbini, vending machines in Japan</li>
            <li>• Top up at any station machine. No need to plan exact amounts.</li>
            <li>• On departure: return Suica at airport for ¥500 deposit refund. Or keep as souvenir!</li>
            <li>• Mobile Suica available via iPhone (Apple Pay) — most convenient option</li>
          </ul>
        </div>

        {/* Book ahead warning */}
        <div className="mt-5 bg-red-50 border border-red-200 rounded-2xl p-4">
          <div className="font-heading font-bold text-red-700 mb-2">⚠️ Book These in Advance (Golden Week!)</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-red-600">
            <div>🚄 Tokyo → Kyoto Shinkansen (Day 1)</div>
            <div>🚃 Hida Express Gifu → Takayama (Day 8)</div>
            <div>🚃 Hida Express Takayama → Nagoya (Day 12)</div>
            <div>🚄 Nagoya → Tokyo Shinkansen (Day 12)</div>
            <div>🚂 Sagano Scenic Railway (Day 3)</div>
            <div>🚌 Kamikochi Bus (Day 9)</div>
          </div>
          <a href="https://smart-ex.jp/en/index.php" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors mt-3">
            📱 Book Shinkansen on SmartEX
          </a>
        </div>
      </div>
    </section>
  )
}

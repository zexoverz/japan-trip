const spentData = [
  {
    category: 'Flights',
    emoji: '✈️',
    status: 'paid',
    amount: 'Rp 12M',
    note: 'Jakarta → Narita → Jakarta (2 people). Booked.',
  },
  {
    category: 'Hotels (13 nights)',
    emoji: '🏨',
    status: 'paid',
    amount: 'Rp 13.35M',
    note: 'Kyoto (5n) + Gifu (2n) + Takayama (4n) + Tokyo (2n). All booked & paid.',
  },
]

const budgetData = [
  {
    category: 'Transport (trains + buses)',
    emoji: '🚅',
    budget: { jpy: '¥118,440', idr: 'Rp 11.84M' },
    note: 'Individual tickets — no JR Pass. Shinkansen + Hida Express + local buses. See Tickets section for full breakdown.',
  },
  {
    category: 'Food (14 days, 2 people)',
    emoji: '🍜',
    budget: { jpy: '¥42,000', idr: 'Rp 4.2M' },
    note: 'Konbini breakfast + ramen lunch + izakaya dinner. Dormy Inn free ramen night saves money!',
  },
  {
    category: 'Sightseeing & Entrance',
    emoji: '⛩️',
    budget: { jpy: '¥16,000', idr: 'Rp 1.6M' },
    note: 'Temples, Kamikochi entry, Shirakawa-go, Monkey Park, Nijo Castle, private onsen ×2.',
  },
  {
    category: 'Misc / Emergency',
    emoji: '🆘',
    budget: { jpy: '¥10,000', idr: 'Rp 1M' },
    note: 'eSIM/Pocket WiFi, souvenirs, unexpected costs, last-minute needs.',
  },
]

const totals = {
  alreadyPaid: 'Rp 25.35M',
  remaining: 'Rp 18.64M',
  grand: 'Rp 43.99M',
}

export default function Budget() {
  return (
    <section id="budget" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">予算 — Budget</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Trip Budget</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            All prices for 2 people. Excluding card shopping budget. Updated April 2026.
          </p>
        </div>

        {/* Already Paid */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-heading font-bold text-green-700">✅ Already Paid</span>
          </div>
          <div className="space-y-3">
            {spentData.map((item) => (
              <div key={item.category} className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center gap-4">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-bold text-dark">{item.category}</div>
                  <div className="text-xs text-dark-light">{item.note}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-heading font-bold text-lg text-green-700">{item.amount}</div>
                  <div className="text-xs text-green-600 font-semibold">PAID ✅</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Still to spend */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-lg font-heading font-bold text-dark">💴 Still to Spend in Japan</span>
          </div>
          <div className="space-y-3">
            {budgetData.map((item) => (
              <div key={item.category} className="bg-white rounded-2xl p-5 shadow-sm border border-sakura/10 flex items-center gap-4">
                <div className="text-3xl flex-shrink-0">{item.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="font-heading font-bold text-dark">{item.category}</div>
                  <div className="text-xs text-dark-light">{item.note}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-heading font-bold text-lg text-sakura-dark">{item.budget.idr}</div>
                  <div className="text-xs text-dark-light">{item.budget.jpy}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-3">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex justify-between items-center">
            <span className="font-heading font-semibold text-green-700">✅ Already Paid (flights + hotels)</span>
            <span className="font-heading font-bold text-xl text-green-700">{totals.alreadyPaid}</span>
          </div>
          <div className="bg-cream rounded-2xl p-4 flex justify-between items-center border border-sakura/10">
            <span className="font-heading font-semibold text-dark">💴 Still to Spend in Japan</span>
            <span className="font-heading font-bold text-xl text-sakura-dark">{totals.remaining}</span>
          </div>
          <div className="bg-gradient-to-r from-sakura to-sakura-dark rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-xl">Grand Total</div>
                <div className="text-white/80 text-sm">For 2 people · 14 days · 3 regions</div>
                <div className="text-white/70 text-xs mt-1">Excluding card shopping budget</div>
              </div>
              <div className="text-right">
                <div className="font-heading font-bold text-3xl">{totals.grand}</div>
                <div className="text-white/80 text-sm">~Rp 22M per person</div>
              </div>
            </div>
          </div>
        </div>

        {/* Transport breakdown note */}
        <div className="mt-6 bg-amber-50 rounded-2xl p-5 border border-amber-200">
          <div className="font-heading font-bold text-amber-800 mb-2">🚅 No JR Pass — Saves ~Rp 4.16M</div>
          <p className="text-sm text-amber-700">
            JR Pass 14-day would cost ¥160,000 (~Rp 16M) for 2 people. Our individual tickets total ¥118,440 (~Rp 11.84M). 
            See the <strong>Tickets</strong> section for the full per-route breakdown.
          </p>
        </div>

        {/* Card budget separate */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-lg mb-4">🃏 Card Shopping Budget (Separate — FORU dependent)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">🔴 Sanji Manga Art PSA 10</div>
              <div className="text-purple-700 font-bold">~Rp 24M</div>
              <div className="text-xs text-dark-light mt-1">¥192-240K · OP06-119 コミパラ · Grail #1</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">🔴 Luffy New Emperor PSA 10</div>
              <div className="text-purple-700 font-bold">~Rp 28-35M</div>
              <div className="text-xs text-dark-light mt-1">¥280-350K · OP09-119 コミパラ · Grail #2 (in-store hunt)</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">🟡 Mini Manga Raw ×2-3</div>
              <div className="text-purple-700 font-bold">~Rp 4-6M</div>
              <div className="text-xs text-dark-light mt-1">¥10-20K each · Complete set goal</div>
            </div>
          </div>
          <div className="mt-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-4 text-center">
            <span className="font-heading font-bold text-purple-700">Best Case (FORU liquids): +~Rp 54M card budget</span>
          </div>
          <p className="text-xs text-center text-dark-light mt-2">🎯 Worst case (no FORU): ~Rp 8.25M cash for Japan. Still enough for food + transport + small buys.</p>
        </div>
      </div>
    </section>
  )
}

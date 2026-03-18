import { useState } from 'react'

const budgetData = [
  {
    category: 'Transport',
    emoji: '🚅',
    budget: { jpy: '¥78,000', idr: 'Rp 7.8M' },
    mid: { jpy: '¥78,000', idr: 'Rp 7.8M' },
    note: 'JR Pass 14-day + Suica + bikes + Kamikochi/Okuhida/Shirakawa-go buses + ropeway',
  },
  {
    category: 'Accommodation',
    emoji: '🏨',
    budget: { jpy: '¥75,000', idr: 'Rp 7.5M' },
    mid: { jpy: '¥130,000', idr: 'Rp 13M' },
    note: '13 nights — Kyoto hostel (5) + Takayama guesthouse (4) + Okuhida ryokan (1) + Tokyo (3)',
  },
  {
    category: 'Food',
    emoji: '🍜',
    budget: { jpy: '¥42,000', idr: 'Rp 4.2M' },
    mid: { jpy: '¥98,000', idr: 'Rp 9.8M' },
    note: '14 days × 2 people — konbini to restaurants + splurges. Ryokan dinner+breakfast included!',
  },
  {
    category: 'Sightseeing',
    emoji: '⛩️',
    budget: { jpy: '¥16,000', idr: 'Rp 1.6M' },
    mid: { jpy: '¥22,000', idr: 'Rp 2.2M' },
    note: 'Temples, museums, Shirakawa-go houses, Shinhotaka Ropeway',
  },
  {
    category: 'Misc/Emergency',
    emoji: '🆘',
    budget: { jpy: '¥10,000', idr: 'Rp 1M' },
    mid: { jpy: '¥30,000', idr: 'Rp 3M' },
    note: 'Pocket WiFi, souvenirs, unexpected costs',
  },
]

const totals = {
  budget: { jpy: '¥221,000', idr: 'Rp 22.1M' },
  mid: { jpy: '¥358,000', idr: 'Rp 35.8M' },
}

export default function Budget() {
  const [mode, setMode] = useState('budget')

  return (
    <section id="budget" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">予算 — Budget</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Trip Budget</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            All prices in JPY and IDR (¥1 ≈ Rp 100). Excluding card shopping budget.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1.5 shadow-sm border border-sakura/20 flex gap-1">
            <button
              onClick={() => setMode('budget')}
              className={`px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                mode === 'budget' ? 'bg-sakura text-white shadow-md' : 'text-dark-light hover:text-sakura-dark'
              }`}
            >
              💰 Budget
            </button>
            <button
              onClick={() => setMode('mid')}
              className={`px-5 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                mode === 'mid' ? 'bg-sakura text-white shadow-md' : 'text-dark-light hover:text-sakura-dark'
              }`}
            >
              ✨ Comfortable
            </button>
          </div>
        </div>

        {/* Budget cards */}
        <div className="space-y-3">
          {budgetData.map((item) => (
            <div key={item.category} className="bg-white rounded-2xl p-5 shadow-sm border border-sakura/10 flex items-center gap-4">
              <div className="text-3xl flex-shrink-0">{item.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="font-heading font-bold text-dark">{item.category}</div>
                <div className="text-xs text-dark-light">{item.note}</div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="font-heading font-bold text-lg text-sakura-dark">
                  {mode === 'budget' ? item.budget.idr : item.mid.idr}
                </div>
                <div className="text-xs text-dark-light">
                  {mode === 'budget' ? item.budget.jpy : item.mid.jpy}
                </div>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="bg-gradient-to-r from-sakura to-sakura-dark rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-heading font-bold text-xl">Total Trip Cost</div>
                <div className="text-white/80 text-sm">For 2 people, 14 days, 3 regions</div>
              </div>
              <div className="text-right">
                <div className="font-heading font-bold text-3xl">
                  {mode === 'budget' ? totals.budget.idr : totals.mid.idr}
                </div>
                <div className="text-white/80 text-sm">
                  {mode === 'budget' ? totals.budget.jpy : totals.mid.jpy}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Per person note */}
        <p className="text-center text-sm text-dark-light mt-6">
          💡 That's about <span className="font-semibold text-sakura-dark">
            {mode === 'budget' ? 'Rp 11M' : 'Rp 17.9M'}
          </span> per person — {mode === 'budget' ? 'super affordable!' : 'very comfortable!'}
        </p>

        {/* Transport breakdown */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-lg mb-4">🚅 Transport Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">JR Pass (14-day)</div>
              <div className="text-sakura-dark font-bold">¥50,000 (~Rp 5M)</div>
              <div className="text-xs text-dark-light mt-1">All Shinkansen + JR local + Hida Express</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Kamikochi Bus (RT)</div>
              <div className="text-sakura-dark font-bold">¥6,400 (~Rp 640K)</div>
              <div className="text-xs text-dark-light mt-1">Takayama → Hirayu → Kamikochi</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Shirakawa-go Bus (RT)</div>
              <div className="text-sakura-dark font-bold">¥5,200 (~Rp 520K)</div>
              <div className="text-xs text-dark-light mt-1">Takayama ↔ UNESCO village</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Okuhida Bus (RT)</div>
              <div className="text-sakura-dark font-bold">¥3,200 (~Rp 320K)</div>
              <div className="text-xs text-dark-light mt-1">Takayama ↔ Okuhida Onsen</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Shinhotaka Ropeway</div>
              <div className="text-sakura-dark font-bold">¥3,300 (~Rp 330K)</div>
              <div className="text-xs text-dark-light mt-1">Double-decker gondola to 2,156m</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Suica + Bikes + Misc</div>
              <div className="text-sakura-dark font-bold">¥8,200 (~Rp 820K)</div>
              <div className="text-xs text-dark-light mt-1">Metro, bus, konbini, bike rentals</div>
            </div>
          </div>
          <p className="text-xs text-dark-light mt-4 bg-amber-50 rounded-lg p-3 border border-amber-200">
            💡 <strong>JR Pass saves money</strong> for this route: Tokyo → Kyoto → Nagoya → Takayama → Nagoya → Tokyo. Individual Shinkansen + Hida Express tickets would cost ~¥70,000+ alone!
          </p>
        </div>

        {/* Card budget separate */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-lg mb-4">🃏 Card Shopping Budget (Separate)</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Munch Psyduck PSA 10</div>
              <div className="text-purple-700 font-bold">~Rp 20-22M</div>
              <div className="text-xs text-dark-light mt-1">¥200-220K</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Magikarp AR PSA 10</div>
              <div className="text-purple-700 font-bold">~Rp 3.3M</div>
              <div className="text-xs text-dark-light mt-1">¥33K</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">OP Manga/G5 Cards</div>
              <div className="text-purple-700 font-bold">~Rp 14-16M</div>
              <div className="text-xs text-dark-light mt-1">Various targets</div>
            </div>
          </div>
          <div className="mt-3 bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-4 text-center">
            <span className="font-heading font-bold text-purple-700">Total Card Budget: ~Rp 39.5M (~¥395K)</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const budgetData = [
  {
    category: 'Transport',
    emoji: '🚅',
    budget: { jpy: '¥53,000', idr: 'Rp 5.3M' },
    mid: { jpy: '¥60,000', idr: 'Rp 6M' },
    note: 'JR Pass 14-day + Suica + Airport transfer',
  },
  {
    category: 'Accommodation',
    emoji: '🏨',
    budget: { jpy: '¥80,000', idr: 'Rp 8M' },
    mid: { jpy: '¥130,000', idr: 'Rp 13M' },
    note: '13 nights — hostels + 1 ryokan night',
  },
  {
    category: 'Food',
    emoji: '🍜',
    budget: { jpy: '¥42,000', idr: 'Rp 4.2M' },
    mid: { jpy: '¥80,000', idr: 'Rp 8M' },
    note: '14 days × 2 people — conbini to restaurants',
  },
  {
    category: 'Sightseeing',
    emoji: '⛩️',
    budget: { jpy: '¥15,000', idr: 'Rp 1.5M' },
    mid: { jpy: '¥25,000', idr: 'Rp 2.5M' },
    note: 'Temples, TeamLab, museums',
  },
  {
    category: 'Misc/Emergency',
    emoji: '🆘',
    budget: { jpy: '¥20,000', idr: 'Rp 2M' },
    mid: { jpy: '¥30,000', idr: 'Rp 3M' },
    note: 'Pocket WiFi, souvenirs, unexpected costs',
  },
]

const totals = {
  budget: { jpy: '¥210,000', idr: 'Rp 21M' },
  mid: { jpy: '¥325,000', idr: 'Rp 32.5M' },
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
              className={`px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                mode === 'budget' ? 'bg-sakura text-white shadow-md' : 'text-dark-light hover:text-sakura-dark'
              }`}
            >
              💰 Budget Mode
            </button>
            <button
              onClick={() => setMode('mid')}
              className={`px-6 py-2.5 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${
                mode === 'mid' ? 'bg-sakura text-white shadow-md' : 'text-dark-light hover:text-sakura-dark'
              }`}
            >
              ✨ Comfortable Mode
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
                <div className="text-white/80 text-sm">For 2 people, 14 days</div>
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
            {mode === 'budget' ? 'Rp 10.5M' : 'Rp 16.25M'}
          </span> per person — {mode === 'budget' ? 'super affordable!' : 'very comfortable!'}
        </p>

        {/* Transport breakdown */}
        <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-lg mb-4">🚅 Transport Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">JR Pass (14-day)</div>
              <div className="text-sakura-dark font-bold">¥50,000 (~Rp 5M)</div>
              <div className="text-xs text-dark-light mt-1">All Shinkansen + JR local trains</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Suica/Pasmo IC</div>
              <div className="text-sakura-dark font-bold">¥3,000 (~Rp 300K)</div>
              <div className="text-xs text-dark-light mt-1">Metro, bus, convenience stores</div>
            </div>
            <div className="bg-cream/50 rounded-xl p-4">
              <div className="font-heading font-semibold text-sm">Airport Transfer</div>
              <div className="text-sakura-dark font-bold">¥2,520–3,250</div>
              <div className="text-xs text-dark-light mt-1">Skyliner or Narita Express</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

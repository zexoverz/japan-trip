import { useState, useEffect } from 'react'

const categories = [
  {
    name: '📦 Luggage Strategy',
    emoji: '📦',
    items: [
      '2 medium suitcases (you + Keiko) — bring on Shinkansen, use luggage space behind last row seats',
      '1 small daypack each — carry daily for temples, hiking, card hunting',
      'Overnight bag for ryokan night — leave main bags in Takayama station coin locker',
      'Shinkansen tip: reserve last-row seats for overhead + behind-seat luggage space',
      'Pack light — you\'ll carry bags through stations. No elevators at many rural stations!',
    ],
  },
  {
    name: 'Documents & Money',
    emoji: '📄',
    items: [
      'Passport (valid 6+ months)',
      'Flight tickets (printed + digital)',
      'Hotel confirmations',
      'JR Pass exchange order',
      'Travel insurance docs',
      'Cash (JPY — withdraw at 7-Eleven ATMs)',
      'Credit/debit cards (Visa/Mastercard)',
      'Copies of important docs (photos on phone)',
    ],
  },
  {
    name: 'Tech & Gadgets',
    emoji: '📱',
    items: [
      'Phone + charger',
      'Power bank (20000mAh+)',
      'Universal adapter (Japan uses Type A, same as US)',
      'eSIM or pocket WiFi reservation',
      'Camera + memory cards',
      'Earbuds/headphones for Shinkansen',
    ],
  },
  {
    name: 'Clothing (14 days, April-May)',
    emoji: '👕',
    items: [
      'Light jacket (April nights can be cool ~10-15°C)',
      'Rain jacket or compact umbrella',
      'Comfortable walking shoes (10K+ steps/day!)',
      '5 t-shirts + 2 workout tees (coin laundry wash on Day 7 & 12)',
      '3 pants/shorts + 1 running shorts',
      'Underwear & socks (7 pairs — wash halfway)',
      'One nicer outfit (ryokan dinner at Okuhida)',
      'Running shoes (double as walking shoes)',
      'Slip-on shoes for temples (you remove shoes 20+ times!)',
      'Warm layer for Kamikochi (1,500m altitude — can be chilly!)',
    ],
  },
  {
    name: 'Hiking Gear (Kamikochi)',
    emoji: '🥾',
    items: [
      'Sturdy hiking shoes or trail runners (trails can be muddy)',
      'Rain jacket (mountain weather changes fast)',
      'Warm fleece or insulating layer (1,500m elevation)',
      'Day pack with water, snacks, konbini lunch',
      'Sunscreen + hat (alpine sun is strong)',
      'Small first aid kit (blister plasters!)',
    ],
  },
  {
    name: 'Card Shopping Gear',
    emoji: '🃏',
    items: [
      'Hard sleeves (top loaders)',
      'Soft penny sleeves (100+)',
      'Small card binder/portfolio',
      'Card carrying case (rigid)',
      'Phone with SNKR Dunk app installed',
      'Extra cash for card purchases',
    ],
  },
  {
    name: 'Toiletries & Health',
    emoji: '🧴',
    items: [
      'Toothbrush & toothpaste',
      'Deodorant & sunscreen',
      'Basic medications (paracetamol, allergy meds)',
      'Hand sanitizer & masks (still common in Japan)',
      'Small towel (hostels may not provide)',
      'Lip balm & moisturizer (Japan air can be dry)',
    ],
  },
  {
    name: 'Miscellaneous',
    emoji: '🎒',
    items: [
      'Day backpack (for daily excursions)',
      'Reusable water bottle',
      'Plastic bags for dirty laundry',
      'Small notebook + pen',
      'Snacks for the flight',
      'Eye mask + neck pillow for Shinkansen naps',
      'Passport (for tax-free shopping — always carry!)',
    ],
  },
]

const STORAGE_KEY = 'japan-trip-packing'

export default function PackingChecklist() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked])

  const toggle = (item) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }))
  }

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0)
  const checkedCount = Object.values(checked).filter(Boolean).length
  const progress = Math.round((checkedCount / totalItems) * 100)

  const resetAll = () => {
    setChecked({})
  }

  return (
    <section id="packing" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">荷物リスト — Packing List</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Packing Checklist ✓</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            Interactive checklist — your progress is saved locally on this device.
          </p>
        </div>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-sakura/10 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading font-bold text-dark">
              {checkedCount}/{totalItems} items packed
            </span>
            <div className="flex items-center gap-3">
              <span className="text-sm text-sakura-dark font-semibold">{progress}%</span>
              {checkedCount > 0 && (
                <button
                  onClick={resetAll}
                  className="text-xs text-dark-light hover:text-red-500 transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
          <div className="w-full bg-cream rounded-full h-3 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-sakura to-sakura-dark rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <p className="text-center text-sakura-dark font-heading font-semibold mt-3">
              🎉 All packed! Ready for Japan!
            </p>
          )}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const catChecked = cat.items.filter((item) => checked[item]).length
            return (
              <div key={cat.name} className="bg-white rounded-2xl p-5 shadow-sm border border-sakura/10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-heading font-bold text-dark flex-1">{cat.name}</h3>
                  <span className="text-xs text-dark-light bg-cream rounded-full px-2 py-0.5">
                    {catChecked}/{cat.items.length}
                  </span>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item}>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={!!checked[item]}
                          onChange={() => toggle(item)}
                          className="mt-0.5 w-4 h-4 rounded border-sakura/30 text-sakura focus:ring-sakura/50 accent-[#FFB7C5]"
                        />
                        <span className={`text-sm transition-all duration-200 ${
                          checked[item] ? 'line-through text-dark-light/50' : 'text-dark group-hover:text-sakura-dark'
                        }`}>
                          {item}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

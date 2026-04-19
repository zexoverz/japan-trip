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
    name: 'Pakaian dari Indo (minimum pack)',
    emoji: '👕',
    items: [
      '4× Kaos polos biasa (Day 1, 2, 4, 5, 10)',
      '1× Kemeja sage/krim ⭐ — Day 7 pre-wedding WAJIB (coordinate warna sama Keiko)',
      '1× Sweater krim rajut (Day 5 + malam dingin)',
      '1× Jaket hoodie ritsleting (Day 1, 14)',
      '1× Jaket hujan packable (Day 9 WAJIB)',
      '1× Jaket fleece (Day 9 WAJIB + malam dingin)',
      '1× Celana chino beige + 1× chino gelap',
      '1× Celana pendek olive (Day 2)',
      '1× Celana jogger',
      '(Day 6-13 outfit = haul thrift + Uniqlo di Jepang)',
    ],
  },
  {
    name: 'Shopping di Jepang (WAJIB)',
    emoji: '🛒',
    items: [
      '🥾 Sepatu hiking Gore-Tex — Kyoto Yodobashi Day 1 malam OR Mont-bell Kawaramachi Day 2 (¥15-20K, Rp 1.6-2.1M)',
      '👕 Uniqlo AIRism Performance LS — Day 2 pagi (¥1,500, Rp 165K — buat Day 8 lari + Day 11 cycling)',
      '🌡️ Uniqlo Heattech Ultra Warm LS — Day 2 pagi (¥1,990, Rp 220K — base layer Day 9 + investasi naik gunung Indo)',
    ],
  },
  {
    name: 'Thrift Plan — 4 Sesi 2nd Street',
    emoji: '🛍️',
    items: [
      'Sesi 1 — Day 2 Rab 16:30-17:30 — 2nd Street Kyoto Shijo (¥2.5-4.5K)',
      'Target Sesi 1: overshirt + graphic tee (Day 3, 6)',
      'Sesi 2 — Day 5 Sab 17:30-18:30 — 2nd Street Kyoto Shijo round 2 (¥4.5-7.5K)',
      'Target Sesi 2: henley coklat + rompi/kardigan (Day 6-8 Takayama)',
      '⭐ Sesi 3 — Day 12 Sab 18:00-19:30 — 2nd Street Shimokitazawa MEGA HAUL (¥10-17.5K)',
      'Target Sesi 3: bomber vintage + graphic tee + cargo + vintage denim',
      'Sesi 4 — Day 13 Min 13:30-15:00 — 2nd Street Ueno (¥5-10.5K)',
      'Target Sesi 4: overshirt farewell sushi + Keiko picks + cadangan',
      'Bawa cash ¥50K + passport (tax-free 10% kalo >¥5K/toko)',
    ],
  },
  {
    name: 'Kit Olahraga (9 sesi, semua dari Indo)',
    emoji: '💪',
    items: [
      '2× Kaos cepat kering lengan pendek (non-katun)',
      '3× Celana pendek lari (cepat kering)',
      '1× Celana olahraga panjang (Day 8 lari dingin + lapisan Day 9)',
      '5× Kaos kaki olahraga (WAJIB non-katun, anti-lecet)',
      '4× Celana dalam olahraga (anti-lecet)',
      '1× Topi lari',
      '1× Handuk kecil cepat kering',
      'NB FuelCell Rebel V5 — sepatu lari + jalan harian',
      '(Kaos lengan panjang beli Uniqlo AIRism Day 2)',
    ],
  },
  {
    name: 'Kit Hiking Kamikochi (Day 9)',
    emoji: '🥾',
    items: [
      'Sepatu hiking Gore-Tex (BELI di Kyoto Day 1-2, BUKAN Takayama!)',
      'Celana hiking panjang — WAJIB bawa dari Indo (Decathlon/Eiger, BUKAN jeans)',
      'Jaket hujan packable (lapisan luar)',
      'Jaket fleece (lapisan tengah)',
      'Uniqlo Heattech Ultra Warm (lapisan dalam — beli Day 2)',
      '2 pasang kaos kaki hiking tebal (anti-lecet)',
      'Sarung tangan tipis (0-5°C pagi)',
      'Daypack + air + snack konbini',
      'Topi hiking + kacamata hitam',
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

import { useState } from 'react'

const tips = [
  {
    emoji: '🇯🇵',
    title: 'Keiko Advantage',
    content: "She's Japanese! She can read menus, negotiate prices, communicate with locals, and navigate everything. This is a HUGE advantage that saves money and time. Let her take the lead at restaurants and card shops.",
    tag: 'Essential',
  },
  {
    emoji: '🏪',
    title: 'Conbini Life',
    content: '7-Eleven, FamilyMart, Lawson — these convenience stores are AMAZING in Japan. Breakfast here (onigiri ¥120, sandwich ¥200, coffee ¥100) saves thousands of yen. Also great for snacks, ATMs, and last-minute supplies.',
    tag: 'Save Money',
  },
  {
    emoji: '🚅',
    title: 'JR Pass Debate',
    content: 'The 14-day JR Pass (~¥50,000) covers all Shinkansen and JR local trains. For your route (Tokyo → Kyoto → Nagoya → Tokyo), it should save money vs individual tickets. But calculate! Tokyo-Kyoto round trip alone is ~¥27,000.',
    tag: 'Transport',
  },
  {
    emoji: '🏷️',
    title: 'Tax-Free Shopping',
    content: "Spend ¥5,000+ at one store and show your passport for tax-free (10% off). Works for cards too at bigger stores like Surugaya! They'll seal items in a bag — don't open until you leave Japan.",
    tag: 'Save Money',
  },
  {
    emoji: '💴',
    title: 'Cash is King',
    content: "Many small shops, restaurants, and ALL flea markets are cash-only. Withdraw at 7-Eleven ATMs (no foreign card fee). Carry at least ¥20,000-30,000 cash at all times.",
    tag: 'Essential',
  },
  {
    emoji: '🃏',
    title: 'Card Shop Strategy',
    content: "Visit stores in the morning for best selection before other hunters. Check SNKR Dunk / Mercari prices on your phone before buying. Compare prices across 2-3 shops before committing to big purchases.",
    tag: 'Cards',
  },
  {
    emoji: '⚠️',
    title: 'Golden Week Warning',
    content: 'Apr 29 - May 5 is Golden Week — Japan\'s biggest holiday period. Hotels are 2-3x more expensive, trains are packed, and popular spots have long lines. BOOK ACCOMMODATION EARLY. Consider visiting popular spots early morning.',
    tag: 'Important',
  },
  {
    emoji: '📶',
    title: 'Pocket WiFi / eSIM',
    content: 'Rent a pocket WiFi at the airport (~¥500/day) or buy an eSIM before departure (cheaper, ~$15-20 for 14 days). You\'ll need internet for maps, translation, and checking card prices.',
    tag: 'Tech',
  },
  {
    emoji: '🚃',
    title: 'Suica Card Magic',
    content: 'Load up your Suica/Pasmo IC card and use it for EVERYTHING — trains, buses, convenience stores, vending machines, even some restaurants. Way faster than buying individual tickets.',
    tag: 'Transport',
  },
  {
    emoji: '🛍️',
    title: 'Flea Market Cash',
    content: "Bring plenty of cash to flea markets — absolutely no card payments. Negotiate politely (Keiko can help!). Best finds are often in the morning when vendors are setting up.",
    tag: 'Shopping',
  },
]

export default function Tips() {
  const [openTip, setOpenTip] = useState(null)

  const tagColors = {
    Essential: 'bg-red-100 text-red-600',
    'Save Money': 'bg-green-100 text-green-700',
    Transport: 'bg-sky/20 text-sky',
    Cards: 'bg-purple-100 text-purple-600',
    Important: 'bg-amber-100 text-amber-700',
    Tech: 'bg-blue-100 text-blue-600',
    Shopping: 'bg-pink-100 text-pink-600',
  }

  return (
    <section id="tips" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-cream/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">ヒント — Tips & Tricks</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Travel Pro Tips</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            10 essential tips to make your Japan trip smoother and cheaper.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-sakura/10 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => setOpenTip(openTip === i ? null : i)}
            >
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-heading font-bold text-dark">{tip.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColors[tip.tag]}`}>
                        {tip.tag}
                      </span>
                    </div>
                    {openTip === i ? (
                      <p className="text-sm text-dark-light mt-2 animate-fade-in-up">{tip.content}</p>
                    ) : (
                      <p className="text-sm text-dark-light/60 mt-1">Tap to read →</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const tips = [
  {
    emoji: '🚅',
    title: 'JR Pass Saves Money',
    content: 'For this route (Tokyo → Hakone → Kyoto → Nagoya → Takayama → Tokyo), the 14-day JR Pass (~¥50,000) SAVES money. Individual Shinkansen tickets would cost ¥70,000+. It covers all JR trains including Hida Express to Takayama.',
    tag: 'Transport',
  },
  {
    emoji: '🏷️',
    title: 'Tax-Free Shopping',
    content: "Spend ¥5,000+ at one store and show your passport for tax-free (10% off). Works for card shops too at bigger stores like Surugaya! They'll seal items in a bag — don't open until you leave Japan.",
    tag: 'Save Money',
  },
  {
    emoji: '💴',
    title: 'Cash is King',
    content: "Many small shops, restaurants, and ALL flea markets are cash-only. Withdraw at 7-Eleven ATMs (no foreign card fee). Carry at least ¥20,000-30,000 cash at all times. Bring ¥50,000+ or withdraw on arrival.",
    tag: 'Essential',
  },
  {
    emoji: '⚠️',
    title: 'Golden Week Warning',
    content: 'Apr 29 - May 5 is Golden Week — Japan\'s biggest holiday period. Hotels are 2-3x more expensive, trains are packed, and popular spots have long lines. BOOK ACCOMMODATION NOW.',
    tag: 'Important',
  },
  {
    emoji: '🏪',
    title: 'Konbini Life',
    content: '7-Eleven, FamilyMart, Lawson = AMAZING in Japan. Breakfast here (onigiri ¥120, sandwich ¥200, coffee ¥100) saves thousands of yen per day. Also great for ATMs, printing, and last-minute supplies.',
    tag: 'Save Money',
  },
  {
    emoji: '🚃',
    title: 'Suica Card Magic',
    content: 'Load up your Suica card and use it for EVERYTHING — trains, buses, konbini, vending machines, even some restaurants. Way faster than buying individual tickets. Return at airport for ¥500 deposit refund.',
    tag: 'Transport',
  },
  {
    emoji: '🃏',
    title: 'Card Transport Safety',
    content: 'Pack cards in hard-top loaders inside carry-on luggage. NEVER check valuable cards in hold luggage. Bring penny sleeves and a small card binder from home.',
    tag: 'Cards',
  },
  {
    emoji: '📶',
    title: 'Pocket WiFi / eSIM',
    content: 'Rent a pocket WiFi at the airport (~¥500/day) or buy an eSIM before departure (cheaper, ~$15-20 for 14 days). Essential for maps, translation, and checking card prices on SNKR Dunk.',
    tag: 'Tech',
  },
  {
    emoji: '👟',
    title: 'Temple Shoes Hack',
    content: 'Wear slip-on shoes — you\'ll take them off 20+ times at temples and ryokans. Saves tons of time and frustration vs lace-up sneakers.',
    tag: 'Essential',
  },
  {
    emoji: '♨️',
    title: 'Onsen Etiquette',
    content: 'Tattoos may be an issue at some onsen — check before going. Wash thoroughly before entering the bath. Bring a small towel. Takayama and Hakone have great onsen options.',
    tag: 'Culture',
  },
  {
    emoji: '🚲',
    title: 'Bicycle Rules',
    content: 'Ride on LEFT side of the road. Park in designated areas only. Keep bike locked at all times. Don\'t ride on sidewalks. Electric assist recommended for Kyoto (some hills).',
    tag: 'Cycling',
  },
  {
    emoji: '💰',
    title: 'Takayama Hack',
    content: 'Takayama is Japan\'s CHEAPEST tourist city. Hotels ¥4-6K/night, Hida beef street sushi ¥600-800, most attractions free or cheap. Plan your splurge meals in Tokyo/Kyoto, save in Takayama.',
    tag: 'Save Money',
  },
  {
    emoji: '🌅',
    title: 'Morning Markets',
    content: 'Takayama morning market (Miyagawa) + Nishiki Market (Kyoto) — best deals and freshest food. Go early for the best selection. Cash recommended.',
    tag: 'Food',
  },
  {
    emoji: '🚃',
    title: 'Last Train Warning',
    content: 'Check last train times! Usually 23:00-00:00 depending on the line. Miss it and you\'re taking a ¥5,000+ taxi. Google Maps shows real-time schedules.',
    tag: 'Transport',
  },
  {
    emoji: '🖨️',
    title: 'Konbini Printing',
    content: 'Can print boarding passes, tickets, and documents at any 7-Eleven or FamilyMart using their multifunction printers. Life-saver if you need hard copies.',
    tag: 'Tech',
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
    Culture: 'bg-pink-100 text-pink-600',
    Cycling: 'bg-emerald-100 text-emerald-700',
    Food: 'bg-orange-100 text-orange-600',
  }

  return (
    <section id="tips" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-cream/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">ヒント — Tips & Tricks</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Travel Pro Tips</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            15 essential tips to make your Japan trip smoother and cheaper.
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

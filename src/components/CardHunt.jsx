const targets = [
  {
    game: 'Pokémon TCG',
    emoji: '⚡',
    budget: 'Rp 23-25M',
    cards: [
      { name: 'Munch Psyduck', desc: 'The Scream promo — Edvard Munch collaboration', rarity: 'Ultra Rare Promo' },
      { name: 'Magikarp AR', desc: 'Art Rare version — stunning full art', rarity: 'Art Rare' },
    ],
    shops: ['Mandarake (Nakano)', 'Card Rush (Akihabara)', 'Surugaya', 'Book Off'],
  },
  {
    game: 'One Piece TCG',
    emoji: '🏴‍☠️',
    budget: 'Rp 14-16M',
    cards: [
      { name: 'Manga Art Cards', desc: 'Special manga panel artwork versions', rarity: 'Special Art' },
      { name: 'Gear 5 Luffy SP', desc: 'The chase card — Gear 5 Special Parallel', rarity: 'Special Parallel' },
    ],
    shops: ['Yuyu-tei (Akihabara)', 'Amenity Dream (Osu, Nagoya)', 'Hobby Station'],
  },
]

const shopTips = [
  { emoji: '🌅', tip: 'Visit card shops in the morning for best selection before others pick through' },
  { emoji: '📱', tip: 'Check SNKR Dunk / Mercari prices on your phone before buying to compare' },
  { emoji: '🏷️', tip: 'Tax-free! Spend ¥5,000+ at one store and show your passport for tax exemption' },
  { emoji: '💴', tip: 'Bring cash — many smaller card shops don\'t accept credit cards' },
  { emoji: '🗣️', tip: 'Use Google Translate camera mode to read Japanese price tags and grading info!' },
  { emoji: '📦', tip: 'Bring hard sleeves and a small card binder from home to protect purchases' },
]

export default function CardHunt() {
  return (
    <section id="cards" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-sky/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">カードハント — Card Hunt Mission</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Card Shopping Targets 🃏</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            The real endgame. Separate budget from the trip — funded from TGE allocation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {targets.map((t) => (
            <div key={t.game} className="bg-white rounded-3xl p-6 shadow-sm border border-sakura/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <h3 className="font-heading font-bold text-xl text-dark">{t.game}</h3>
                  <span className="text-sm font-semibold text-sakura-dark">Budget: {t.budget}</span>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                {t.cards.map((card) => (
                  <div key={card.name} className="bg-cream/40 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-dark">{card.name}</span>
                      <span className="text-xs bg-sakura/20 text-sakura-dark px-2 py-0.5 rounded-full">{card.rarity}</span>
                    </div>
                    <p className="text-sm text-dark-light">{card.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs font-semibold text-dark-light uppercase tracking-wider mb-2">Where to find</p>
                <div className="flex flex-wrap gap-2">
                  {t.shops.map((shop) => (
                    <span key={shop} className="text-xs bg-sky/10 text-sky px-3 py-1 rounded-full">{shop}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shopping tips */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-sakura/10">
          <h3 className="font-heading font-bold text-xl mb-6 text-center">🎯 Card Shopping Pro Tips</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {shopTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-cream/30 rounded-xl p-4">
                <span className="text-2xl flex-shrink-0">{tip.emoji}</span>
                <p className="text-sm text-dark">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'

const days = [
  {
    day: 1, date: 'Apr 21 (Tue)', title: 'Arrival Day ✈️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75',
    summary: 'Land at Narita/Haneda, check in, explore Shinjuku & Shibuya',
    details: [
      '🛬 Arrive at Narita or Haneda Airport',
      '🎫 Pick up JR Pass at airport (if purchased)',
      '🚃 Take Narita Express (¥3,250) or Skyliner (¥2,520) to city',
      '🏨 Check into hostel in Shinjuku area',
      '🌃 Evening walk: Shinjuku (Kabukicho, Golden Gai) → Shibuya Crossing',
      '🍜 First ramen! Try Ichiran or Fuunji near Shinjuku station',
      '💡 Buy Suica/Pasmo IC card at any station (¥3,000)',
    ],
  },
  {
    day: 2, date: 'Apr 22 (Wed)', title: 'Akihabara Card Hunt 🃏',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'The BIG card shopping day — Nakano Broadway, Card Rush, Surugaya, Yuyu-tei, Book Off',
    details: [
      '🌅 Morning: Start at Nakano Broadway (Mandarake Complex)',
      '  → Mandarake: Floors 2-4 for TCG cards, vintage finds',
      '  → Open: 12:00 PM — get there early for nearby shops',
      '🚃 Afternoon: Train to Akihabara (15 min from Nakano)',
      '🏪 Card Rush Akihabara — Great for Pokemon singles',
      '🏪 Surugaya — Check multiple floors, compare prices',
      '🏪 Yuyu-tei — Best organized, good for One Piece TCG',
      '🏪 Book Off — Budget finds, hidden gems in bargain bins',
      '📱 Pro tip: Check SNKR Dunk prices on phone before buying!',
      '🏪 Evening: Don Quijote (Donki) for snacks & tax-free shopping',
      '💡 Keiko can help negotiate and read Japanese price lists!',
    ],
  },
  {
    day: 3, date: 'Apr 23 (Thu)', title: 'Flea Market & Harajuku 🛍️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=600&q=75',
    summary: 'Togo Shrine Flea Market, Harajuku fashion street, Meiji Shrine',
    details: [
      '🌅 Morning: Togo Shrine Flea Market (nearest to this date)',
      '  → Antiques, vintage items, sometimes TCG cards!',
      '  → Bring cash — no card payments at flea markets',
      '  → Negotiate politely (Keiko can help!)',
      '⛩️ Late morning: Meiji Shrine (free, peaceful walk)',
      '🛍️ Afternoon: Harajuku — Takeshita Street',
      '  → Quirky fashion, crepes, kawaii culture',
      '🏙️ Evening: Omotesando for upscale window shopping',
      '🍜 Dinner: Conveyor belt sushi near Shibuya',
    ],
  },
  {
    day: 4, date: 'Apr 24 (Thu)', title: 'Asakusa & TeamLab 🎨',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=600&q=75',
    summary: 'Senso-ji temple, TeamLab Planets, evening Akihabara return',
    details: [
      '🌅 Morning: Asakusa — Senso-ji Temple',
      '  → Walk through Nakamise Shopping Street (snacks & souvenirs)',
      '  → Senso-ji is Tokyo\'s oldest temple (free entry)',
      '🎨 Afternoon: TeamLab Planets (¥3,800 per person)',
      '  → Book tickets online in advance!',
      '  → Wear clothes that can get wet (water exhibits)',
      '  → Allow 2-3 hours',
      '🃏 Evening: Return to Akihabara for more card hunting',
      '  → Hit shops you missed on Day 2',
      '  → Check evening sales and clearance bins',
    ],
  },
  {
    day: 5, date: 'Apr 25 (Fri)', title: 'Tsukiji & Odaiba 🐟',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=600&q=75',
    summary: 'Tsukiji Outer Market breakfast, Odaiba waterfront',
    details: [
      '🌅 Early morning: Tsukiji Outer Market',
      '  → Fresh sushi for breakfast! (stalls open from 5-6 AM)',
      '  → Tamagoyaki (egg rolls), fresh seafood, street food',
      '🏙️ Late morning: Head to Odaiba via Yurikamome Line',
      '  → Gundam Unicorn Statue (life-size, free to see)',
      '  → TeamLab Borderless (if not done Planets)',
      '  → DiverCity Tokyo Plaza shopping',
      '📦 Afternoon: Last Tokyo shopping / pack for Kyoto',
      '🚅 Evening: Rest early — Shinkansen to Kyoto tomorrow!',
    ],
  },
  {
    day: 6, date: 'Apr 26 (Sat)', title: 'Welcome to Kyoto ⛩️',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=75',
    summary: 'Shinkansen to Kyoto, Fushimi Inari gates, Nishiki Market',
    details: [
      '🚅 Morning: Shinkansen Tokyo → Kyoto (2h15m, covered by JR Pass)',
      '  → Grab ekiben (station bento box) for the ride!',
      '🏨 Check into accommodation in central Kyoto',
      '⛩️ Afternoon: Fushimi Inari Taisha',
      '  → The famous 10,000 orange torii gates (free!)',
      '  → Full hike to top: ~2 hours, shorter loop: 45 min',
      '  → Go in late afternoon for better lighting & fewer crowds',
      '🛍️ Evening: Nishiki Market (Kyoto\'s kitchen)',
      '  → Street food: matcha sweets, pickles, takoyaki',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Sun)', title: 'Arashiyama 🎋',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=75',
    summary: 'Bamboo Grove, Togetsukyo Bridge, Monkey Park Iwatayama',
    details: [
      '🌅 Early morning: Arashiyama Bamboo Grove',
      '  → GO EARLY (7-8 AM) — by 10 AM it\'s packed',
      '  → Free to walk through, magical at sunrise',
      '🌉 Morning: Togetsukyo Bridge — iconic Kyoto photo spot',
      '🐒 Late morning: Monkey Park Iwatayama (¥550)',
      '  → 15 min hike up, feed wild monkeys at the top',
      '  → Amazing panoramic view of Kyoto',
      '🍵 Afternoon: Explore Arashiyama shops, matcha ice cream',
      '🚃 Take the scenic Sagano Romantic Train if available (¥880)',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Mon)', title: 'Golden Temples 🏯',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=75',
    summary: 'Kinkaku-ji, Ryoan-ji zen garden, Nijo Castle',
    details: [
      '🌅 Morning: Kinkaku-ji (Golden Pavilion) — ¥500',
      '  → One of Japan\'s most iconic sights',
      '  → Reflections in the pond are stunning',
      '🧘 Late morning: Ryoan-ji Temple — ¥500',
      '  → Famous zen rock garden, very peaceful',
      '🏯 Afternoon: Nijo Castle — ¥1,030',
      '  → "Nightingale floors" that chirp when you walk',
      '  → Beautiful gardens, great for photos',
      '🌸 Evening: Walk through northern Kyoto neighborhoods',
    ],
  },
  {
    day: 9, date: 'Apr 29 (Tue)', title: 'Museums & Gion 🎭',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=75',
    summary: 'Kyoto National Museum, Manga Museum, Gion geisha district',
    details: [
      '⚠️ GOLDEN WEEK STARTS — expect crowds!',
      '🏛️ Morning: Kyoto National Museum — ¥700',
      '  → Japanese art and cultural artifacts',
      '📚 Afternoon: Kyoto International Manga Museum — ¥900',
      '  → Housed in a former elementary school',
      '  → 300,000+ manga volumes, read freely!',
      '🎭 Evening: Gion district walk',
      '  → Hanamikoji Street — spot maiko (apprentice geisha)',
      '  → Beautiful traditional architecture',
      '  → Yasaka Shrine (free, open 24h)',
    ],
  },
  {
    day: 10, date: 'Apr 30 (Wed)', title: "Monet's Pond 🎨",
    city: 'Day Trip', cityColor: 'bg-green-100 text-green-700',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75',
    summary: "Namonaki Ike (Monet's Pond) in Seki, Gifu — or Nara deer park alternative",
    details: [
      '🎨 Option A: Monet\'s Pond (Namonaki Ike)',
      '  → Kyoto → Nagoya (Shinkansen, 35 min) → Seki (local train, ~1h)',
      '  → Crystal-clear pond with koi fish, looks like a Monet painting',
      '  → Best in morning light, free to visit',
      '  → ⚠️ Long travel time — leave early!',
      '',
      '🦌 Option B: Nara (easier alternative)',
      '  → Kyoto → Nara: 45 min by JR (covered by JR Pass)',
      '  → Feed the famous bowing deer in Nara Park (free)',
      '  → Todai-ji Temple — world\'s largest wooden building (¥600)',
      '  → Kasuga Taisha — thousands of stone lanterns',
      '',
      '💡 Recommendation: Do Nara if energy is low, Monet\'s Pond if feeling adventurous',
    ],
  },
  {
    day: 11, date: 'May 1 (Thu)', title: 'Nagoya Castle 🏯',
    city: 'Nagoya', cityColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Nagoya Castle, Osu Shopping District (more card shops!)',
    details: [
      '🚅 Morning: Travel to Nagoya (Shinkansen from Kyoto, 35 min)',
      '🏨 Check into hotel in Nagoya',
      '🏯 Late morning: Nagoya Castle — ¥500',
      '  → Golden shachihoko (dolphin-fish) on the roof',
      '  → Honmaru Palace reconstruction is stunning',
      '🛍️ Afternoon: Osu Shopping District',
      '  → Like a mini-Akihabara! Otaku culture galore',
      '  → Card shops: Amenity Dream, Hobby Station',
      '  → Street food: Taiwanese-style fried chicken',
      '🍜 Dinner: Nagoya specialties — miso katsu, hitsumabushi (eel), tebasaki (chicken wings)',
    ],
  },
  {
    day: 12, date: 'May 2 (Fri)', title: 'Toyota & Shrines 🚗',
    city: 'Nagoya', cityColor: 'bg-purple-100 text-purple-600',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Toyota Museum, Atsuta Shrine, travel back to Tokyo',
    details: [
      '🚗 Morning: Toyota Commemorative Museum — ¥500',
      '  → History of Toyota, interactive car exhibits',
      '  → Cool even if you\'re not a car person',
      '⛩️ Late morning: Atsuta Shrine',
      '  → One of Japan\'s most important Shinto shrines',
      '  → Houses the legendary Kusanagi no Tsurugi sword',
      '  → Beautiful forested grounds (free)',
      '🚅 Afternoon: Shinkansen Nagoya → Tokyo (1h40m)',
      '🏨 Check into final Tokyo accommodation',
      '🌃 Evening: Chill night, prepare for last shopping day',
    ],
  },
  {
    day: 13, date: 'May 3 (Sat)', title: 'Final Shopping Spree 🛍️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'Last-minute shopping, Don Quijote, final card shop runs',
    details: [
      '⚠️ Golden Week — peak crowds everywhere!',
      '🃏 Morning: Final Akihabara card shop sweep',
      '  → Check for any cards you missed',
      '  → Compare prices one last time',
      '🛍️ Afternoon: Don Quijote (Donki) Shibuya',
      '  → Tax-free shopping (spend ¥5,000+ per store)',
      '  → Snacks, cosmetics, souvenirs',
      '📦 Evening: Pack everything carefully',
      '  → Organize card purchases (hard sleeves!)',
      '  → Weigh luggage — Japan souvenirs add up fast!',
      '🍜 Last dinner: Pick your favorite from the trip!',
    ],
  },
  {
    day: 14, date: 'May 4 (Sun)', title: 'Sayonara Japan 👋',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=75',
    summary: 'Departure day — last conbini run, head to airport',
    details: [
      '🌅 Morning: Last conbini breakfast (grab snacks for the flight!)',
      '📸 Final photos around the neighborhood',
      '🚃 Head to Narita/Haneda',
      '  → Allow 2-3 hours before flight',
      '  → Narita Express or Skyliner from central Tokyo',
      '✈️ Airport: Last-minute duty-free shopping',
      '  → Tokyo Banana, KitKat varieties, matcha snacks',
      '🛫 Fly home with incredible memories (and cards!)',
      '',
      '🌸 ありがとう日本！See you again!',
    ],
  },
]

const cityEmojis = {
  'Tokyo': '🏙️',
  'Kyoto': '⛩️',
  'Day Trip': '🎨',
  'Nagoya': '🏯',
}

export default function Itinerary() {
  const [expandedDay, setExpandedDay] = useState(null)

  return (
    <section id="itinerary" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-sakura/5 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sakura font-heading font-semibold text-sm tracking-widest uppercase mb-3">旅程 — Itinerary</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Day by Day</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            14 days of adventure, carefully planned. Tap any day to see the full details.
          </p>
        </div>

        <div className="space-y-4">
          {days.map((day) => (
            <div
              key={day.day}
              className={`bg-white rounded-2xl shadow-sm border border-sakura/10 overflow-hidden transition-all duration-300 ${
                expandedDay === day.day ? 'shadow-lg ring-2 ring-sakura/20' : 'hover:shadow-md'
              }`}
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full text-left p-4 sm:p-6 flex items-center gap-4"
              >
                {/* Day number */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-sakura/10 rounded-2xl flex flex-col items-center justify-center">
                  <span className="text-xs text-sakura-dark font-semibold">DAY</span>
                  <span className="text-xl sm:text-2xl font-heading font-bold text-sakura-dark">{day.day}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${day.cityColor}`}>
                      {cityEmojis[day.city]} {day.city}
                    </span>
                    <span className="text-xs text-dark-light">{day.date}</span>
                  </div>
                  <h3 className="font-heading font-bold text-dark text-base sm:text-lg truncate">{day.title}</h3>
                  <p className="text-sm text-dark-light truncate">{day.summary}</p>
                </div>

                {/* Expand icon */}
                <div className={`flex-shrink-0 transition-transform duration-300 ${expandedDay === day.day ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-sakura" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expanded content */}
              {expandedDay === day.day && (
                <div className="px-4 sm:px-6 pb-6 animate-fade-in-up">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={day.image}
                      alt={day.title}
                      className="w-full sm:w-48 h-32 sm:h-36 object-cover rounded-xl"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <ul className="space-y-1.5">
                        {day.details.map((detail, i) => (
                          <li key={i} className={`text-sm ${detail.startsWith('  ') ? 'ml-6 text-dark-light' : detail === '' ? '' : 'text-dark'}`}>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

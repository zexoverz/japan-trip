import { useState } from 'react'

const days = [
  {
    day: 1, date: 'Apr 21 (Mon)', title: 'Arrive Tokyo ✈️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: 'Arrival & Recovery',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75',
    summary: 'Land at Narita/Haneda, check in Akihabara, easy evening — you know Tokyo already.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '14:00', emoji: '🛬', text: 'Land at Narita/Haneda' },
      { time: '15:30', emoji: '🎫', text: 'Activate Suica card, buy airport express' },
      { time: '16:30', emoji: '🏨', text: 'Check in hotel (APA Akihabara or area near station)' },
      { time: '17:30', emoji: '🚶', text: 'Evening walk — you know Tokyo, just relax. Konbini dinner.' },
      { time: '19:00', emoji: '🏪', text: 'Don Quijote for supplies (sunscreen, snacks, pocket WiFi if needed)' },
      { time: '21:00', emoji: '😴', text: 'Early sleep — jetlag recovery' },
    ],
    tips: [],
  },
  {
    day: 2, date: 'Apr 22 (Tue)', title: 'Akihabara Card Hunting 🃏',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: '🃏 Card Hunting',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'THE card shopping day — Mandarake, Surugaya, Card Rush, Yuyu-tei, Book Off, then Nakano Broadway.',
    dayCost: '¥3,000-5,000 (food) + card budget',
    schedule: [
      { time: '09:00', emoji: '🍙', text: 'Breakfast at hotel or konbini' },
      { time: '10:00', emoji: '🚶', text: 'Mandarake Complex Akihabara (floors 3-5 for TCG) — check graded slabs' },
      { time: '11:30', emoji: '🚶', text: 'Surugaya Akihabara (multiple locations on Chuo-dori) — compare prices' },
      { time: '12:30', emoji: '🍜', text: 'Lunch: Ramen street under Akihabara station' },
      { time: '13:30', emoji: '🚶', text: 'Card Rush Akihabara — good for modern PSA slabs' },
      { time: '14:30', emoji: '🚶', text: 'Yuyu-tei physical store — best for One Piece raw singles, same prices as online' },
      { time: '15:30', emoji: '🚶', text: 'Book Off Akihabara — random steals in glass cases, check carefully' },
      { time: '16:30', emoji: '🚃', text: 'Train to Nakano (15 min from Akihabara)' },
      { time: '17:00', emoji: '🏪', text: 'Mandarake Nakano Broadway — THE best for vintage/museum promos (Munch Psyduck hunt here!)' },
      { time: '19:00', emoji: '🍺', text: 'Dinner near Nakano — cheap izakaya area' },
      { time: '20:30', emoji: '📦', text: 'Back to hotel, organize card purchases, update budget' },
    ],
    tips: [
      'Check SNKR Dunk prices on phone BEFORE buying anything',
      'Tax-free at stores spending ¥5,000+ (show passport)',
      'TARGET: Munch Psyduck PSA 10 (¥200-220K), Magikarp AR PSA 10 (¥33K), OP manga arts',
    ],
  },
  {
    day: 3, date: 'Apr 23 (Wed)', title: 'Shimokitazawa + Depart to Hakone 🛍️',
    city: 'Tokyo → Hakone', cityColor: 'bg-sky/20 text-sky',
    theme: 'Vintage Shopping & Travel',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1583766395091-2eb9994ed094?w=600&q=75',
    summary: 'Shimokitazawa vintage district, Tsukiji street food, then Romance Car to Hakone.',
    dayCost: '¥8,000-12,000',
    schedule: [
      { time: '06:30', emoji: '⏰', text: 'Early wake up' },
      { time: '07:30', emoji: '🛍️', text: 'Shimokitazawa vintage district — small shops, clothes, antiques, vinyl records (Wed = no flea markets, this is the daily alternative)' },
      { time: '10:00', emoji: '🃏', text: 'Any remaining card shops or Akihabara returns' },
      { time: '12:00', emoji: '🍣', text: 'Lunch: Tsukiji Outer Market (still open, great street food)' },
      { time: '13:30', emoji: '📦', text: 'Pack up, check out hotel' },
      { time: '14:00', emoji: '🚃', text: 'Tokyo → Hakone (Odakyu Romance Car from Shinjuku, 85 min, ¥2,330)' },
      { time: '16:00', emoji: '🏨', text: 'Check in Hakone — budget guesthouse or hostel' },
      { time: '17:00', emoji: '♨️', text: 'Free foot onsen at Hakone-Yumoto station area' },
      { time: '18:00', emoji: '🚶', text: 'Walk around Hakone town, konbini dinner' },
    ],
    tips: [
      'Buy Hakone Free Pass (¥6,100, 2-day) — covers ALL transport in Hakone area',
    ],
  },
  {
    day: 4, date: 'Apr 24 (Thu)', title: 'Hakone Nature Day 🏔️',
    city: 'Hakone', cityColor: 'bg-green-100 text-green-700',
    theme: '🏔️ Nature & Onsen',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Full Hakone loop — mountain train, ropeway, volcanic valley, pirate ship, shrine, onsen.',
    dayCost: '¥3,000-5,000 (Free Pass covers transport)',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast at guesthouse' },
      { time: '08:30', emoji: '🚃', text: 'Hakone-Yumoto → Tozan Railway (switchback mountain train) → Gora' },
      { time: '09:15', emoji: '🚡', text: 'Gora → Cable Car → Sounzan' },
      { time: '09:45', emoji: '🚡', text: 'Sounzan → Ropeway → Owakudani (volcanic valley!)' },
      { time: '10:30', emoji: '🥚', text: 'Eat Owakudani black egg (adds 7 years to your life, legend says!)' },
      { time: '11:00', emoji: '🚡', text: 'Continue ropeway → Togendai' },
      { time: '11:30', emoji: '🚢', text: 'Pirate Ship cruise across Lake Ashi (Mt Fuji view if clear!)' },
      { time: '12:30', emoji: '⚓', text: 'Arrive Moto-Hakone' },
      { time: '13:00', emoji: '🍜', text: 'Lunch near lake' },
      { time: '13:30', emoji: '⛩️', text: 'Walk to Hakone Shrine (famous torii gate on lake)' },
      { time: '14:30', emoji: '📸', text: 'THE Instagram spot: red torii gate with lake backdrop' },
      { time: '15:30', emoji: '🚌', text: 'Bus back to Hakone-Yumoto (covered by Free Pass)' },
      { time: '16:30', emoji: '♨️', text: 'Tenzan Tojikyou onsen (¥1,300) — outdoor bath in the forest' },
      { time: '18:30', emoji: '🍜', text: 'Dinner: try Hakone soba noodles' },
    ],
    tips: [
      'Clear weather = Mt Fuji visible from Lake Ashi. Check weather morning of.',
      'All Hakone loop transport covered by Free Pass — no extra cost!',
    ],
  },
  {
    day: 5, date: 'Apr 25 (Fri)', title: 'Hakone → Kyoto ⛩️',
    city: 'Hakone → Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Travel Day + Fushimi Inari',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=75',
    summary: 'Shinkansen to Kyoto, Fushimi Inari thousand torii gates, Nishiki Market, Gion district.',
    dayCost: '¥15,000-18,000 (incl. Shinkansen if no JR Pass)',
    schedule: [
      { time: '08:00', emoji: '🍙', text: 'Breakfast, check out Hakone' },
      { time: '09:00', emoji: '🚃', text: 'Hakone-Yumoto → Odawara (15 min local train)' },
      { time: '09:30', emoji: '🚄', text: 'Shinkansen Odawara → Kyoto (2h, ¥11,000 — or JR Pass)' },
      { time: '11:30', emoji: '🏙️', text: 'Arrive Kyoto Station' },
      { time: '12:00', emoji: '🍜', text: 'Lunch: Kyoto Station Ramen Koji (10th floor, 8 ramen shops!)' },
      { time: '13:00', emoji: '🏨', text: 'Check in — Piece Hostel Kyoto or guesthouse' },
      { time: '14:00', emoji: '🚃', text: 'Bus to Fushimi Inari Taisha' },
      { time: '14:30', emoji: '⛩️', text: 'Fushimi Inari — hike the thousand torii gates (full hike 2-3h, short 30-45 min)' },
      { time: '17:00', emoji: '🚃', text: 'Bus/train back toward central Kyoto' },
      { time: '17:30', emoji: '🛍️', text: 'Nishiki Market ("Kyoto\'s Kitchen") — tamagoyaki, mochi, pickles, matcha everything' },
      { time: '19:00', emoji: '🍽️', text: 'Dinner in Nishiki area or Pontocho alley' },
      { time: '20:30', emoji: '🚶', text: 'Evening walk through Gion — spot real geishas (not costumed tourists!)' },
    ],
    tips: [
      'Fushimi Inari has NO closing time and NO entry fee',
      'Going at dawn = empty. Going at sunset = magical orange light through torii.',
    ],
  },
  {
    day: 6, date: 'Apr 26 (Sat)', title: '🚲 BICYCLE DAY — Kyoto Temple Circuit',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🚲 Bicycle Day',
    isBicycleDay: true,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=75',
    summary: '6+ major temples by bike in one day! Golden Pavilion, zen gardens, Philosopher\'s Path, Kiyomizu-dera.',
    dayCost: '¥5,000-7,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Early start! Breakfast at konbini' },
      { time: '07:30', emoji: '🚲', text: 'Rent bicycle near Kyoto Station (¥1,000-1,500 for electric assist)' },
      { time: '08:00', emoji: '🚲', text: 'Ride to Kinkaku-ji (Golden Pavilion) — 30 min ride, opens 9:00, ¥500 entry' },
      { time: '09:30', emoji: '🚲', text: 'Ride to Ryoan-ji (famous zen rock garden) — 10 min, ¥500 entry' },
      { time: '10:30', emoji: '🚲', text: 'Ride to Ninna-ji Temple — 5 min, beautiful in late April' },
      { time: '11:30', emoji: '🚲', text: 'Ride south through residential Kyoto — quiet streets, old wooden houses' },
      { time: '12:00', emoji: '☕', text: 'Lunch at a local kissaten (old-school cafe) — iced coffee + sandwich set ¥800' },
      { time: '13:00', emoji: '🚲', text: 'Philosopher\'s Path — 2km tree-lined canal, park bike and walk' },
      { time: '14:00', emoji: '🚲', text: 'Ginkaku-ji (Silver Pavilion) — ¥500 entry' },
      { time: '15:00', emoji: '🚲', text: 'Heian Shrine — massive vermillion torii gate, free entry' },
      { time: '15:30', emoji: '🚲', text: 'Ride through Higashiyama backstreets' },
      { time: '16:00', emoji: '🚲', text: 'Kiyomizu-dera area — park bike, walk up to temple — ¥400 entry' },
      { time: '17:00', emoji: '🚶', text: 'Walk down Ninenzaka & Sannenzaka (historic lanes, shops, sweets)' },
      { time: '18:00', emoji: '🚲', text: 'Return bike to station area shop' },
      { time: '18:30', emoji: '♨️', text: 'Public sento bath to recover legs! (¥490)' },
      { time: '19:30', emoji: '🍜', text: 'Dinner: Kyoto-style ramen or obanzai (home cooking)' },
    ],
    tips: [
      'Total cycling distance ~20km. Flat city, electric bike makes it easy.',
      'Ride on LEFT side of road. Don\'t ride on sidewalks. Keep bike locked!',
      'This route hits 6+ major temples in one day — would take 2 days by bus!',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Sun)', title: 'Arashiyama 🎋',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Bamboo & Mountains',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=75',
    summary: 'Bamboo Grove at dawn, monkey park, pirate ship, scenic train, Pontocho dinner.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '08:00', emoji: '🍙', text: 'Breakfast' },
      { time: '08:30', emoji: '🚃', text: 'JR Saga-Arashiyama Station (15 min from Kyoto Station)' },
      { time: '09:00', emoji: '🎋', text: 'Bamboo Grove — GO EARLY, by 10am it\'s packed with tour groups' },
      { time: '09:45', emoji: '⛩️', text: 'Tenryuji Temple — UNESCO World Heritage, beautiful garden — ¥500' },
      { time: '10:30', emoji: '🌉', text: 'Walk to Togetsukyo Bridge — 📸 Photo from south side with mountains' },
      { time: '11:00', emoji: '🐒', text: 'Iwatayama Monkey Park — 20 min hike up, feed wild monkeys! ¥550' },
      { time: '12:30', emoji: '🍜', text: 'Lunch: yudofu (Kyoto tofu hot pot) or warabi mochi' },
      { time: '13:30', emoji: '🚃', text: 'Sagano Scenic Railway — 25 min through mountain gorge ¥880' },
      { time: '14:30', emoji: '🚶', text: 'Walk along Katsura River — peaceful, fewer tourists' },
      { time: '15:30', emoji: '⛩️', text: 'Optional: Gio-ji Temple (moss garden) or Adashino Nenbutsu-ji (8,000 stone statues)' },
      { time: '16:30', emoji: '🚃', text: 'Back to central Kyoto' },
      { time: '17:00', emoji: '🛍️', text: 'Shopping in Teramachi & Shinkyogoku covered arcades' },
      { time: '18:30', emoji: '🍽️', text: 'SPECIAL: Pontocho Alley — river-facing terraces (spring terrace season!)' },
    ],
    tips: [
      'Arashiyama is one-direction: Bamboo → Temple → Bridge → Monkey Park → Train. Don\'t backtrack.',
      'Buy Scenic Railway tickets at Saga-Torokko station in the morning — books out fast!',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Mon)', title: 'Kyoto Museums + Ryokan Night 🏯',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Culture & Tradition',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=75',
    summary: '1,001 golden statues, manga museum, then special ryokan night with kaiseki dinner.',
    dayCost: '¥22,000-30,000 (incl. ryokan)',
    schedule: [
      { time: '09:00', emoji: '🍙', text: 'Breakfast, relaxed start' },
      { time: '10:00', emoji: '🏛️', text: 'Kyoto National Museum — ¥700, excellent Japanese art' },
      { time: '12:00', emoji: '⛩️', text: 'Sanjusangen-do — 1,001 golden Kannon statues, MIND-BLOWING — ¥600' },
      { time: '13:00', emoji: '🍜', text: 'Lunch: Kyoto Station area' },
      { time: '14:00', emoji: '📚', text: 'Kyoto International Manga Museum — ¥900, 300,000+ manga, sit and read for hours' },
      { time: '16:00', emoji: '🛍️', text: 'Free time: Nishiki side streets, souvenirs' },
      { time: '17:00', emoji: '🏯', text: 'SPECIAL: Ryokan check-in — tatami room, futon beds, yukata provided' },
      { time: '18:30', emoji: '🍽️', text: 'Kaiseki dinner at ryokan (multi-course traditional meal)' },
      { time: '20:00', emoji: '🚶', text: 'Gion evening walk — Hanamikoji street, Yasaka Shrine at night' },
    ],
    tips: [
      'Ryokan tip: book on Rakuten Travel or Jalan.net for best prices',
      'Even a simple ryokan is an unforgettable experience!',
      'Look for maiko (apprentice geisha) in Gion — they\'re real, not costumed tourists',
    ],
  },
  {
    day: 9, date: 'Apr 29 (Tue)', title: 'Nara Day Trip 🦌',
    city: 'Kyoto → Nagoya', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🦌 Deer Park & Travel',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=600&q=75',
    summary: 'Half day with Nara\'s bowing deer, massive Buddha, then Shinkansen to Nagoya.',
    dayCost: '¥8,000-12,000',
    schedule: [
      { time: '07:30', emoji: '📦', text: 'Check out ryokan, leave bags at Kyoto Station lockers (¥400-700)' },
      { time: '08:30', emoji: '🚃', text: 'JR Nara Line: Kyoto → Nara (45 min, ¥720)' },
      { time: '09:30', emoji: '🦌', text: 'Nara Park — FREE! Hundreds of wild deer, buy crackers ¥200 — they bow to you!' },
      { time: '10:30', emoji: '⛩️', text: 'Todai-ji — world\'s largest wooden building, massive bronze Buddha — ¥600' },
      { time: '11:30', emoji: '⛩️', text: 'Kasuga Taisha Shrine — thousands of stone lanterns — free' },
      { time: '12:30', emoji: '🍜', text: 'Lunch: Naramachi — try kakinoha sushi (persimmon leaf wrapped)' },
      { time: '13:30', emoji: '🚶', text: 'Naramachi old town — machiya houses, small museums, craft shops' },
      { time: '15:00', emoji: '🚃', text: 'Back to Kyoto, pick up bags' },
      { time: '16:00', emoji: '🚄', text: 'Shinkansen: Kyoto → Nagoya (35 min, ¥5,170)' },
      { time: '17:00', emoji: '🏨', text: 'Check in Nagoya — Toyoko Inn near station' },
      { time: '18:00', emoji: '🍽️', text: 'Dinner: Nagoya miso katsu or tebasaki wings at Yamamotoya' },
    ],
    tips: [
      'Nara is compact — everything walkable from station. Half day is enough.',
      '⚠️ GOLDEN WEEK STARTS Apr 29 — expect crowds!',
    ],
  },
  {
    day: 10, date: 'Apr 30 (Wed)', title: "Monet's Pond + Gifu Countryside 🎨",
    city: 'Nagoya/Gifu', cityColor: 'bg-purple-100 text-purple-600',
    theme: '🎨 Hidden Gem Day',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75',
    summary: 'Magical Monet\'s Pond, sword-making city of Seki, Gifu Castle panorama, Osu card shops.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '07:00', emoji: '⏰', text: 'Early start! Breakfast at hotel' },
      { time: '07:30', emoji: '🚃', text: 'Nagoya → Gifu (JR, 20 min, ¥480)' },
      { time: '08:00', emoji: '🚃', text: 'Gifu → Seki (Nagaragawa Railway, 40 min, ¥700) — scenic countryside!' },
      { time: '09:00', emoji: '✨', text: 'Monet\'s Pond (Namonaki Ike) — crystal clear water, koi fish, FREE! Best in morning light' },
      { time: '10:30', emoji: '⚔️', text: 'Seki town — Japan\'s sword-making city! Traditional Swordsmith Museum ¥300' },
      { time: '12:00', emoji: '🍜', text: 'Lunch: local Gifu cuisine' },
      { time: '13:00', emoji: '🚃', text: 'Back to Gifu city' },
      { time: '14:00', emoji: '🏯', text: 'Gifu Castle (top of Mt Kinka) — ropeway ¥1,100, panoramic views!' },
      { time: '16:00', emoji: '🚃', text: 'Back to Nagoya' },
      { time: '17:00', emoji: '🛍️', text: 'Osu Shopping District — Nagoya\'s Akihabara! Card shops with less tourist markup' },
      { time: '19:00', emoji: '🍜', text: 'Dinner: Nagoya miso nikomi udon' },
    ],
    tips: [
      'Monet\'s Pond is a hidden gem — not many foreign tourists. Truly magical.',
      'Clear day from Gifu Castle = see the Japanese Alps!',
    ],
  },
  {
    day: 11, date: 'May 1 (Thu)', title: 'Takayama — Japanese Alps 🏔️',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏔️ Alps Countryside',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Scenic alpine train ride, morning market, Edo old town, Hida beef, sake tasting, nature walk.',
    dayCost: '¥8,000-12,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast' },
      { time: '07:30', emoji: '🚃', text: 'JR Hida Limited Express: Nagoya → Takayama (2h 20min, ¥6,140) — WINDOW SEAT LEFT SIDE for mountain gorge views!' },
      { time: '10:00', emoji: '🏙️', text: 'Arrive Takayama Station' },
      { time: '10:15', emoji: '🏨', text: 'Check in hostel, drop bags' },
      { time: '10:30', emoji: '🛍️', text: 'Takayama Morning Market (Miyagawa) — crafts, pickles, fruits, mochi, sake' },
      { time: '11:30', emoji: '🏘️', text: 'Sanmachi Suji — Edo-period old town, sake breweries with free tastings 🍶' },
      { time: '12:30', emoji: '🥩', text: 'Lunch: Hida beef! Street sushi ¥600-800/pc or restaurant set ¥2-3K' },
      { time: '14:00', emoji: '🏛️', text: 'Takayama Jinya (old government building) — ¥440' },
      { time: '15:00', emoji: '🌲', text: 'Higashiyama Walking Course — 3.5km through temples and forest, almost no tourists' },
      { time: '17:00', emoji: '🚶', text: 'Back to town center' },
      { time: '17:30', emoji: '♨️', text: 'Public onsen in town (¥500-800)' },
      { time: '19:00', emoji: '🍽️', text: 'Dinner: Hida beef on houba miso (grilled on magnolia leaf)' },
    ],
    tips: [
      'Takayama is Japan\'s CHEAPEST tourist city. Hotels ¥4-6K, food ¥500-1,500.',
      'The train ride itself is an attraction — mountain gorge views the entire way!',
    ],
  },
  {
    day: 12, date: 'May 2 (Fri)', title: '🚲 BICYCLE DAY 2 — Takayama + Shirakawa-go',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🚲 Bicycle Day',
    isBicycleDay: true,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Morning cycling through rice paddies and mountains, afternoon UNESCO Shirakawa-go village.',
    dayCost: '¥7,000-10,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast' },
      { time: '07:30', emoji: '🚲', text: 'Rent bicycle from station area (¥800-1,000/day)' },
      { time: '08:00', emoji: '🚲', text: 'Ride along Miyagawa River path — flat, easy, stunning mountain backdrop' },
      { time: '09:00', emoji: '🚲', text: 'Hida Folk Village — open-air museum of thatched-roof farmhouses — ¥700' },
      { time: '10:30', emoji: '🚲', text: 'Continue through rice paddies and farmland — REAL countryside Japan' },
      { time: '12:00', emoji: '🍜', text: 'Return bike, lunch in town' },
      { time: '13:00', emoji: '🚌', text: 'Bus to Shirakawa-go (50 min, ¥2,600) — UNESCO World Heritage village!' },
      { time: '14:00', emoji: '🏘️', text: 'Walk around iconic thatched-roof gassho-zukuri farmhouses' },
      { time: '15:00', emoji: '🏔️', text: 'Shiroyama Viewpoint — 15 min hike for THE classic postcard view' },
      { time: '16:00', emoji: '🏛️', text: 'Enter house-museums (¥300-400 each)' },
      { time: '17:00', emoji: '🚌', text: 'Bus back to Takayama' },
      { time: '19:00', emoji: '🍽️', text: 'Dinner and early rest' },
    ],
    tips: [
      'Takayama cycling is FLAT and easy — perfect for casual riders',
      'Mountain views in every direction. Bring your camera!',
      'Alternative: skip Shirakawa-go bus, do full day cycling instead (~15-20km, very easy)',
    ],
  },
  {
    day: 13, date: 'May 3 (Sat)', title: 'Return to Tokyo + Last Shopping 🛍️',
    city: 'Takayama → Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: 'Travel & Final Shopping',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'Train back to Tokyo via Nagoya, last card shopping, Ameyoko Market, farewell sushi dinner.',
    dayCost: '¥10,000-15,000',
    schedule: [
      { time: '08:00', emoji: '🍙', text: 'Breakfast, check out' },
      { time: '08:30', emoji: '🚃', text: 'JR Hida Express: Takayama → Nagoya (2h 20min)' },
      { time: '11:00', emoji: '🚄', text: 'Shinkansen: Nagoya → Tokyo (1h 40min)' },
      { time: '13:00', emoji: '🏨', text: 'Arrive Tokyo, check in hotel near airport or Ueno' },
      { time: '14:00', emoji: '🃏', text: 'Last card shopping if needed — any missed targets' },
      { time: '16:00', emoji: '🛍️', text: 'Ameyoko Market (Ueno) — cheap shopping, snacks, last-minute gifts' },
      { time: '18:00', emoji: '🍣', text: 'Final dinner: splurge on sushi! Midori Sushi (Shibuya) or Sushi Zanmai' },
      { time: '20:00', emoji: '📦', text: 'Pack everything, organize cards for transport' },
    ],
    tips: [
      'Pack cards in hard-top loaders inside carry-on luggage (NEVER check valuable cards)',
    ],
  },
  {
    day: 14, date: 'May 4 (Sun)', title: 'Sayonara Japan ✈️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: 'Departure',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=75',
    summary: 'Final konbini run, head to airport, duty-free shopping, fly home!',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '08:00', emoji: '🍙', text: 'Breakfast' },
      { time: '09:00', emoji: '🏪', text: 'Final konbini run — grab snacks for the plane' },
      { time: '10:00', emoji: '📦', text: 'Check out, head to airport' },
      { time: '10:30', emoji: '🚃', text: 'Narita: Narita Express (1h) or Skyliner (41 min) / Haneda: Monorail or Keikyu' },
      { time: '12:00', emoji: '🛍️', text: 'Airport — duty-free shopping, last matcha sweets' },
      { time: '14:00', emoji: '✈️', text: 'Flight home! ありがとう日本！' },
    ],
    tips: [
      'Return Suica at airport for deposit refund (¥500). Or keep it as souvenir!',
    ],
  },
]

const cityEmojis = {
  'Tokyo': '🏙️',
  'Kyoto': '⛩️',
  'Hakone': '🏔️',
  'Nagoya/Gifu': '🏯',
  'Takayama': '🌲',
  'Tokyo → Hakone': '🚃',
  'Hakone → Kyoto': '🚄',
  'Kyoto → Nagoya': '🚄',
  'Takayama → Tokyo': '🚄',
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
            14 days, 5 cities, hour-by-hour. Less Tokyo, more countryside & nature. Tap any day for the full schedule.
          </p>
        </div>

        <div className="space-y-4">
          {days.map((day) => (
            <div
              key={day.day}
              className={`bg-white rounded-2xl shadow-sm border overflow-hidden transition-all duration-300 ${
                day.isBicycleDay ? 'border-emerald-300 ring-1 ring-emerald-200' : 'border-sakura/10'
              } ${expandedDay === day.day ? 'shadow-lg ring-2 ring-sakura/20' : 'hover:shadow-md'}`}
            >
              <button
                onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                className="w-full text-left p-4 sm:p-6 flex items-center gap-4"
              >
                {/* Day number */}
                <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center ${
                  day.isBicycleDay ? 'bg-emerald-100' : 'bg-sakura/10'
                }`}>
                  {day.isBicycleDay && <span className="text-xs">🚲</span>}
                  <span className={`text-xs font-semibold ${day.isBicycleDay ? 'text-emerald-700' : 'text-sakura-dark'}`}>
                    {day.isBicycleDay ? '' : 'DAY'}
                  </span>
                  <span className={`text-xl sm:text-2xl font-heading font-bold ${day.isBicycleDay ? 'text-emerald-700' : 'text-sakura-dark'}`}>
                    {day.day}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${day.cityColor}`}>
                      {cityEmojis[day.city] || '📍'} {day.city}
                    </span>
                    <span className="text-xs text-dark-light">{day.date}</span>
                    {day.isBicycleDay && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                        🚲 Bicycle Day
                      </span>
                    )}
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

              {/* Expanded content — hour by hour timeline */}
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
                      {/* Day cost badge */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs bg-cream px-3 py-1 rounded-full font-semibold text-dark-light">
                          💰 Est. cost: {day.dayCost}
                        </span>
                        <span className="text-xs bg-cream px-3 py-1 rounded-full font-semibold text-dark-light">
                          📍 {day.theme}
                        </span>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-2 border-l-2 border-sakura/20 pl-4 ml-1">
                        {day.schedule.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 relative">
                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-sakura/40 border-2 border-white" />
                            <span className="text-xs font-mono text-sakura-dark font-semibold whitespace-nowrap mt-0.5">
                              {item.time}
                            </span>
                            <span className="text-sm flex-shrink-0">{item.emoji}</span>
                            <span className="text-sm text-dark">{item.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tips box */}
                      {day.tips.length > 0 && (
                        <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3">
                          <p className="text-xs font-semibold text-amber-800 mb-1">💡 Tips</p>
                          {day.tips.map((tip, i) => (
                            <p key={i} className="text-xs text-amber-700 mb-0.5">• {tip}</p>
                          ))}
                        </div>
                      )}
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

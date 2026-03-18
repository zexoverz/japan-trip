import { useState } from 'react'

const days = [
  {
    day: 1, date: 'Apr 21 (Tue)', title: 'Arrive → Straight to Kyoto ⛩️',
    city: 'Tokyo → Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Arrival & Travel',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=75',
    summary: 'Land at Narita, activate JR Pass, Shinkansen straight to Kyoto. No time to waste in Tokyo!',
    dayCost: '¥5,000-8,000 (food + IC card)',
    schedule: [
      { time: '14:00', emoji: '🛬', text: 'Land at Narita Airport' },
      { time: '14:30', emoji: '🎫', text: 'Activate JR Pass at JR ticket office (have reservation ready). Get Suica/Pasmo IC card.' },
      { time: '15:00', emoji: '🚃', text: 'Narita Express → Tokyo Station (1h)' },
      { time: '16:00', emoji: '🚄', text: 'Shinkansen Tokyo → Kyoto (2h 15min, covered by JR Pass!)' },
      { time: '18:15', emoji: '🏙️', text: 'Arrive Kyoto Station — grab dinner at Ramen Koji (10th floor, 8 ramen shops!)' },
      { time: '19:30', emoji: '🏨', text: 'Check in — Piece Hostel Kyoto or guesthouse near station' },
      { time: '20:30', emoji: '🚶', text: 'Short evening walk around Kyoto Tower area if energy permits' },
      { time: '21:30', emoji: '😴', text: 'Early sleep — jetlag recovery' },
    ],
    tips: [
      'Reserve Shinkansen seats in advance at Narita JR office — Golden Week trains fill up!',
      'Buy pocket WiFi or activate eSIM at airport before leaving',
      'Konbini tip: grab breakfast supplies at FamilyMart/7-Eleven near hotel for tomorrow morning',
    ],
  },
  {
    day: 2, date: 'Apr 22 (Wed)', title: 'Fushimi Inari + Nishiki Market ⛩️',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Iconic Kyoto',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=75',
    summary: 'Thousand torii gates at dawn, Kyoto\'s Kitchen for street food, Gion geisha district at dusk.',
    dayCost: '¥4,000-6,000',
    schedule: [
      { time: '06:30', emoji: '⏰', text: 'Early wake up — beat the crowds!' },
      { time: '07:00', emoji: '🍙', text: 'Quick konbini breakfast on the go' },
      { time: '07:30', emoji: '🚃', text: 'JR Nara Line → Inari Station (5 min, ¥150)' },
      { time: '07:45', emoji: '⛩️', text: 'Fushimi Inari — start the thousand torii gates hike. At this hour = EMPTY, magical light!' },
      { time: '08:30', emoji: '📸', text: 'First viewpoint (Yotsutsuji intersection) — panoramic Kyoto view' },
      { time: '09:30', emoji: '⛩️', text: 'Summit if you\'re feeling it (2-3h total round trip) or head back down' },
      { time: '10:30', emoji: '🚃', text: 'Train back to central Kyoto' },
      { time: '11:00', emoji: '🛍️', text: 'Nishiki Market ("Kyoto\'s Kitchen") — 5 blocks of food heaven' },
      { time: '11:15', emoji: '🍢', text: 'Must try: tamagoyaki skewer, mochi balls, tsukemono pickles, matcha everything' },
      { time: '12:30', emoji: '🍜', text: 'Lunch at a Nishiki side-street restaurant — udon or obanzai set ¥800-1,200' },
      { time: '13:30', emoji: '🚶', text: 'Walk to Nijo Castle — UNESCO World Heritage, "nightingale floors" that squeak — ¥800' },
      { time: '15:00', emoji: '☕', text: 'Cafe break — try a Kyoto-style kissaten (retro coffee shop). Inoda Coffee is famous.' },
      { time: '16:00', emoji: '🛍️', text: 'Teramachi & Shinkyogoku covered shopping arcades — souvenirs, crafts' },
      { time: '17:30', emoji: '🚶', text: 'Walk to Gion district via Shijo-dori' },
      { time: '18:00', emoji: '🏮', text: 'Gion evening walk — Hanamikoji street (spot real maiko/geisha at dusk!)' },
      { time: '19:00', emoji: '🍽️', text: 'Dinner: Pontocho Alley — narrow restaurant street along Kamogawa river. Try river-side terrace!' },
      { time: '20:30', emoji: '⛩️', text: 'Yasaka Shrine — beautiful lit up at night, free entry' },
    ],
    tips: [
      'Fushimi Inari has NO closing time and NO entry fee. Dawn = best experience.',
      'Nishiki Market shops close by 17:00-18:00. Go before lunch!',
      'Gion tip: if you see geisha/maiko, don\'t chase or block them. A polite photo from distance is okay.',
    ],
  },
  {
    day: 3, date: 'Apr 23 (Thu)', title: 'Arashiyama 🎋',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Bamboo & Mountains',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=75',
    summary: 'Bamboo Grove at dawn, monkey park, iconic bridge, scenic mountain train, Pontocho dinner.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '07:30', emoji: '🍙', text: 'Breakfast' },
      { time: '08:00', emoji: '🚃', text: 'JR Sagano Line → Saga-Arashiyama (15 min from Kyoto Station)' },
      { time: '08:30', emoji: '🎋', text: 'Bamboo Grove — GO EARLY! By 10am it\'s packed with tour groups. Magical in morning light.' },
      { time: '09:15', emoji: '⛩️', text: 'Tenryuji Temple — UNESCO World Heritage, stunning garden — ¥500' },
      { time: '10:15', emoji: '🌉', text: 'Walk to Togetsukyo Bridge — THE iconic Arashiyama photo spot' },
      { time: '10:30', emoji: '📸', text: 'Photo from south side of bridge with mountains behind' },
      { time: '11:00', emoji: '🐒', text: 'Iwatayama Monkey Park — 20 min hike up, feed wild monkeys! ¥550. Panoramic Kyoto view at top.' },
      { time: '12:30', emoji: '🍜', text: 'Lunch on Arashiyama main street — yudofu (tofu hot pot) or warabi mochi' },
      { time: '13:30', emoji: '🚃', text: 'Sagano Scenic Railway (Torokko) — 25 min through mountain gorge ¥880. Buy tickets morning at Saga-Torokko station!' },
      { time: '14:30', emoji: '🚶', text: 'Walk along Katsura River — peaceful, fewer tourists on this side' },
      { time: '15:30', emoji: '⛩️', text: 'Optional: Gio-ji Temple (moss garden, very quiet) or Adashino Nenbutsu-ji (8,000 stone statues)' },
      { time: '16:30', emoji: '🚃', text: 'Train back to central Kyoto' },
      { time: '17:00', emoji: '🛍️', text: 'Free time — explore any Kyoto streets you missed' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner: try okonomiyaki or Kyoto-style ramen' },
    ],
    tips: [
      'Arashiyama is one-direction: Bamboo → Temple → Bridge → Monkey Park → Scenic Train. Don\'t backtrack.',
      'Scenic Railway books out fast in Golden Week! Buy tickets early morning.',
    ],
  },
  {
    day: 4, date: 'Apr 24 (Fri)', title: '🚲 BICYCLE DAY — Kyoto Temple Circuit',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🚲 Bicycle Day',
    isBicycleDay: true,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=75',
    summary: '6+ major temples by bike in one day! Golden Pavilion, zen gardens, Philosopher\'s Path, Kiyomizu-dera. 20km flat ride.',
    dayCost: '¥5,000-7,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Early start! Konbini breakfast' },
      { time: '07:30', emoji: '🚲', text: 'Rent bicycle near Kyoto Station — ¥1,000-1,500/day. Get electric assist! (J-Cycle or Kyoto Cycling Project)' },
      { time: '08:00', emoji: '🚲', text: 'Ride north to Kinkaku-ji (Golden Pavilion) — 30 min ride' },
      { time: '09:00', emoji: '✨', text: 'Kinkaku-ji opens — ¥500 entry. Gold pavilion reflected in mirror pond. ICONIC.' },
      { time: '09:45', emoji: '🚲', text: 'Ride to Ryoan-ji — 10 min. Famous zen rock garden — ¥500' },
      { time: '10:30', emoji: '🚲', text: 'Ninna-ji Temple — 5 min ride. Beautiful in late April, possible late cherry blossoms.' },
      { time: '11:15', emoji: '🚲', text: 'Ride south through residential Kyoto — quiet streets, old wooden houses. This IS real Kyoto.' },
      { time: '12:00', emoji: '☕', text: 'Lunch at a local kissaten (retro café) — iced coffee + sandwich set ¥800' },
      { time: '13:00', emoji: '🚶', text: 'Philosopher\'s Path (Tetsugaku no Michi) — 2km tree-lined canal. Park bike, walk this section.' },
      { time: '14:00', emoji: '🚲', text: 'Ginkaku-ji (Silver Pavilion) at end of path — ¥500 entry' },
      { time: '14:45', emoji: '🚲', text: 'Ride to Heian Shrine — massive vermillion torii gate, free entry, beautiful garden ¥600' },
      { time: '15:30', emoji: '🚲', text: 'Ride through Higashiyama backstreets toward Kiyomizu area' },
      { time: '16:00', emoji: '⛩️', text: 'Kiyomizu-dera — park bike below, walk up. Wooden terrace with stunning Kyoto panorama — ¥400' },
      { time: '17:00', emoji: '🚶', text: 'Walk down Ninenzaka & Sannenzaka — historic stone-paved lanes, shops, sweets, photo heaven' },
      { time: '18:00', emoji: '🚲', text: 'Return bike to station area' },
      { time: '18:30', emoji: '♨️', text: 'Public sento bath to recover legs! ¥490 at any neighborhood sento' },
      { time: '19:30', emoji: '🍜', text: 'Dinner: Kyoto-style ramen or obanzai (Kyoto home cooking set)' },
    ],
    tips: [
      'Total distance ~20km. FLAT city — electric bike makes it effortless.',
      'Ride on LEFT side of road. Don\'t ride on sidewalks. Keep bike locked at all times!',
      'This route hits 6+ major temples in ONE day — would take 2 days by bus/walking!',
      'Wear comfortable clothes + slip-on shoes (you\'ll remove shoes at every temple).',
    ],
  },
  {
    day: 5, date: 'Apr 25 (Sat)', title: 'Kyoto Museums + Ryokan Night 🏯',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Culture & Tradition',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=75',
    summary: '1,001 golden statues, manga museum paradise, then special ryokan night with kaiseki dinner.',
    dayCost: '¥20,000-28,000 (incl. ryokan)',
    schedule: [
      { time: '09:00', emoji: '🍙', text: 'Relaxed breakfast — you earned it after bicycle day!' },
      { time: '10:00', emoji: '🏛️', text: 'Kyoto National Museum — ¥700. Excellent Japanese art, ceramics, samurai armor' },
      { time: '12:00', emoji: '⛩️', text: 'Sanjusangen-do — 1,001 life-size golden Kannon statues in a row. MIND-BLOWING. ¥600' },
      { time: '13:00', emoji: '🍜', text: 'Lunch near Kyoto Station — try katsu curry or udon set' },
      { time: '14:00', emoji: '📚', text: 'Kyoto International Manga Museum — ¥900. Old school building converted to 300,000+ manga library. Sit on the grass and read!' },
      { time: '16:00', emoji: '🛍️', text: 'Last Kyoto souvenir shopping — Nishiki Market for food gifts, matcha sweets' },
      { time: '17:00', emoji: '🏯', text: '✨ SPECIAL: Check into traditional Ryokan in Gion area' },
      { time: '17:30', emoji: '👘', text: 'Change into yukata (provided), explore the ryokan, try the onsen/shared bath' },
      { time: '18:30', emoji: '🍽️', text: 'Kaiseki dinner — multi-course traditional meal (usually included with ryokan stay)' },
      { time: '20:00', emoji: '🏮', text: 'Evening Gion walk in yukata — Hanamikoji street is most atmospheric at night' },
      { time: '21:30', emoji: '😴', text: 'Sleep on futon in tatami room — the full experience' },
    ],
    tips: [
      'Book ryokan on Rakuten Travel or Jalan.net — better prices than booking.com for ryokan',
      'Even a ¥15,000 simple ryokan is an unforgettable experience',
      'Sanjusangen-do is one of the most underrated spots in Japan — don\'t skip it!',
    ],
  },
  {
    day: 6, date: 'Apr 26 (Sun)', title: 'Nara Day Trip 🦌',
    city: 'Kyoto → Nara', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🦌 Deer & Giant Buddha',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=600&q=75',
    summary: 'Bowing deer, world\'s largest wooden building, ancient shrines with stone lanterns.',
    dayCost: '¥4,000-6,000',
    schedule: [
      { time: '07:30', emoji: '📦', text: 'Check out ryokan (keep bags at Kyoto Station coin lockers ¥400-700 or hotel)' },
      { time: '08:00', emoji: '🍙', text: 'Breakfast at konbini' },
      { time: '08:30', emoji: '🚃', text: 'JR Nara Line: Kyoto → Nara (45 min, ¥720, covered by JR Pass!)' },
      { time: '09:15', emoji: '🦌', text: 'Nara Park — FREE! Hundreds of wild deer roaming freely' },
      { time: '09:30', emoji: '🍘', text: 'Buy deer crackers (shika senbei) ¥200 — the deer BOW before eating! 📸' },
      { time: '10:00', emoji: '⛩️', text: 'Kofuku-ji Temple — five-story pagoda (great photo with deer) — free grounds' },
      { time: '10:30', emoji: '🏛️', text: 'Todai-ji Temple — world\'s LARGEST wooden building + massive bronze Buddha — ¥600' },
      { time: '11:30', emoji: '⛩️', text: 'Walk to Kasuga Taisha Shrine — path lined with 3,000 stone lanterns — free entry' },
      { time: '12:30', emoji: '🍜', text: 'Lunch in Naramachi (old merchant district) — try kakinoha sushi (persimmon leaf wrapped)' },
      { time: '13:30', emoji: '🚶', text: 'Explore Naramachi — machiya townhouses, small museums, craft shops, sake shops' },
      { time: '15:00', emoji: '🚃', text: 'Train back to Kyoto (45 min)' },
      { time: '16:00', emoji: '📦', text: 'Pick up bags at Kyoto Station' },
      { time: '16:30', emoji: '🚄', text: 'Shinkansen: Kyoto → Nagoya (35 min, ¥5,170, covered by JR Pass!)' },
      { time: '17:15', emoji: '🏨', text: 'Check in Nagoya — Toyoko Inn near station (free breakfast included!)' },
      { time: '18:00', emoji: '🍽️', text: 'Dinner: famous Nagoya miso katsu at Yamamotoya or tebasaki chicken wings at Sekai no Yamachan' },
      { time: '20:00', emoji: '🚶', text: 'Evening walk around Nagoya Station area — big city, bright lights' },
    ],
    tips: [
      'Nara is compact — everything walkable from station. Half day is perfect.',
      'Don\'t tease the deer — they CAN headbutt! Show empty hands when crackers run out.',
      'Todai-ji Buddha is 15 meters tall — genuinely awe-inspiring even if you\'re not religious.',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Mon)', title: "Monet's Pond + Gifu Countryside 🎨",
    city: 'Nagoya/Gifu', cityColor: 'bg-purple-100 text-purple-600',
    theme: '🎨 Hidden Gem Day',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75',
    summary: 'The magical Monet\'s Pond, Japan\'s sword-making city, mountain castle panorama, Osu card shops.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '07:00', emoji: '⏰', text: 'Early start! Free breakfast at Toyoko Inn' },
      { time: '07:30', emoji: '🚃', text: 'JR: Nagoya → Gifu (20 min, ¥480, JR Pass!)' },
      { time: '08:00', emoji: '🚃', text: 'Nagaragawa Railway: Gifu → Seki (40 min, ¥700) — scenic countryside railway! Rice paddies, mountains, rural Japan.' },
      { time: '09:00', emoji: '🚶', text: 'Walk or taxi to Monet\'s Pond (15 min from station)' },
      { time: '09:15', emoji: '✨', text: 'Monet\'s Pond (Namonaki Ike) — crystal clear water, colorful koi fish, water lilies. Looks EXACTLY like a Monet painting. FREE!' },
      { time: '09:45', emoji: '📸', text: 'Best photos in morning light — avoid noon glare. Walk around Nemichi Shrine grounds.' },
      { time: '10:30', emoji: '⚔️', text: 'Seki town exploration — Japan\'s famous sword-making city since the 1300s!' },
      { time: '11:00', emoji: '🏛️', text: 'Seki Traditional Swordsmith Museum — ¥300. See real katana forging techniques. Live demos on certain days!' },
      { time: '12:00', emoji: '🍜', text: 'Lunch: local Gifu cuisine — try keichan (Gifu chicken stir-fry, local specialty)' },
      { time: '13:00', emoji: '🚃', text: 'Train back to Gifu city' },
      { time: '14:00', emoji: '🏯', text: 'Gifu Castle (top of Mt Kinka) — ropeway up ¥1,100 round trip' },
      { time: '14:30', emoji: '📸', text: 'PANORAMIC VIEW — Nagara River, surrounding mountains. Clear day = see the Japanese Alps!' },
      { time: '15:30', emoji: '🚃', text: 'Train back to Nagoya (20 min)' },
      { time: '16:30', emoji: '🛍️', text: 'Osu Shopping District — Nagoya\'s Akihabara! Retro games, card shops (check for deals!), street food, vintage clothes' },
      { time: '18:30', emoji: '🍜', text: 'Dinner: Nagoya miso nikomi udon (hearty miso stew noodles — Nagoya specialty)' },
      { time: '20:00', emoji: '🚶', text: 'Walk around Sakae district if you want nightlife vibes' },
    ],
    tips: [
      'Monet\'s Pond is a hidden gem — very few foreign tourists. Truly magical in morning light.',
      'Osu card shops have LESS tourist markup than Akihabara — check prices here!',
      'Nagoya food is underrated: miso everything, tebasaki wings, kishimen noodles.',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Tue)', title: 'Takayama — Japanese Alps 🏔️',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏔️ Alps Countryside',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Scenic alpine train, morning market, Edo old town, Hida beef sushi, free sake tasting, forest walk.',
    dayCost: '¥8,000-12,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Free breakfast at Toyoko Inn, check out' },
      { time: '07:30', emoji: '🚃', text: 'JR Hida Limited Express: Nagoya → Takayama (2h 20min, ¥6,140 or JR Pass)' },
      { time: '07:35', emoji: '🪟', text: '⚠️ WINDOW SEAT LEFT SIDE! Stunning mountain gorge views the entire way. The train ride is an attraction itself.' },
      { time: '10:00', emoji: '🏙️', text: 'Arrive Takayama — small, walkable mountain town' },
      { time: '10:15', emoji: '🏨', text: 'Check in hostel/guesthouse (¥4-6K, cheapest tourist city in Japan!), drop bags' },
      { time: '10:30', emoji: '🛍️', text: 'Takayama Morning Market (Miyagawa, along the river) — until 12:00. Local crafts, pickles, fruits, mochi, fresh produce.' },
      { time: '11:30', emoji: '🏘️', text: 'Sanmachi Suji — preserved Edo-period old town. THIS is old Japan.' },
      { time: '11:45', emoji: '🍶', text: 'Sake brewery tour — look for sugidama (cedar balls) outside = free tasting inside! 3+ breweries on this street.' },
      { time: '12:30', emoji: '🥩', text: 'LUNCH: Hida Beef! Options: street sushi ¥600-800/piece (worth every yen!) or restaurant set ¥2-3K. Rivals Kobe beef at half the price.' },
      { time: '14:00', emoji: '🏛️', text: 'Takayama Jinya — Edo-era government building, beautifully preserved — ¥440' },
      { time: '15:00', emoji: '🌲', text: 'Higashiyama Walking Course — 3.5km trail through temples, shrines, and forest on town outskirts. Almost NO tourists.' },
      { time: '17:00', emoji: '🚶', text: 'Back to town center' },
      { time: '17:30', emoji: '♨️', text: 'Public onsen — several in town (¥500-800). Hot spring bath with mountain views!' },
      { time: '19:00', emoji: '🍽️', text: 'Dinner: Hida beef on houba miso (grilled on magnolia leaf — Takayama specialty)' },
      { time: '20:30', emoji: '🍺', text: 'Optional: local izakaya — Takayama nightlife is small but cozy' },
    ],
    tips: [
      'Takayama is Japan\'s CHEAPEST tourist city. Hotels ¥4-6K, food ¥500-1,500, most things free or cheap.',
      'Morning market ends at noon — don\'t go in the afternoon!',
      'Hida beef sushi on the street is the best ¥600 you\'ll spend in Japan.',
    ],
  },
  {
    day: 9, date: 'Apr 29 (Wed)', title: '🚲 BICYCLE DAY 2 — Takayama + Shirakawa-go',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🚲 Bicycle Day',
    isBicycleDay: true,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Morning cycling through rice paddies with mountain backdrop, afternoon UNESCO World Heritage village.',
    dayCost: '¥7,000-10,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast at guesthouse or konbini' },
      { time: '07:30', emoji: '🚲', text: 'Rent bicycle from station area (¥800-1,000/day) — flat terrain, easy riding' },
      { time: '08:00', emoji: '🚲', text: 'Ride along Miyagawa River path — flat, easy, stunning mountain backdrop everywhere' },
      { time: '08:30', emoji: '📸', text: 'Stop at red Nakabashi Bridge — THE photo spot in Takayama' },
      { time: '09:00', emoji: '🚲', text: 'Ride to Hida Folk Village (Hida no Sato) — open-air museum of traditional thatched-roof farmhouses — ¥700' },
      { time: '10:00', emoji: '🚲', text: 'Continue riding through rice paddies and farmland outside town. REAL countryside Japan — no tourists, just mountains and green fields.' },
      { time: '11:00', emoji: '📸', text: 'Find a quiet spot by the river — mountain reflections, total peace' },
      { time: '12:00', emoji: '🚲', text: 'Return bike. Lunch in town — try Takayama ramen (soy sauce based, curly noodles)' },
      { time: '13:00', emoji: '🚌', text: 'Nohi Bus: Takayama → Shirakawa-go (50 min, ¥2,600 one-way). Book in advance during Golden Week!' },
      { time: '14:00', emoji: '🏘️', text: 'Shirakawa-go — UNESCO World Heritage village! Iconic thatched-roof gassho-zukuri farmhouses in mountain valley.' },
      { time: '14:30', emoji: '🚶', text: 'Walk around village — enter house-museums (¥300-400 each), see 250+ year old buildings still lived in' },
      { time: '15:30', emoji: '🏔️', text: 'Hike to Shiroyama Viewpoint (15 min) — THE classic postcard view of the entire village. MUST DO.' },
      { time: '16:30', emoji: '📸', text: 'Last photos, browse local shops for souvenirs' },
      { time: '17:00', emoji: '🚌', text: 'Bus back to Takayama (50 min)' },
      { time: '18:30', emoji: '🍽️', text: 'Farewell Takayama dinner — one more round of Hida beef?' },
      { time: '20:00', emoji: '😴', text: 'Early rest — travel day tomorrow' },
    ],
    tips: [
      'Takayama cycling is FLAT and easy — perfect for casual riders. Mountain views every direction.',
      '⚠️ Apr 29 = Golden Week starts! Shirakawa-go bus WILL sell out. Book at Takayama bus terminal the day before!',
      'Shirakawa-go viewpoint is the #1 photo — don\'t skip the 15 min hike.',
    ],
  },
  {
    day: 10, date: 'Apr 30 (Thu)', title: 'Takayama → Hakone 🏔️',
    city: 'Takayama → Hakone', cityColor: 'bg-green-100 text-green-700',
    theme: 'Travel + Onsen Evening',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Scenic train through Japanese Alps, transfer in Nagoya, arrive Hakone for onsen and nature.',
    dayCost: '¥8,000-12,000 (mostly transport)',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast, check out' },
      { time: '08:00', emoji: '🚃', text: 'JR Hida Express: Takayama → Nagoya (2h 20min, JR Pass)' },
      { time: '10:30', emoji: '🚄', text: 'Shinkansen: Nagoya → Odawara (1h 45min, JR Pass)' },
      { time: '12:15', emoji: '🍜', text: 'Quick lunch at Odawara Station' },
      { time: '12:45', emoji: '🚃', text: 'Hakone Tozan Railway or bus → Hakone-Yumoto (15 min)' },
      { time: '13:30', emoji: '🏨', text: 'Check in Hakone guesthouse or hostel' },
      { time: '14:00', emoji: '🎫', text: 'Buy Hakone Free Pass (¥6,100, 2-day) — covers ALL transport in Hakone!' },
      { time: '14:30', emoji: '🚶', text: 'Explore Hakone-Yumoto town — small shops, mochi stores, souvenir streets' },
      { time: '16:00', emoji: '♨️', text: 'Tenzan Tojikyou Onsen (¥1,300) — outdoor bath in the FOREST. Multiple pools, waterfalls. Heaven.' },
      { time: '18:30', emoji: '🍜', text: 'Dinner: try Hakone soba noodles (local specialty) or tonkatsu' },
      { time: '20:00', emoji: '😴', text: 'Early sleep — big Hakone loop day tomorrow!' },
    ],
    tips: [
      'Hakone Free Pass is ESSENTIAL — saves money and covers all loop transport.',
      'Tenzan onsen allows tattoos (many onsen don\'t). Natural forest setting is incredible.',
      'Travel day = good time to rest your legs from Takayama cycling.',
    ],
  },
  {
    day: 11, date: 'May 1 (Fri)', title: 'Hakone Loop — Mt Fuji Views 🗻',
    city: 'Hakone', cityColor: 'bg-green-100 text-green-700',
    theme: '🗻 Nature & Views',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Mountain train, ropeway over volcanic valley, pirate ship on lake, Hakone Shrine, onsen.',
    dayCost: '¥3,000-5,000 (Free Pass covers transport!)',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Breakfast at guesthouse' },
      { time: '08:00', emoji: '🚃', text: 'Start Hakone Loop! Hakone-Yumoto → Tozan Railway (switchback mountain train, 40 min) → Gora' },
      { time: '08:45', emoji: '🚡', text: 'Gora → Cable Car (10 min) → Sounzan' },
      { time: '09:00', emoji: '🚡', text: 'Sounzan → Ropeway → Owakudani (volcanic valley! Steam, sulfur, dramatic landscape)' },
      { time: '09:30', emoji: '🥚', text: 'Eat Owakudani black egg — boiled in volcanic hot springs! Legend: adds 7 years to your life. ¥500 for 5 eggs.' },
      { time: '10:00', emoji: '📸', text: 'MT FUJI VIEW from Owakudani (weather permitting!) — check forecast morning of' },
      { time: '10:30', emoji: '🚡', text: 'Continue ropeway → Togendai (lakeside)' },
      { time: '11:00', emoji: '🚢', text: 'Pirate Ship cruise across Lake Ashi (30 min) — scenic lake with mountains. Look for Fuji-san!' },
      { time: '11:30', emoji: '⚓', text: 'Arrive Moto-Hakone' },
      { time: '12:00', emoji: '🍜', text: 'Lunch at lakeside restaurant — view of lake + torii gate' },
      { time: '13:00', emoji: '⛩️', text: 'Hakone Shrine — walk through the famous red torii gate on the lake. Ancient cedar forest path.' },
      { time: '13:30', emoji: '📸', text: 'THE photo: red torii gate standing in Lake Ashi with mountains behind' },
      { time: '14:30', emoji: '🚶', text: 'Walk the Old Tokaido Cedar Avenue — 400-year old cedar trees along the ancient highway' },
      { time: '15:30', emoji: '🚌', text: 'Bus back to Hakone-Yumoto (Free Pass)' },
      { time: '16:30', emoji: '♨️', text: 'One more onsen session! Kappa Tengoku (¥800) — open-air riverside bath' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner in Hakone-Yumoto' },
      { time: '20:00', emoji: '📦', text: 'Pack up — heading to Tokyo tomorrow for the main event!' },
    ],
    tips: [
      'Mt Fuji visible only on clear days — check weather at hakone-ropeway.co.jp',
      'Do the loop CLOCKWISE (Tozan → Ropeway → Ship → Bus) for best experience',
      'All transport today covered by Hakone Free Pass — zero extra cost!',
    ],
  },
  {
    day: 12, date: 'May 2 (Sat)', title: 'Card Hunting Day 🃏',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: '🃏 THE Card Hunt',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'THE day. Akihabara + Nakano Broadway. Hunt for Munch Psyduck, Magikarp AR, OP manga arts. All day mission.',
    dayCost: '¥3,000-5,000 (food) + CARD BUDGET',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Early breakfast — fuel up for the hunt!' },
      { time: '07:30', emoji: '🚃', text: 'Hakone-Yumoto → Odawara → Shinkansen to Tokyo (1.5h total, JR Pass)' },
      { time: '09:00', emoji: '🏨', text: 'Drop bags at hotel near Ueno or Akihabara (coin locker if no early check-in)' },
      { time: '09:30', emoji: '📱', text: 'Open SNKR Dunk on phone — have target prices ready for comparison' },
      { time: '10:00', emoji: '🃏', text: 'Mandarake Complex Akihabara — floors 3-5 for TCG. Check graded PSA slabs, vintage promos.' },
      { time: '11:30', emoji: '🃏', text: 'Surugaya Akihabara — multiple locations on Chuo-dori. Compare prices across stores!' },
      { time: '12:30', emoji: '🍜', text: 'Lunch: ramen street under Akihabara station (fast, cheap, good)' },
      { time: '13:30', emoji: '🃏', text: 'Card Rush Akihabara — good selection of modern PSA slabs' },
      { time: '14:30', emoji: '🃏', text: 'Yuyu-tei physical store — best for One Piece raw singles. Same prices as online!' },
      { time: '15:30', emoji: '🃏', text: 'Book Off Akihabara — check glass display cases for random steals. Sometimes gold here.' },
      { time: '16:30', emoji: '🚃', text: 'Train to Nakano (JR Chuo Line, 15 min from Akihabara)' },
      { time: '17:00', emoji: '🏪', text: '🎯 Mandarake Nakano Broadway — THE BEST for vintage/museum promos. MUNCH PSYDUCK HUNT HERE! Check floors 2-4.' },
      { time: '18:30', emoji: '🔍', text: 'If not found at Mandarake: try other Nakano Broadway shops — several card stores in the building' },
      { time: '19:30', emoji: '🍺', text: 'Dinner near Nakano — great cheap izakaya area. Celebrate your haul!' },
      { time: '21:00', emoji: '📦', text: 'Back to hotel. Organize all card purchases. Put slabs in hard-top loaders for carry-on.' },
    ],
    tips: [
      '🎯 PRIMARY TARGET: Munch Psyduck PSA 10 (SM-P 286) — buy under ¥220K immediately!',
      '🎯 Magikarp AR Triplet Beat PSA 10 — ¥33K target',
      '🎯 OP manga art parallels from early sets (OP01-OP04)',
      'Check SNKR Dunk prices on phone BEFORE every purchase!',
      'Tax-free: spend ¥5,000+ at one store → show passport → no tax! Works at big card shops.',
      'Carry CASH — some smaller card shops are cash-only.',
      'Don\'t buy English cards in Japan — they\'re cheaper online.',
    ],
  },
  {
    day: 13, date: 'May 3 (Sun)', title: 'Tokyo Flea Market + Last Shopping 🛍️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: '🛍️ Flea Market Day',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75',
    summary: 'Oedo Antique Market (1st Sunday!), any remaining card shops, Ameyoko Market, farewell sushi dinner.',
    dayCost: '¥8,000-15,000',
    schedule: [
      { time: '07:00', emoji: '🍙', text: 'Early breakfast' },
      { time: '08:00', emoji: '🚃', text: 'Head to Tokyo International Forum (Yurakucho Station)' },
      { time: '09:00', emoji: '🛍️', text: '✨ Oedo Antique Market — Japan\'s largest outdoor antique market! 1st & 3rd Sunday = today! ~250 vendors.' },
      { time: '09:30', emoji: '🏺', text: 'Browse: vintage kimono, ceramics, old woodblock prints, antique toys, retro cameras, military items' },
      { time: '10:30', emoji: '💰', text: 'Negotiate! Cash is king at flea markets. Polite haggling is expected (10-20% off asking price).' },
      { time: '12:00', emoji: '🍜', text: 'Lunch: Tsukiji Outer Market (10 min walk) — tamagoyaki, fresh seafood, tuna bowls' },
      { time: '13:30', emoji: '🚃', text: 'Optional: any last card shops you missed, or Akihabara return for final picks' },
      { time: '15:00', emoji: '🛍️', text: 'Ameyoko Market (Ueno) — cheap street shopping, snacks, spices, dried fruits, army surplus' },
      { time: '16:30', emoji: '🏪', text: 'Don Quijote — last-minute gifts, Japanese snacks, electronics, weird stuff' },
      { time: '17:30', emoji: '🚶', text: 'Shimokitazawa vintage shops if time (daily vintage market vibe — clothes, records, antiques)' },
      { time: '19:00', emoji: '🍣', text: 'FAREWELL DINNER: Splurge on sushi! Options: Midori Sushi (Shibuya, great value), Sushi Zanmai (Tsukiji, 24h), or any kaiten-zushi (conveyor belt)' },
      { time: '21:00', emoji: '📦', text: 'PACK EVERYTHING. Cards in hard-top loaders → carry-on bag. Souvenirs in checked luggage.' },
      { time: '22:00', emoji: '😴', text: 'Last night in Japan. おやすみ！' },
    ],
    tips: [
      'Oedo Antique Market: 9AM-3PM, rain or shine. Come early for best selection!',
      'Flea market is CASH ONLY. Bring ¥20,000+ in cash.',
      'Tsukiji Outer Market is busiest 9-11AM. Go after noon for shorter lines.',
      'Pack cards in carry-on ONLY. Never check valuable cards — airlines lose luggage.',
    ],
  },
  {
    day: 14, date: 'May 4 (Mon)', title: 'Sayonara Japan ✈️',
    city: 'Tokyo', cityColor: 'bg-sky/20 text-sky',
    theme: '✈️ Departure',
    isBicycleDay: false,
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=75',
    summary: 'Final konbini run for plane snacks, head to airport, duty-free matcha, fly home with memories.',
    dayCost: '¥3,000-5,000',
    schedule: [
      { time: '08:00', emoji: '🍙', text: 'Breakfast — last Japanese konbini meal! Get an egg sandwich + onigiri + milk tea.' },
      { time: '09:00', emoji: '🏪', text: 'Final konbini run — plane snacks (Tokyo Banana, KitKat flavors, matcha Pocky)' },
      { time: '09:30', emoji: '📦', text: 'Final check: all cards secure in carry-on? Passport? WiFi returned? Suica card?' },
      { time: '10:00', emoji: '🏨', text: 'Check out hotel' },
      { time: '10:30', emoji: '🚃', text: 'Head to airport — Narita: Narita Express (1h, ¥3,250) or Skyliner (41 min, ¥2,520) / Haneda: Monorail (15 min) or Keikyu Line' },
      { time: '12:00', emoji: '🛍️', text: 'Airport duty-free — last chance for matcha sweets, Japanese whisky, cosmetics' },
      { time: '13:00', emoji: '🍜', text: 'Airport lunch — surprisingly good ramen at Narita/Haneda food courts' },
      { time: '14:00', emoji: '✈️', text: 'Board flight. ありがとう日本！See you next time! 🇯🇵' },
    ],
    tips: [
      'Return Suica at airport for ¥500 deposit refund. Or keep it as a souvenir — your call!',
      'Duty-free prices are actually good for Royce chocolate and Japanese whisky.',
      'Arrive 3 hours early for international flights during Golden Week!',
    ],
  },
]

const cityEmojis = {
  'Tokyo': '🏙️',
  'Kyoto': '⛩️',
  'Hakone': '🏔️',
  'Nagoya/Gifu': '🏯',
  'Takayama': '🌲',
  'Tokyo → Kyoto': '🚄',
  'Kyoto → Nara': '🦌',
  'Takayama → Hakone': '🚃',
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
            14 days, 5 cities. Kyoto first, countryside middle, Tokyo last for cards & flea market. Tap any day for hour-by-hour schedule.
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

                <div className={`flex-shrink-0 transition-transform duration-300 ${expandedDay === day.day ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-sakura" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

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
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs bg-cream px-3 py-1 rounded-full font-semibold text-dark-light">
                          💰 Est. cost: {day.dayCost}
                        </span>
                        <span className="text-xs bg-cream px-3 py-1 rounded-full font-semibold text-dark-light">
                          📍 {day.theme}
                        </span>
                      </div>

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

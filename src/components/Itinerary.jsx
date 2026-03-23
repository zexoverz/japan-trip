import { useState } from 'react'

const days = [
  {
    day: 1, date: 'Apr 21 (Mon)', title: 'Arrive → Straight to Kyoto ⛩️',
    city: 'Tokyo → Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Arrival & Travel',
    isBicycleDay: false,
    fitness: { type: 'rest', label: '😴 REST DAY', detail: 'Travel day + jetlag. Sleep early, recover for tomorrow.' },
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
    day: 2, date: 'Apr 22 (Tue)', title: 'Fushimi Inari + Nishiki Market ⛩️',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Iconic Kyoto',
    isBicycleDay: false,
    fitness: { type: 'run+push', label: '🏃 5AM Run + 💪 Push', detail: '5:00 Run Kamogawa River (5-8km) → 5:45 Back at hotel → Push workout: push-ups 4×15, diamond push-ups 3×12, pike push-ups 3×10, chair dips 3×12, plank 3×45s, crunches 3×20. Done by 6:15. Shower → breakfast → day starts fresh.', run: 'Kamogawa River Path, 5-8km' },
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=75',
    summary: 'Thousand torii gates at dawn, Kyoto\'s Kitchen for street food, Gion geisha district at dusk.',
    dayCost: '¥4,000-6,000',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Kamogawa River Path (5-8km) — flat, river reflections at dawn. East bank, Gojo → Demachiyanagi → back.' },
      { time: '05:45', emoji: '💪', text: 'PUSH: Push-ups 4×15, diamond push-ups 3×12, pike push-ups 3×10, chair dips 3×12, plank 3×45s, crunches 3×20, mountain climbers 3×30s' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → ready' },
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
    day: 3, date: 'Apr 23 (Wed)', title: 'Arashiyama 🎋',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Bamboo & Mountains',
    isBicycleDay: false,
    fitness: { type: 'legs', label: '🦵 5:30 Legs + Explosive', detail: '5:30 in room: Squats 4×20, Bulgarian split squats 3×12 each, jump squats 3×10, walking lunges 3×12, calf raises 4×20, glute bridges 3×15. Done by 6:00. Bonus: box jumps on park bench during Arashiyama walk.' },
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=75',
    summary: 'Bamboo Grove at dawn, monkey park, iconic bridge, scenic mountain train.',
    dayCost: '¥5,000-8,000',
    schedule: [
      { time: '05:30', emoji: '🦵', text: 'LEGS: Squats 4×20, Bulgarian split squats 3×12 each, jump squats 3×10, walking lunges 3×12, calf raises 4×20, glute bridges 3×15' },
      { time: '06:00', emoji: '🚿', text: 'Shower → breakfast → ready' },
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
    day: 4, date: 'Apr 24 (Thu)', title: '🚲 BICYCLE DAY — Kyoto Temple Circuit',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🚲 Bicycle Day',
    isBicycleDay: true,
    fitness: { type: 'bike+pull', label: '🚲 Cycling + 🦾 5:30 Pull', detail: '5:30 in room before cycling: Doorframe rows 4×12, superman holds 3×30s, reverse snow angels 3×15, backpack curls 3×15, plank shoulder taps 3×20, dead bugs 3×10. Done by 6:00 → breakfast → bike day starts 7:30.' },
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=75',
    summary: '6+ major temples by bike in one day! Golden Pavilion, zen gardens, Philosopher\'s Path, Kiyomizu-dera. 20km flat ride.',
    dayCost: '¥5,000-7,000',
    schedule: [
      { time: '05:30', emoji: '🦾', text: 'PULL: Doorframe rows 4×12, superman holds 3×30s, reverse snow angels 3×15, backpack curls 3×15, plank shoulder taps 3×20' },
      { time: '06:00', emoji: '🚿', text: 'Shower → konbini breakfast' },
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
    day: 5, date: 'Apr 25 (Fri)', title: 'Sanjusangen-do + Nara Day Trip 🦌',
    city: 'Kyoto → Nara', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🦌 Temples & Deer',
    isBicycleDay: false,
    fitness: { type: 'push', label: '💪 5:30 Push Day', detail: '5:30 in room: Push-ups (wide) 4×15, diamond push-ups 3×12, pike push-ups 3×10, chair dips 3×12, plank 3×45s, bicycle crunches 3×20, mountain climbers 3×30s. Done by 6:00.' },
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=600&q=75',
    summary: '1,001 golden statues in the morning, bowing deer and giant Buddha in the afternoon. Last night in Kyoto!',
    dayCost: '¥5,000-7,000',
    schedule: [
      { time: '05:30', emoji: '💪', text: 'PUSH: Push-ups (wide) 4×15, diamond push-ups 3×12, pike push-ups 3×10, chair dips 3×12, plank 3×45s, bicycle crunches 3×20, mountain climbers 3×30s' },
      { time: '06:00', emoji: '🚿', text: 'Shower → breakfast → ready' },
      { time: '08:30', emoji: '🏛️', text: 'Sanjusangen-do — 1,001 life-size golden Kannon statues in a row. MIND-BLOWING. ¥600' },
      { time: '09:30', emoji: '🚃', text: 'JR Nara Line: Kyoto → Nara (45 min, ¥720, covered by JR Pass!)' },
      { time: '10:15', emoji: '🦌', text: 'Nara Park — FREE! Hundreds of wild deer roaming freely' },
      { time: '10:30', emoji: '🍘', text: 'Buy deer crackers (shika senbei) ¥200 — the deer BOW before eating! 📸' },
      { time: '11:00', emoji: '🏛️', text: 'Todai-ji Temple — world\'s LARGEST wooden building + massive bronze Buddha — ¥600' },
      { time: '12:00', emoji: '🍜', text: 'Lunch in Naramachi (old merchant district) — try kakinoha sushi (persimmon leaf wrapped)' },
      { time: '13:00', emoji: '⛩️', text: 'Kasuga Taisha Shrine — path lined with 3,000 stone lanterns — free entry' },
      { time: '14:00', emoji: '🚶', text: 'Explore Naramachi — machiya townhouses, craft shops, sake shops' },
      { time: '15:00', emoji: '🚃', text: 'Train back to Kyoto (45 min)' },
      { time: '16:00', emoji: '🛍️', text: 'Last Kyoto souvenir shopping — Nishiki Market for food gifts, matcha sweets' },
      { time: '17:30', emoji: '🏮', text: 'Farewell Gion walk — Hanamikoji street at golden hour' },
      { time: '18:30', emoji: '🍽️', text: 'Farewell Kyoto dinner: Pontocho Alley river-side terrace' },
      { time: '20:30', emoji: '📦', text: 'Pack up — checkout tomorrow morning!' },
    ],
    tips: [
      'Sanjusangen-do is one of the most underrated spots in Japan — don\'t skip it!',
      'Nara is compact — everything walkable from station. Half day is perfect.',
      'Don\'t tease the deer — they CAN headbutt! Show empty hands when crackers run out.',
      'Todai-ji Buddha is 15 meters tall — genuinely awe-inspiring.',
    ],
  },
  {
    day: 6, date: 'Apr 26 (Sat)', title: 'Kyoto → Gifu Ryokan 🏯♨️',
    city: 'Kyoto → Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '♨️ Ryokan & Onsen',
    isBicycleDay: false,
    fitness: { type: 'run', label: '🏃 5AM Kamogawa Run', detail: '5:00 Last Kamogawa River run (5km easy). Farewell Kyoto. Run → shower → check out → go.', run: 'Kamogawa River Path, 5km easy' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Farewell Kyoto → Shinkansen to Gifu. Castle on a mountain, Great Buddha, then check into riverside ryokan for kaiseki + onsen.',
    dayCost: '¥18,000-30,000 (ryokan w/ 2 meals)',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Last Kamogawa River run (5km easy). Farewell Kyoto morning 🌅' },
      { time: '05:40', emoji: '🚿', text: 'Shower → final pack → breakfast' },
      { time: '08:00', emoji: '📦', text: 'CHECK OUT hostel. Walk to Kyoto Station.' },
      { time: '08:30', emoji: '🚄', text: 'Shinkansen: Kyoto → Gifu-Hashima (28 min, covered by JR Pass!)' },
      { time: '09:00', emoji: '🚃', text: 'JR local: Gifu-Hashima → Gifu Station (10 min)' },
      { time: '09:15', emoji: '🔒', text: 'Drop bags at coin locker (or walk to ryokan if early check-in available)' },
      { time: '09:45', emoji: '🚡', text: 'Gifu Castle Ropeway up Mt. Kinka (¥1,100 round trip) — castle on a mountain!' },
      { time: '10:00', emoji: '🏯', text: 'Gifu Castle — panoramic city + river + mountain view. Clear day = you can see the Alps!' },
      { time: '11:00', emoji: '🚡', text: 'Ropeway down. Walk through Gifu Park.' },
      { time: '11:30', emoji: '🗿', text: 'Gifu Great Buddha (Shōhō-ji) — one of Japan\'s 3 great Buddhas, made of lacquered paper! Unique. ¥200' },
      { time: '12:30', emoji: '🍜', text: 'Lunch in Kawaramachi old town — local Gifu cuisine, ayu sweetfish if in season' },
      { time: '14:00', emoji: '🏯', text: '✨ CHECK IN RYOKAN — change into yukata, receive tea + sweets welcome, explore the building' },
      { time: '15:00', emoji: '♨️', text: 'First onsen soak — afternoon bath is quiet, barely anyone. Soak in the river-view tub.' },
      { time: '16:30', emoji: '🚶', text: 'Walk along Nagara River in yukata — beautiful at golden hour' },
      { time: '18:00', emoji: '🍽️', text: '🌟 KAISEKI DINNER — multi-course feast served in your room or private dining. THE meal of the trip. 1.5 hours of culinary art.' },
      { time: '20:00', emoji: '♨️', text: 'Night onsen — soak under the stars. This is what you came for.' },
      { time: '21:00', emoji: '😴', text: 'Sleep on futon, tatami room. Total peace.' },
    ],
    tips: [
      'Ryokan check-in is usually 15:00. Drop bags and explore Gifu in the morning!',
      'Kaiseki dinner is included — don\'t eat a big lunch or you won\'t enjoy it fully.',
      'Onsen etiquette: wash thoroughly at shower stations before entering the bath. No swimwear!',
      'Gifu Castle ropeway opens 9:00. Go first thing for best views.',
      'Gifu is NOT a tourist city — you\'ll barely see other foreigners. That\'s the charm.',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Sun)', title: '♨️ Slow Ryokan Morning + Monet\'s Pond 🎨',
    city: 'Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '🎨 Hidden Gem Day',
    isBicycleDay: false,
    fitness: { type: 'rest', label: '😌 SLOW DAY', detail: 'No workout. Dawn onsen replaces the gym. Let your body recover — you\'ve earned it after 5 days of Kyoto.' },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75',
    summary: 'Dawn onsen, traditional ryokan breakfast, then drive to the magical Monet\'s Pond. Afternoon explore Gifu at your pace.',
    dayCost: '¥8,000-12,000 (rental car + food)',
    schedule: [
      { time: '06:00', emoji: '♨️', text: 'Dawn onsen — barely anyone, sunrise light on the water. Best soak of the trip.' },
      { time: '07:00', emoji: '🍽️', text: 'Ryokan breakfast — massive traditional spread: grilled fish, rice, miso, pickles, egg, nori, tofu. All included.' },
      { time: '08:30', emoji: '☕', text: 'Slow morning — second cup of tea, pack bags, enjoy the tatami room one last time' },
      { time: '09:30', emoji: '📦', text: 'CHECK OUT ryokan' },
      { time: '10:00', emoji: '🚗', text: 'Pick up rental car at Gifu Station area (~¥5,000-8,000 half day)' },
      { time: '10:45', emoji: '🎨', text: 'Drive to Monet\'s Pond (40 min) — through scenic Gifu countryside' },
      { time: '11:30', emoji: '✨', text: 'Monet\'s Pond (Namonaki Ike) — crystal clear water, colorful koi, water lilies. Looks EXACTLY like a Monet painting. FREE!' },
      { time: '12:00', emoji: '📸', text: 'Photos at different angles. Walk around Nemichi Shrine grounds. Total serenity.' },
      { time: '12:30', emoji: '🍜', text: 'Lunch at a local mountain restaurant near the pond — soba noodles or mountain vegetables' },
      { time: '13:30', emoji: '🚗', text: 'Drive back to Gifu (40 min). Scenic route through rural Japan.' },
      { time: '14:15', emoji: '🚗', text: 'Return rental car at Gifu Station' },
      { time: '14:30', emoji: '🚶', text: 'Explore anything you missed — Kawaramachi shopping, riverside walk, craft shops' },
      { time: '15:30', emoji: '🍵', text: 'Find a local café or tea house. No rush — enjoy Gifu at walking pace.' },
      { time: '16:30', emoji: '🛍️', text: 'Last souvenir browse or just sit by the Nagara River and watch life pass by' },
      { time: '18:00', emoji: '🍽️', text: 'Dinner near Gifu Station — try kushikatsu or local izakaya. Budget-friendly tonight (no kaiseki!)' },
      { time: '19:30', emoji: '🏨', text: 'Check in budget hotel near Gifu Station for the night (Dormy Inn, Daiwa Roynet, etc.)' },
      { time: '20:30', emoji: '😴', text: 'Early rest — Takayama adventure starts tomorrow!' },
    ],
    tips: [
      'Monet\'s Pond is a hidden gem — very few foreign tourists know about it.',
      'Rental car is the easiest way to reach the pond. Bus exists but very infrequent.',
      'Morning light is ideal for the pond, but midday works too when it\'s sunny — koi are most active.',
      'Night 2 is a budget hotel near the station — save money after the ryokan splurge.',
      'Gifu has great local izakayas since it\'s not touristy — real Japanese prices!',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Mon)', title: 'Gifu → Takayama Old Town 🏘️🍶',
    city: 'Gifu → Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏘️ Old Japan',
    isBicycleDay: false,
    fitness: { type: 'run+legs', label: '🏃 5AM Run + 🦵 Legs', detail: '5:00 Quick Nagara River run (3-5km) → 5:40 Back → Legs: squats 4×20, jump squats 3×10, calf raises 4×20. Done by 6:00 → shower → checkout → train.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Morning train through mountain gorge to Takayama. Afternoon: Edo-period streets, sake breweries, Hida beef sushi.',
    dayCost: '¥4,000-7,000',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Nagara River quick run (3-5km). Last Gifu morning.' },
      { time: '05:40', emoji: '🦵', text: 'LEGS: Squats 4×20, jump squats 3×10, Bulgarian splits 3×12 each, calf raises 4×20' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → pack' },
      { time: '08:00', emoji: '📦', text: 'CHECK OUT hotel' },
      { time: '08:30', emoji: '🚃', text: 'JR Hida Limited Express: Gifu → Takayama (~2h, covered by JR Pass!)' },
      { time: '08:35', emoji: '🪟', text: '⚠️ WINDOW SEAT LEFT SIDE! Stunning mountain gorge views the entire way.' },
      { time: '10:30', emoji: '🏙️', text: 'Arrive Takayama — small, walkable mountain town' },
      { time: '11:00', emoji: '🏨', text: 'Check in guesthouse (K\'s House Takayama or similar). Drop bags.' },
      { time: '11:30', emoji: '🛍️', text: 'Takayama Morning Market along Miyagawa River (open until 12:00!) — rush over for last hour' },
      { time: '12:30', emoji: '🥩', text: 'Hida beef sushi on the street — ¥600-800/piece. Melts in your mouth. Welcome to Takayama!' },
      { time: '13:30', emoji: '🏘️', text: 'Sanmachi Suji — preserved Edo-period old town. Wooden merchant houses, small museums.' },
      { time: '14:00', emoji: '🍶', text: 'Sake brewery tour — look for sugidama (cedar balls) outside = free tasting inside! 3+ breweries.' },
      { time: '15:30', emoji: '📸', text: 'Stop at red Nakabashi Bridge — THE photo spot in Takayama' },
      { time: '16:00', emoji: '🏛️', text: 'Takayama Jinya — Edo-era government building, beautifully preserved — ¥440' },
      { time: '17:30', emoji: '🍺', text: 'Craft beer at one of Takayama\'s local brewpubs' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner: hoba miso (miso grilled on magnolia leaf with Hida beef + mountain vegetables)' },
      { time: '20:00', emoji: '😴', text: 'Rest up — Kamikochi hike tomorrow!' },
    ],
    tips: [
      'Hida Express window seat LEFT SIDE for the best mountain gorge views!',
      'Morning market ends at noon — get there quick after checking in!',
      'Hida beef sushi on the street is the best ¥600 you\'ll spend in Japan.',
      'Sake tasting is FREE at most breweries. Look for the cedar ball hanging outside.',
      'Takayama is Japan\'s CHEAPEST tourist city — enjoy the value.',
    ],
  },
  {
    day: 9, date: 'Apr 29 (Tue)', title: 'KAMIKOCHI — Alpine Paradise 🏔️',
    city: 'Takayama → Kamikochi', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏔️ Japanese Alps Hike',
    isBicycleDay: false,
    fitness: { type: 'rest', label: '🥾 HIKE DAY (rest from gym)', detail: 'Kamikochi hike IS the workout — 6+ hours hiking at 1,500m elevation in the Japanese Alps. No extra gym needed.' },
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Day trip to Kamikochi — pristine alpine valley at 1,500m. Crystal clear Azusa River, 3,000m peaks, iconic Kappa Bridge.',
    dayCost: '¥8,000-12,000',
    schedule: [
      { time: '05:00', emoji: '🥾', text: 'Wake up early! Kamikochi hike = today\'s workout. No gym needed — this is the REAL thing.' },
      { time: '05:30', emoji: '🍙', text: 'Konbini breakfast + pack lunch (onigiri, protein bar, water). Limited food options in Kamikochi.' },
      { time: '06:30', emoji: '🚌', text: 'Bus from Takayama Bus Terminal → Hirayu Onsen → Kamikochi (~1.5h total, ~¥3,200 one way)' },
      { time: '08:00', emoji: '🏔️', text: 'Arrive Kamikochi! Pristine alpine valley at 1,500m elevation in the Northern Japanese Alps.' },
      { time: '08:15', emoji: '🌊', text: 'Start walk: Taisho Pond — mountain reflections in still water, dead trees creating haunting beauty' },
      { time: '09:00', emoji: '🚶', text: 'Walk along Azusa River to Tashiro Bridge — crystal clear glacial water, mountain peaks everywhere' },
      { time: '09:45', emoji: '🌉', text: '🎯 KAPPA BRIDGE — THE iconic spot! Crystal clear river with 3,000m Hotaka peaks behind.' },
      { time: '10:30', emoji: '⛩️', text: 'Hike to Myojin Pond — shrine on the water, sacred atmosphere, pristine forest (4h round trip)' },
      { time: '12:30', emoji: '🍙', text: 'Lunch by the river — eat your konbini bento with mountain views' },
      { time: '13:30', emoji: '🚶', text: 'Continue exploring — wander the trails, sit by the river, breathe the alpine air' },
      { time: '15:00', emoji: '📸', text: 'Last photos at Kappa Bridge — afternoon light hits the mountains differently' },
      { time: '16:00', emoji: '🚌', text: 'Return bus: Kamikochi → Hirayu Onsen → Takayama (~1.5h)' },
      { time: '17:30', emoji: '🏨', text: 'Back at guesthouse — shower, rest tired legs' },
      { time: '18:30', emoji: '🍽️', text: 'Celebratory dinner — you hiked the Japanese Alps! Hida beef earned.' },
      { time: '20:00', emoji: '😴', text: 'Sleep well — free day tomorrow!' },
    ],
    tips: [
      '⚠️ NO CARS ALLOWED in Kamikochi — bus only access. That\'s what keeps it pristine.',
      '⚠️ Apr 29 = Golden Week starts! Bus may be crowded. Take the earliest bus possible.',
      'Weather can change fast at altitude — bring a rain jacket and warm layer.',
      'Pack lunch from konbini. Lodges at Kappa Bridge have food but options are limited.',
      'Bus tickets: buy round-trip at Takayama Bus Terminal. ~¥6,400 total.',
    ],
  },
  {
    day: 10, date: 'Apr 30 (Wed)', title: '✨ FREE DAY — Your Choice! 😌',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '✨ Buffer / Rest Day',
    isBicycleDay: false,
    fitness: { type: 'rest', label: '😌 REST or light workout', detail: 'Your choice! Sleep in, or do a sunrise Miyagawa River run if you feel fresh. No pressure — this day is about recovery and spontaneity.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Nothing planned. Sleep in, explore at your own pace, or do something spontaneous. This is the day that makes the trip feel relaxed.',
    dayCost: '¥3,000-6,000',
    schedule: [
      { time: '??:??', emoji: '😴', text: 'Wake up whenever you want. No alarm. No schedule. Freedom.' },
      { time: '—', emoji: '🍙', text: 'Lazy breakfast at konbini or find a cute café' },
      { time: '—', emoji: '🤔', text: 'CHOOSE YOUR VIBE:' },
      { time: 'Option A', emoji: '🏃', text: '🏃 Active: Miyagawa River sunrise run + Higashiyama Walking Course (3.5km temple trail)' },
      { time: 'Option B', emoji: '🍶', text: '🍶 Chill: Sake brewery crawl (3+ breweries, all free tasting) + morning market browse' },
      { time: 'Option C', emoji: '🚲', text: '🚲 Explore: Rent a bike, ride to Hida Folk Village + rice paddies with mountain backdrop' },
      { time: 'Option D', emoji: '😴', text: '😴 Full rest: Sleep in, read a book, sit by the river. Do absolutely nothing.' },
      { time: '12:00', emoji: '🍜', text: 'Takayama ramen for lunch (soy sauce base, curly noodles) — local specialty' },
      { time: '—', emoji: '🚶', text: 'Afternoon: revisit favorite streets, find hidden alleys, buy omiyage (souvenirs for friends)' },
      { time: '—', emoji: '♨️', text: 'Optional: find a local public sento/onsen in Takayama. Cheaper than ryokan prices!' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner: whatever you feel like — you\'ve earned complete freedom today' },
      { time: '20:00', emoji: '📦', text: 'Light prep for tomorrow — check Shirakawa-go bus times' },
    ],
    tips: [
      'This day exists ON PURPOSE. Don\'t feel guilty about "wasting" it.',
      'Best use: catch up on sleep, do laundry at a coin laundry, organize souvenirs.',
      'If it rained on Kamikochi yesterday, this is your backup day to retry!',
      'Golden Week is active — enjoy the festival vibe in town.',
      'Takayama has great coin laundries near the station — ¥300-500 wash + dry.',
    ],
  },
  {
    day: 11, date: 'May 1 (Thu)', title: '🚲 Bicycle + Shirakawa-go 🏘️',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🚲 Bicycle + UNESCO Village',
    isBicycleDay: true,
    fitness: { type: 'bike', label: '🚲 Cycling Day (cardio + legs)', detail: 'Cycling AM + Shirakawa-go walking PM = full body active day. No extra workout needed.' },
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=75',
    summary: 'Morning cycling through rice paddies, afternoon UNESCO World Heritage thatched-roof village.',
    dayCost: '¥7,000-10,000',
    schedule: [
      { time: '06:30', emoji: '🚲', text: '🟢 CYCLING DAY = cardio + legs. No extra workout needed!' },
      { time: '07:00', emoji: '🍙', text: 'Breakfast at morning market (opens 6:30!)' },
      { time: '07:30', emoji: '🚲', text: 'Rent bicycle from station area (¥800-1,000/day)' },
      { time: '08:00', emoji: '🚲', text: 'Ride along Miyagawa River path — flat, easy, stunning mountain backdrop' },
      { time: '08:30', emoji: '📸', text: 'Morning light on Nakabashi Bridge — different vibe than Day 8' },
      { time: '09:00', emoji: '🚲', text: 'Ride to Hida Folk Village (Hida no Sato) — open-air museum of traditional farmhouses — ¥700' },
      { time: '10:00', emoji: '🚲', text: 'Continue through rice paddies and farmland. REAL countryside Japan — no tourists, just mountains.' },
      { time: '11:00', emoji: '📸', text: 'Find a quiet spot by the river — mountain reflections, total peace' },
      { time: '11:30', emoji: '🚲', text: 'Return bike. Quick lunch — Hida beef or ramen.' },
      { time: '12:30', emoji: '🚌', text: 'Nohi Bus: Takayama → Shirakawa-go (50 min, ¥2,600). Book in advance!' },
      { time: '13:30', emoji: '🏘️', text: 'Shirakawa-go — UNESCO World Heritage! Iconic thatched-roof gassho-zukuri farmhouses.' },
      { time: '14:00', emoji: '🚶', text: 'Walk around village — enter house-museums (¥300-400), see 250+ year old buildings still lived in' },
      { time: '15:00', emoji: '🏔️', text: 'Hike to Shiroyama Viewpoint (15 min) — THE classic postcard view. MUST DO.' },
      { time: '16:00', emoji: '📸', text: 'Last photos, browse local shops' },
      { time: '16:30', emoji: '🚌', text: 'Bus back to Takayama (50 min)' },
      { time: '18:00', emoji: '🍽️', text: 'Farewell Takayama dinner — last night in the mountains' },
      { time: '20:00', emoji: '📦', text: 'Pack up — Tokyo tomorrow!' },
    ],
    tips: [
      '⚠️ Golden Week! Shirakawa-go bus WILL sell out. Book at bus terminal the day before!',
      'Takayama cycling is FLAT and easy — mountain views every direction.',
      'Shirakawa-go viewpoint is the #1 photo — don\'t skip the 15 min hike.',
      'Last bus back is usually around 17:00-17:30. Check schedule carefully!',
    ],
  },
  {
    day: 12, date: 'May 2 (Fri)', title: 'Takayama → Tokyo + Akihabara Scout 🚄',
    city: 'Takayama → Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🚄 Travel to Tokyo',
    isBicycleDay: false,
    fitness: { type: 'push', label: '💪 5:30 Push (light)', detail: '5:30 light session: Push-ups 4×15, diamond push-ups 3×12, pike push-ups 3×10, plank 3×45s. Or just enjoy the morning.' },
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'Hida Express + Shinkansen to Tokyo. Evening: scout Akihabara card shops for tomorrow\'s hunt.',
    dayCost: '¥5,000-8,000 (transport + dinner)',
    schedule: [
      { time: '05:30', emoji: '💪', text: 'PUSH (light): Push-ups 4×15, diamond push-ups 3×12, plank 3×45s. Or skip — travel day.' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → pack' },
      { time: '08:00', emoji: '📦', text: 'CHECK OUT guesthouse' },
      { time: '08:30', emoji: '🚃', text: 'JR Hida Express: Takayama → Nagoya (2h 20min, covered by JR Pass!)' },
      { time: '10:50', emoji: '🍜', text: 'Quick lunch at Nagoya Station — last chance for miso katsu or kishimen!' },
      { time: '11:30', emoji: '🚄', text: 'Shinkansen: Nagoya → Tokyo (1h 40min, covered by JR Pass!)' },
      { time: '13:10', emoji: '🏙️', text: 'Arrive Tokyo! Drop bags at hotel near Akihabara/Ueno.' },
      { time: '14:00', emoji: '🏨', text: 'Check in hotel' },
      { time: '15:00', emoji: '🚶', text: 'Akihabara scouting — walk around, note card shop locations for tomorrow\'s hunt' },
      { time: '16:00', emoji: '🃏', text: 'Quick peek at Mandarake Complex — check stock, note prices, don\'t buy yet!' },
      { time: '17:00', emoji: '🃏', text: 'Peek at Yuyu-tei, Surugaya — build your mental map of where to hit tomorrow' },
      { time: '19:00', emoji: '🍜', text: 'Dinner: ramen under Akihabara station or try a maid café for the experience 😂' },
      { time: '21:00', emoji: '📱', text: 'Plan tomorrow\'s card hunting route. Check SNKR Dunk prices. Early sleep!' },
    ],
    tips: [
      'Total travel: Takayama → Nagoya (2h20) → Tokyo (1h40) = ~4h moving time.',
      'Scout Akihabara tonight so you don\'t waste time tomorrow figuring out where to go.',
      'Reserve Shinkansen seats — Golden Week trains are packed!',
    ],
  },
  {
    day: 13, date: 'May 3 (Sat)', title: 'Card Hunting Day 🃏',
    city: 'Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🃏 THE Card Hunt',
    isBicycleDay: false,
    fitness: { type: 'run+pull', label: '🏃 5AM Run + 🦾 Pull', detail: '5:00 Imperial Palace Loop (5km) — THE most famous running route in Japan! → 5:40 Pull: doorframe rows 4×12, backpack curls 3×15, plank shoulder taps 3×20. Done by 6:10.', run: 'Imperial Palace Loop, 5km' },
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'THE day. Akihabara + Nakano Broadway. Hunt for OP manga arts, Pokémon gems. All day mission.',
    dayCost: '¥3,000-5,000 (food) + CARD BUDGET',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Imperial Palace Loop (5km) — THE most famous running route in Japan!' },
      { time: '05:40', emoji: '🦾', text: 'PULL: Doorframe rows 4×12, backpack curls 3×15, plank shoulder taps 3×20' },
      { time: '06:10', emoji: '🚿', text: 'Shower → breakfast → game face on' },
      { time: '09:30', emoji: '📱', text: 'Open SNKR Dunk on phone — have target prices ready for comparison' },
      { time: '10:00', emoji: '🃏', text: 'Mandarake Complex Akihabara — floors 3-5 for TCG. Check graded PSA slabs, vintage promos.' },
      { time: '11:30', emoji: '🃏', text: 'Surugaya Akihabara — multiple locations on Chuo-dori. Compare prices across stores!' },
      { time: '12:30', emoji: '🍜', text: 'Lunch: ramen street under Akihabara station (fast, cheap, good)' },
      { time: '13:30', emoji: '🃏', text: 'Card Rush Akihabara — good selection of modern PSA slabs' },
      { time: '14:30', emoji: '🃏', text: 'Yuyu-tei physical store — best for One Piece raw singles. Same prices as online!' },
      { time: '15:30', emoji: '🃏', text: 'Book Off Akihabara — check glass cases for random steals' },
      { time: '16:30', emoji: '🚃', text: 'Train to Nakano (JR Chuo Line, 15 min)' },
      { time: '17:00', emoji: '🏪', text: '🎯 Mandarake Nakano Broadway — THE BEST for vintage/museum promos. Check floors 2-4.' },
      { time: '18:30', emoji: '🔍', text: 'Other Nakano Broadway card shops — several in the building' },
      { time: '19:30', emoji: '🍺', text: 'Dinner near Nakano — great cheap izakaya area. Celebrate your haul!' },
      { time: '21:00', emoji: '📦', text: 'Back to hotel. Organize purchases. Put slabs in hard-top loaders for carry-on.' },
    ],
    tips: [
      '🎯 PRIMARY TARGETS: OP manga art parallels (OP01-OP04), Pokémon gems',
      'Check SNKR Dunk prices on phone BEFORE every purchase!',
      'Tax-free: spend ¥5,000+ at one store → show passport → no tax!',
      'Carry CASH — some smaller card shops are cash-only.',
      'Don\'t buy English cards in Japan — they\'re cheaper online.',
    ],
  },
  {
    day: 14, date: 'May 4 (Sun)', title: 'Flea Market + Sayonara Japan 🛍️✈️',
    city: 'Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🛍️ Last Day + Departure',
    isBicycleDay: false,
    fitness: { type: 'legs', label: '🦵 LAST WORKOUT!', detail: 'Last workout of the trip! Squats 4×20, jump squats 3×10, walking lunges 3×12, calf raises 4×20. Go hard — last session! Done by 6:00.' },
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75',
    summary: 'Oedo Antique Market (1st Sunday ✓) + Tsukiji + last shopping + farewell sushi. Then fly home!',
    dayCost: '¥8,000-15,000',
    schedule: [
      { time: '05:30', emoji: '🦵', text: 'LAST WORKOUT! LEGS: Squats 4×20, jump squats 3×10, walking lunges 3×12, calf raises 4×20. 💪' },
      { time: '06:00', emoji: '🚿', text: 'Shower → pack everything → breakfast' },
      { time: '07:30', emoji: '📦', text: 'Final check: all cards secure in carry-on? Passport? WiFi returned?' },
      { time: '08:00', emoji: '🏨', text: 'CHECK OUT hotel. Store bags at hotel (most hold luggage for free on checkout day).' },
      { time: '08:30', emoji: '🚃', text: 'Head to Tsukiji Outer Market — tamagoyaki, fresh seafood, tuna bowls for breakfast #2' },
      { time: '09:30', emoji: '🚃', text: 'Walk to Tokyo International Forum (5 min from Tsukiji)' },
      { time: '10:00', emoji: '🛍️', text: '✨ Oedo Antique Market — Japan\'s largest outdoor antique market! 1st Sunday = today! ~250 vendors.' },
      { time: '10:30', emoji: '🏺', text: 'Browse: vintage kimono, ceramics, woodblock prints, antique toys, retro cameras' },
      { time: '11:30', emoji: '💰', text: 'Negotiate! Cash is king. Polite haggling expected (10-20% off).' },
      { time: '12:30', emoji: '🍣', text: 'Early farewell sushi — splurge! Midori Sushi Shibuya or Sushi Zanmai Tsukiji' },
      { time: '14:00', emoji: '🏪', text: 'Don Quijote — last-minute gifts, Japanese snacks, KitKat flavors' },
      { time: '15:00', emoji: '🏨', text: 'Pick up bags from hotel' },
      { time: '15:30', emoji: '🚃', text: 'Head to airport — Narita Express (1h) or Skyliner (41 min)' },
      { time: '17:00', emoji: '🛍️', text: 'Airport duty-free — matcha sweets, Japanese whisky, last-minute omiyage' },
      { time: '18:00', emoji: '🍜', text: 'Airport dinner — surprisingly good ramen at Narita/Haneda' },
      { time: '19:00', emoji: '✈️', text: 'Board flight. ありがとう日本！See you next time! 🇯🇵' },
    ],
    tips: [
      'Oedo Antique Market: 9AM-3PM, rain or shine. Come early for best selection!',
      'Flea market is CASH ONLY. Bring ¥20,000+ in cash.',
      'Pack cards in carry-on ONLY. Never check valuable cards.',
      'Return Suica at airport for ¥500 deposit refund. Or keep as souvenir!',
      'Arrive airport 3 hours early during Golden Week!',
    ],
  },
]

const cityEmojis = {
  'Tokyo': '🏙️',
  'Kyoto': '⛩️',
  'Gifu': '🏯',
  'Takayama': '🌲',
  'Tokyo → Kyoto': '🚄',
  'Kyoto → Nara': '🦌',
  'Kyoto → Gifu': '🚄',
  'Gifu → Takayama': '🚄',
  'Takayama → Kamikochi': '🏔️',
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
            14 days, 4 stops. Kyoto first (4 nights), Gifu ryokan (2 nights), Takayama mountain base (4 nights), Tokyo last for cards & flea market (3 nights). No rushing — one free day built in. Tap any day for full schedule.
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
                    {day.fitness && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        day.fitness.type === 'rest' ? 'bg-gray-100 text-gray-600' :
                        day.fitness.type.includes('run') ? 'bg-blue-100 text-blue-700' :
                        day.fitness.type.includes('bike') ? 'bg-emerald-100 text-emerald-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {day.fitness.label}
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

import { useState } from 'react'

const days = [
  {
    day: 1, date: 'Apr 21 (Tue)', title: 'Arrive → Straight to Kyoto ⛩️',
    city: 'Tokyo → Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Arrival & Travel',
    isBicycleDay: false,
    weather: { tag: '🌤️ Sejuk', temp: '10-19°C', level: 'mild' },
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
      { time: '19:30', emoji: '🚶', text: '🗺️ Station → Hotel: WALK 8 min south from Kyoto Station Hachijo Exit. Piece Hostel is on Takeda-kaido street.' },
      { time: '19:40', emoji: '🏨', text: 'Check in Piece Hostel Kyoto' },
      { time: '20:00', emoji: '👟', text: '🎯 HIKING SHOE HUNT: Walk to Kyoto Yodobashi (5 min, open until 22:00). Sports floor — buy Mont-bell Tazawa or equivalent Gore-Tex hiking shoe for Day 9 Kamikochi. ¥15-20K. NEEDS 5 days break-in!' },
      { time: '20:45', emoji: '👕', text: 'While at Yodobashi: also check Uniqlo nearby for AIRism Performance LS + Heattech Ultra Warm LS (¥3,500 total — Day 8 run + Day 9 Kamikochi base layer)' },
      { time: '21:30', emoji: '😴', text: 'Early sleep — jetlag recovery' },
    ],
    tips: [
      'Reserve Shinkansen seats in advance at Narita JR office — Golden Week trains fill up!',
      'Buy pocket WiFi or activate eSIM at airport before leaving',
      'Konbini tip: grab breakfast supplies at FamilyMart/7-Eleven near hotel for tomorrow morning',
      '⚠️ BUY HIKING SHOE TONIGHT or tomorrow morning Mont-bell Kawaramachi. Day 9 Kamikochi = no place for unbroken-in shoes. See Wardrobe section.',
      '⚠️ Uniqlo Heattech = base layer WAJIB Day 9 Kamikochi. Cheap (¥1,990) and lifetime investment for Indo mountain climbing.',
    ],
  },
  {
    day: 2, date: 'Apr 22 (Wed)', title: 'Fushimi Inari + Nishiki Market ⛩️',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: 'Iconic Kyoto',
    isBicycleDay: false,
    weather: { tag: '🌤️ Sejuk', temp: '9-20°C', level: 'mild' },
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
      { time: '16:30', emoji: '🛍️', text: '🎯 THRIFT SESI 1: 2nd Street Kyoto Shijo (5 min from Teramachi). Target: overshirt denim/flanel + graphic tee buat Day 3, 6. Budget ¥2.5-4.5K.' },
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
    day: 3, date: 'Apr 23 (Thu)', title: '🌧️ Rainy Day Pivot — Nijo Castle + Tea Ceremony',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🌧️ Indoor Culture Day',
    isBicycleDay: false,
    weather: { tag: '🌧️ Hujan', temp: '11-16°C', level: 'cold' },
    fitness: { type: 'rest', label: '😌 REST DAY', detail: 'Hujan + boat cancellation. Hari recovery. Conserve energy buat Friday Arashiyama+boat physical day. Optional: light hotel stretch malem.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Hozugawa boat canceled karena bad weather → Arashiyama+boat saved buat Day 4 Friday. Pivot ke Kyoto indoor: Nijo Castle UNESCO (nightingale floors), tea ceremony Gion authentic experience, Nishiki Market covered arcade, Pontocho dinner.',
    dayCost: '¥9,000-12,000 (Nijo + tea + food)',
    schedule: [
      { time: '08:00', emoji: '🌧️', text: 'Wake to bad weather. Cek hozugawakudari.jp Twitter — boat suspended.' },
      { time: '08:30', emoji: '🤔', text: 'Decision: skip Nara (juga hujan + outdoor heavy), save Arashiyama+boat buat Friday cerah. Pivot ke Kyoto indoor culture.' },
      { time: '09:30', emoji: '🚃', text: 'JR Sagano line ke Umahori (test trip — confirmed boat closed). Balik via JR.' },
      { time: '11:00', emoji: '🚃', text: 'JR Sagano: turun di JR Nijo Station (二条駅) — strategic stop sebelum Kyoto Station, ¥240 Suica' },
      { time: '11:15', emoji: '🚶', text: 'Walk 10 menit dari JR Nijo ke Nijo Castle (umbrella on, BlockTech parka)' },
      { time: '11:30', emoji: '🏯', text: '🎯 **NIJO CASTLE (Ninomaru Palace)** ¥1,300 — UNESCO World Heritage. INDOOR palace tour: nightingale floors yang squeak anti-ninja, golden murals, Tokugawa shogun era 1603. 1.5 jam. Garden outside skip kalo hujan deras.' },
      { time: '13:00', emoji: '🍜', text: '**Lunch options dekat Nijo Castle:** ⭐ **Honke Owariya Honten** (本家尾張屋) — soba shop 550 tahun, MUST-TRY Kyoto institution. Hourai Soba ¥1,800 atau Tempura Soba ¥1,300. 12 min walk timur dari Nijo, atau 1 subway stop ke Karasuma Oike + 3 min walk. ATAU **Cafe Bibliotic Hello!** (8 min walk) — cozy bookstore cafe, pasta/sandwich ¥1,200-1,800, perfect rainy day vibe. ATAU **Yoshinoya/Matsuya** chain beef bowl ¥600-800 di Horikawa-dori (cheap & fast).' },
      { time: '14:00', emoji: '🚇', text: 'Subway/JR ke central — turun Karasuma atau Gion-Shijo' },
      { time: '14:30', emoji: '🥢', text: 'Nishiki Market ("Kyoto\'s Kitchen") — covered arcade 5 blok. Jajan: tamagoyaki skewer, mochi balls, hotaru-ika (April season!), pickles, matcha snacks.' },
      { time: '15:30', emoji: '🛍️', text: 'Teramachi + Shinkyogoku Arcades — covered shopping 400m+. Souvenir, Kyoto crafts, vintage scattered.' },
      { time: '16:00', emoji: '🎌', text: '🎯 **TEA CEREMONY** at Camellia Flower Gion atau En Tea Ceremony — ¥3,000-4,500/orang, 45 menit authentic experience. Booking via website pagi-pagi! Keiko bakal love.' },
      { time: '17:30', emoji: '🚶', text: 'Gion evening walk — Hanamikoji street, atmospheric dalam rain (kadang spot maiko/geisha at dusk)' },
      { time: '18:30', emoji: '🍣', text: 'Pontocho Alley dinner — narrow covered restaurant street along Kamogawa. Sushi, yakitori, atau obanzai kaiseki ¥3-6K/orang. Atmospheric in rain.' },
      { time: '20:30', emoji: '☕', text: 'Optional: matcha cafe % Arabica atau Malebranche' },
      { time: '21:00', emoji: '😴', text: 'Back to Piece Hostel, early rest. Friday physical day (boat + Arashiyama + cycling lite) ahead.' },
    ],
    tips: [
      '🎌 BOOK TEA CEREMONY pagi-pagi via camellia-flower.net — same-day slots OK kalau cepat. Pilih 16:00.',
      '🚇 Subway Kyoto = bukan bus. Underground train. Karasuma + Tozai lines, ¥220-260/trip, pake Suica.',
      '✅ JR Pass gak perlu hari ini — Suica enough buat subway/JR short trips.',
      '🏯 Nijo Castle: Ninomaru Palace = main highlight (indoor). Garden outside optional kalo hujan deras.',
      '☂️ Pake umbrella + BlockTech Parka full + Boulder X GTX = stay dry. Day 3 of break-in Boulder X — perfect rainy stress test.',
      '🌧️ Pontocho lebih atmospheric in rain — bawa cash ¥10K+ untuk dinner kaiseki + drinks.',
      '🍜 **LUNCH PICK #1: Honke Owariya** (本家尾張屋) — Kyoto soba 550 tahun, opens 11:00-19:00. Address: 322 Niomontsukinukecho, Nakagyo. Cash + card OK. Famous: Hourai Soba (multi-tier soba ¥1,800).',
      '☕ **LUNCH PICK #2: Inoda Coffee Honten** — classic kissaten 1947, retro Kyoto coffee shop, sit-down lunch ¥1,500-2,500 (omelette rice, beef cutlet sandwich). 15 min walk from Nijo or 1 subway stop. Address: 140 Doyu-cho, Nakagyo.',
      '📚 **LUNCH PICK #3: Cafe Bibliotic Hello!** — bookstore cafe 8 min walk, Western-style pasta/sandwich/bagel ¥1,200-1,800. Cozy rainy day spot, Instagram-worthy.',
      '⚠️ Skip outdoor: Kinkaku-ji, Ginkaku-ji, Monkey Park — save for clear day Friday/later.',
    ],
  },
  {
    day: 4, date: 'Apr 24 (Fri)', title: '🦌 Nara Day Trip (swapped from Day 5)',
    city: 'Kyoto → Nara', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🦌 Temples & Deer',
    isBicycleDay: false,
    weather: { tag: '🌤️ Sejuk-cerah', temp: '11-20°C', level: 'mild' },
    fitness: { type: 'run', label: '🏃 5AM Kamogawa Run ✅', detail: '5:00 Kamogawa River run done. Weather clear pagi, perfect untuk Nara outdoor day. Body warmed up.' },
    image: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f8?w=600&q=75',
    summary: 'Hozugawa boat closed lagi (river level masih tinggi setelah hujan kemarin) — swap Day 4 ke Nara, Arashiyama+boat di-push ke Day 5 Saturday. Today: bowing deer, 15m bronze Buddha, 3000-lantern shrine, plus Thrift Sesi 2 Kyoto sore.',
    dayCost: '¥7,000-10,000 (Nara + thrift + dinner)',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '✅ DONE — Kamogawa River run (5km easy). Body warm.' },
      { time: '07:30', emoji: '🚿', text: 'Shower → breakfast' },
      { time: '08:30', emoji: '🎒', text: 'Pack daypack: kamera, sunblock, topi, light jacket, cash ¥500 buat deer cracker' },
      { time: '09:00', emoji: '🚃', text: 'JR Nara Line: Kyoto Station → Nara (~45 min, ¥720 Suica). Trains tiap 20 min.' },
      { time: '09:45', emoji: '🏙️', text: 'Arrive JR Nara Station' },
      { time: '10:00', emoji: '🦌', text: 'Walk 15 min ke **Nara Park** — FREE entry. Hundreds of wild deer roaming. Sacred messengers Shinto, jinak ke wisatawan.' },
      { time: '10:30', emoji: '🍘', text: 'Buy **shika senbei** (deer crackers) ¥200 dari vendor — deer akan **BOW** sebelum makan! 📸 unique experience' },
      { time: '11:00', emoji: '🏛️', text: '**Todai-ji Temple** ¥600 — world\'s LARGEST wooden building + massive bronze Buddha 15m tinggi. Mind-blowing scale, awe-inspiring.' },
      { time: '12:00', emoji: '🍜', text: 'Lunch **Naramachi** (old merchant district) — try **kakinoha sushi** (mackerel/salmon wrapped persimmon leaf, Nara specialty) atau **cha-gayu** (tea porridge). ¥1,200-2,000.' },
      { time: '13:30', emoji: '⛩️', text: '**Kasuga Taisha Shrine** — path lined dengan **3,000 stone lanterns**. FREE entry to outer path, ¥500 inner sanctuary. 1 jam walk forest setting.' },
      { time: '14:30', emoji: '🚶', text: '**Naramachi exploration** — machiya townhouses, craft shops, sake breweries' },
      { time: '15:00', emoji: '🍵', text: 'Optional: **Nakatanidou** mochi shop — famous super-fast mochi pounding (yomogi mochi pounded in 1-2 min). FREE to watch viral spectacle, beli mochi ¥150/each.' },
      { time: '15:30', emoji: '🚃', text: 'JR back to Kyoto (~45 min)' },
      { time: '16:30', emoji: '🛍️', text: '🎯 **THRIFT SESI 2: 2nd Street Kyoto Shijo** — round 2! Target dari kemarin yg belum: henley coklat/rust, rompi/kardigan rajut, vintage band tee. Budget ¥4.5-7.5K.' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner pilihan: **Pontocho** (kalau belum overdo) atau **Honke Daiichi-Asahi** ramen (Kyoto Station, antrian tapi worth) atau **Issen Yoshoku** okonomiyaki Gion (¥800)' },
      { time: '21:00', emoji: '🌐', text: '**CRITICAL TONIGHT:** Cek hozugawakudari.jp Twitter + tenki.jp Kameoka buat boat status Saturday. Decide morning Day 5 protokol.' },
      { time: '22:00', emoji: '😴', text: 'Sleep — Saturday boat day (or scenic train backup)' },
    ],
    tips: [
      '🦌 Nara deer: jinak tapi BISA headbutt kalau lu tease. Show empty hands kalau crackers habis = mereka pergi.',
      '⚠️ Jangan beli cracker terlalu banyak sekaligus — deer langsung kerumun, kewalahan!',
      '🏛️ Todai-ji Big Buddha = 15m tall, 250 ton — gak akan ada banding di trip ini. Quality time inside hall.',
      '🍣 Kakinoha sushi = SOUVENIR worthy juga, beli pack di Nara Station ¥1,500-2,500 buat oleh-oleh atau snack hotel.',
      '⛩️ Kasuga Taisha lantern walk = 30 menit one-way, in forest. Wear Boulder X, beberapa stone steps tapi gentle.',
      '🚃 JR Nara Line covered Suica, gak perlu JR Pass khusus.',
      '⏰ Last train Nara → Kyoto ~22:00, banyak slack.',
      '💡 Day 5 backup plan: kalau boat closed lagi → Sagano Scenic Railway (Torokko) ¥880 one-way, 25 menit through gorge. Beli round-trip ¥1,760 atau train one-way + walk back. Same gorge view dari rel.',
    ],
  },
  {
    day: 5, date: 'Apr 25 (Sat)', title: 'Arashiyama 🛶🎋 (boat OR scenic train)',
    city: 'Kyoto', cityColor: 'bg-orange-100 text-orange-600',
    theme: '🛶 Boat / 🚂 Train + Arashiyama',
    isBicycleDay: false,
    weather: { tag: '🌤️ Sejuk-cerah', temp: '10-21°C', level: 'mild' },
    fitness: { type: 'push', label: '💪 5:30 Push (light)', detail: '5:30 quick push session 20 min — push-ups 3×15, diamond 3×10, plank 3×45s. Conserve buat Arashiyama walking + Monkey Park hike.' },
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=75',
    summary: 'Arashiyama swap dari Day 4. PRIMARY: Hozugawa boat dari Kameoka kalau river dah settle. BACKUP: Sagano Scenic Railway (Torokko) — train through gorge, same view dari rel. Both end di Arashiyama. Plus Bamboo Grove, Tenryuji, Monkey Park, Gio-ji moss temple. Last full day Kyoto sebelum Gifu Sunday.',
    dayCost: '¥10,000-15,000 (boat ¥6K atau train ¥1.7K + temples + food)',
    schedule: [
      { time: '05:30', emoji: '💪', text: 'PUSH light 20 min: push-ups 3×15, diamond 3×10, plank 3×45s' },
      { time: '06:00', emoji: '🚿', text: 'Shower → konbini breakfast' },
      { time: '06:30', emoji: '🌐', text: '🚨 **CRITICAL CHECK:** hozugawakudari.jp Twitter @hozugawakudari + tenki.jp Kameoka. Decide PRIMARY vs BACKUP route.' },
      { time: '07:30', emoji: '🎒', text: 'Pack daypack: kamera, sunblock, topi, BlockTech Parka, water, cash ¥3K' },
      { time: '07:45', emoji: '🚶', text: 'Walk Hotel → Kyoto Station 8 min south' },
      { time: '08:00', emoji: '🚃', text: 'JR Sagano Line ke arah barat. **IF BOAT OPEN:** turun Kameoka. **IF BOAT CLOSED:** turun Saga-Arashiyama (Torokko backup).' },
      { time: '— PRIMARY (BOAT) —', emoji: '🛶', text: '════════════════════════════' },
      { time: '08:35', emoji: '🚶', text: 'Walk Kameoka Station → boat dock (~8 min)' },
      { time: '09:00', emoji: '🛶', text: '**HOZUGAWA BOAT** depart — 2 jam down river ¥6,000. Duduk ujung KANAN.' },
      { time: '11:00', emoji: '🌉', text: 'Arrive Arashiyama via boat dekat Togetsukyo Bridge' },
      { time: '— BACKUP (TOROKKO) —', emoji: '🚂', text: '════════════════════════════' },
      { time: '08:30', emoji: '🚃', text: 'JR turun Saga-Arashiyama Station (15 min, ¥240)' },
      { time: '08:45', emoji: '🎫', text: 'Walk 5 min ke **Sagano Torokko Saga Station** (sebelahan). Buy ticket — round-trip ¥1,760 atau one-way ¥880. Same-day OK kalau ada slot, advance booking via JR Midori safer.' },
      { time: '09:35', emoji: '🚂', text: '**SAGANO SCENIC RAILWAY (Torokko)** — open-air vintage trolley through Hozugawa gorge, 25 min one-way ke Torokko Kameoka. Same gorge view dari rel, romantic, photogenic.' },
      { time: '10:00', emoji: '🚂', text: 'Arrive Torokko Kameoka. Foto + jajan, balik 25 min ke Saga-Arashiyama.' },
      { time: '11:00', emoji: '🌉', text: 'Back at Saga-Arashiyama, walk 5 min ke Togetsukyo Bridge' },
      { time: '— EITHER WAY (post 11:00) —', emoji: '🎋', text: '════════════════════════════' },
      { time: '11:15', emoji: '📸', text: 'Togetsukyo Bridge — iconic Arashiyama photo' },
      { time: '11:30', emoji: '🍜', text: 'Lunch Arashiyama main street — yudofu (tofu hot pot) atau ayu sweetfish (April specialty)' },
      { time: '12:45', emoji: '🎋', text: 'Bamboo Grove — magical even Saturday (early afternoon less crowded than dawn). FREE.' },
      { time: '13:30', emoji: '⛩️', text: 'Tenryuji Temple + zen garden ¥500 — UNESCO. 45 menit indoor + outdoor.' },
      { time: '14:30', emoji: '🐒', text: 'Iwatayama Monkey Park — 20 min hike up, feed monkeys, panorama Kyoto ¥550' },
      { time: '16:00', emoji: '⛩️', text: 'Gio-ji Moss Temple ¥300 — quiet, hidden gem, post-rain moss in peak season' },
      { time: '16:45', emoji: '☕', text: '% Arabica Arashiyama coffee/matcha break dengan view Katsura River' },
      { time: '17:30', emoji: '🚃', text: 'JR Saga-Arashiyama → Kyoto Station (15 min)' },
      { time: '18:00', emoji: '⛩️', text: 'OPTIONAL Kiyomizu sunset (¥400) — wooden terrace + Kyoto panorama golden hour. Ninenzaka/Sannenzaka walk.' },
      { time: '19:30', emoji: '🍽️', text: 'Farewell Kyoto dinner — Pontocho proper kaiseki/sushi atau Higashiyama yakitori. Last full Kyoto night sebelum Gifu Sunday morning.' },
      { time: '21:00', emoji: '📦', text: 'Pack — Sunday early Shinkansen ke Gifu!' },
    ],
    tips: [
      '🚨 **MORNING WEATHER + BOAT STATUS CHECK:** hozugawakudari.jp Twitter @hozugawakudari, atau tanya hotel front desk untuk call boat office.',
      '🛶 **PRIMARY (boat):** ¥6K, 2 jam down river, traditional flat-bottom, 3 boatmen with bamboo poles, floating vendor mid-journey, gorge view from water.',
      '🚂 **BACKUP (Torokko Scenic Railway):** ¥880 one-way / ¥1,760 round-trip, 25 min one-way, open-air vintage trolley, gorge view from elevated rail. Romantic feel, photo gold. Less commitment than 2-jam boat, can return immediately ke Arashiyama walking.',
      '⚠️ Torokko juga bisa sold out Golden Week — beli round-trip pagi di Saga Torokko station, OR pre-book via JR Midori-no-Madoguchi tonight kalau ada waktu.',
      '⚖️ Boat vs Torokko trade-off: Boat = immersive 2 jam main event, Torokko = quick scenic 25 min + lebih banyak waktu Arashiyama walking. Both valid, both gorge view.',
      '🐒 Monkey Park: jangan stare di mata, no food display luar cage. 20 min hike up, OK pake Boulder X (broken-in well by now Day 5).',
      '⛩️ Gio-ji moss temple = HIDDEN GEM, post-2-day-rain garden = peak season hijau pekat.',
      '💴 Suica enough — JR + boat/train + temples semua doable.',
      '📦 Tonight pack early — Sunday morning Shinkansen Kyoto → Gifu-Hashima!',
    ],
  },
  {
    day: 6, date: 'Apr 26 (Sun)', title: 'Kyoto → Gifu via JR Local 🏯♨️',
    city: 'Kyoto → Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '♨️ Ryokan & Onsen',
    isBicycleDay: false,
    weather: { tag: '☀️ Sejuk-hangat', temp: '10-21°C', level: 'mild' },
    fitness: { type: 'run', label: '🏃 5AM Last Kamogawa Run', detail: '5:00 Last Kamogawa River run (5km easy). Farewell Kyoto morning. Run → shower → check out → JR Local depart 08:30.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=60',
    summary: 'JR Local route (skip Shinkansen, hemat ¥2,280 couple). Kyoto → Maibara → Gifu via JR Tokaido Line, ~90 menit. Sampai Gifu 10:30. Castle on mountain, Great Buddha, Dormy Inn rooftop onsen, free ramen night.',
    dayCost: '¥4,000-6,000 (JR ¥2,140/orang + sightseeing + food)',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Last Kamogawa River run (5km easy). Farewell Kyoto morning 🌅' },
      { time: '05:40', emoji: '🚿', text: 'Shower → final pack → breakfast' },
      { time: '08:00', emoji: '📦', text: 'CHECK OUT Piece Hostel' },
      { time: '08:05', emoji: '🚶', text: '🗺️ Hotel → Station: WALK 8 min north back to Kyoto Station Hachijo Exit' },
      { time: '08:15', emoji: '🎫', text: 'Cek platform JR Tokaido Line — **Shinkaisoku (Special Rapid)** ke Maibara/Nagahama. Platform 2-3 area. Suica tap, no reservation needed.' },
      { time: '08:30', emoji: '🚃', text: '**JR Tokaido Shinkaisoku: Kyoto → Maibara** (~50 menit, ¥1,170 Suica). **Window seat KIRI** = view Lake Biwa shore!' },
      { time: '— TIPS RIDE —', emoji: '🌊', text: 'Konbini breakfast/coffee bawa, charge HP, baca/scroll. Lake Biwa view di kiri ~30 menit kedua.' },
      { time: '09:25', emoji: '🏙️', text: 'Arrive Maibara (米原) — JR West/Central boundary' },
      { time: '09:35', emoji: '🔄', text: 'Transfer cross-platform ke JR Tokaido (JR Central) — train arah Toyohashi/Ogaki/Gifu. 5-10 menit transfer.' },
      { time: '09:40', emoji: '🚃', text: '**JR Tokaido Local/Rapid: Maibara → Gifu** (~35-50 menit, ¥970 Suica)' },
      { time: '10:30', emoji: '🏙️', text: 'Arrive **JR Gifu Station** (~10:30, depending on train type)' },
      { time: '10:35', emoji: '🚶', text: '🗺️ Station → Hotel: WALK 5 min dari JR Gifu Station ke Dormy Inn Gifu Ekimae. Right next to station.' },
      { time: '10:45', emoji: '🏨', text: 'Drop bags Dormy Inn front desk (check-in 15:00, mereka simpen free)' },
      { time: '11:30', emoji: '🚡', text: 'Gifu Castle Ropeway up Mt. Kinka ¥1,100 round-trip — castle on a mountain!' },
      { time: '11:45', emoji: '🏯', text: 'Gifu Castle — panoramic city + river + mountain view. Clear day = see Alps backdrop!' },
      { time: '12:45', emoji: '🚡', text: 'Ropeway down. Walk through Gifu Park.' },
      { time: '13:00', emoji: '🍜', text: 'Lunch Kawaramachi old town — local Gifu cuisine, ayu sweetfish (April season!), unagi don' },
      { time: '14:30', emoji: '🗿', text: 'Gifu Great Buddha (Shōhō-ji) — one of Japan\'s 3 great Buddhas, made of lacquered paper! ¥200' },
      { time: '15:30', emoji: '🏨', text: '✨ Back Dormy Inn — formal CHECK IN. Change into provided yukata' },
      { time: '16:00', emoji: '♨️', text: 'Rooftop onsen soak Dormy Inn — unwind dari travel + sightseeing morning' },
      { time: '17:30', emoji: '🚶', text: 'Walk Nagara River golden hour — Gifu untouched by tourism, peaceful' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner local izakaya near station — real Japanese prices (not tourist!)' },
      { time: '21:30', emoji: '🍜', text: '🆓 FREE late-night ramen Dormy Inn! Soy-based ramen, **DON\'T MISS**.' },
      { time: '22:00', emoji: '😴', text: 'Sleep — big day Monet\'s Pond + private onsen tomorrow!' },
    ],
    tips: [
      '💰 **JR Local vs Shinkansen savings:** ¥2,280 couple (~Rp 250K). Shinkansen (¥3,280/orang, 40 min) vs JR Local (¥2,140/orang, 90 min). +50 menit, save substantial. BTC maxi move.',
      '🚃 **JR Tokaido Shinkaisoku** = "Special Rapid Service" (新快速). Fastest local train, semi-express, frequent (every 15-20 min). Suica works seamlessly Kyoto → Maibara → Gifu.',
      '🌊 **Window seat KIRI** dari Kyoto — view Lake Biwa shore antara Otsu sampai Maibara. Pretty especially morning.',
      '🔄 **Maibara transfer:** Cross-platform usually (JR West Shinkaisoku terminate, JR Central trains continue). 5-10 menit, gampang. Lihat platform board "Tokaido Line - Gifu/Toyohashi".',
      '🎒 **Bagasi consideration:** Carry-on + 1 small suitcase = OK JR Local. Kalau bawa 2 koper besar = consider Shinkansen biar kurang transfer hassle.',
      '🍜 **Dormy Inn FREE ramen 21:30** — soy-based, masih ramai biasanya, antri 5-10 menit. Wajib hari ini AND besok.',
      '♨️ **Onsen etiquette reminder:** wash thoroughly di shower stations sebelum masuk bath. No swimwear!',
      '🏯 **Gifu Castle ropeway opens 09:00.** Lu sampai 10:30 = perfect timing, lanjut Buddha siang, onsen sore.',
      '🌸 **Gifu = NOT tourist city** — barely see other foreigners. That\'s the charm. Real Japanese izakaya prices (¥800-1,500/dish).',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Mon)', title: '♨️ Monet\'s Pond + Private Couples Onsen 🎨',
    city: 'Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '🎨 Hidden Gem Day',
    isBicycleDay: false,
    weather: { tag: '☀️ Sejuk-hangat', temp: '11-22°C', level: 'mild' },
    fitness: { type: 'rest', label: '😌 SLOW DAY', detail: 'No workout. Dawn onsen replaces the gym. Let your body recover — you\'ve earned it after 5 days of Kyoto.' },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=75',
    summary: 'Dormy Inn onsen morning, bus to magical Monet\'s Pond, then private couples onsen at 300-year Juhachiro ryokan. Same hotel, no checkout stress.',
    dayCost: '¥7,000-10,000 (bus + food + private onsen)',
    schedule: [
      { time: '06:00', emoji: '♨️', text: 'Dawn soak at Dormy Inn rooftop onsen — barely anyone, morning calm.' },
      { time: '07:00', emoji: '🍽️', text: 'Dormy Inn breakfast — fuel up for the day' },
      { time: '08:30', emoji: '☕', text: 'Slow morning — no checkout today! Same hotel. Leave bags in room.' },
      { time: '08:45', emoji: '🚌', text: '🗺️ Hotel → Bus: Walk 5 min from Dormy Inn to JR Gifu Station. Take Itadori/Hōrado-bound bus (~1h). Check timetable night before — buses are infrequent!' },
      { time: '10:30', emoji: '🎨', text: 'Arrive near Monet\'s Pond. Short walk to Nemichi Shrine.' },
      { time: '10:45', emoji: '✨', text: 'Monet\'s Pond (Namonaki Ike) — crystal clear water, colorful koi, water lilies. Looks EXACTLY like a Monet painting. FREE!' },
      { time: '11:15', emoji: '📸', text: 'Photos at different angles. Walk around shrine grounds. Total serenity.' },
      { time: '11:45', emoji: '🍜', text: 'Lunch at a local mountain restaurant near the pond — soba noodles or mountain vegetables' },
      { time: '12:30', emoji: '🚌', text: 'Bus back to Gifu (~1-1.5h). Enjoy the countryside views from the window.' },
      { time: '14:00', emoji: '🚌', text: 'Back at Gifu Station → take bus to Nagaragawa Onsen area (15 min, ¥220)' },
      { time: '14:30', emoji: '💑', text: '♨️ PRIVATE COUPLES ONSEN at Juhachiro (十八楼) — 300-year ryokan on Nagara River. Kashikiri buro (貸切風呂) ~¥3,000-5,000 for 45-60 min. Riverside rotenburo with river views. Book ahead!' },
      { time: '15:30', emoji: '🚶', text: 'Post-onsen walk along Nagara River. Total relaxation mode.' },
      { time: '16:00', emoji: '🍵', text: 'Tea/café at Kawaramachi old town. Browse craft shops.' },
      { time: '17:00', emoji: '🚌', text: 'Bus back to Gifu Station area → Dormy Inn' },
      { time: '18:30', emoji: '🍽️', text: 'Dinner: local izakaya near station — real Japanese prices (not tourist!)' },
      { time: '21:30', emoji: '🍜', text: '🆓 FREE late-night ramen at Dormy Inn! Don\'t miss this.' },
      { time: '22:00', emoji: '😴', text: 'Rest — Takayama adventure starts tomorrow!' },
    ],
    tips: [
      'Monet\'s Pond is a hidden gem — very few foreign tourists know about it.',
      '⚠️ CHECK BUS SCHEDULE the night before! Gifu Bus to Itadori runs only 3-4 times per day.',
      'If bus timing doesn\'t work, a taxi is ~¥10,000 one way (40 min). Split with Keiko = ¥5K each.',
      'Same hotel both nights = no packing/checkout stress. Leave bags in room, travel light to the pond.',
      'Gifu has great local izakayas since it\'s not touristy — real Japanese prices!',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Tue)', title: 'Gifu → Takayama Old Town 🏘️🍶',
    city: 'Gifu → Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏘️ Old Japan',
    isBicycleDay: false,
    weather: { tag: '🧥 Dingin', temp: '5-16°C', level: 'cold' },
    fitness: { type: 'run+legs', label: '🏃 5AM Run + 🦵 Legs', detail: '5:00 Quick Nagara River run (3-5km) → 5:40 Back → Legs: squats 4×20, jump squats 3×10, calf raises 4×20. Done by 6:00 → shower → checkout → train.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=75',
    summary: 'Morning train through mountain gorge to Takayama. Afternoon: Edo-period streets, sake breweries, Hida beef sushi.',
    dayCost: '¥4,000-7,000',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Nagara River quick run (3-5km). Last Gifu morning.' },
      { time: '05:40', emoji: '🦵', text: 'LEGS: Squats 4×20, jump squats 3×10, Bulgarian splits 3×12 each, calf raises 4×20' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → pack' },
      { time: '07:30', emoji: '📦', text: 'CHECK OUT Dormy Inn Gifu' },
      { time: '07:35', emoji: '🚶', text: '🗺️ Hotel → Station: WALK 5 min to JR Gifu Station. Easy — you\'re right there!' },
      { time: '08:15', emoji: '🚃', text: 'JR Hida Limited Express: Gifu → Takayama (~2h, covered by JR Pass!)' },
      { time: '08:20', emoji: '🪟', text: '⚠️ WINDOW SEAT LEFT SIDE! Stunning mountain gorge views the entire way.' },
      { time: '10:15', emoji: '🏙️', text: 'Arrive Takayama Station' },
      { time: '10:20', emoji: '🚶', text: '🗺️ Station → Hotel: WALK 3 min east from Takayama Station. K\'s House is at 4-45-1 Tenman-cho, just past the bridge.' },
      { time: '10:30', emoji: '🏨', text: 'Check in K\'s House Takayama. Drop bags.' },
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
    day: 9, date: 'Apr 29 (Wed)', title: 'KAMIKOCHI — Alpine Paradise 🏔️',
    city: 'Takayama → Kamikochi', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏔️ Japanese Alps Valley Hike',
    isBicycleDay: false,
    weather: { tag: '❄️ SUPER DINGIN', temp: '0-10°C', level: 'freezing' },
    fitness: { type: 'rest', label: '🥾 HIKE DAY (9-10km valley hike)', detail: 'Kamikochi = valley floor hike DATAR at 1,500m, bukan summit climb. Total ~9-10km figure-8 loop, elevation gain ~100m, 5-6 jam. Boulder X Mid GTX handle perfect. No gym — this IS today\'s workout.' },
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=60',
    summary: 'Figure-8 valley hike: Bus Terminal → Taisho Pond (WEST) → Kappabashi → Myojin Pond (TURNAROUND EAST) → back to Bus Terminal. 9-10km DATAR ngikut Azusa River, 5-6 jam total. Back Takayama 17:30 buat celebration dinner.',
    dayCost: '¥8,000-12,000 (bus ¥6,400 round-trip + food + shrine)',
    schedule: [
      { time: '05:00', emoji: '⏰', text: 'Wake up early — Kamikochi hike = today\'s workout. No gym needed.' },
      { time: '05:30', emoji: '🍙', text: 'Konbini breakfast + **pack lunch** (2x onigiri + protein bar + snack + hot drink in thermos). Kamikochi lodge food limited + expensive ¥1,500+.' },
      { time: '06:15', emoji: '🚶', text: '🗺️ K\'s House → Takayama Nohi Bus Terminal (5 min walk, sebelah JR station)' },
      { time: '06:30', emoji: '🚌', text: 'Bus Takayama → Hirayu Onsen → Kamikochi (~1.5h, ¥3,200 one-way. Round-trip ¥6,400)' },
      { time: '— START —', emoji: '🏔️', text: '══════════════ HIKE BEGINS ══════════════' },
      { time: '08:00', emoji: '🚌', text: '**ARRIVE KAMIKOCHI BUS TERMINAL (Kappabashi area)** — turun bus, toilet, daypack check. Altitude 1,500m, crisp air.' },
      { time: '08:15', emoji: '🚶', text: 'Walk **WEST** 1.5km (30 menit gentle downstream) → Taisho Pond direction' },
      { time: '08:45', emoji: '📍', text: '**TAISHO POND (大正池)** — mountain reflections di still water, dead trees haunting beauty from 1915 Mt. Yakedake eruption. 20 menit foto.' },
      { time: '09:15', emoji: '🚶', text: 'Walk **EAST** 1.5km back past Tashiro Marshland (boardwalk section)' },
      { time: '10:00', emoji: '🌿', text: 'Tashiro Pond/Marsh quick stop 10 menit' },
      { time: '10:30', emoji: '🌉', text: '**KAPPABASHI BRIDGE (河童橋) — ICONIC SPOT #1.** Suspension bridge, 3,190m Hotaka peaks backdrop, crystal Azusa River below. 30 menit foto + rest + water refill.' },
      { time: '11:00', emoji: '🚶', text: 'Walk **EAST** 3.5km ngikut Azusa River (1 jam gentle pace) → Myojin direction' },
      { time: '12:00', emoji: '⛩️', text: '**MYOJIN POND (明神池) — TURNAROUND POINT.** Sacred pond + Hotaka Jinja Okumiya shrine ¥300 entry. Paling pristine, magical, forest setting.' },
      { time: '12:15', emoji: '🍙', text: '**LUNCH by pond** — makan konbini bento yang bawa dari Takayama. Mountain air, river sound. 45 menit chill.' },
      { time: '— RETURN —', emoji: '↩️', text: '══════════════ RETURN TRIP ══════════════' },
      { time: '13:00', emoji: '🚶', text: 'START WALK BACK WEST 3.5km → Kappabashi (1 jam gentle)' },
      { time: '14:00', emoji: '🌉', text: 'Back at **KAPPABASHI** — final photos golden afternoon light (mountain shadows beda dari pagi!)' },
      { time: '14:30', emoji: '☕', text: 'Kappabashi lodge pit stop — hot coffee ¥400, restock water, rest legs. 30 menit.' },
      { time: '15:00', emoji: '🚶', text: 'Walk 5 min back to **Bus Terminal**' },
      { time: '15:15', emoji: '🎒', text: 'Final check, ganti kaos kaki kalau basah, toilet, pack layers' },
      { time: '16:00', emoji: '🚌', text: '**BUS DEPART** Kamikochi → Hirayu → Takayama (~1.5h)' },
      { time: '17:30', emoji: '🏨', text: 'Back K\'s House Takayama — SHOWER, rest tired legs, change casual clothes' },
      { time: '18:30', emoji: '🍽️', text: '🥩 **CELEBRATION DINNER** — Hida beef earned! Matsuki Kenji atau Kyoya (hoba miso). Reserve pagi kalau weekend.' },
      { time: '20:30', emoji: '🍺', text: 'Optional craft beer Takayama Brewery atau sake tasting Funasaka' },
      { time: '21:30', emoji: '😴', text: 'Sleep well — Day 10 work day (but chill)!' },
    ],
    tips: [
      '⚠️ **NO CARS ALLOWED** di Kamikochi — bus only access. Itu yang bikin pristine. No taxi escape — last bus ~17:00, jangan telat!',
      '⚠️ **Apr 29 = Golden Week starts!** Bus bisa crowded. Take earliest bus (06:30) dari Takayama.',
      '🍙 **Bawa konbini bento DARI Takayama** pagi-pagi (beli 5:30 AM sebelum bus). Kappabashi lodge food limited + mahal.',
      '🚽 Toilet strategic: Bus Terminal (start), Kappabashi (midpoint), Myojin Shrine (turnaround). Di antara itu = forest — awkward kalau urgent.',
      '💧 Water refill free di Kappabashi water fountain.',
      '🧥 **Layering critical:** Morning 0-3°C → Heattech + PuffTech + BlockTech. Siang 8-12°C → lepas PuffTech, simpen di daypack. Break/istirahat dingin lagi → pake lagi.',
      '🥾 Boulder X Mid GTX = perfect shoe ini. Break-in udah 7+ hari by now.',
      '📶 Phone signal limited — download offline Google Maps area "Kamikochi" SEBELUM berangkat.',
      '🐻 Rare bears, monkeys OK. Trail rame manusia = aman. Bear bell optional ¥500.',
      '⚠️ Weather bisa berubah cepat di alpine — bawa BlockTech Parka in daypack kalaupun pagi sunny.',
      '🎯 **Modifikasi:** Kuat + cuaca bagus → extend ke Tokusawa (+5km past Myojin, +2h). Capek → Taisho Pond + Kappabashi only (5km, 3h).',
    ],
  },
  {
    day: 10, date: 'Apr 30 (Thu)', title: '💻 Work Day Takayama — Run + Cafe + Sake + Onsen',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '💻 Remote Work + Chill Day',
    isBicycleDay: false,
    weather: { tag: '🧥 Dingin', temp: '5-17°C', level: 'cold' },
    fitness: { type: 'run', label: '🏃 5AM Miyagawa Run + Higashiyama Walk', detail: '5:00 Miyagawa River sunrise run 4-5km flat easy. Back 6:30. Then 7:30 Higashiyama Walking Course 3.5km temple trail. Done by 9:30, tubuh energized, ready kerja.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=60',
    summary: 'Hari kerja Faisal — pagi Miyagawa sunrise run + Higashiyama 3.5km temple trail walk. Remote work dari cafe 10-16:00. Sore sake brewery crawl → private couples onsen → Hida beef dinner celebration.',
    dayCost: '¥8,000-12,000 (cafe + lunch + sake + onsen + dinner)',
    schedule: [
      { time: '05:00', emoji: '⏰', text: 'Wake. Konbini hot coffee grab.' },
      { time: '05:30', emoji: '🏃', text: '**MIYAGAWA RIVER SUNRISE RUN** — 4-5km flat easy. East bank, Nakabashi Bridge → north → back. Sunrise ~05:00, golden light Japan Alps backdrop. **Indah!**' },
      { time: '06:30', emoji: '🚿', text: 'Back K\'s House, shower, change' },
      { time: '07:00', emoji: '🥐', text: 'Breakfast konbini atau K\'s House kitchen' },
      { time: '07:30', emoji: '⛩️', text: '**HIGASHIYAMA WALKING COURSE** (東山遊歩道) — 3.5km temple trail eastern hills. 13+ temples/shrines: Unsho-ji, Hiyori-ji, Shoren-ji, Teramachi-dori. Stone paths + mild stairs. Quiet, minimal tourists.' },
      { time: '09:30', emoji: '🏁', text: 'Complete Higashiyama walk, back central Takayama' },
      { time: '— WORK BLOCK —', emoji: '💻', text: '══════════════ REMOTE WORK ══════════════' },
      { time: '10:00', emoji: '☕', text: '**BAGEL Cafe LOUIS** (Miyagawa river view window seats) — breakfast work block. Buka 09:00. Wifi + power outlet. Bagel sandwich + specialty coffee ¥800-1,500. 1-2 jam emails/stand-up.' },
      { time: '11:30', emoji: '🚶', text: 'Walk 5 min → **Falafel Garden Takayama** (Hakamadashi 2-40). Buka 11:00, wifi strong, backpacker laptop-friendly.' },
      { time: '12:00', emoji: '🥙', text: 'Lunch at Falafel Garden — falafel wrap/hummus/smoothie ¥1,000-1,800. Deep work block start.' },
      { time: '12:30', emoji: '💻', text: 'Focused work block 12:30-14:30 — Falafel Garden long community table.' },
      { time: '14:30', emoji: '🚶', text: 'Walk break 15 min — Miyagawa riverside stretch, cek Nakabashi' },
      { time: '15:00', emoji: '☕', text: '**Hida Takayama Coffee Roastery** (Kamisanno-machi) — specialty pourover ¥500-800. Final work block 1 jam, quality coffee ending.' },
      { time: '16:00', emoji: '📦', text: '**WORK DONE** — email sign-off, laptop pack, Slack away' },
      { time: '— LEISURE —', emoji: '🍶', text: '══════════════ END-OF-DAY CHILL ══════════════' },
      { time: '16:30', emoji: '🍶', text: '**SAKE BREWERY CRAWL** — 3 breweries walkable. Cari **sugidama (杉玉)** cedar ball di pintu = free tasting. 1️⃣ **Funasaka Shuzo** (biggest, ¥500/flight 3 sake) 2️⃣ **Harada Sake Brewery** (smaller, intimate) 3️⃣ **Niki Honten** (oldest). 1.5 jam total, ~¥1,000-2,000 spend.' },
      { time: '18:00', emoji: '♨️', text: '💑 **PRIVATE COUPLES ONSEN** — Spa Hotel Alpina 5 min walk. Kashikiri buro (貸切風呂) ¥3,000/couple, 45-60 min. Natural Hida Takayama Onsen 天然温泉. Recovery Kamikochi yesterday. **Book pagi kalau weekend.**' },
      { time: '19:30', emoji: '🍽️', text: '🥩 **HIDA BEEF DINNER** — pilih: **Matsuki Kenji** (teppanyaki + sashimi ¥4-7K), **Kyoya** (hoba miso magnolia leaf ¥3-5K), **Yaoi Suji** (grill-it-yourself kalbi-style ¥3-5K). Reserve pagi!' },
      { time: '21:00', emoji: '🚶', text: '**Night walk Sanmachi Suji** old town — shops closed, lanterns glowing, zero tourists. Magical 30 menit. Nakabashi Bridge at night.' },
      { time: '22:00', emoji: '📦', text: 'Back K\'s House — prep Day 11 cycling + book Shirakawa-go bus pagi!' },
    ],
    tips: [
      '💻 **Work cafe ranking buat view+wifi:** 🥇 BAGEL LOUIS (river view, opens 09:00) 🥈 Falafel Garden (best wifi, opens 11:00) 🥉 Hida Takayama Coffee (specialty coffee ending).',
      '🔌 **Pack power bank** — cafe outlets kadang busy, backup aman.',
      '🎧 **Bawa earphones/headphones** — buat focus atau calls. Takayama cafe mostly quiet tapi weekend bisa rame.',
      '📶 VPN setup kalau kerja butuh access corporate network.',
      '🏃 **Higashiyama Walking Course** mostly flat stone paths — pake Boulder X atau NB Rebel V5. Some stairs tapi gentle.',
      '🍶 **Sake tip:** brewery dengan sugidama cedar ball di pintu = ready buat tasting. Lebih ramah dari yang tanpa. Funasaka paling tourist-friendly, ada English menu.',
      '♨️ **Onsen booking:** Spa Hotel Alpina call pagi 09:00-10:00. Golden Week = rawan booked out. Alt: rotemburo Dormy Inn di Gifu juga ada (udah lu experience Day 6-7).',
      '🥩 **Hida beef reservation:** Matsuki Kenji & Kyoya book out fast. Call 11:00 pagi buat dinner slot 19:30.',
      '📦 Tonight book Shirakawa-go bus tomorrow! Nohi Bus counter di Takayama Bus Terminal. Golden Week = wajib advance booking.',
      '🏪 **Coin laundry** terdekat dari K\'s House ~¥300-500 wash + dry kalau butuh ganti fresh Day 11-14.',
    ],
  },
  {
    day: 11, date: 'May 1 (Fri)', title: '🚲 Bicycle + Shirakawa-go 🏘️',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🚲 Bicycle + UNESCO Village',
    isBicycleDay: true,
    weather: { tag: '🧥 Dingin', temp: '6-18°C', level: 'cold' },
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
    day: 12, date: 'May 2 (Sat)', title: 'Takayama → Tokyo + Card Hunting 🃏',
    city: 'Takayama → Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🃏 Travel + Card Hunt',
    isBicycleDay: false,
    weather: { tag: '🌸 Hangat (Tokyo)', temp: '14-21°C', level: 'warm' },
    fitness: { type: 'push', label: '💪 5:30 Push (light)', detail: '5:30 light session before travel. Or skip — big card hunting afternoon ahead.' },
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'Morning Hida Express + Shinkansen to Tokyo. Afternoon: straight into Akihabara + Nakano Broadway card hunting.',
    dayCost: '¥5,000-8,000 (food) + CARD BUDGET',
    schedule: [
      { time: '05:30', emoji: '💪', text: 'PUSH (light): Push-ups 4×15, diamond push-ups 3×12, plank 3×45s. Or skip — travel + hunt day.' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → pack' },
      { time: '07:30', emoji: '📦', text: 'CHECK OUT K\'s House Takayama' },
      { time: '07:35', emoji: '🚶', text: '🗺️ Hotel → Station: WALK 3 min west back to Takayama Station.' },
      { time: '07:45', emoji: '🚃', text: 'JR Hida Express: Takayama → Nagoya (2h 20min, covered by JR Pass!)' },
      { time: '10:20', emoji: '🍜', text: 'Quick lunch at Nagoya Station — miso katsu or kishimen!' },
      { time: '11:00', emoji: '🚄', text: 'Shinkansen: Nagoya → Tokyo (1h 40min, covered by JR Pass!)' },
      { time: '12:40', emoji: '🏙️', text: 'Arrive Tokyo Station' },
      { time: '12:45', emoji: '🚃', text: '🗺️ Tokyo Station → Hotel: JR Yamanote or Keihin-Tohoku Line → Akihabara Station (3 min, 1 stop). Exit Electric Town exit.' },
      { time: '12:55', emoji: '🚶', text: 'WALK 5 min from Akihabara Station to Super Hotel Lohas Akihabara. Flat, easy with luggage.' },
      { time: '13:15', emoji: '🏨', text: 'Check in Super Hotel. Drop bags. Game face on. 🎯' },
      { time: '14:00', emoji: '🃏', text: 'Mandarake Complex Akihabara — floors 3-5 for TCG. PSA slabs, vintage promos.' },
      { time: '15:30', emoji: '🃏', text: 'Surugaya Akihabara — multiple locations on Chuo-dori. Compare prices!' },
      { time: '16:30', emoji: '🃏', text: 'Yuyu-tei physical store — best for One Piece raw singles. Same prices as online!' },
      { time: '17:00', emoji: '🃏', text: 'Card Rush + Book Off Akihabara — check glass cases for random steals' },
      { time: '17:30', emoji: '🚃', text: 'Train Akiba → Shinjuku → Shimokitazawa (JR + Odakyu, ~30 min)' },
      { time: '18:00', emoji: '🛍️', text: '⭐⭐⭐ THRIFT SESI 3 MEGA HAUL: 2nd Street Shimokitazawa + indie vintage shops. Target: jaket bomber Jepang + graphic tee + cargo + vintage denim. Budget ¥10-17.5K.' },
      { time: '19:30', emoji: '🍺', text: 'Dinner Shimokitazawa izakaya — cheaper + better vibe than Nakano' },
      { time: '21:00', emoji: '📦', text: 'Back to Super Hotel Akihabara. Organize purchases. (Nakano Broadway skip — balik Day 13 kalau perlu)' },
    ],
    tips: [
      'Arrive Tokyo ~12:40 → hunting by 14:00. That\'s 7+ hours of card shopping!',
      '🎯 PRIMARY TARGETS: OP manga art parallels (OP01-OP04), Pokémon gems',
      'Check SNKR Dunk prices on phone BEFORE every purchase!',
      'Tax-free: spend ¥5,000+ at one store → show passport → no tax!',
      'Carry CASH — some smaller card shops are cash-only.',
    ],
  },
  {
    day: 13, date: 'May 3 (Sun)', title: 'Flea Market + Last Shopping 🛍️',
    city: 'Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🛍️ Flea Market Day',
    isBicycleDay: false,
    weather: { tag: '🌸 Hangat', temp: '15-22°C', level: 'warm' },
    fitness: { type: 'run+pull', label: '🏃 5AM Run + 🦾 Pull', detail: '5:00 Imperial Palace Loop (5km) — THE most famous running route in Japan! → 5:40 Pull: doorframe rows 4×12, backpack curls 3×15, plank shoulder taps 3×20. Done by 6:10.', run: 'Imperial Palace Loop, 5km' },
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=75',
    summary: 'Oedo Antique Market (1st Sunday of May ✓) + Tsukiji + Ameyoko + any card shop revisits + farewell sushi.',
    dayCost: '¥8,000-15,000',
    schedule: [
      { time: '05:00', emoji: '🏃', text: '5AM RUN: Imperial Palace Loop (5km) — THE most famous running route in Japan! Counter-clockwise.' },
      { time: '05:40', emoji: '🦾', text: 'PULL: Doorframe rows 4×12, backpack curls 3×15, plank shoulder taps 3×20' },
      { time: '06:10', emoji: '🚿', text: 'Shower → breakfast' },
      { time: '08:00', emoji: '🚃', text: 'Head to Tsukiji Outer Market — tamagoyaki, fresh seafood, tuna bowls' },
      { time: '09:00', emoji: '🚃', text: 'Walk to Tokyo International Forum (Yurakucho, 5 min from Tsukiji)' },
      { time: '09:30', emoji: '🛍️', text: '✨ Oedo Antique Market — Japan\'s largest outdoor antique market! 1st Sunday = today! ~250 vendors.' },
      { time: '10:00', emoji: '🏺', text: 'Browse: vintage kimono, ceramics, old woodblock prints, antique toys, retro cameras, military items' },
      { time: '11:00', emoji: '💰', text: 'Negotiate! Cash is king at flea markets. Polite haggling expected (10-20% off asking price).' },
      { time: '12:00', emoji: '🍜', text: 'Lunch near Yurakucho/Ginza area' },
      { time: '13:00', emoji: '🚃', text: 'JR Yamanote Yurakucho → Ueno Station (10 min)' },
      { time: '13:30', emoji: '🛍️', text: '🎯 THRIFT SESI 4: 2nd Street Ueno — isi kekurangan + Keiko\'s picks + overshirt bersih buat farewell sushi. Budget ¥5-10.5K.' },
      { time: '15:00', emoji: '🛍️', text: 'Ameyoko Market (Ueno, right next door) — cheap street shopping, snacks, spices, dried fruits' },
      { time: '16:30', emoji: '🏪', text: 'Don Quijote — last-minute gifts, Japanese snacks, KitKat flavors, electronics' },
      { time: '18:00', emoji: '🃏', text: 'Optional: Nakano Broadway (skipped Day 12) or revisit card shops you missed' },
      { time: '19:30', emoji: '🍣', text: 'FAREWELL DINNER: Splurge on sushi! Midori Sushi (Shibuya), Sushi Zanmai (Tsukiji 24h), or kaiten-zushi' },
      { time: '21:00', emoji: '📦', text: 'PACK EVERYTHING. Cards in hard-top loaders → carry-on bag. Souvenirs in checked luggage.' },
      { time: '22:00', emoji: '😴', text: 'Last night in Japan. おやすみ！' },
    ],
    tips: [
      'Oedo Antique Market: 9AM-3PM, rain or shine. Come early for best selection!',
      'Flea market is CASH ONLY. Bring ¥20,000+ in cash.',
      'This is your buffer day for any card shops you missed yesterday.',
      'Tsukiji Outer Market is busiest 9-11AM. Go before the flea market.',
      '🛍️ Thrift Sesi 4 (2nd Street Ueno) built in after lunch. See Wardrobe section for full 4-session thrift plan.',
    ],
  },
  {
    day: 14, date: 'May 4 (Mon)', title: 'Sayonara Japan ✈️',
    city: 'Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '✈️ Departure',
    isBicycleDay: false,
    weather: { tag: '🌸 Hangat', temp: '15-23°C', level: 'warm' },
    fitness: { type: 'legs', label: '🦵 LAST WORKOUT!', detail: 'Last workout of the trip! Squats 4×20, jump squats 3×10, walking lunges 3×12, calf raises 4×20. Go hard! Done by 6:00. You earned it. 💪' },
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=75',
    summary: 'Final konbini run for plane snacks, head to airport, duty-free matcha, fly home with memories.',
    dayCost: '¥3,000-5,000',
    schedule: [
      { time: '05:30', emoji: '🦵', text: 'LAST WORKOUT! LEGS: Squats 4×20, jump squats 3×10, walking lunges 3×12, calf raises 4×20. 💪' },
      { time: '06:00', emoji: '🚿', text: 'Shower → final pack' },
      { time: '08:00', emoji: '🍙', text: 'Breakfast — last Japanese konbini meal! Egg sandwich + onigiri + milk tea.' },
      { time: '08:30', emoji: '🏪', text: 'Final konbini run — plane snacks (Tokyo Banana, KitKat flavors, matcha Pocky)' },
      { time: '09:00', emoji: '📦', text: 'Final check: all cards secure in carry-on? Passport? WiFi returned? Suica card?' },
      { time: '09:30', emoji: '🏨', text: 'Check out Super Hotel Lohas Akihabara' },
      { time: '09:35', emoji: '🚶', text: '🗺️ Hotel → Station: WALK 5 min to Akihabara Station.' },
      { time: '09:45', emoji: '🚃', text: 'JR Yamanote → Tokyo Station (3 min) OR JR Keihin-Tohoku → Ueno (4 min) for Skyliner' },
      { time: '10:00', emoji: '🚃', text: 'To airport: Narita Express from Tokyo Station (1h, ¥3,250) OR Skyliner from Ueno (41 min, ¥2,520). For Haneda: JR to Hamamatsucho → Monorail (30 min total).' },
      { time: '11:30', emoji: '🛍️', text: 'Airport duty-free — matcha sweets, Japanese whisky, cosmetics, last omiyage' },
      { time: '12:30', emoji: '🍜', text: 'Airport lunch — surprisingly good ramen at Narita/Haneda food courts' },
      { time: '14:00', emoji: '✈️', text: 'Board flight. ありがとう日本！See you next time! 🇯🇵' },
    ],
    tips: [
      'Return Suica at airport for ¥500 deposit refund. Or keep it as souvenir!',
      'Duty-free prices are actually good for Royce chocolate and Japanese whisky.',
      'Arrive 3 hours early for international flights during Golden Week!',
      'Pack cards in carry-on ONLY. Never check valuable cards — airlines lose luggage.',
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
                    {day.weather && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        day.weather.level === 'freezing' ? 'bg-blue-100 text-blue-800' :
                        day.weather.level === 'cold' ? 'bg-sky-100 text-sky-700' :
                        day.weather.level === 'warm' ? 'bg-pink-100 text-pink-600' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {day.weather.tag} {day.weather.temp}
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

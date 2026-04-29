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
    day: 6, date: 'Apr 26 (Sun)', title: 'Kyoto → Gifu (Shinkansen) 🏯',
    city: 'Kyoto → Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '🏯 Travel + Castle + Buddha',
    isBicycleDay: false,
    weather: { tag: '☀️ Sejuk-hangat', temp: '10-21°C', level: 'mild' },
    fitness: { type: 'rest', label: '😌 Travel + Light Day', detail: 'Travel afternoon Gifu, sightseeing castle + Buddha. Optional gym session evening kalau ada energy. Recovery dari Day 5 boat + Arashiyama.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=60',
    summary: 'Pakai Shinkansen Kyoto → Gifu-Hashima → JR local Gifu. Arrive Gifu siang ~14:00, drop bags Hotel Livemax Premium Gifu Ekimae. Afternoon: Gifu Castle Ropeway + Great Buddha + Nagara River sunset walk. Local izakaya dinner.',
    dayCost: '¥6,000-9,000 (Shinkansen ¥3,280/orang + sightseeing + food)',
    schedule: [
      { time: 'Morning', emoji: '📦', text: 'Check out Piece Hostel Kyoto, Shinkansen ke Gifu-Hashima + JR local Gifu. Arrive ~14:00-14:30.' },
      { time: '14:20', emoji: '🏨', text: '**Drop bags Hotel Livemax Premium Gifu Ekimae** (3-5 min walk dari JR Gifu Station). Check-in resmi 15:00, mereka simpen bagasi free. Konfirmasi gym/breakfast info di front desk.' },
      { time: '14:45', emoji: '🚶', text: 'Walk to Gifu Park area atau ambil bus #1 ke Gifu Park (5 min, ¥220) — depending on energy' },
      { time: '15:00', emoji: '🚡', text: '**Gifu Castle Ropeway** ¥1,100 round-trip. **Last upgoing 17:00**, last downgoing 18:00. Cek hari ini operating jam berapa di tiket counter.' },
      { time: '15:30', emoji: '🏯', text: '**Gifu Castle (岐阜城)** — atas Mt. Kinka (329m). Panoramic view: Nagara River + city + clear day = Japanese Alps. ¥200 entrance castle interior. 1 jam quality time.' },
      { time: '16:45', emoji: '🚡', text: 'Ropeway turun. Walk through **Gifu Park** — 30 menit santai, free entry, leafy.' },
      { time: '17:15', emoji: '🗿', text: '**Great Buddha (Shōhō-ji 正法寺)** ¥200 — one of Japan\'s 3 great Buddhas, made of **lacquered paper** (unique!). 14m tall, 200+ tahun history. Closes 17:00 — kalau lewat, save buat Day 7 morning before Monet\'s Pond.' },
      { time: '17:45', emoji: '🚶', text: '**Nagara River walk** golden hour — pretty cherry-leaf trees, fishermen casting. Real Gifu, no tourists. 30 menit.' },
      { time: '18:30', emoji: '🍽️', text: '**Dinner local izakaya** Gifu Station area — real Japanese prices (¥800-1,500/dish). Pilih: ayu sweetfish (April specialty), unagi, hoba miso preview, atau ramen Gifu-style.' },
      { time: '20:00', emoji: '💪', text: 'OPTIONAL: Gym session 1-1.5 jam (lihat tips bawah buat opsi gym). Atau skip, hotel relax.' },
      { time: '21:30', emoji: '🛁', text: 'Hotel Livemax — basic onsen mungkin gak ada (beda dari Dormy Inn). Cek hotel facility kalau ada bath/sento dekat.' },
      { time: '22:30', emoji: '😴', text: 'Sleep — Day 7 Monet\'s Pond + private couples onsen tomorrow!' },
    ],
    tips: [
      '🏨 **Hotel Livemax Premium Gifu Ekimae** — budget business hotel chain, NOT Dormy Inn. Basic amenities, free wifi, kompak rooms. Front desk biasanya bahasa Inggris terbatas — bisa Google Translate.',
      '🚡 **Gifu Castle ropeway last upgoing 17:00** — kalau arrive hotel 14:20, masih cukup waktu! Cek operasi musim April: biasanya 09:00-17:30 tergantung weather.',
      '🗿 **Great Buddha closes 17:00** — kalau ngepas, prioritas castle dulu (vista more important), Buddha bisa next morning Day 7 sebelum Monet\'s Pond.',
      '💪 **Gym pay-per-visit Gifu options:** 1) **JOYFIT24 Gifu Ekimae** chain ¥1,500-2,500 visitor pass 2) **Anytime Fitness Gifu** chain ¥3,000+ visitor 3) **Gifu City Sports Center** public ¥300-700 (bawa indoor shoes sendiri, jam 09:00-21:00). Tanya hotel front desk mana terdekat — biasanya mereka punya leaflet.',
      '🥋 **Public sports center tip:** Cari "市民体育館" (shimin taiikukan) atau "総合体育館". Cheapest option, machines + free weights basic but legit. Need indoor shoes (bawa NB Rebel V5 yang clean).',
      '🍶 **Gifu sake breweries** dekat Kawaramachi old town juga ada — kalau capek castle hike, swap dengan sake brewery walk + tasting (¥500-1,000).',
      '⚠️ Original itinerary mention "Dormy Inn free ramen" + "rooftop onsen" — INI GAK APPLY karena lu di Livemax. Cek alternatif: hotel Livemax kadang punya basic shared bath, atau cari sento publik dekat (¥500-700).',
      '📦 Tonight cek apa Livemax punya breakfast option Day 7 pagi. Kalau gak ada, konbini run.',
    ],
  },
  {
    day: 7, date: 'Apr 27 (Mon)', title: '✨ Monet\'s Pond via Taxi + BookOff Pokemon Haul',
    city: 'Gifu', cityColor: 'bg-violet-100 text-violet-600',
    theme: '🎨 Hidden Gem + Card Hunt',
    isBicycleDay: false,
    weather: { tag: '☀️ Sejuk-hangat', temp: '11-22°C', level: 'mild' },
    fitness: { type: 'rest', label: '😌 Travel + Card Hunt Day', detail: 'Recovery + adventure. Taxi ke Monet\'s Pond + bus return + evening BookOff Pokemon TCG haul. No formal workout.' },
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=60',
    summary: 'Bangun siang → tetep ke Monet\'s Pond via taxi ¥16K (worth it, magical confirmed), return via bus. Malam BookOff Gifu Orchid Park = Pokemon TCG aesthetic binder haul ¥55,810 (47 items, 46 tax-free). Plus DQ7 + Mario Party Switch 2 used cartridge.',
    dayCost: '¥75,000-90,000 (taxi + bus + food + ¥55K BookOff haul)',
    schedule: [
      { time: '~10:30', emoji: '⏰', text: '😅 Bangun kesiangan — bus Itadori timing missed (12:25 round-trip impractical). Pivot strategy.' },
      { time: '11:30', emoji: '🍜', text: 'Late breakfast/lunch hotel area, decision: tetep ke Monet\'s Pond pakai TAXI + bus return' },
      { time: '12:30', emoji: '🚕', text: 'Taxi Gifu → Monet\'s Pond (~¥16,000 one way, 40-50 menit)' },
      { time: '13:30', emoji: '🎨', text: '✨ **MONET\'S POND (Namonaki Ike) — magical confirmed!** Crystal clear water, koi colorful, water lilies, looks EXACTLY like Monet painting. FREE entry. 1 jam quality time.' },
      { time: '14:30', emoji: '📸', text: 'Photos berbagai angle, walk Nemichi Shrine grounds, total serenity' },
      { time: '15:00', emoji: '🍜', text: 'Late lunch local mountain restaurant near pond' },
      { time: '15:45', emoji: '🚌', text: 'Bus return Itadori → Gifu (~1.5 jam, ¥1,500/orang). Cheap return offset taxi cost.' },
      { time: '17:30', emoji: '🏨', text: 'Back hotel area Gifu' },
      { time: '18:00', emoji: '🍙', text: 'Konbini snack break, refresh' },
      { time: '19:30', emoji: '🃏', text: '🎯 **BOOKOFF Gifu Orchid Park** — Pokemon TCG raw + Nintendo cartridge hunting. AC, well-organized, tax-free counter.' },
      { time: '20:04', emoji: '💴', text: '**HAUL ¥55,810 total (~Rp 6.1-6.3M)**: 46 Pokemon cards (aesthetic binder) + DQ7 Reimagined + Mario Party Jamboree Switch 2 + Banpresto Chrollo HxH + Sega Frieren Stark figures' },
      { time: '21:00', emoji: '🍜', text: 'Late dinner Gifu izakaya — celebrate haul + last Gifu night' },
      { time: '22:30', emoji: '📦', text: 'Pack untuk Takayama Day 8 — cards + cartridges hand-carry secured' },
    ],
    tips: [
      '🎨 **Monet\'s Pond confirmed magical** — walaupun mahal taxi ¥16K, view + ambience worth it. Couple memorable.',
      '🃏 **BookOff Gifu Orchid Park haul recap:** Squirtle ¥4,400, Bulbasaur ¥3,960, Vaporeon ¥3,740, Dachsbun ex ¥3,740 (-20%), Maushold ¥3,740 (-40%), Psyduck ¥3,300, Misty\'s Lapras ¥2,970, Wartortle ¥2,750, Ivysaur ¥2,750, Snorlax ¥1,980 (-40%) + 36 more cards.',
      '🎮 **Nintendo Switch 2 used cartridge bonus:** Dragon Quest VII Reimagined ¥5,940 + Super Mario Party Jamboree + TV ¥6,930.',
      '🧠 **Mindset: aesthetic vs investment** — separate buckets! Today\'s ¥55K = personal joy/binder collection. Investment grails (PSA 10 slabs, manga art) save buat Tokyo Day 12+.',
      '💴 **Tax-free di BookOff:** Saved ¥5,418 (10%) on ¥59,603 eligible items. Need passport + ¥5,000+ spend per store.',
      '🚕 **Taxi vs bus economics:** Taxi ¥16K one-way + bus ¥1,500 return = ¥17,500 total. Bus round-trip would be ¥3,000 tapi miss window. Trade money for time = OK kalau jam mepet & destination worth.',
      '📦 Cards + cartridges = HAND-CARRY ke Takayama tomorrow, jangan masuk underbus koper (vibration + temperature).',
    ],
  },
  {
    day: 8, date: 'Apr 28 (Tue)', title: 'Gifu → Takayama via Nohi Bus 🚌🍶',
    city: 'Gifu → Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🏘️ Old Japan',
    isBicycleDay: false,
    weather: { tag: '🧥 Dingin', temp: '5-16°C', level: 'cold' },
    fitness: { type: 'rest', label: '😌 Travel Day', detail: 'Travel + Sanmachi old town walking. No formal workout. Conserve energy buat Day 9 Kamikochi 9-10km hike besok.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=60',
    summary: 'Nohi Bus 10:30 dari Meitetsu Gifu → Takayama Nohi Bus Center 12:33 (¥2,900/orang, hemat ¥5,420 vs JR Hida Express). 2 koper + Pokemon cards hand-carry. Afternoon: Sanmachi Edo-period old town, sake brewery free tastings, Hida beef sushi street, Nakabashi Bridge.',
    dayCost: '¥6,000-10,000 (bus ¥2,900/orang + Sanmachi food + sake + Hida beef dinner)',
    schedule: [
      { time: '08:00', emoji: '🚿', text: 'Shower, breakfast hotel/konbini' },
      { time: '09:00', emoji: '📦', text: 'Final pack — cards + Nintendo cartridges + Banpresto figures **HAND-CARRY** (jangan underbus). Koper x2 ready.' },
      { time: '09:30', emoji: '📦', text: 'CHECK OUT Hotel Livemax Premium Gifu Ekimae' },
      { time: '09:50', emoji: '🚶', text: '🗺️ Walk 6 min Hotel → Meitetsu Gifu Station bus area (400m flat)' },
      { time: '10:00', emoji: '🎫', text: 'Find Platform 6, line up. Cash ¥5,800 ready (¥2,900 × 2) atau credit card. Suica gak work buat express bus.' },
      { time: '10:15', emoji: '🎒', text: 'Driver/staff bantu load 2 koper underbus compartment. Cards/valuables dibawa naik.' },
      { time: '10:30', emoji: '🚌', text: '🎯 **NOHI BUS DEPART** Meitetsu Gifu → Takayama Nohi Bus Center (2h 3min, ¥2,900/orang). 6 stops via highway.' },
      { time: '— RIDE —', emoji: '🪟', text: 'Window seat KIRI = Hida River + gorge views from road perspective. Charge HP, snack, rest. Mid-rest stop ~15 menit.' },
      { time: '12:33', emoji: '🏙️', text: 'Arrive **Takayama Nohi Bus Center** (sebelahan JR Takayama Station)' },
      { time: '12:37', emoji: '🚶', text: 'Walk 4 min ke **Country Hotel Takayama** (6-6 Hanasato-cho area, dekat station)' },
      { time: '12:45', emoji: '🏨', text: 'Drop bags Country Hotel front desk (check-in 15:00, mereka simpen free). Cards stay with lu.' },
      { time: '13:00', emoji: '🥩', text: '**Hida Beef Sushi on the street** — ¥600-800/piece, multiple stalls Sanmachi. Welcome to Takayama!' },
      { time: '13:45', emoji: '🏘️', text: '**Sanmachi Suji (三町筋)** — preserved Edo-period old town. Wooden merchant houses, small museums, traditional sweets.' },
      { time: '14:30', emoji: '🍶', text: '**Sake brewery walk** — cari sugidama (杉玉) cedar ball di pintu = free tasting available! Funasaka Shuzo (biggest), Harada, Niki Honten. 3 breweries dalam 15 menit walking.' },
      { time: '16:00', emoji: '📸', text: '**Nakabashi Bridge (中橋)** — red bridge over Miyagawa, THE Takayama icon photo spot' },
      { time: '16:30', emoji: '🏛️', text: 'Takayama Jinya (高山陣屋) ¥440 — Edo-era government building, only one preserved in Japan' },
      { time: '17:30', emoji: '🏨', text: 'Formal check-in **Country Hotel Takayama** — settle into room, change' },
      { time: '18:00', emoji: '🧘', text: '**Mobility 15 min** in room — hip openers, hamstring, calf stretch (rebound bus stiffness). NO RUN tonight (Kamikochi tomorrow = legs day equivalent).' },
      { time: '19:00', emoji: '🍽️', text: '**Dinner: Hida beef** — Matsuki Kenji teppanyaki (¥4-7K) atau Kyoya hoba miso (¥3-5K). **Cutting note:** order proper portion bukan excessive marbling, limit sake 1-2 cup, skip dessert.' },
      { time: '21:00', emoji: '🍙', text: 'Konbini run buat **Day 9 Kamikochi bento** — 2x onigiri + protein bar + thermos hot tea + chocolate. Pagi gak sempet beli.' },
      { time: '21:30', emoji: '📦', text: 'Pack Day 9 daypack: layering (Heattech+PuffTech+BlockTech), water, bear bell optional, moleskin plaster, headlamp, cash ¥7K bus + lunch.' },
      { time: '22:00', emoji: '😴', text: 'Sleep early — alarm 05:00, Kamikochi 9-10km hike + 1.5h bus each way tomorrow!' },
    ],
    tips: [
      '🏨 **Country Hotel Takayama** = budget business hotel near JR Station, basic amenities. Bukan K\'s House (initial plan), bukan ryokan luxury. Free wifi, kompak rooms.',
      '🚌 **Nohi Bus tips:** 1) Suica gak work, bawa **cash ¥5,800** atau credit card di counter. 2) **Arrive 15 min early** Platform 6 buat load koper underbus. 3) Driver/staff bantu load. 4) Window seat KIRI = Hida River views.',
      '💰 **Savings vs JR Hida Express:** ¥5,420 (Rp 580K) couple. JR Hida ¥5,610/orang vs Nohi Bus ¥2,900/orang, +14 menit travel. BTC maxi worth it.',
      '🎴 **Cards/cartridges HAND-CARRY:** vibration + temperature swing underbus = damage potential. Hard top loader sleeve, simpen daypack.',
      '🏘️ **Sanmachi closes early** ~17:00 most shops. Sake breweries last tasting 17:00-18:00. Sightseeing window 13:00-17:00.',
      '🥩 **Hida beef sushi street** ¥600-800/piece, BEST ¥800 spend Jepang. Multiple stalls Sanmachi corner.',
      '🍶 **Sake brewery free tasting:** sugidama cedar ball outside = tasting available. Funasaka tourist-friendly (English menu, ¥500/flight 3 sake). Harada intimate. Niki oldest.',
      '💪 **NO RUN TONIGHT** — Kamikochi 9-10km hike tomorrow = legs day. Athletic performance Day 9 > workout guilt Day 8.',
      '🍱 **Cutting context dinner:** Hida beef high fat wagyu 600-800 kcal/portion. Sake +150 kcal/cup. Smart choice = lean cut + 1 sake max + tea + skip dessert.',
      '🌅 **Day 9 prep tonight:** konbini bento bawa pagi, alarm 05:00, bus 06:30 dari Takayama Nohi Bus Center.',
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
    summary: 'Hike from Kappabashi Bus Terminal: Walk WEST first (Taisho Pond morning light) → back to Kappabashi → walk EAST to Myojin Pond turnaround → lunch → back Kappabashi golden afternoon → bus from Terminal. ~13km, 5-6h moving, Z2 cardio fat burn. Garmin "Walk" activity (Vivoactive 5 no Hike).',
    dayCost: '¥8,000-12,000 (bus ¥6,400 round-trip + food + shrine)',
    schedule: [
      { time: '05:00', emoji: '⏰', text: 'Wake up early — Kamikochi hike = today\'s workout. No gym needed.' },
      { time: '05:30', emoji: '🍙', text: 'Konbini breakfast + **pack lunch** (2x onigiri + protein bar + snack + hot drink in thermos). Kamikochi lodge food limited + expensive ¥1,500+.' },
      { time: '06:15', emoji: '🚶', text: '🗺️ Country Hotel → Takayama Nohi Bus Center (5 min walk, sebelah JR station)' },
      { time: '06:30', emoji: '🚌', text: '🎫 **NOHI BUS Kamikochi Line** Takayama → Hirayu Onsen → Kamikochi (~1.5h, **¥3,000 one-way / ¥6,000 couple**). Operator: 濃飛バス. **NO reservation needed (予約不要)** — beli ticket di counter pagi, all seats unreserved (全便自由席). Departures hourly 06:00, 07:00, 08:00 dst. Apr 29 = Golden Week ▲ enhanced frequency.' },
      { time: '— START —', emoji: '🏔️', text: '══════════════ HIKE FROM KAPPABASHI TERMINAL ══════════════' },
      { time: '08:00', emoji: '🚌', text: '**ARRIVE Bus Terminal Kappabashi** (final stop). Pack daypack, water bottle full, **start Garmin "Walk" activity** (Vivoactive 5 gak ada Hike, pake Walk — same tracking). GPS lock 30 sec.' },
      { time: '08:05', emoji: '🌉', text: '**Kappabashi Bridge** quick first photo, briefly (5 min). Then walk WEST.' },
      { time: '08:10', emoji: '🚶', text: 'Walk WEST along Azusa River path' },
      { time: '08:30', emoji: '🌿', text: '**Tashiro Marsh + Pond** — boardwalk wetland, 15 min stop (1.5 km cum)' },
      { time: '08:50', emoji: '📍', text: '**TAISHO POND (大正池)** ⭐ MORNING LIGHT PEAK — mountain reflection di still water, dead trees haunting beauty from 1915 Mt. Yakedake eruption. **30 min photos** (3 km cum)' },
      { time: '09:20', emoji: '🚶', text: 'Walk EAST back same path → Kappabashi' },
      { time: '10:00', emoji: '🌉', text: '**KAPPABASHI Round 2** — water refill + toilet + snack break 15 min (6 km cum)' },
      { time: '10:15', emoji: '🚶', text: 'Walk EAST along Azusa River north side, different scenery' },
      { time: '11:30', emoji: '⛩️', text: '**MYOJIN POND (明神池) — TURNAROUND** (9.5 km cum). Sacred pond + Hotaka Jinja Okumiya shrine ¥300. Most pristine forest setting.' },
      { time: '11:35', emoji: '🍙', text: '**LUNCH at Myojin pond** — konbini bento + 45 min mountain serenity' },
      { time: '— RETURN —', emoji: '↩️', text: '══════════════ RETURN WEST TO TERMINAL ══════════════' },
      { time: '12:20', emoji: '🚶', text: 'Walk WEST → Kappabashi (3.5 km, 1 jam gentle)' },
      { time: '13:30', emoji: '🌉', text: '**KAPPABASHI Round 3 — golden afternoon light** (13 km cum). Mountain shadows different angles dari pagi. 30 min final photos.' },
      { time: '14:00', emoji: '☕', text: 'Kappabashi lodge pit stop — hot coffee ¥400, rest legs' },
      { time: '14:30', emoji: '🚶', text: 'Walk 5 min ke **Bus Terminal Kappabashi** (上高地バスターミナル)' },
      { time: '14:35', emoji: '⏹️', text: 'STOP Garmin activity. Total expected: ~13km / 5-6h moving / Z2 HR avg / 1,500-2,000 kcal burn.' },
      { time: '15:15', emoji: '🎒', text: 'Final check, ganti kaos kaki kalau basah, toilet, pack layers' },
      { time: '16:00', emoji: '🚌', text: '**BUS DEPART** Bus Terminal Kappabashi → Hirayu → Takayama (~1.5h). **Last bus 17:30** — JANGAN miss!' },
      { time: '17:30', emoji: '🏨', text: 'Back K\'s House Takayama — SHOWER, rest tired legs, change casual clothes' },
      { time: '18:30', emoji: '🍽️', text: '🥩 **CELEBRATION DINNER** — Hida beef earned! Matsuki Kenji atau Kyoya (hoba miso). Reserve pagi kalau weekend.' },
      { time: '20:30', emoji: '🍺', text: 'Optional craft beer Takayama Brewery atau sake tasting Funasaka' },
      { time: '21:30', emoji: '😴', text: 'Sleep well — Day 10 work day (but chill)!' },
    ],
    tips: [
      '🗺️ **ROUTE FROM KAPPABASHI TERMINAL (actual):** Walk WEST first ke Taisho Pond (morning light = optimal mountain reflection) → balik ke Kappabashi → walk EAST ke Myojin → lunch → balik Kappabashi (golden afternoon) → bus. ~13km total. Bus stops sebenarnya ada 3 (Taisho, Imperial Hotel, Terminal) tapi paling sering turun di Terminal kalau gak request driver.',
      '⌚ **GARMIN VIVOACTIVE 5 — NO Hike activity native!** Pake **"Walk"** activity (semua tracking sama: GPS, HR, distance, pace, elevation, calories). Atau "Cardio" generic. Setelah selesai bisa rename di Garmin Connect app: Activity → Edit → Activity Type → "Hiking" → Save. Data tetap sama, label berubah.',
      '🎯 **CARDIO TARGETS:** Z2 HR 130-150 BPM sustained = optimal fat burn cutting context. Pace 4-5 km/h walking. Stops = HR drops to Z1 recovery. Don\'t speed-walk — Z2 long > Z3 burst untuk fat oxidation.',
      '🔥 **EXPECTED BURN Day 9:** ~1,500-2,000 kcal active expenditure (13km, 5-6h, Z2). Combined dengan TDEE = ~3,500-4,000 kcal total burn. Eat ~1,800-2,000 kcal = deficit ~1,500-2,000 kcal = ~250g fat loss SINGLE DAY. Day 9 = biggest cutting day of trip.',
      '🚌 **NOHI BUS Kamikochi Line (verified Apr 2026):** ¥3,000 one-way, NO reservation needed (予約不要), all seats free seating (自由席). Beli ticket di counter pagi-pagi sebelum berangkat. Operator: 濃飛バス (Nohi Bus).',
      '⏰ **Departures Takayama Nohi Bus Center:** Hourly 06:00, 07:00, 08:00, 09:00, 10:00 dst sampai 17:40. **Last bus back from Kamikochi: 17:30** (arrive Takayama 18:30).',
      '⚠️ **NO CARS ALLOWED** di Kamikochi — bus only access. Itu yang bikin pristine. No taxi escape, jangan miss last bus 17:30!',
      '⚠️ **Apr 29 = Golden Week ▲ enhanced frequency** — bus crowded. Take earliest 06:30 bus dari Takayama buat avoid mass.',
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
    day: 10, date: 'Apr 30 (Thu)', title: '💻 Work Day Takayama — Run + Cafe + GYM + Sake',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '💻 Remote Work + Strength Day',
    isBicycleDay: false,
    weather: { tag: '🧥 Dingin', temp: '5-17°C', level: 'cold' },
    fitness: { type: 'run', label: '🏃 AM Run + Walk + 💪 PM Gym', detail: '5:30 Miyagawa River run 4-5km. 7:30 Higashiyama Walking Course 3.5km. Total morning cardio ~9km. Sore: One Star Gym Takayama ¥2,200 day pass — Push session (chest+shoulders+triceps) 1.5 jam buat address home workout deficit + muscle preservation cutting.' },
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=60',
    summary: 'Pagi: Miyagawa sunrise run + Higashiyama 3.5km temple trail (free cardio). Siang: remote work cafe rotation 10:00-16:00. Sore: One Star Gym ¥2,200 Push session (cutting strength). Malam: sake brewery + Hida beef dinner.',
    dayCost: '¥10,000-14,000 (cafe + lunch + gym ¥2,200 + sake + dinner)',
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
      { time: '15:00', emoji: '☕', text: '**Hida Takayama Coffee Roastery** (Kamisanno-machi) — specialty pourover ¥500-800. Final work block 1 jam.' },
      { time: '16:00', emoji: '📦', text: '**WORK DONE** — email sign-off, laptop pack, Slack away. Walk back hotel grab gym kit.' },
      { time: '— GYM —', emoji: '💪', text: '══════════════ STRENGTH SESSION ══════════════' },
      { time: '16:30', emoji: '💪', text: '🎯 **ONE STAR GYM TAKAYAMA** ¥2,200 day pass — Address: cek Google Maps. Bawa indoor shoes (NB Rebel V5 clean), towel, water, gym clothes.' },
      { time: '16:45', emoji: '🏋️', text: '**PUSH session 1.5 jam** (chest/shoulders/triceps) — preserve muscle critical kalau cutting. Suggested: Bench press 4×8, OH press 4×10, incline DB 3×10, lateral raise 4×12, tricep dips 3×10, plank 3×60s. Mid-stim, not max effort.' },
      { time: '18:15', emoji: '🚿', text: 'Gym shower (kalau ada) atau langsung balik hotel shower' },
      { time: '— DINNER + CHILL —', emoji: '🍶', text: '══════════════ EVENING ══════════════' },
      { time: '18:45', emoji: '🍶', text: '**SAKE BREWERY CRAWL** — Funasaka (¥500 flight 3 sake) atau Harada. **Cutting note:** 1-2 cups MAX (1 cup ~150 kcal empty). Sake brewery tutup ~18:00, cek dulu mana yang masih buka.' },
      { time: '19:30', emoji: '🥩', text: '🥩 **HIDA BEEF DINNER** — pilih: **Matsuki Kenji** (teppanyaki ¥4-7K), **Kyoya** (hoba miso ¥3-5K), **Yaoi Suji** (grill ¥3-5K). **Reserve pagi!** Cutting choice: lean cuts > marbling, side veggies, skip rice refill.' },
      { time: '21:00', emoji: '🚶', text: '**Night walk Sanmachi** — shops closed, lanterns glowing, magical 30 menit. Bonus low-impact movement.' },
      { time: '22:00', emoji: '📦', text: 'Back hotel — prep Day 11 cycling + **CONFIRM Shirakawa-go bus** booked (Day 8 malam udah book).' },
    ],
    tips: [
      '💪 **GYM ¥2,200 DAY PASS** at One Star Gym Takayama. Bawa workout clothes + clean indoor shoes (NB Rebel V5) + towel + water. Push session ideal (cutting + low muscle preservation).',
      '🍱 **Cutting framework Day 10:** Diet 1,800-2,000 kcal, protein 100g+. Smart picks: chicken/sashimi/tofu, limit sake 1-2 cup, skip dessert. Hida beef = lean cut bukan high-marbling wagyu.',
      '💻 **Work cafe ranking:** 🥇 BAGEL LOUIS (river view, opens 09:00) 🥈 Falafel Garden (best wifi, opens 11:00) 🥉 Hida Takayama Coffee (specialty ending).',
      '🔌 **Pack power bank + headphones** — cafe outlets kadang busy. Headphones buat focus/calls.',
      '🏃 **Higashiyama Walking Course** stone paths flat-ish — pake Boulder X atau NB Rebel V5. Gentle stairs.',
      '🍶 **Sake tip:** brewery dengan sugidama cedar ball ready tasting. Funasaka tourist-friendly English menu.',
      '🥩 **Hida beef reservation:** Matsuki Kenji & Kyoya book out fast. Call 11:00 pagi via hotel front desk buat slot 19:30.',
      '📦 Day 8 malam (kemarin) udah book Shirakawa-go bus Day 11 ya? Kalau belum, urgent malam ini di Nohi Bus counter.',
      '🏪 **Coin laundry** dekat Country Hotel Takayama ~¥300-500 wash+dry kalau butuh fresh clothes Day 11-14.',
      '⚠️ **No private onsen Day 10** (originally Spa Hotel Alpina) — swap dengan gym session. Onsen experience udah Day 7 Juhachiro tapi cancel — alt: gunakan Country Hotel basic bath, atau cari sento publik dekat ¥500.',
    ],
  },
  {
    day: 11, date: 'May 1 (Fri)', title: '🚲 Cycling Higashiyama-Hida Folk + Shirakawa-go 🏘️',
    city: 'Takayama', cityColor: 'bg-emerald-100 text-emerald-700',
    theme: '🚲 Cycling + UNESCO Village',
    isBicycleDay: true,
    weather: { tag: '🧥 Dingin', temp: '6-18°C', level: 'cold' },
    fitness: { type: 'bike', label: '🚲 Cycling 18km + Walking Shirakawa-go', detail: 'AM: cycling 18km Higashiyama-Hida Folk loop ~2.5h (600-900 kcal). PM: Shirakawa-go walking 5km + viewpoint hike (300-450 kcal). Total ~900-1,300 kcal active expenditure. Optimal cardio + active recovery dari Day 10 gym. Perfect cutting day.' },
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=60',
    summary: 'AM: cycling 18km loop through Higashiyama temples + Hida Folk Village (open-air museum) + countryside rice paddies. PM: Nohi Bus ke Shirakawa-go UNESCO village + Shiroyama Viewpoint hike. Cardio-heavy day, no gym (Day 10 udah gym strength).',
    dayCost: '¥9,000-13,000 (bike ¥1,500 + bus ¥4,420 + folk village ¥700 + lunch + dinner)',
    schedule: [
      { time: '06:30', emoji: '☕', text: 'Wake, konbini breakfast — ringan karena cycling 3 jam coming' },
      { time: '07:30', emoji: '🚶', text: 'Walk dari Country Hotel Takayama → bike rental shop (3-5 min walk)' },
      { time: '— BIKE RENTAL —', emoji: '🚲', text: '══════════════ RENT BICYCLE ══════════════' },
      { time: '07:45', emoji: '🎫', text: '**Rent bicycle.** Best: **Hara Cycle (原サイクル)** dekat JR station, ¥1,000/day mama-chari atau ¥1,500-2,000 e-bike. Atau Country Hotel front desk rental.' },
      { time: '08:00', emoji: '🚲', text: '**START cycling** — Head SOUTH along Miyagawa River bike path' },
      { time: '08:15', emoji: '📸', text: '**Nakabashi Bridge** (中橋) — morning light photo (1.5km)' },
      { time: '08:30', emoji: '⛩️', text: 'Pass through **Higashiyama temple area** (3km)' },
      { time: '08:45', emoji: '🌾', text: 'Enter countryside south Takayama, rice paddies + mountain backdrop (5km)' },
      { time: '08:55', emoji: '🏛️', text: '🎯 **HIDA NO SATO (飛騨の里)** ¥700 — **MAIN STOP 1.5 jam.** 30+ thatched-roof farmhouses, lake center, walking paths. (7km)' },
      { time: '10:25', emoji: '🚲', text: 'Continue WEST countryside parallel return route (11km)' },
      { time: '10:55', emoji: '⛩️', text: '**Sakurayama Hachimangu** quick stop atau langsung ke return path (13km)' },
      { time: '11:10', emoji: '🚲', text: 'Return ke central via Miyagawa east bank (17km)' },
      { time: '11:20', emoji: '🎫', text: '**Return bike** rental shop (18km total)' },
      { time: '11:25', emoji: '🚶', text: 'Walk back **Country Hotel Takayama** (2-3 min)' },
      { time: '— SHOWER + LUNCH —', emoji: '🚿', text: '══════════════ REFRESH BREAK ══════════════' },
      { time: '11:30', emoji: '🚿', text: '⭐ **SHOWER + CHANGE di hotel** (25 min) — keringat cycling 3 jam = wajib refresh sebelum bus 50 min ke Shirakawa-go.' },
      { time: '11:55', emoji: '🍙', text: '**Quick konbini lunch** — onigiri + sandwich + drink ¥800. Eat on walk to bus terminal.' },
      { time: '— SHIRAKAWA-GO —', emoji: '🏘️', text: '══════════════ UNESCO AFTERNOON ══════════════' },
      { time: '12:30', emoji: '🚶', text: 'Walk Country Hotel → **Takayama Nohi Bus Center** (2 min, sebelahan station). Konfirmasi reservation di counter.' },
      { time: '12:50', emoji: '🚌', text: '🎫 **NOHI BUS Shirakawa-go Line** Takayama → Shirakawa-go (50 menit, **¥2,800 one-way / ¥5,600 couple round-trip**). ⚠️ **RESERVATION REQUIRED** (advance booking only). Operator: Nohi Bus + multi-operator (Hokuriku Railroad/Kaga Noto/Toyama Chihoku).' },
      { time: '13:40', emoji: '🏘️', text: 'Arrive Shirakawa-go (Ogimachi 荻町) — UNESCO World Heritage village' },
      { time: '13:50', emoji: '🚶', text: '**Walk village 2km loop** — gassho-zukuri farmhouses 250+ tahun, masih lived in. Cherry blossoms late season possible!' },
      { time: '14:35', emoji: '🏠', text: '**Wada House** atau **Kanda House** ¥300-400 — interior tour, irori fireplace smoke, attic silk farming room' },
      { time: '15:15', emoji: '🥾', text: '🎯 **Shiroyama Viewpoint hike** — 15 menit uphill walk, **THE postcard view** ALL of Shirakawa-go from above. **MUST DO.**' },
      { time: '16:00', emoji: '📸', text: 'Photos top + descent. Multiple angles.' },
      { time: '16:20', emoji: '🛍️', text: 'Browse Shirakawa craft shops — local mochi, Sarubobo Shirakawa version' },
      { time: '16:35', emoji: '🚌', text: '🚌 **Bus back Takayama** — return options May 1 2026: 14:45, 15:15, 15:45, 16:15, **16:35**, 17:25, **17:30 (last)**. Pilih 16:35 default, kalau capek/cepet ambil 16:15. **DON\'T MISS 17:30 last bus.**' },
      { time: '17:30', emoji: '🏨', text: 'Back Takayama, walk Country Hotel relax' },
      { time: '18:00', emoji: '🛁', text: 'Hotel rest, change casual' },
      { time: '19:00', emoji: '🍽️', text: 'Farewell Takayama dinner — Hida beef revisit (kalau belum puas Day 10) atau hoba miso different shop. Last full mountain night.' },
      { time: '21:00', emoji: '📦', text: 'Pack untuk Tokyo Day 12 — koper rapi, cards/cartridge hand-carry separated, daypack travel mode' },
      { time: '22:30', emoji: '😴', text: 'Sleep — Day 12 morning Hida Express + Shinkansen Tokyo!' },
    ],
    tips: [
      '🗺️ **GOOGLE MAPS WAYPOINTS** (paste each ke search Maps untuk pin):',
      '   📍 START: **Country Hotel Takayama** (hotel lu)',
      '   🚲 RENTAL: **Hara Cycle Takayama** (原サイクル) — 5 min walk, dekat JR Takayama Station. Atau: **JR Takayama Station** (cek bike rental kiosk dekat exit). Atau: **Country Hotel front desk** (tanya rental option).',
      '   🌉 WP1: **Nakabashi Bridge** (中橋) — central Takayama, Miyagawa River red bridge',
      '   ⛩️ WP2: **Higashiyama Walking Course** (東山遊歩道) — eastern temple trail entry point. Atau: **Tenshoji Temple** (天照寺 Takayama) sebagai access point.',
      '   🏘️ WP3: **Sanmachi** (三町) — Edo-period old town pass-through',
      '   🌾 WP4: **Hida no Sato Open Air Museum** atau **Hida Folk Village** (飛騨の里) — Address: 1-590 Kamiokamoto-cho, Takayama. **MAIN STOP 1.5 jam ¥700.**',
      '   ⛩️ WP5: **Sakurayama Hachimangu Shrine** (桜山八幡宮) — north Takayama, alt route home',
      '   🏞️ WP6: **Miyagawa Asaichi** (宮川朝市) — Miyagawa Morning Market location, ride along bike path',
      '   🏁 END: Return ke bike rental → walk back **Country Hotel Takayama**',
      '🚲 **Bike rental dekat Country Hotel:** 1) **Hara Cycle (原サイクル)** — Google Maps "Hara Cycle Takayama" — 5 min walk, ¥1,000/day mama-chari, ¥1,500-2K e-bike. 2) **JR Takayama Station** bike kiosk. 3) **Country Hotel front desk** — tanya rental option, kadang free/cheap untuk guests. **Best: e-bike kalau available** (¥500 extra worth, Hida ada gentle grades).',
      '🗺️ **Route logic:** Country Hotel → bike rental (Hara Cycle) → south Miyagawa River → Nakabashi crossing → east Higashiyama temple area → loop back → south to Hida no Sato (1.5h main stop) → north return via Miyagawa west bank → Sakurayama Hachimangu (optional) → return rental. **18km total, mostly flat, paved.**',
      '📱 **Setup Google Maps malam ini Day 10:** Pin semua waypoints di atas, save ke "Day 11 Cycling" list, download offline area Takayama. Bisa navigasi pas pagi tanpa data Indonesia.',
      '🏛️ **Hida no Sato MUST stop** — 30+ thatched-roof farmhouses relocated, lake center, walking paths. Beda dari Shirakawa-go (lived village vs museum). Both worth visiting same day.',
      '🚌 **NOHI BUS Shirakawa-go Line (verified Apr-May 2026):** ¥2,800 one-way / ¥5,600 couple round-trip. ⚠️ **RESERVATION REQUIRED** — bukan walk-up bus. Multi-operator (Nohi Bus + Hokuriku Railroad + Kaga Noto + Toyama Chihoku Bus).',
      '📞 **BOOKING METHODS Shirakawa-go bus:** 1) **Phone Nohi Bus Reservation Center 0577-32-1688** (jam 09:00-17:00). 2) **Online "Hassha O~Line" portal** (open 05:00-02:00 daily) — japanbusonline.com. 3) **Walk-in Takayama Nohi Bus Center counter** kalau slot tersedia.',
      '⏰ **OUTBOUND May 1 2026 (Day 11) departure times Takayama:** 07:20, 07:50, 08:10, 08:50, 09:35, 10:50, 11:20, 11:50, 12:10, **12:50** (rekomen — pas timing post-cycling+shower), 13:10, 13:20, 13:50, 14:30, 14:50, 16:20, 16:30, 17:50.',
      '⏰ **RETURN May 1 2026 from Shirakawa-go (Ogimachi):** 06:43, 09:35, 10:05, 10:30, 10:55, 11:10, 11:40, 12:35, 13:15, 13:30, 14:00, 14:45, 15:15, 15:45, 16:15, **16:35** (rekomen), 17:25, **17:30 (LAST)**. Last bus crucial!',
      '🏔️ **Shiroyama Viewpoint = #1 photo** — 15 min uphill walk, gentle. Don\'t skip even kalau capek.',
      '⏰ **Last bus back ~16:30-17:00** Shirakawa-go → Takayama. Miss = stuck. Cek schedule pas arrive di counter.',
      '💪 **Cutting Day 11 win:** ~900-1,300 kcal active burn. Combined Day 10 gym = optimal cut split (1 strength + 1 long cardio).',
      '🚲 **Cycling pace tip:** moderate sustainable, jangan race. Zone 2 cardio (HR 130-150) = optimal fat burn untuk lu yang cutting di 33% BF.',
      '🍱 **Cutting choice lunch:** clear broth ramen better than cream tonkotsu. Soba lebih bagus dari udon (lower carb). Skip dessert.',
      '⚠️ **Country Hotel night Day 11 = LAST night Takayama.** Pack koper besok pagi minimal — main pack tonight.',
    ],
  },
  {
    day: 12, date: 'May 2 (Sat)', title: 'Takayama → Tokyo + Card Hunting 🃏',
    city: 'Takayama → Tokyo', cityColor: 'bg-sky-100 text-sky-600',
    theme: '🃏 Travel + Card Hunt',
    isBicycleDay: false,
    weather: { tag: '🌸 Hangat (Tokyo)', temp: '14-21°C', level: 'warm' },
    fitness: { type: 'rest', label: '🚶 Active Travel + Walking 20K Steps', detail: 'Travel day (Hida Express + Shinkansen 4h) + Akihabara card hunting + Shimokitazawa thrift = 20K+ steps walking. NO formal workout needed (cycling yesterday + travel today active enough). OPTIONAL: Anytime Fitness Tokyo morning ¥3,300 day pass kalau pengen 2nd strength session pull selama trip.' },
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=75',
    summary: 'Morning Hida Express + Shinkansen to Tokyo. Afternoon: straight into Akihabara + Nakano Broadway card hunting.',
    dayCost: '¥5,000-8,000 (food) + CARD BUDGET',
    schedule: [
      { time: '05:30', emoji: '💪', text: 'OPTIONAL: Push-ups 3×15 + plank 3×45s di kamar (5 min). Atau skip — travel + 20K steps card hunt = active enough.' },
      { time: '06:15', emoji: '🚿', text: 'Shower → breakfast → pack' },
      { time: '07:30', emoji: '📦', text: 'CHECK OUT Country Hotel Takayama' },
      { time: '07:35', emoji: '🚶', text: '🗺️ Hotel → Station: WALK 3 min ke Takayama Station' },
      { time: '07:45', emoji: '🚃', text: 'JR Hida Express: Takayama → Nagoya (2h 20min, ¥6,000+ Suica/cash). Window seat KIRI = mountain gorge views.' },
      { time: '10:20', emoji: '🍜', text: 'Quick lunch Nagoya Station — miso katsu (cutting: lean cut OK) atau kishimen lighter' },
      { time: '11:00', emoji: '🚄', text: 'Shinkansen: Nagoya → Tokyo (1h 40min, ~¥11,300 Suica/cash). Hikari/Kodama OK.' },
      { time: '12:40', emoji: '🏙️', text: 'Arrive Tokyo Station' },
      { time: '12:45', emoji: '🚃', text: '🗺️ Tokyo Station → Akihabara Station JR Yamanote/Keihin-Tohoku (3 min, 1 stop). Exit Electric Town.' },
      { time: '12:55', emoji: '🚶', text: 'Walk 5 min Akihabara Station → **Super Hotel Lohas Akihabara**' },
      { time: '13:15', emoji: '🏨', text: 'Check in Super Hotel. Drop bags. Cards/cartridge stay with you. 🎯' },
      { time: '— OPTIONAL GYM —', emoji: '💪', text: '══════════════ OPTIONAL STRENGTH SESSION ══════════════' },
      { time: '13:45', emoji: '💪', text: '**OPTIONAL: Anytime Fitness Akihabara ¥3,300 day pass** — 24/7 chain gym, search Google Maps "Anytime Fitness Akihabara" (5-10 min walk Super Hotel). **PULL session 1 jam** complement Day 10 push: pull-ups 3×8, lat pulldown 4×10, seated row 4×10, face pulls 3×15, hammer curls 3×12, plank 3×60s. Skip kalau lu prioritize 7+ jam card hunt.' },
      { time: '14:45', emoji: '🚿', text: 'Gym shower atau hotel quick refresh, hydrate' },
      { time: '— CARD HUNT —', emoji: '🃏', text: '══════════════ AKIHABARA + SHIMOKITAZAWA ══════════════' },
      { time: '15:00', emoji: '🃏', text: '**Mandarake Complex Akihabara** — floors 3-5 TCG. PSA slabs, vintage promos. ⭐ flagship.' },
      { time: '16:00', emoji: '🃏', text: '**Surugaya Akihabara** — multiple locations Chuo-dori. Compare prices.' },
      { time: '16:45', emoji: '🃏', text: '**Yuyu-tei physical store Akihabara** — best buat One Piece raw singles. Same prices as online.' },
      { time: '17:15', emoji: '🃏', text: '**Card Rush + Book Off Akihabara** — check glass cases random steals' },
      { time: '17:45', emoji: '🚃', text: 'Train Akiba → Shinjuku → Shimokitazawa (JR + Odakyu, ~30 min)' },
      { time: '18:30', emoji: '🛍️', text: '⭐⭐⭐ **THRIFT SESI 3 MEGA HAUL: 2nd Street Shimokitazawa** + indie vintage shops. Target: jaket bomber Jepang + graphic tee + cargo + vintage denim. Budget ¥10-17.5K.' },
      { time: '20:00', emoji: '🍺', text: 'Dinner Shimokitazawa izakaya — cheaper + better vibe dari Nakano. **Cutting: protein-focus, limit beer.**' },
      { time: '21:30', emoji: '📦', text: 'Back Super Hotel Akihabara. Organize purchases. Nakano Broadway skip — balik Day 13 kalau perlu.' },
    ],
    tips: [
      '💪 **OPTIONAL Day 12 GYM ¥3,300:** **Anytime Fitness Akihabara** (アニタイムフィットネス秋葉原) — 24/7. Address Google Maps: "Anytime Fitness Akihabara". 5-10 min walk Super Hotel. **PULL session** complement Day 10 push = 2 strength sessions during trip (good for cutting + low muscle preservation). Skip kalau prioritas card hunt 7+ jam.',
      '⏰ **Tokyo arrive 12:40 → start hunt 13:00 (no gym) atau 15:00 (with gym).** 6-8 jam card shopping window. Plenty time.',
      '🎯 **PRIMARY TARGETS:** OP manga art parallels (OP01-OP04), Pokemon PSA 10 grails, FORU TGE-funded budget. Investment buys (beda dari Gifu BookOff aesthetic haul).',
      '📱 **Check SNKR Dunk prices on phone** BEFORE every purchase — know price ceiling. Yuyu-tei online juga acuan.',
      '💴 **Tax-free:** spend ¥5,000+ per store → show passport → 10% off. Stack savings multiple stores.',
      '💵 **Carry CASH ¥30K+** — small card shops cash-only.',
      '🎒 **Day 12 packing:** travel-light daypack — laptop bisa skip (kerja done Day 10), camera, Gifu cards hand-carry separated, cash ¥30K+, passport.',
      '🍱 **Cutting note:** Tokyo food convenience (konbini, chains) easy 2,000+ kcal/day kalau gak mindful. Smart picks: sushi sets, sashimi, grilled fish, salmon onigiri. Limit ramen tonkotsu, fried items, beer.',
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

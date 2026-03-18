import { useState } from 'react'

const workoutPlan = [
  {
    day: 'Day A — Push + Core',
    emoji: '💪',
    frequency: 'Days 2, 5, 9, 12',
    exercises: [
      { name: 'Push-ups (wide)', sets: '4×15', rest: '60s', note: 'Slow negative, squeeze chest at top' },
      { name: 'Diamond push-ups', sets: '3×12', rest: '60s', note: 'Tricep focused' },
      { name: 'Pike push-ups', sets: '3×10', rest: '60s', note: 'Shoulder press substitute. Feet elevated on bed for harder.' },
      { name: 'Dips (using chair/desk)', sets: '3×12', rest: '60s', note: 'Lean forward for chest, upright for triceps' },
      { name: 'Plank', sets: '3×45s', rest: '30s', note: 'Squeeze glutes, don\'t sag hips' },
      { name: 'Bicycle crunches', sets: '3×20 each', rest: '30s', note: 'Slow and controlled, touch elbow to knee' },
      { name: 'Mountain climbers', sets: '3×30s', rest: '30s', note: 'Fast pace, cardio finisher' },
    ],
  },
  {
    day: 'Day B — Pull + Arms',
    emoji: '🦾',
    frequency: 'Days 4, 7, 11',
    exercises: [
      { name: 'Doorframe rows (towel over door)', sets: '4×12', rest: '60s', note: 'Lean back, pull chest to hands. Use towel draped over sturdy door.' },
      { name: 'Superman holds', sets: '3×30s', rest: '45s', note: 'Face down, lift arms + legs. Back engagement.' },
      { name: 'Reverse snow angels', sets: '3×15', rest: '45s', note: 'Face down, arms sweep floor to overhead. Rear delt + rhomboids.' },
      { name: 'Backpack curls', sets: '3×15 each arm', rest: '45s', note: 'Fill backpack with water bottles/books. Slow curl.' },
      { name: 'Backpack hammer curls', sets: '3×12', rest: '45s', note: 'Same backpack, neutral grip' },
      { name: 'Plank shoulder taps', sets: '3×20', rest: '30s', note: 'Anti-rotation core work + stability' },
      { name: 'Dead bug', sets: '3×10 each', rest: '30s', note: 'Lower back pressed to floor, opposite arm/leg extend' },
    ],
  },
  {
    day: 'Day C — Legs + Explosive',
    emoji: '🦵',
    frequency: 'Days 3, 8, 13',
    exercises: [
      { name: 'Bodyweight squats', sets: '4×20', rest: '60s', note: 'Deep, pause at bottom 2s. Add backpack for weight.' },
      { name: 'Bulgarian split squats (bed/chair)', sets: '3×12 each', rest: '60s', note: 'Back foot elevated. THE best single leg exercise.' },
      { name: 'Jump squats', sets: '3×10', rest: '60s', note: 'Explosive! Basketball power maintenance.' },
      { name: 'Walking lunges', sets: '3×12 each', rest: '60s', note: 'Long stride, knee almost touches floor' },
      { name: 'Calf raises (step/stairs)', sets: '4×20', rest: '30s', note: 'Full stretch at bottom, squeeze at top. Slow.' },
      { name: 'Glute bridges', sets: '3×15', rest: '45s', note: 'Single leg for harder. Squeeze glutes 2s at top.' },
      { name: 'Box jumps (park bench)', sets: '3×8', rest: '60s', note: 'Do these during running route at a park bench. Basketball explosiveness.' },
    ],
  },
]

const runningRoutes = [
  {
    city: 'Kyoto',
    emoji: '⛩️',
    dates: 'Apr 22-25',
    route: 'Kamogawa River Path',
    distance: '5-8 km',
    description: 'Run along the Kamogawa River — flat, wide path, quiet at 5AM. Start from Gojo Bridge, run north along the east bank to Demachiyanagi and back.',
    highlights: ['River reflections at dawn', 'Herons fishing in shallow water', 'Pass under Shijo Bridge (Gion area)', 'Zero traffic, wide paved path'],
    mapTip: 'Google Maps: "Kamogawa River Path" — east bank is wider and less crowded',
    elevation: 'Flat ✅',
  },
  {
    city: 'Nagoya',
    emoji: '🏯',
    dates: 'Apr 26-27',
    route: 'Nagoya Castle + Meijo Park Loop',
    distance: '4-6 km',
    description: 'Loop around Nagoya Castle moat and through Meijo Park. Beautiful castle view at dawn. Flat, well-lit, runner-friendly.',
    highlights: ['Castle lit up at early morning', 'Meijo Park running track (400m)', 'Cherry tree-lined paths', 'Clean public toilets available'],
    mapTip: 'Start at hotel, run to Nagoya Castle outer moat, loop Meijo Park, return',
    elevation: 'Flat ✅',
  },
  {
    city: 'Takayama',
    emoji: '🌲',
    dates: 'Apr 28-29',
    route: 'Miyagawa River + Higashiyama Trail',
    distance: '5-7 km',
    description: 'THE most scenic run of the trip. Along Miyagawa River through old town, then connect to Higashiyama temple trail on the hillside. Mountain views everywhere.',
    highlights: ['Mountain silhouettes at dawn', 'Old wooden bridges over river', 'Temple bells ringing in morning silence', 'Fresh alpine air — best running weather'],
    mapTip: 'Start at station, run south along Miyagawa River, cross at Nakabashi Bridge, loop Higashiyama trail',
    elevation: 'Gentle hills on Higashiyama trail 🔶',
  },
  {
    city: 'Hakone',
    emoji: '🏔️',
    dates: 'Apr 30 - May 1',
    route: 'Hakone-Yumoto River Path',
    distance: '3-5 km (hilly!)',
    description: 'Short but challenging — run along the Hayakawa River from Hakone-Yumoto toward Tonosawa. Mountain valley, hot spring steam, wooden bridges.',
    highlights: ['Steam rising from onsen vents', 'Mountain valley sunrise', 'Wooden bridges over rapids', 'Crisp mountain morning air'],
    mapTip: 'Follow Route 732 along the river — sidewalk is narrow in places, be careful',
    elevation: 'Hilly 🔴 — good for leg strength!',
  },
  {
    city: 'Tokyo',
    emoji: '🏙️',
    dates: 'May 2-3',
    route: 'Imperial Palace Loop',
    distance: '5 km (1 loop)',
    description: 'THE most famous running route in Japan. 5km loop around the Imperial Palace. Wide sidewalk, flat, well-marked. Thousands of runners every morning.',
    highlights: ['Iconic Tokyo skyline meets ancient palace walls', 'Counter-clockwise by convention', 'Water stations at some points', 'See serious Japanese runners in full gear'],
    mapTip: 'Start at any corner — most start near Tokyo Station. Run COUNTER-CLOCKWISE (convention).',
    elevation: 'Flat ✅',
  },
]

const nutritionTips = [
  { emoji: '🍙', tip: 'Konbini protein: onigiri (tuna/salmon), chicken breast packs (サラダチキン), protein bars, Greek yogurt' },
  { emoji: '🥚', tip: 'Breakfast: 7-Eleven egg sandwiches + banana + milk = cheap high-protein breakfast (~¥500)' },
  { emoji: '🍜', tip: 'Post-run ramen is FINE — high carb + protein recovery. Add extra egg (tamago) and chashu.' },
  { emoji: '🥩', tip: 'Hida beef in Takayama = guilt-free protein. Enjoy it.' },
  { emoji: '💧', tip: 'Vending machines EVERYWHERE in Japan. Stay hydrated. Pocari Sweat > water for electrolytes.' },
  { emoji: '🚫', tip: 'Avoid: excessive tempura, katsu every meal, cream-filled pastries. Balance fried with grilled.' },
  { emoji: '📊', tip: 'Walking 15-25K steps/day on this trip = ~800-1,200 calories burned. You\'re active. Don\'t undereat.' },
  { emoji: '🏃', tip: '5AM runs + 20K daily walking steps + bodyweight workouts = you\'ll maintain or even improve during this trip.' },
]

export default function Fitness() {
  const [expandedWorkout, setExpandedWorkout] = useState(null)
  const [expandedRoute, setExpandedRoute] = useState(null)

  return (
    <section id="fitness" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-heading font-semibold text-sm tracking-widest uppercase mb-3">🏋️ トレーニング — Stay Fit</p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-4">Workout Plan</h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            No gym needed. Everything packed into one 5AM morning block: run → bodyweight workout → shower → day starts free. Maintain muscle, keep the basketball explosiveness.
          </p>
        </div>

        {/* Weekly Schedule Overview */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-emerald-200 mb-8">
          <h3 className="font-heading font-bold text-xl mb-4 text-emerald-700">📅 14-Day Schedule</h3>
          <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center text-xs sm:text-sm">
            {[
              { d: '21', l: 'Tue', act: '✈️', note: 'Travel' },
              { d: '22', l: 'Wed', act: '🏃+💪', note: 'Run+Push' },
              { d: '23', l: 'Thu', act: '🦵', note: 'Legs' },
              { d: '24', l: 'Fri', act: '🚲+🦾', note: 'Bike+Pull' },
              { d: '25', l: 'Sat', act: '💪', note: 'Push' },
              { d: '26', l: 'Sun', act: '🏃', note: 'Run' },
              { d: '27', l: 'Mon', act: '🦾', note: 'Pull' },
              { d: '28', l: 'Tue', act: '🏃+🦵', note: 'Run+Legs' },
              { d: '29', l: 'Wed', act: '🚲', note: 'Bike Day' },
              { d: '30', l: 'Thu', act: '🏃', note: 'Run' },
              { d: '1', l: 'Fri', act: '💪', note: 'Push' },
              { d: '2', l: 'Sat', act: '🏃+🦾', note: 'Run+Pull' },
              { d: '3', l: 'Sun', act: '🦵', note: 'Legs' },
              { d: '4', l: 'Mon', act: '✈️', note: 'Home' },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-2 ${
                item.act.includes('🚲') ? 'bg-emerald-100 border border-emerald-300' :
                item.act === '✈️' ? 'bg-gray-100' :
                item.act.includes('🏃') ? 'bg-blue-50 border border-blue-200' :
                'bg-orange-50 border border-orange-200'
              }`}>
                <div className="font-bold text-dark">{item.l}</div>
                <div className="text-lg">{item.act}</div>
                <div className="text-[10px] text-dark-light mt-0.5">{item.note}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-dark-light mt-3 text-center">
            🏃 = 5AM run (3-8km) → 💪🦾🦵 bodyweight (20-30 min) → shower by 6:15 → day free! | 🚲 = cycling = cardio+legs
          </p>
        </div>

        {/* Workout Plans */}
        <h3 className="font-heading font-bold text-xl mb-4">🏠 Hotel Room Workouts</h3>
        <div className="space-y-3 mb-10">
          {workoutPlan.map((workout) => (
            <div key={workout.day} className="bg-white rounded-2xl shadow-sm border border-emerald-100 overflow-hidden">
              <button
                onClick={() => setExpandedWorkout(expandedWorkout === workout.day ? null : workout.day)}
                className="w-full text-left p-4 sm:p-5 flex items-center gap-3"
              >
                <span className="text-2xl">{workout.emoji}</span>
                <div className="flex-1">
                  <h4 className="font-heading font-bold text-dark">{workout.day}</h4>
                  <p className="text-xs text-dark-light">{workout.frequency} • ~25 min • No equipment</p>
                </div>
                <div className={`transition-transform duration-300 ${expandedWorkout === workout.day ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedWorkout === workout.day && (
                <div className="px-4 sm:px-5 pb-5 animate-fade-in-up">
                  <div className="space-y-2">
                    {workout.exercises.map((ex, i) => (
                      <div key={i} className="flex items-start gap-3 bg-emerald-50/50 rounded-xl p-3">
                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100 rounded-lg px-2 py-1 whitespace-nowrap">{ex.sets}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-dark">{ex.name}</div>
                          <div className="text-xs text-dark-light">{ex.note} • Rest {ex.rest}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Running Routes */}
        <h3 className="font-heading font-bold text-xl mb-4">🏃 5AM Running Routes</h3>
        <div className="space-y-3 mb-10">
          {runningRoutes.map((route) => (
            <div key={route.city} className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden">
              <button
                onClick={() => setExpandedRoute(expandedRoute === route.city ? null : route.city)}
                className="w-full text-left p-4 sm:p-5 flex items-center gap-3"
              >
                <span className="text-2xl">{route.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-heading font-bold text-dark">{route.city} — {route.route}</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{route.distance}</span>
                  </div>
                  <p className="text-xs text-dark-light">{route.dates} • {route.elevation}</p>
                </div>
                <div className={`transition-transform duration-300 ${expandedRoute === route.city ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {expandedRoute === route.city && (
                <div className="px-4 sm:px-5 pb-5 animate-fade-in-up">
                  <p className="text-sm text-dark mb-3">{route.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                    {route.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2">
                        <span className="text-blue-500">✦</span>
                        <span className="text-sm text-dark">{h}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-dark-light bg-blue-50/50 rounded-lg px-3 py-2">📍 {route.mapTip}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Nutrition */}
        <h3 className="font-heading font-bold text-xl mb-4">🍙 Nutrition — Stay Fueled</h3>
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-orange-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nutritionTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 bg-orange-50/50 rounded-xl p-3">
                <span className="text-lg flex-shrink-0">{tip.emoji}</span>
                <span className="text-sm text-dark">{tip.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'

const petals = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 8 + Math.random() * 7,
  size: 12 + Math.random() * 16,
  opacity: 0.3 + Math.random() * 0.4,
}))

export default function SakuraPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal absolute text-sakura"
          style={{
            left: `${p.left}%`,
            top: '-5%',
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            animationIterationCount: 'infinite',
          }}
        >
          🌸
        </div>
      ))}
    </div>
  )
}

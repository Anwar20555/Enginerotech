"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: "10,000+", label: "عميل راضٍ" },
  { value: "50,000+", label: "منتج تم بيعه" },
  { value: "27", label: "محافظة نغطيها" },
  { value: "24/7", label: "دعم فني متواصل" },
]

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center cursor-pointer transition-all duration-300 ease-out hover:scale-110
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2 transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg transition-colors duration-300 group-hover:text-primary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

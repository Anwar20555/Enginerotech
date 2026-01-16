"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Eye, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "رؤيتنا",
    description: "أن نكون الوجهة الأولى والأكثر ثقة لشراء وصيانة أجهزة الكمبيوتر في مصر والشرق الأوسط",
  },
  {
    icon: Eye,
    title: "مهمتنا",
    description: "تقديم أفضل المنتجات التقنية العالمية بأسعار تنافسية مع خدمة عملاء استثنائية ودعم فني متميز",
  },
  {
    icon: Heart,
    title: "قيمنا",
    description: "الجودة، الأمانة، الاحترافية، والالتزام برضا العميل هي القيم التي توجه كل ما نقوم به",
  },
]

export function AboutMission() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-secondary/30 border border-border rounded-2xl p-8 text-center card-hover transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

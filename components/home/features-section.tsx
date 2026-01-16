"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Truck, Headphones, Award, Wrench, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "ضمان سنتين",
    description: "نوفر ضمان شامل على جميع منتجاتنا يصل إلى سنتين كاملتين",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
  },
  {
    icon: Truck,
    title: "توصيل مجاني",
    description: "خدمة توصيل سريعة ومجانية لجميع محافظات جمهورية مصر العربية",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "group-hover:bg-accent/20",
  },
  {
    icon: Headphones,
    title: "دعم 24/7",
    description: "فريق دعم فني متخصص متاح على مدار الساعة طوال أيام الأسبوع",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
  },
  {
    icon: Award,
    title: "منتجات أصلية",
    description: "نضمن لك منتجات أصلية 100% من أفضل الماركات العالمية",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "group-hover:bg-accent/20",
  },
  {
    icon: Wrench,
    title: "صيانة متميزة",
    description: "خدمة صيانة احترافية مع الاستلام والتوصيل من وإلى منزلك",
    color: "text-primary",
    bgColor: "bg-primary/10",
    hoverBg: "group-hover:bg-primary/20",
  },
  {
    icon: CreditCard,
    title: "أفضل الأسعار",
    description: "أسعار تنافسية مع إمكانية التقسيط والدفع عند الاستلام",
    color: "text-accent",
    bgColor: "bg-accent/10",
    hoverBg: "group-hover:bg-accent/20",
  },
]

export function FeaturesSection() {
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
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">لماذا تختارنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">مميزاتنا</span> التي تجعلنا الأفضل
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نحرص على تقديم أفضل تجربة تسوق لعملائنا مع خدمات متميزة لا مثيل لها
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-secondary/50 border border-border rounded-2xl p-6 md:p-8 cursor-pointer
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:bg-card
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-14 h-14 ${feature.bgColor} ${feature.hoverBg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

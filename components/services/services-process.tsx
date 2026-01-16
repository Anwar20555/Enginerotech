"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Truck, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "تواصل معنا",
    description: "اتصل بنا أو أرسل لنا رسالة عبر الواتساب لوصف المشكلة",
  },
  {
    icon: Truck,
    number: "02",
    title: "الاستلام",
    description: "نصل إليك في أي مكان في مصر لاستلام جهازك مجاناً",
  },
  {
    icon: Wrench,
    number: "03",
    title: "الصيانة",
    description: "فريقنا المتخصص يقوم بفحص وإصلاح جهازك باحترافية",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "التسليم",
    description: "نوصل جهازك بعد الصيانة مع ضمان على أعمال الصيانة",
  },
]

export function ServicesProcess() {
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">كيف نعمل</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            خطوات <span className="gradient-text">بسيطة وسريعة</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نجعل عملية الصيانة سهلة ومريحة لك من البداية للنهاية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-l from-primary/50 to-transparent -z-10 translate-x-1/2" />
              )}

              <div className="bg-card border border-border rounded-2xl p-6 text-center relative">
                {/* Number Badge */}
                <div className="absolute -top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  {step.number}
                </div>

                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

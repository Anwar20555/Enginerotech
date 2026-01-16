"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "أحمد محمد",
    role: "مهندس برمجيات",
    content:
      "تجربة رائعة! اشتريت لاب توب Dell من انجنيروتيك والجودة ممتازة. الدعم الفني سريع الاستجابة والتوصيل وصل في نفس اليوم.",
    rating: 5,
    image: "/arab-man-professional-portrait.jpg",
  },
  {
    name: "سارة أحمد",
    role: "مصممة جرافيك",
    content: "أفضل مكان لشراء أجهزة الكمبيوتر في مصر. الأسعار تنافسية والمنتجات أصلية 100%. أنصح الجميع بالتعامل معهم.",
    rating: 5,
    image: "/arab-woman-professional-portrait.jpg",
  },
  {
    name: "محمد علي",
    role: "طالب جامعي",
    content: "الضمان لمدة سنتين أعطاني ثقة كبيرة في الشراء. خدمة الصيانة ممتازة ومحترفة جداً.",
    rating: 5,
    image: "/young-arab-man-portrait.jpg",
  },
]

export function TestimonialsSection() {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">آراء العملاء</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ماذا يقول <span className="gradient-text">عملاؤنا</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نفخر بثقة عملائنا ونسعى دائماً لتقديم أفضل خدمة ممكنة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-secondary/50 border border-border rounded-2xl p-6 md:p-8 relative cursor-pointer
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:bg-card
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/20 transition-all duration-300 group-hover:text-primary/40 group-hover:scale-110 group-hover:rotate-12" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 ring-2 ring-transparent group-hover:ring-primary/30"
                />
                <div>
                  <h4 className="font-semibold transition-colors duration-300 group-hover:text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

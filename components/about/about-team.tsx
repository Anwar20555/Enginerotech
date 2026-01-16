"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "م. أحمد حسن",
    role: "المؤسس والمدير التنفيذي",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "م. محمد علي",
    role: "مدير الصيانة والدعم الفني",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "م. سارة أحمد",
    role: "مديرة المبيعات",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "م. خالد محمود",
    role: "مدير خدمة العملاء",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function AboutTeam() {
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">فريقنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            تعرف على <span className="gradient-text">فريق العمل</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            فريق من المهندسين والمتخصصين ذوي الخبرة العالية في مجال التقنية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-center">{member.name}</h3>
              <p className="text-muted-foreground text-center">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

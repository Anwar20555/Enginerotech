"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const laptopBrands = [
  { name: "Dell", logo: "/dell-logo-white.jpg" },
  { name: "HP", logo: "/hp-logo-white.jpg" },
  { name: "Lenovo", logo: "/lenovo-logo-white.jpg" },
  { name: "ASUS", logo: "/asus-logo-white.jpg" },
  { name: "MSI", logo: "/msi-logo-white.jpg" },
  { name: "Samsung", logo: "/samsung-logo-white.jpg" },
]

const componentBrands = [
  { name: "Intel", logo: "/intel-logo-white.jpg" },
  { name: "AMD", logo: "/amd-logo-white.jpg" },
  { name: "Kingston", logo: "/kingston-logo-white.jpg" },
  { name: "SanDisk", logo: "/sandisk-logo-white.jpg" },
  { name: "Western Digital", logo: "/western-digital-logo-white.jpg" },
]

export function BrandsSection() {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">شركاؤنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            أفضل <span className="gradient-text">الماركات العالمية</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نتعامل مع أكبر وأفضل الماركات العالمية لنضمن لك جودة لا مثيل لها
          </p>
        </div>

        {/* Laptop Brands */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">ماركات اللاب توب</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {laptopBrands.map((brand, index) => (
              <div
                key={index}
                className={`group bg-secondary/30 border border-border rounded-xl p-6 flex items-center justify-center cursor-pointer
                  transition-all duration-300 ease-out
                  hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Component Brands */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">ماركات القطع والمكونات</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {componentBrands.map((brand, index) => (
              <div
                key={index}
                className={`group bg-secondary/30 border border-border rounded-xl p-6 flex items-center justify-center cursor-pointer
                  transition-all duration-300 ease-out
                  hover:border-primary/50 hover:bg-card hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${(index + 6) * 50}ms` }}
              >
                <Image
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  width={120}
                  height={60}
                  className="opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

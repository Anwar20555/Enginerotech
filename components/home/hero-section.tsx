"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Shield, Truck, Headphones } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const videoUrl = "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/tech-office-computers-dark-background.jpg"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">دعم فني على مدار الساعة</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
              <span className="block">أفضل أجهزة</span>
              <span className="gradient-text">الكمبيوتر واللاب توب</span>
              <span className="block">في مصر</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              نقدم لك أفضل المنتجات العالمية من Dell و HP و Lenovo و ASUS و MSI وغيرها، مع ضمان يصل إلى سنتين وخدمة
              صيانة متميزة في جميع أنحاء مصر.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group shadow-lg shadow-primary/20"
                asChild
              >
                <Link href="/products">
                  تصفح المنتجات
                  <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-card text-lg px-8 py-6 group bg-card/80 backdrop-blur-sm"
                asChild
              >
                <Link href="/services">
                  <Play className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  خدماتنا
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ضمان سنتين</span>
              </div>
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
                <Truck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">توصيل لجميع أنحاء مصر</span>
              </div>
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-4 py-2 shadow-sm">
                <Headphones className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">دعم 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

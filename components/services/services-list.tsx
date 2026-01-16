"use client"

import { useEffect, useRef, useState } from "react"
import { Laptop, Monitor, HardDrive, Cpu, Wifi, Shield, Zap, Settings } from "lucide-react"

const services = [
  {
    icon: Laptop,
    title: "صيانة اللاب توب",
    description: "إصلاح جميع أعطال اللاب توب من جميع الماركات بما في ذلك الشاشة والكيبورد والبطارية ومشاكل التشغيل",
    features: ["تغيير الشاشات المكسورة", "إصلاح مشاكل الشحن", "تنظيف وتبريد الجهاز", "ترقية الرامات والهارد"],
  },
  {
    icon: Monitor,
    title: "صيانة الكمبيوتر المكتبي",
    description: "صيانة شاملة لجميع أجهزة الكمبيوتر المكتبية وتجميع الأجهزة الجديدة حسب الطلب",
    features: ["تجميع أجهزة جديدة", "ترقية المكونات", "حل مشاكل الأداء", "تركيب كروت الشاشة"],
  },
  {
    icon: HardDrive,
    title: "استعادة البيانات",
    description: "استرجاع البيانات من الهاردات التالفة أو المحذوفة بنسب نجاح عالية",
    features: ["استعادة الملفات المحذوفة", "إصلاح الهاردات التالفة", "نقل البيانات الآمن", "النسخ الاحتياطي"],
  },
  {
    icon: Cpu,
    title: "ترقية الأجهزة",
    description: "ترقية مكونات جهازك لأداء أفضل وسرعة أعلى مع أحدث المكونات",
    features: ["ترقية المعالج", "زيادة الرامات", "تركيب SSD", "ترقية كارت الشاشة"],
  },
  {
    icon: Wifi,
    title: "حل مشاكل الشبكات",
    description: "إعداد وصيانة شبكات الواي فاي والشبكات السلكية للمنازل والشركات",
    features: ["إعداد الراوتر", "تقوية إشارة الواي فاي", "حل مشاكل الاتصال", "تأمين الشبكة"],
  },
  {
    icon: Shield,
    title: "حماية من الفيروسات",
    description: "تنظيف الأجهزة من الفيروسات والبرمجيات الخبيثة وتركيب برامج الحماية",
    features: ["إزالة الفيروسات", "تركيب برامج الحماية", "تحديث النظام", "حماية الخصوصية"],
  },
  {
    icon: Zap,
    title: "تحسين الأداء",
    description: "تسريع جهازك وتحسين أدائه للحصول على أفضل تجربة استخدام",
    features: ["تنظيف النظام", "إلغاء البرامج غير المستخدمة", "تحسين إعدادات الويندوز", "إدارة برامج البدء"],
  },
  {
    icon: Settings,
    title: "تثبيت البرامج",
    description: "تثبيت أنظمة التشغيل والبرامج المختلفة مع الإعداد والتهيئة الكاملة",
    features: ["تثبيت الويندوز", "برامج التصميم", "برامج الأوفيس", "برامج متخصصة"],
  },
]

export function ServicesList() {
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
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">ما نقدمه</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">خدماتنا</span> الشاملة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات الصيانة والدعم الفني لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-secondary/30 border border-border rounded-2xl p-6 card-hover group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

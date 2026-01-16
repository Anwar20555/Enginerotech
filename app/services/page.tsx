import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ServicesCTA } from "@/components/services/services-cta"
import { ServicesProcess } from "@/components/services/services-process"

export const metadata = {
  title: "الخدمات | انجنيروتيك - صيانة أجهزة الكمبيوتر واللاب توب",
  description: "خدمات صيانة احترافية لأجهزة الكمبيوتر واللاب توب في جميع أنحاء مصر مع خدمة الاستلام والتوصيل",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </>
  )
}

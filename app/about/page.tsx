import { AboutHero } from "@/components/about/about-hero"
import { AboutMission } from "@/components/about/about-mission"
import { AboutTeam } from "@/components/about/about-team"
import { ContactSection } from "@/components/about/contact-section"

export const metadata = {
  title: "من نحن | انجنيروتيك - تواصل معنا",
  description: "تعرف على انجنيروتيك - وجهتك الأولى لشراء وصيانة أجهزة الكمبيوتر في مصر. تواصل معنا الآن.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <ContactSection />
    </>
  )
}

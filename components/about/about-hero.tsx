import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">من نحن</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">انجنيروتيك</span>
              <br />
              شريكك التقني الموثوق
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              منذ تأسيسنا، نسعى لتقديم أفضل المنتجات التقنية وأجود خدمات الصيانة في مصر. نحن فريق من المهندسين والتقنيين
              المتخصصين الذين يضعون رضا العميل في المقام الأول.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نفخر بخدمة آلاف العملاء في جميع أنحاء جمهورية مصر العربية، ونلتزم بتقديم منتجات أصلية 100% مع ضمان يصل إلى
              سنتين.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="متجر انجنيروتيك" fill className="object-cover" />
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold gradient-text mb-1">+5</div>
              <p className="text-sm text-muted-foreground">سنوات من الخبرة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

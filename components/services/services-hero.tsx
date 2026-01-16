import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              خدماتنا المتميزة
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">صيانة احترافية</span>
              <br />
              لجميع الأجهزة
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نقدم خدمات صيانة شاملة لجميع أجهزة الكمبيوتر واللاب توب في أي مكان في مصر، مع خدمة الاستلام والتوصيل
              المجانية وضمان على جميع أعمال الصيانة.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=600" alt="خدمات الصيانة" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <p className="font-semibold">+5000</p>
                  <p className="text-xs text-muted-foreground">جهاز تم صيانته</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

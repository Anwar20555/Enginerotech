export function ProductsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-wider uppercase mb-4 bg-primary/10 px-3 py-1 rounded-full">
            تسوق الآن
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">منتجاتنا</span> المميزة
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            اكتشف مجموعتنا الواسعة من أجهزة الكمبيوتر واللاب توب والشاشات والإكسسوارات من أفضل الماركات العالمية بأفضل
            الأسعار في مصر.
          </p>
        </div>
      </div>
    </section>
  )
}

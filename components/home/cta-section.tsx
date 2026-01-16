import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            هل أنت مستعد للحصول على
            <br />
            <span className="gradient-text">أفضل جهاز كمبيوتر؟</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية لاختيار الجهاز المناسب لاحتياجاتك
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group"
              asChild
            >
              <Link href="/products">
                تصفح المنتجات
                <ArrowLeft className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:border-primary/50 group bg-transparent"
              asChild
            >
              <Link href="/about">
                <Phone className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                اتصل بنا
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
            <MessageCircle className="w-5 h-5 text-accent" />
            <span>أو تواصل معنا عبر واتساب</span>
            <a
              href="https://wa.me/201000000000"
              className="text-accent hover:underline font-medium transition-all duration-300 hover:text-primary"
              dir="ltr"
            >
              +20 100 000 0000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

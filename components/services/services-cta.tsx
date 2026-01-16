import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-border rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              هل تحتاج
              <span className="gradient-text"> صيانة لجهازك؟</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              فريقنا المتخصص جاهز لمساعدتك في أي وقت. تواصل معنا الآن واحصل على خدمة صيانة احترافية مع ضمان على أعمال
              الصيانة.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
                asChild
              >
                <a href="tel:+201000000000">
                  <Phone className="ml-2 w-5 h-5" />
                  اتصل الآن
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <a href="https://wa.me/201000000000">
                  <MessageCircle className="ml-2 w-5 h-5" />
                  واتساب
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>نصل إليك في أي مكان في جمهورية مصر العربية</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

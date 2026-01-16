"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "اتصل بنا",
    value: "+20 100 000 0000",
    href: "tel:+201000000000",
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: "info@engineerotech.com",
    href: "mailto:info@engineerotech.com",
  },
  {
    icon: MapPin,
    title: "العنوان",
    value: "القاهرة، جمهورية مصر العربية",
    href: "#",
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "24/7 متاحين طوال الأسبوع",
    href: "#",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            نحن هنا <span className="gradient-text">لمساعدتك</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            لديك سؤال أو استفسار؟ لا تتردد في التواصل معنا. فريقنا جاهز لمساعدتك
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="bg-secondary/30 border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm" dir="ltr">
                    {item.value}
                  </p>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 border border-border rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">تواصل عبر واتساب</h3>
                  <p className="text-muted-foreground text-sm">للاستفسارات السريعة والدعم الفوري</p>
                </div>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <a href="https://wa.me/201000000000">واتساب</a>
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.76953912943!2d31.1802834!3d30.0594838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1689234567890!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary/30 border border-border rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="01xxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-background border-border"
                    dir="ltr"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                  dir="ltr"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  رسالتك
                </label>
                <Textarea
                  id="message"
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border resize-none"
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Send className="ml-2 w-5 h-5" />
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

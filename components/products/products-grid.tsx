"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  HardDrive,
  Cpu,
  ShoppingCart,
  Eye,
  Star,
  Sparkles,
  Heart,
} from "lucide-react"
import { initialProducts, categories } from "@/lib/products-data"

const iconMap: Record<string, React.ElementType> = {
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  HardDrive,
  Cpu,
}

export function ProductsGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all"
      ? initialProducts
      : initialProducts.filter((product) => product.category === activeCategory)

  const formatPrice = (price: number) => {
    return price.toLocaleString("ar-EG")
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => {
            const IconComponent = category.icon ? iconMap[category.icon] : null
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 hover:scale-105
                  ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card border-border hover:border-primary hover:bg-primary/5"
                  }`}
              >
                {IconComponent && <IconComponent className="w-4 h-4" />}
                <span className="text-sm font-medium">{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                {/* Badges */}
                {product.badge && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full z-10 shadow-md">
                    {product.badge}
                  </span>
                )}
                {product.isSeasonalOffer && (
                  <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-medium px-3 py-1.5 rounded-full z-10 shadow-md flex items-center gap-1 animate-pulse">
                    <Sparkles className="w-3 h-3" />
                    عرض موسمي
                  </span>
                )}

                {/* Product Image - scales on hover */}
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay with action buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-0 hover:bg-primary/80 hover:scale-110">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-foreground flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-gray-100 hover:scale-110">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-white text-foreground flex items-center justify-center shadow-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:bg-red-500 hover:text-white hover:scale-110">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.oldPrice && (
                  <div className="absolute bottom-3 left-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1.5 rounded-lg z-10 shadow-md">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-primary font-bold tracking-wide uppercase">{product.brand}</span>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold text-yellow-700">{product.rating}</span>
                    <span className="text-xs text-yellow-600">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-1 line-clamp-1 transition-colors group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-1">{product.specs}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-2xl font-black text-primary">
                      {formatPrice(product.price)}
                      <span className="text-sm font-medium mr-1">ج.م</span>
                    </span>
                    {product.oldPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)} ج.م
                      </span>
                    )}
                  </div>

                  <Button size="sm" className="shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg">
                    <ShoppingCart className="w-4 h-4 ml-1" />
                    أضف
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground px-10 transition-all duration-300 bg-transparent hover:scale-105"
          >
            <span>عرض المزيد من المنتجات</span>
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

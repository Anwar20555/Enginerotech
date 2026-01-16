import { ProductsHero } from "@/components/products/products-hero"
import { ProductsGrid } from "@/components/products/products-grid"

export const metadata = {
  title: "المنتجات | انجنيروتيك - أجهزة كمبيوتر ولاب توب",
  description: "تصفح مجموعتنا الواسعة من أجهزة اللاب توب والكمبيوتر والشاشات والإكسسوارات من أفضل الماركات العالمية",
}

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
    </>
  )
}

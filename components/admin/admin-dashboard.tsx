"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Package,
  Sparkles,
  DollarSign,
  LayoutGrid,
  X,
  Save,
  ChevronLeft,
} from "lucide-react"
import { initialProducts, categories, type Product } from "@/lib/products-data"
import Image from "next/image"
import Link from "next/link"

export function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: "",
    category: "laptops",
    brand: "",
    price: 0,
    oldPrice: null,
    rating: 4.5,
    reviews: 0,
    image: "",
    specs: "",
    badge: null,
    isSeasonalOffer: false,
  })

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleAddProduct = () => {
    const product: Product = {
      ...newProduct,
      id: Math.max(...products.map((p) => p.id)) + 1,
      image: newProduct.image || `/placeholder.svg?height=400&width=400&query=${newProduct.name} ${newProduct.brand}`,
    } as Product
    setProducts([...products, product])
    setIsAddModalOpen(false)
    setNewProduct({
      name: "",
      category: "laptops",
      brand: "",
      price: 0,
      oldPrice: null,
      rating: 4.5,
      reviews: 0,
      image: "",
      specs: "",
      badge: null,
      isSeasonalOffer: false,
    })
  }

  const handleUpdateProduct = () => {
    if (!editingProduct) return
    setProducts(products.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id))
  }

  const toggleSeasonalOffer = (id: number) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, isSeasonalOffer: !p.isSeasonalOffer } : p)))
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString("ar-EG")
  }

  const seasonalCount = products.filter((p) => p.isSeasonalOffer).length

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl md:text-2xl font-bold">لوحة التحكم</h1>
            </div>
            <Button onClick={() => setIsAddModalOpen(true)} className="bg-primary hover:bg-primary/90 shadow-md">
              <Plus className="w-4 h-4 ml-2" />
              إضافة منتج
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{products.length}</p>
                <p className="text-sm text-muted-foreground">إجمالي المنتجات</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">{seasonalCount}</p>
                <p className="text-sm text-muted-foreground">عروض موسمية</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{products.filter((p) => p.oldPrice).length}</p>
                <p className="text-sm text-muted-foreground">منتجات مخفضة</p>
              </div>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">{categories.length - 1}</p>
                <p className="text-sm text-muted-foreground">فئات</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="البحث عن منتج..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80 text-muted-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="text-right p-4 font-medium text-sm">المنتج</th>
                  <th className="text-right p-4 font-medium text-sm hidden md:table-cell">الفئة</th>
                  <th className="text-right p-4 font-medium text-sm">السعر</th>
                  <th className="text-center p-4 font-medium text-sm">عرض موسمي</th>
                  <th className="text-center p-4 font-medium text-sm">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-border last:border-0 hover:bg-muted/30">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden relative flex-shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium line-clamp-1">{product.name}</p>
                          <p className="text-sm text-muted-foreground">{product.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 hidden md:table-cell">
                      <span className="text-sm text-muted-foreground">
                        {categories.find((c) => c.id === product.category)?.label}
                      </span>
                    </td>
                    <td className="p-4">
                      <div>
                        <p className="font-semibold text-primary">{formatPrice(product.price)} ج.م</p>
                        {product.oldPrice && (
                          <p className="text-xs text-muted-foreground line-through">
                            {formatPrice(product.oldPrice)} ج.م
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => toggleSeasonalOffer(product.id)}
                        className={`w-10 h-6 rounded-full transition-colors relative ${
                          product.isSeasonalOffer ? "bg-accent" : "bg-muted"
                        }`}
                      >
                        <span
                          className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${
                            product.isSeasonalOffer ? "left-1" : "right-1"
                          }`}
                        />
                      </button>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => setEditingProduct(product)}
                          className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredProducts.length === 0 && (
            <div className="p-12 text-center">
              <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">لا توجد منتجات مطابقة</p>
            </div>
          )}
        </div>
      </main>

      {/* Add Product Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold">إضافة منتج جديد</h2>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">اسم المنتج</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Dell XPS 15"
                  />
                </div>
                <div>
                  <Label htmlFor="brand">الماركة</Label>
                  <Input
                    id="brand"
                    value={newProduct.brand}
                    onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
                    placeholder="Dell"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="category">الفئة</Label>
                <select
                  id="category"
                  value={newProduct.category}
                  onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  {categories.slice(1).map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">السعر (ج.م)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="oldPrice">السعر القديم (اختياري)</Label>
                  <Input
                    id="oldPrice"
                    type="number"
                    value={newProduct.oldPrice || ""}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, oldPrice: e.target.value ? Number(e.target.value) : null })
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="specs">المواصفات</Label>
                <Input
                  id="specs"
                  value={newProduct.specs}
                  onChange={(e) => setNewProduct({ ...newProduct, specs: e.target.value })}
                  placeholder="Intel Core i7, 16GB RAM, 512GB SSD"
                />
              </div>
              <div>
                <Label htmlFor="badge">شارة (اختياري)</Label>
                <Input
                  id="badge"
                  value={newProduct.badge || ""}
                  onChange={(e) => setNewProduct({ ...newProduct, badge: e.target.value || null })}
                  placeholder="جديد، الأكثر مبيعاً..."
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setNewProduct({ ...newProduct, isSeasonalOffer: !newProduct.isSeasonalOffer })}
                  className={`w-10 h-6 rounded-full transition-colors relative ${
                    newProduct.isSeasonalOffer ? "bg-accent" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${
                      newProduct.isSeasonalOffer ? "left-1" : "right-1"
                    }`}
                  />
                </button>
                <Label>عرض موسمي</Label>
              </div>
            </div>
            <div className="p-6 border-t border-border flex gap-3">
              <Button onClick={handleAddProduct} className="flex-1 bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 ml-2" />
                حفظ المنتج
              </Button>
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                إلغاء
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-foreground/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex items-center justify-between">
              <h2 className="text-xl font-bold">تعديل المنتج</h2>
              <button
                onClick={() => setEditingProduct(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-name">اسم المنتج</Label>
                  <Input
                    id="edit-name"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-brand">الماركة</Label>
                  <Input
                    id="edit-brand"
                    value={editingProduct.brand}
                    onChange={(e) => setEditingProduct({ ...editingProduct, brand: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="edit-category">الفئة</Label>
                <select
                  id="edit-category"
                  value={editingProduct.category}
                  onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                >
                  {categories.slice(1).map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="edit-price">السعر (ج.م)</Label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                  />
                </div>
                <div>
                  <Label htmlFor="edit-oldPrice">السعر القديم (اختياري)</Label>
                  <Input
                    id="edit-oldPrice"
                    type="number"
                    value={editingProduct.oldPrice || ""}
                    onChange={(e) =>
                      setEditingProduct({
                        ...editingProduct,
                        oldPrice: e.target.value ? Number(e.target.value) : null,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="edit-specs">المواصفات</Label>
                <Input
                  id="edit-specs"
                  value={editingProduct.specs}
                  onChange={(e) => setEditingProduct({ ...editingProduct, specs: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="edit-badge">شارة (اختياري)</Label>
                <Input
                  id="edit-badge"
                  value={editingProduct.badge || ""}
                  onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value || null })}
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    setEditingProduct({ ...editingProduct, isSeasonalOffer: !editingProduct.isSeasonalOffer })
                  }
                  className={`w-10 h-6 rounded-full transition-colors relative ${
                    editingProduct.isSeasonalOffer ? "bg-accent" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${
                      editingProduct.isSeasonalOffer ? "left-1" : "right-1"
                    }`}
                  />
                </button>
                <Label>عرض موسمي</Label>
              </div>
            </div>
            <div className="p-6 border-t border-border flex gap-3">
              <Button onClick={handleUpdateProduct} className="flex-1 bg-primary hover:bg-primary/90">
                <Save className="w-4 h-4 ml-2" />
                حفظ التعديلات
              </Button>
              <Button variant="outline" onClick={() => setEditingProduct(null)}>
                إلغاء
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

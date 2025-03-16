import Hero from "@/components/hero"
import ProductList from "@/components/product-list"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Fresh Vegetables</h2>
        <ProductList />
      </div>
    </main>
  )
}


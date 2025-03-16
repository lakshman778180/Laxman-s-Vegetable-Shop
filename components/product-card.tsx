"use client"

import Image from "next/image"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import { useState } from "react"
import { Check } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="relative h-48">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{product.name}</h3>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            ₹{product.price}/kg
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded font-medium transition-colors ${
            added ? "bg-green-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          aria-label={`Add ${product.name} to cart`}
        >
          {added ? (
            <span className="flex items-center justify-center">
              <Check className="h-4 w-4 mr-1" /> Added to Cart
            </span>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </div>
  )
}


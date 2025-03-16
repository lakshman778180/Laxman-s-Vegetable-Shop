"use client"

import { useCart } from "@/context/cart-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Trash2 } from "lucide-react"
import { useState } from "react"
import { useAuth } from "@/context/auth-context"

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useCart()
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [orderPlaced, setOrderPlaced] = useState(false)

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (!isAuthenticated) {
      router.push("/login")
      return
    }

    // In a real app, this would submit the order to an API
    setOrderPlaced(true)
    setTimeout(() => {
      clearCart()
      router.push("/")
    }, 3000)
  }

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Order Placed Successfully!</h2>
          <p className="mb-4">Thank you for your order. You will be redirected shortly.</p>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">Your cart is empty.</p>
          <button
            onClick={() => router.push("/products")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="py-2 px-4 text-left">Product</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Quantity</th>
                <th className="py-2 px-4 text-left">Total</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 mr-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">₹{item.price.toFixed(2)}/kg</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="border rounded-l px-2 py-1 bg-gray-100"
                      >
                        -
                      </button>
                      <span className="border-t border-b px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border rounded-r px-2 py-1 bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">₹{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Delivery:</span>
          <span>₹50.00</span>
        </div>
        <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2">
          <span>Total:</span>
          <span>₹{(totalPrice + 50).toFixed(2)}</span>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={() => router.push("/products")}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Continue Shopping
        </button>
        <button
          onClick={handleCheckout}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          {isAuthenticated ? "Place Order" : "Login to Checkout"}
        </button>
      </div>
    </div>
  )
}


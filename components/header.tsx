"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { useAuth } from "@/context/auth-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { cartItems } = useCart()
  const { isAuthenticated, logout } = useAuth()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  const isActive = (path: string) => {
    return pathname === path ? "text-green-500" : "text-gray-700 hover:text-green-500"
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center">
            <span className="text-green-600 text-2xl font-bold mr-2">🥬</span>
            <span className="font-bold text-xl">Ramesh's Vegetable Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isActive("/")} font-medium`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive("/about")} font-medium`}>
              About
            </Link>
            <Link href="/products" className={`${isActive("/products")} font-medium`}>
              Products
            </Link>
            {isAuthenticated ? (
              <button onClick={logout} className="font-medium text-gray-700 hover:text-green-500">
                Logout
              </button>
            ) : (
              <Link href="/login" className={`${isActive("/login")} font-medium`}>
                Login
              </Link>
            )}
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-green-500" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link href="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link href="/" className={`${isActive("/")} font-medium py-2`} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/about"
                className={`${isActive("/about")} font-medium py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/products"
                className={`${isActive("/products")} font-medium py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    logout()
                    setIsMenuOpen(false)
                  }}
                  className="font-medium text-gray-700 hover:text-green-500 py-2 text-left"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  className={`${isActive("/login")} font-medium py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}


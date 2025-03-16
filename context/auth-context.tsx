"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface AuthContextType {
  isAuthenticated: boolean
  user: string | null
  login: (email: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  // Check for existing session on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(savedUser)
      setIsAuthenticated(true)
    }
  }, [])

  const login = (email: string) => {
    // In a real app, this would validate credentials with an API
    setUser(email)
    setIsAuthenticated(true)
    localStorage.setItem("user", email)
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}


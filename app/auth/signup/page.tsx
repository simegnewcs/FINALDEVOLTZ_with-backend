// app/auth/signup/page.tsx - UPDATED
"use client"

import type React from "react"
import { signup, checkHealth } from "@/app/lib/api"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SignUpPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [backendStatus, setBackendStatus] = useState<"checking" | "connected" | "disconnected">("checking")
  const [error, setError] = useState("")

  // Check backend connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      const isConnected = await checkHealth()
      setBackendStatus(isConnected ? "connected" : "disconnected")
    }
    
    checkConnection()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long")
      return
    }

    setIsLoading(true)

    try {
      const data = await signup({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      // Save token and user data
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))
      
      alert("Account created successfully ✅")
      router.push("/dashboard")

    } catch (err: any) {
      console.error("Signup error", err)
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error when user starts typing
    if (error) setError("")
  }

  const retryConnection = async () => {
    setBackendStatus("checking")
    const isConnected = await checkHealth()
    setBackendStatus(isConnected ? "connected" : "disconnected")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md border-0 shadow-xl relative">
        <CardHeader className="text-center px-4 sm:px-6">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
              DevVoltz
            </span>
          </Link>
          <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900">Create Account</CardTitle>
          <p className="text-slate-600 text-sm sm:text-base">Join DevVoltz and start your journey</p>
        </CardHeader>
        
        <CardContent className="px-4 sm:px-6">
          {/* Backend Status Indicator */}
          <Alert variant={
            backendStatus === "connected" ? "default" : 
            backendStatus === "checking" ? "default" : "destructive"
          } className="mb-4">
            {backendStatus === "connected" ? (
              <CheckCircle className="h-4 w-4 text-green-600" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertTitle>
              {backendStatus === "checking" ? "Checking connection..." : 
               backendStatus === "connected" ? "Connected to server" : "Connection issue"}
            </AlertTitle>
            <AlertDescription className="flex flex-col gap-2">
              {backendStatus === "disconnected" ? (
                <>
                  <span>Cannot connect to server.</span>
                  <Button variant="outline" size="sm" onClick={retryConnection} className="mt-2">
                    Retry Connection
                  </Button>
                </>
              ) : backendStatus === "checking" ? (
                "Verifying server connection..."
              ) : (
                "Ready to create your account!"
              )}
            </AlertDescription>
          </Alert>

          {/* Error Message */}
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="pl-10 h-12"
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="pl-10 h-12"
                  placeholder="Enter your email"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="pl-10 pr-10 h-12"
                  placeholder="Create a password (min. 6 characters)"
                  disabled={isLoading}
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="pl-10 h-12"
                  placeholder="Confirm your password"
                  disabled={isLoading}
                  minLength={6}
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                required
                className="rounded border-slate-300 text-blue-700 focus:ring-coral-500 mt-1"
                disabled={isLoading}
              />
              <span className="ml-2 text-sm text-slate-600">
                I agree to the{" "}
                <Link href="/terms" className="text-blue-700 hover:text-coral-500">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-700 hover:text-coral-500">
                  Privacy Policy
                </Link>
              </span>
            </div>

            <Button
              type="submit"
              disabled={isLoading || backendStatus !== "connected"}
              className="w-full bg-gradient-to-r from-blue-700 to-coral-500 hover:from-blue-800 hover:to-coral-600 h-12"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-600 text-sm sm:text-base">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-blue-700 hover:text-coral-600 font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)
  const [activeTab, setActiveTab] = useState("student")
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    otp: "",
    remember: false,
  })
  const router = useRouter()

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setIsOtpSent(true)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate OTP verification
    router.push("/")
  }

  const getPlaceholderText = () => {
    switch (activeTab) {
      case "student":
        return "Student ID / College Gmail / University Roll"
      case "faculty":
        return "Faculty ID / Phone Number / Email"
      case "admin":
        return "Admin ID / Email / Phone Number"
      default:
        return "Enter your credentials"
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/university-campus.png')",
          filter: "blur(8px)",
          transform: "scale(1.1)",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Semi-Circle Header */}
      <div
        className="relative w-full h-48 bg-primary flex items-end justify-center pb-6"
        style={{
          borderBottomLeftRadius: "180% 100%",
          borderBottomRightRadius: "180% 100%",
        }}
      >
        <div className="logo">
          <Image
            src="/images/logo-tigps.png"
            alt="TECHNO INDIA GROUP"
            width={133}
            height={147}
            className="object-contain"
          />
        </div>
      </div>

      {/* Login Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md px-4">
        <Card className="glass-effect border-0 shadow-2xl">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="student" className="text-xs">
                  Student
                </TabsTrigger>
                <TabsTrigger value="faculty" className="text-xs">
                  Faculty
                </TabsTrigger>
                <TabsTrigger value="admin" className="text-xs">
                  Admin
                </TabsTrigger>
              </TabsList>

              {["student", "faculty", "admin"].map((userType) => (
                <TabsContent key={userType} value={userType}>
                  {!isOtpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4">
                      <div>
                        <Input
                          type="text"
                          placeholder={getPlaceholderText()}
                          value={formData.identifier}
                          onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          required
                          className="w-full pr-10"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="remember"
                            checked={formData.remember}
                            onCheckedChange={(checked) => setFormData({ ...formData, remember: checked as boolean })}
                          />
                          <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                          Forgot Password?
                        </a>
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Send OTP
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="text-center mb-4">
                        <p className="text-sm text-gray-600">
                          OTP sent to your registered{" "}
                          {userType === "faculty" || userType === "admin" ? "phone/email" : "email"}
                        </p>
                      </div>

                      <div>
                        <Input
                          type="text"
                          placeholder="Enter 6-digit OTP"
                          value={formData.otp}
                          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                          required
                          maxLength={6}
                          className="w-full text-center text-lg tracking-widest"
                        />
                      </div>

                      <div className="flex gap-2">
                        <Button type="button" variant="outline" onClick={() => setIsOtpSent(false)} className="flex-1">
                          Back
                        </Button>
                        <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                          Verify & Login
                        </Button>
                      </div>

                      <div className="text-center">
                        <button
                          type="button"
                          className="text-sm text-blue-600 hover:underline"
                          onClick={() => setIsOtpSent(false)}
                        >
                          Resend OTP
                        </button>
                      </div>
                    </form>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

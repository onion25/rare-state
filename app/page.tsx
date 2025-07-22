"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  BarChart3,
  Megaphone,
  Target,
  Star,
  Check,
  TrendingUp,
  Zap,
  Shield,
  Menu,
  X,
  Rocket,
  ArrowUp,
  Sparkles,
  Crown,
  Award,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-mediumBlue/10 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-purple via-brand-mediumBlue to-brand-lightBlue rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse">
                  <Sparkles className="h-4 w-4 text-white p-0.5" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Donich Co
                </span>
                <div className="text-xs text-brand-purple font-medium">Growth Accelerators</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-brand-purple transition-all duration-300 font-medium relative group"
              >
                Services
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="#results"
                className="text-gray-700 hover:text-brand-purple transition-all duration-300 font-medium relative group"
              >
                Results
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-brand-purple transition-all duration-300 font-medium relative group"
              >
                Pricing
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover:w-full"></div>
              </Link>
              <Button className="bg-gradient-to-r from-brand-purple to-brand-mediumBlue hover:from-brand-purple/90 hover:to-brand-mediumBlue/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Rocket className="mr-2 h-4 w-4" />
                Launch Your Growth
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-brand-mediumBlue/20 pt-4">
              <div className="flex flex-col space-y-4">
                <Link href="#services" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">
                  Services
                </Link>
                <Link href="#results" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">
                  Results
                </Link>
                <Link href="#pricing" className="text-gray-700 hover:text-brand-purple transition-colors font-medium">
                  Pricing
                </Link>
                <Button className="bg-gradient-to-r from-brand-purple to-brand-mediumBlue text-white w-full">
                  <Rocket className="mr-2 h-4 w-4" />
                  Launch Your Growth
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-white via-brand-lightBlue/30 to-brand-mediumBlue/20"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating clouds */}
          <div className="absolute top-20 left-10 w-40 h-24 bg-gradient-to-r from-brand-lightBlue/40 to-brand-mediumBlue/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-20 bg-gradient-to-r from-brand-purple/30 to-brand-mediumBlue/40 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-28 h-16 bg-gradient-to-r from-brand-lightBlue/50 to-brand-purple/30 rounded-full blur-lg animate-pulse delay-2000"></div>

          {/* Growth indicators */}
          <div className="absolute top-32 right-1/4 text-brand-purple/30 animate-bounce">
            <ArrowUp className="h-12 w-12" />
          </div>
          <div className="absolute bottom-32 left-1/4 text-brand-mediumBlue/40 animate-bounce delay-500">
            <TrendingUp className="h-10 w-10" />
          </div>
        </div>

        {/* Flying Rocket Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Static Stars */}
          <div className="absolute top-20 right-20">
            <Sparkles className="h-8 w-8 text-yellow-400/60" />
          </div>
          <div className="absolute top-40 left-20">
            <Sparkles className="h-6 w-6 text-yellow-400/60" />
          </div>
          <div className="absolute bottom-40 right-32">
            <Sparkles className="h-10 w-10 text-yellow-400/60" />
          </div>
          <div className="absolute top-60 left-32">
            <Sparkles className="h-7 w-7 text-yellow-400/60" />
          </div>
          <div className="absolute bottom-60 left-1/4">
            <Sparkles className="h-5 w-5 text-yellow-400/60" />
          </div>

          {/* Static Rocket Behind Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
            <Rocket className="h-96 w-96 text-brand-purple/20 transform rotate-12" />
          </div>
        </div>

        {/* Centered Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-gradient-to-r from-brand-purple/10 to-brand-mediumBlue/10 text-brand-purple border-brand-purple/20 px-6 py-3 text-base font-medium backdrop-blur-sm bg-white/80">
                <TrendingUp className="mr-2 h-5 w-5" />🚀 Skyrocket Your Business Growth
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              <span className="text-gray-900 drop-shadow-sm">Turn Your Business Into a</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-mediumBlue to-brand-purple drop-shadow-lg">
                Growth Machine
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-sm">
              We don't just do marketing – we engineer explosive growth. Watch your revenue soar with strategies that
              turn prospects into profits.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-purple to-brand-mediumBlue hover:from-brand-purple/90 hover:to-brand-mediumBlue/90 text-white text-lg px-8 py-4 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-3 h-6 w-6" />
                Launch My Growth Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-brand-mediumBlue text-brand-mediumBlue hover:bg-brand-mediumBlue hover:text-white text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                See Success Stories
              </Button>
            </div>

            {/* Growth Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-mediumBlue mb-2">
                  847%
                </div>
                <div className="text-sm text-gray-700 font-medium">Average Growth</div>
                <div className="flex justify-center mt-2">
                  <ArrowUp className="h-5 w-5 text-green-500 animate-bounce" />
                </div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-mediumBlue to-brand-purple mb-2">
                  90 Days
                </div>
                <div className="text-sm text-gray-700 font-medium">To See Results</div>
                <div className="flex justify-center mt-2">
                  <Zap className="h-5 w-5 text-yellow-500 animate-pulse" />
                </div>
              </div>
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-mediumBlue mb-2">
                  100+
                </div>
                <div className="text-sm text-gray-700 font-medium">Success Stories</div>
                <div className="flex justify-center mt-2">
                  <Crown className="h-5 w-5 text-yellow-500 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-white to-brand-lightBlue/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-brand-lightBlue/50 text-brand-mediumBlue border-brand-mediumBlue/20 px-4 py-2">
              <Sparkles className="mr-2 h-4 w-4" />
              Our Growth Arsenal
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Tools That Build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-mediumBlue">
                {" "}
                Empires
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every successful business needs the right weapons. Here's your complete growth toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-brand-lightBlue/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-mediumBlue rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Meta Ads & Social Media</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Dominate Facebook, Instagram, and social platforms with ads that convert and content that captivates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                    Meta Ads Management
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-mediumBlue rounded-full mr-3"></div>
                    Social Media Marketing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                    Content Creation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-brand-mediumBlue/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-mediumBlue/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-mediumBlue to-brand-purple rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Megaphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Video & SEO Mastery</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Professional video editing and SEO optimization that gets you found and remembered.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-mediumBlue rounded-full mr-3"></div>
                    Professional Video Editing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                    SEO Optimization
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-mediumBlue rounded-full mr-3"></div>
                    Search Engine Domination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-white to-brand-purple/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-mediumBlue rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-3">Website Development</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Custom websites that convert visitors into customers and grow your business 24/7.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                    Website Creation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-mediumBlue rounded-full mr-3"></div>
                    Website Updates & Changes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-brand-purple rounded-full mr-3"></div>
                    Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-mediumBlue via-brand-purple to-brand-mediumBlue"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 px-4 py-2">
              <Award className="mr-2 h-4 w-4" />
              The Numbers Don't Lie
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Growth That Breaks Records</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These aren't just statistics – they're success stories waiting to be yours.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  847%
                </div>
                <div className="absolute -top-2 -right-2">
                  <ArrowUp className="h-8 w-8 text-yellow-400 animate-bounce" />
                </div>
              </div>
              <div className="text-white/80 font-medium text-lg">Revenue Increase</div>
              <div className="text-white/60 text-sm mt-1">Average in 12 months</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  2.3M
                </div>
                <div className="absolute -top-2 -right-2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div className="text-white/80 font-medium text-lg">Leads Generated</div>
              <div className="text-white/60 text-sm mt-1">For our clients</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  45
                </div>
                <div className="absolute -top-2 -right-2">
                  <TrendingUp className="h-8 w-8 text-yellow-400 animate-bounce delay-300" />
                </div>
              </div>
              <div className="text-white/80 font-medium text-lg">Days Average</div>
              <div className="text-white/60 text-sm mt-1">To see results</div>
            </div>

            <div className="text-center group">
              <div className="relative">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  99%
                </div>
                <div className="absolute -top-2 -right-2">
                  <Crown className="h-8 w-8 text-yellow-400 animate-pulse delay-500" />
                </div>
              </div>
              <div className="text-white/80 font-medium text-lg">Client Retention</div>
              <div className="text-white/60 text-sm mt-1">They never leave</div>
            </div>
          </div>

          {/* Success Stories */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg">
                  "Revenue went from $50K to $2.1M in 8 months. I thought it was impossible until Donich Co proved me
                  wrong."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">SJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Sarah Johnson</div>
                    <div className="text-white/70">CEO, TechStart Inc.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg">
                  "They don't just deliver results – they create miracles. Our ROI increased by 1,200% in 6 months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Michael Chen</div>
                    <div className="text-white/70">Founder, GrowthCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 text-lg">
                  "From startup to industry leader in 10 months. Donich Co doesn't just grow businesses – they transform
                  them."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">ER</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Emily Rodriguez</div>
                    <div className="text-white/70">CEO, Innovate Labs</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-lightBlue/20 to-brand-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-brand-mediumBlue/10 text-brand-mediumBlue border-brand-mediumBlue/20 px-4 py-2">
              <Rocket className="mr-2 h-4 w-4" />
              Investment in Your Empire
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-mediumBlue">
                {" "}
                Growth Level
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every empire starts with a single step. Choose the investment level that matches your ambition.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <Card className="border-2 border-brand-mediumBlue/20 hover:border-brand-mediumBlue/40 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-lightBlue to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-lightBlue to-brand-mediumBlue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 mb-2">Growth Starter</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  Perfect for ambitious startups ready to scale
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$2,500</span>
                  <span className="text-gray-600 text-lg">/month</span>
                </div>
                <div className="text-sm text-brand-mediumBlue font-medium mt-2">ROI Expected: 300-500%</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Growth Strategy Blueprint
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    2 High-Impact Campaigns/Month
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Social Media Domination
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Weekly Growth Reports
                  </li>
                </ul>
                <Button className="w-full bg-brand-mediumBlue hover:bg-brand-mediumBlue/90 text-white text-lg py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Growing Now
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="border-2 border-brand-purple/40 hover:border-brand-purple/60 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 text-sm font-bold shadow-lg">
                  <Crown className="mr-2 h-4 w-4" />
                  MOST POPULAR
                </Badge>
              </div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
              <CardHeader className="text-center pb-8 relative z-10 pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-mediumBlue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 mb-2">Empire Builder</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  For businesses ready to dominate their market
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$5,000</span>
                  <span className="text-gray-600 text-lg">/month</span>
                </div>
                <div className="text-sm text-brand-purple font-medium mt-2">ROI Expected: 500-1000%</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-purple/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </div>
                    Everything in Growth Starter
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-purple/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </div>
                    5 Revenue-Exploding Campaigns
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-purple/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </div>
                    Advanced Growth Analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-purple/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </div>
                    Brand Transformation
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-purple/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-purple" />
                    </div>
                    Dedicated Growth Manager
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-mediumBlue hover:from-brand-purple/90 hover:to-brand-mediumBlue/90 text-white text-lg py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Rocket className="mr-2 h-5 w-5" />
                  Build My Empire
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-2 border-brand-mediumBlue/20 hover:border-brand-mediumBlue/40 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-mediumBlue/20 to-brand-purple/10 rounded-full -translate-y-16 translate-x-16"></div>
              <CardHeader className="text-center pb-8 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-mediumBlue via-brand-purple to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-gray-900 mb-2">Market Dominator</CardTitle>
                <CardDescription className="text-gray-600 text-lg">
                  For enterprises ready to own their industry
                </CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">$10,000</span>
                  <span className="text-gray-600 text-lg">/month</span>
                </div>
                <div className="text-sm text-brand-mediumBlue font-medium mt-2">ROI Expected: 1000%+</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Everything in Empire Builder
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Unlimited Growth Campaigns
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Custom Domination Strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    Multi-Channel Supremacy
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-brand-mediumBlue/10 rounded-full flex items-center justify-center mr-3">
                      <Check className="h-4 w-4 text-brand-mediumBlue" />
                    </div>
                    24/7 VIP Support Team
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-brand-mediumBlue via-brand-purple to-yellow-400 hover:opacity-90 text-white text-lg py-3 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Crown className="mr-2 h-5 w-5" />
                  Dominate My Market
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-lightBlue/30 via-brand-mediumBlue/20 to-brand-purple/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(197,186,255,0.3),transparent_50%)] bg-[radial-gradient(circle_at_80%_20%,rgba(196,217,255,0.3),transparent_50%)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-brand-purple/10 text-brand-purple border-brand-purple/20 px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4" />
                Ready to Explode Your Growth?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Let's Build Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-mediumBlue">
                  {" "}
                  Success Story
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Your competitors are growing. Your customers are waiting. Your empire is calling.
              </p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm border-brand-mediumBlue/20 shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">First Name</label>
                      <Input placeholder="John" className="border-brand-mediumBlue/20 h-12 text-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Last Name</label>
                      <Input placeholder="Doe" className="border-brand-mediumBlue/20 h-12 text-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Email</label>
                    <Input
                      type="email"
                      placeholder="john@yourempire.com"
                      className="border-brand-mediumBlue/20 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Company</label>
                    <Input placeholder="Your Future Empire" className="border-brand-mediumBlue/20 h-12 text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Tell Us About Your Growth Goals
                    </label>
                    <Textarea
                      placeholder="I want to dominate my market and achieve explosive growth..."
                      className="border-brand-mediumBlue/20 min-h-[120px] text-lg"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-brand-purple to-brand-mediumBlue hover:from-brand-purple/90 hover:to-brand-mediumBlue/90 text-white text-lg py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Rocket className="mr-3 h-6 w-6" />
                    Launch My Growth Journey
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* Languages */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Languages</h3>
              <div className="flex justify-center items-center gap-8">
                <div className="text-lg font-medium text-gray-700">English</div>
                <div className="w-2 h-2 bg-brand-mediumBlue rounded-full"></div>
                <div className="text-lg font-medium text-gray-700">Українська</div>
                <div className="w-2 h-2 bg-brand-mediumBlue rounded-full"></div>
                <div className="text-lg font-medium text-gray-700">Русский</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-purple to-brand-mediumBlue rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold">Donich Co</span>
                  <div className="text-xs text-brand-purple font-medium">Growth Accelerators</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We don't just grow businesses – we build empires. Join the success revolution.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-brand-purple/20 rounded-lg flex items-center justify-center hover:bg-brand-purple/30 transition-colors cursor-pointer">
                  <span className="text-brand-purple font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-brand-mediumBlue/20 rounded-lg flex items-center justify-center hover:bg-brand-mediumBlue/30 transition-colors cursor-pointer">
                  <span className="text-brand-mediumBlue font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-brand-purple/20 rounded-lg flex items-center justify-center hover:bg-brand-mediumBlue/30 transition-colors cursor-pointer">
                  <span className="text-brand-purple font-bold">@</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Growth Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-brand-purple transition-colors">
                    Meta Ads & Social Media
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-purple transition-colors">
                    Video Editing & SEO
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-purple transition-colors">
                    Website Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-brand-mediumBlue transition-colors">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-mediumBlue transition-colors">
                    Join Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-brand-mediumBlue transition-colors">
                    Growth Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Start Growing</h4>
              <ul className="space-y-3 text-gray-400">
                <li>hello@donichco.com</li>
                <li>+1 (555) GROW-NOW</li>
                <li>123 Success Avenue</li>
                <li>Empire City, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Donich Co. All rights reserved. Building empires, one business at a
              time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import { useState } from "react"
import {
  ChevronRight,
  Play,
  Users,
  Award,
  Zap,
  Code,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Star,
  ArrowRight,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/elearning")
  }

  const handleExploreServices = () => {
    router.push("/software")
  }

  const handleStartLearning = () => {
    router.push("/elearning")
  }

  const handleServiceNavigation = (service: string) => {
    router.push(`/${service}`)
  }

  const stats = [
    { number: "1100+", label: "Students Trained", icon: Users },
    { number: "200+", label: "Projects Completed", icon: Briefcase },
    { number: "50+", label: "Software Solutions", icon: Code },
    { number: "95%", label: "Job Placement Rate", icon: Award },
  ]

  const services = [
    {
      icon: GraduationCap,
      title: "E-Learning Platform",
      description:
        "Master modern web development with interactive courses, hands-on projects, and real-world applications.",
      features: ["Interactive Code Editor", "Progress Tracking", "Certificates", "24/7 Support"],
      route: "elearning",
    },
    {
      icon: Briefcase,
      title: "Freelance Marketplace",
      description:
        "Connect with top Ethiopian developers or find your next project opportunity in our thriving marketplace.",
      features: ["Secure Payments", "Project Management", "Chat System", "Quality Assurance"],
      route: "freelance",
    },
    {
      icon: ShoppingBag,
      title: "Software Solutions",
      description: "Custom software development and ready-made solutions to accelerate your business growth.",
      features: ["Custom Development", "Ready Solutions", "Technical Support", "Scalable Architecture"],
      route: "software",
    },
    {
      icon: Users,
      title: "Bootcamp Programs",
      description: "Intensive training programs designed to transform beginners into job-ready developers in months.",
      features: ["Live Instruction", "Career Support", "Portfolio Projects", "Job Placement"],
      route: "bootcamp",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      company: "Tech Startup Dubai",
      content:
        "DevVoltz transformed my career. From zero coding knowledge to landing my dream job in Dubai - their bootcamp was incredible!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ahmed Hassan",
      role: "Freelance Developer",
      company: "Independent",
      content:
        "The freelance platform connected me with amazing clients. I've tripled my income since joining DevVoltz!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Meron Tadesse",
      role: "Software Engineer",
      company: "Ethiopian Airlines",
      content:
        "Their custom software solution streamlined our operations. Professional, efficient, and cost-effective!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-brandBlue from-slate-50 to-blue-50  text-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="d-flex">
                {/* <Zap className="w-5 h-5 text-white" /> */}
                <img src="../logodvwhitey.png" alt="" className="w-30 h-12  border-rounded " style={{ borderRadius: "50%" }} // ✅ correct
                />
                 
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/elearning" className="text-slate-600 hover:text-coral-500 transition-colors">
                E-Learning
              </Link>
              <Link href="/freelance" className="text-slate-600 hover:text-coral-500 transition-colors">
                Freelance
              </Link>
              <Link href="/software" className="text-slate-600 hover:text-coral-500 transition-colors">
                Software
              </Link>
              <Link href="/bootcamp" className="text-slate-600 hover:text-coral-500 transition-colors">
                Bootcamp
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-coral-500 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-coral-500 transition-colors">
                Contact
              </Link>
              <Link
                href="/auth/signin"
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Sign In
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
              <div className="flex flex-col space-y-4 p-4">
                <Link href="/elearning" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  E-Learning
                </Link>
                <Link href="/freelance" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  Freelance
                </Link>
                <Link href="/software" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  Software
                </Link>
                <Link href="/bootcamp" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  Bootcamp
                </Link>
                <Link href="/about" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  About
                </Link>
                <Link href="/contact" className="text-slate-600 hover:text-coral-500 transition-colors py-2">
                  Contact
                </Link>
                <Link
                  href="/auth/signin"
                  className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all text-center mt-2"
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering Africa's
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Tech Future
              </span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              From Addis Ababa to Dubai, DevVoltz is revolutionizing tech education and freelance opportunities. Learn,
              build, and grow with Ethiopia's leading tech platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleGetStarted}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-coral-500 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-20 border-danger">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 border-1 border-danger">
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 border-white">{stat.number}</div>
                <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive tech solutions designed to accelerate your career and business growth
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-8 rounded-2xl hover:shadow-xl transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{service.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 text-sm sm:text-base">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 text-coral-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleServiceNavigation(service.route)}
                  className="text-blue-700 font-semibold hover:text-coral-500 transition-colors flex items-center group-hover:translate-x-2 transition-transform text-sm sm:text-base"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={handleExploreServices}
              className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Explore All Services
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear from our community of successful developers and entrepreneurs
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic text-sm sm:text-base">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4 flex-shrink-0"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-slate-600 text-xs sm:text-sm">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-brandYellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-coral-100 mb-8">
            Join thousands of successful developers who started their journey with DevVoltz
          </p>
          <button
            onClick={handleStartLearning}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
          >
            Start Learning Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">DevVoltz</span>
              </div>
              <p className="text-slate-400">Empowering Africa's tech future from Addis Ababa to Dubai and beyond.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/elearning" className="hover:text-white transition-colors">
                    E-Learning
                  </Link>
                </li>
                <li>
                  <Link href="/freelance" className="hover:text-white transition-colors">
                    Freelance
                  </Link>
                </li>
                <li>
                  <Link href="/software" className="hover:text-white transition-colors">
                    Software
                  </Link>
                </li>
                <li>
                  <Link href="/bootcamp" className="hover:text-white transition-colors">
                    Bootcamp
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevVoltz. All rights reserved. Made with Devvoltz in Addis Ababa & Dubai</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

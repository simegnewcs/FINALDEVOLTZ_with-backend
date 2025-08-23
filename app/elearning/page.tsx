"use client"

import { useState } from "react"
import {
  Play,
  Clock,
  Users,
  Star,
  ChevronRight,
  Code,
  Database,
  Smartphone,
  Globe,
  Zap,
  BookOpen,
  Search,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ELearningPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleEnrollNow = (courseId: string) => {
    router.push(`/elearning/course/${courseId}`)
  }

  const handleStartLearning = () => {
    router.push("/auth/signup")
  }

  const handleSignIn = () => {
    router.push("/auth/signin")
  }

const categories = [
  { name: "Web Development", slug: "web-development", icon: Globe, count: 25 },
  { name: "Mobile Development", slug: "mobile-development", icon: Smartphone, count: 15 },
  { name: "Database", slug: "database", icon: Database, count: 12 },
  { name: "Programming", slug: "programming", icon: Code, count: 30 },
]


  const featuredCourses = [
    {
      id: "react-fundamentals",
      title: "React Fundamentals",
      instructor: "Sarah Johnson",
      rating: 4.9,
      students: 2340,
      duration: "8 weeks",
      level: "Beginner",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      description: "Master React from scratch with hands-on projects and real-world applications.",
      skills: ["React", "JSX", "Components", "State Management"],
    },
    {
      id: "javascript-mastery",
      title: "JavaScript Mastery",
      instructor: "Ahmed Hassan",
      rating: 4.8,
      students: 1890,
      duration: "12 weeks",
      level: "Intermediate",
      price: "$49",
      image: "/placeholder.svg?height=200&width=300",
      description: "Deep dive into JavaScript concepts, ES6+, and modern development practices.",
      skills: ["JavaScript", "ES6+", "Async/Await", "DOM Manipulation"],
    },
    {
      id: "fullstack-bootcamp",
      title: "Full Stack Development Bootcamp",
      instructor: "Meron Tadesse",
      rating: 4.9,
      students: 1250,
      duration: "16 weeks",
      level: "Advanced",
      price: "$199",
      image: "/placeholder.svg?height=200&width=300",
      description: "Complete full-stack development course covering frontend, backend, and deployment.",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
    },
    {
      id: "python-basics",
      title: "Python for Beginners",
      instructor: "David Wilson",
      rating: 4.7,
      students: 3200,
      duration: "6 weeks",
      level: "Beginner",
      price: "Free",
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn Python programming from basics to building real applications.",
      skills: ["Python", "Data Types", "Functions", "OOP"],
    },
  ]

  const learningPaths = [
    {
      title: "Frontend Developer",
      description: "Become a skilled frontend developer with modern frameworks",
      courses: 8,
      duration: "6 months",
      skills: ["HTML/CSS", "JavaScript", "React", "TypeScript"],
    },
    {
      title: "Backend Developer",
      description: "Master server-side development and database management",
      courses: 10,
      duration: "8 months",
      skills: ["Node.js", "Python", "Databases", "APIs"],
    },
    {
      title: "Full Stack Developer",
      description: "Complete web development from frontend to backend",
      courses: 15,
      duration: "12 months",
      skills: ["Frontend", "Backend", "DevOps", "Cloud"],
    },
  ]

  const stats = [
    { number: "50,000+", label: "Active Students" },
    { number: "200+", label: "Expert Instructors" },
    { number: "500+", label: "Courses Available" },
    { number: "95%", label: "Completion Rate" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
                 <img src="../logodvwhitey.png" alt="" className="w-30 h-10  border-rounded " style={{ borderRadius: "50%" }} // ✅ correct
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>
            {/* Add mobile menu button and navigation */}
            <div className="flex items-center">
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/elearning" className="text-blue-700 font-medium">
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
                <button
                  onClick={handleSignIn}
                  className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  Sign In
                </button>
              </div>
              <button className="md:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Master
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Modern Tech Skills
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Learn from industry experts with hands-on projects, interactive coding exercises, and personalized
              learning paths designed for African developers.
            </p>
            {/* Update hero buttons for mobile */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={handleStartLearning}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group"
              >
                Start Learning Free
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-coral-500 transition-all flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-blue-200 outline-none text-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Popular Categories</h2>
            <p className="text-xl text-slate-600">Explore our most in-demand skill categories</p>
          </div>

{/* Update categories grid */}
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
  {categories.map((category, index) => (
    <div
      key={index}
      onClick={() => router.push(`/courses/${category.slug}`)}
      className="bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 rounded-2xl hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{category.name}</h3>
      <p className="text-sm sm:text-base text-slate-600">{category.count} courses</p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Featured Courses</h2>
            <p className="text-xl text-slate-600">Hand-picked courses from our expert instructors</p>
          </div>

          {/* Update featured courses grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
              >
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.level === "Beginner"
                          ? "bg-green-100 text-green-800"
                          : course.level === "Intermediate"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {course.level}
                    </span>
                    <span className="text-lg font-bold text-blue-700">{course.price}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{course.description}</p>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current" />
                      <span className="ml-1 text-slate-600">{course.rating}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      <span className="ml-1 text-slate-600">{course.students}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-slate-400" />
                      <span className="ml-1 text-slate-600">{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {course.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-coral-100 text-coral-800 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {course.skills.length > 2 && (
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        +{course.skills.length - 2} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleEnrollNow(course.id)}
                    className="w-full bg-gradient-to-r from-blue-700 to-coral-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Learning Paths</h2>
            <p className="text-xl text-slate-600">Structured learning journeys to achieve your career goals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{path.title}</h3>
                <p className="text-slate-600 mb-6">{path.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold">{path.courses}</span> courses
                  </div>
                  <div className="text-sm text-slate-600">
                    <span className="font-semibold">{path.duration}</span> duration
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {path.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-700 to-coral-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Editor Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Learn by Doing</h2>
            <p className="text-xl text-slate-600">
              Practice coding with our interactive editor - just like the real thing
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-slate-400 text-sm">Interactive Code Editor</span>
            </div>
            <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">// Try our interactive coding environment</div>
              <div className="text-blue-400">
                function <span className="text-yellow-400">welcomeToDevVoltz</span>() {"{"}
              </div>
              <div className="text-white ml-4">
                console.log(<span className="text-green-300">"Welcome to DevVoltz E-Learning!"</span>);
              </div>
              <div className="text-white ml-4">
                return <span className="text-green-300">"Start your coding journey today!"</span>;
              </div>
              <div className="text-blue-400">{"}"}</div>
              <div className="mt-4 text-slate-400">// Output:</div>
              <div className="text-green-300">Welcome to DevVoltz E-Learning!</div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                Try Interactive Editor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Learning?</h2>
          <p className="text-xl text-coral-100 mb-8">
            Join thousands of students who are already building their tech careers with DevVoltz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartLearning}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Start Learning Today
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Talk to an Advisor
            </Link>
          </div>
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
              <p className="text-slate-400">
                Empowering Africa's tech future through quality education and practical skills.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Courses</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DevOps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Student Success
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technical Support
                  </a>
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
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 DevVoltz. All rights reserved. Made with ❤️ in Addis Ababa & Dubai</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

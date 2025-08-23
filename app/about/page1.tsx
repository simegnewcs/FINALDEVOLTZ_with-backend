import { Users, Globe, Heart, Zap, Target, MapPin, Calendar, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Dawit Mekonnen",
      role: "CEO & Co-Founder",
      bio: "Former software engineer at Microsoft with 10+ years of experience in tech leadership and education.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Hanan Al-Zahra",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in scalable systems and AI. Passionate about tech education in emerging markets.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Samuel Tadesse",
      role: "Head of Education",
      bio: "Former university professor and curriculum designer with expertise in modern web development technologies.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
    {
      name: "Fatima Hassan",
      role: "Head of Operations",
      bio: "Business operations expert with experience scaling tech companies across Africa and the Middle East.",
      image: "/placeholder.svg?height=300&width=300",
      linkedin: "#",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, from our courses to our software solutions.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe in empowering individuals with the skills and knowledge to transform their careers and lives.",
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality tech education accessible to everyone, regardless of their background or location.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community of learners, mentors, and professionals across Africa and beyond.",
    },
  ]

  const milestones = [
    {
      year: "2022",
      title: "DevVoltz Founded",
      description: "Started in Addis Ababa with a vision to democratize tech education in Ethiopia",
    },
    {
      year: "2023",
      title: "1000+ Students",
      description: "Reached our first milestone of 1000 students across our e-learning platform",
    },
    {
      year: "2023",
      title: "Freelance Marketplace Launch",
      description: "Launched our freelance platform connecting Ethiopian developers with global opportunities",
    },
    {
      year: "2024",
      title: "Dubai Expansion",
      description: "Opened our Dubai office to serve the Middle East market and attract international talent",
    },
    {
      year: "2024",
      title: "Bootcamp Program",
      description: "Launched intensive bootcamp programs with 95% job placement rate",
    },
  ]

  const offices = [
    {
      city: "Addis Ababa",
      country: "Ethiopia",
      address: "Bole Road, Atlas Building, 5th Floor",
      description: "Our headquarters and main development center",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "Dubai Internet City, Building 3, Office 201",
      description: "Middle East operations and international partnerships",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>
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
              <Link href="/about" className="text-blue-700 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-slate-600 hover:text-coral-500 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              About
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                DevVoltz
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              We're on a mission to bridge the tech skills gap in Africa and create opportunities for the next
              generation of developers and entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To democratize access to quality tech education and create sustainable economic opportunities for
                African talent while connecting them to global markets.
              </p>
              <p className="text-slate-600">
                We believe that with the right skills and opportunities, African developers can compete on the global
                stage and drive innovation across the continent.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 mb-6">
                To become Africa's leading tech education and freelance platform, fostering a thriving ecosystem of
                skilled developers and innovative solutions.
              </p>
              <p className="text-slate-600">
                We envision a future where geographical boundaries don't limit talent, and African developers are
                recognized as world-class professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Journey</h2>
            <p className="text-xl text-slate-600">
              Key milestones in our mission to transform tech education in Africa
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-2">
                    <span className="text-2xl font-bold text-blue-700">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-slate-900">{milestone.title}</h3>
                  </div>
                  <p className="text-slate-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to transforming tech education in Africa
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 text-center mb-2">{member.name}</h3>
                <p className="text-blue-700 font-medium text-center mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-slate-600 text-xs sm:text-sm text-center mb-4 line-clamp-4">{member.bio}</p>
                <div className="text-center">
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-blue-700 hover:text-coral-500 transition-colors text-sm"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Offices</h2>
            <p className="text-xl text-slate-600">Connecting talent across Africa and the Middle East</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-700 mr-3 flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {office.city}, {office.country}
                  </h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm sm:text-base">{office.address}</p>
                <p className="text-slate-700 font-medium text-sm sm:text-base">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-coral-100 mb-8">Be part of the movement transforming tech education in Africa</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Get In Touch
            </Link>
            <Link
              href="/elearning"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Start Learning
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
            <p>&copy; 2024 DevVoltz. All rights reserved. Made with ❤️ in Addis Ababa & Dubai</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

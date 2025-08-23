"use client"

import { useState } from "react"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Filter,
  Briefcase,
  Users,
  Award,
  Zap,
  MessageCircle,
  Heart,
  Eye,
  X,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function FreelancePage() {
  const [activeTab, setActiveTab] = useState("projects")
  const [searchQuery, setSearchQuery] = useState("")
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    skills: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  const handlePostProject = () => {
    setShowProjectModal(true)
  }

  const handleApplyNow = (projectId: string) => {
    router.push(`/freelance/project/${projectId}/apply`)
  }

  const handleHireNow = (freelancerId: string) => {
    router.push(`/freelance/freelancer/${freelancerId}/hire`)
  }

  const handleStartChat = (userId: string) => {
    router.push(`/freelance/chat/${userId}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.title.trim()) newErrors.title = "Project title is required"
    if (!formData.description.trim()) newErrors.description = "Description is required"
    if (!formData.budget.trim()) newErrors.budget = "Budget is required"
    if (!formData.deadline) newErrors.deadline = "Deadline is required"
    if (!formData.skills.trim()) newErrors.skills = "Skills are required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically send the data to your backend API
      console.log("Project submitted:", formData)
      
      // Simulate API call success
      setTimeout(() => {
        alert("Project posted successfully!")
        setShowProjectModal(false)
        setFormData({
          title: "",
          description: "",
          budget: "",
          deadline: "",
          skills: "",
        })
      }, 500)
    }
  }

  const handleCancel = () => {
    setShowProjectModal(false)
    setFormData({
      title: "",
      description: "",
      budget: "",
      deadline: "",
      skills: "",
    })
    setErrors({})
  }

  const projects = [
    {
      id: "web-app-development",
      title: "E-commerce Web Application Development",
      description:
        "Looking for an experienced full-stack developer to build a modern e-commerce platform with React and Node.js. Must include payment integration and admin dashboard.",
      budget: "$2,000 - $5,000",
      duration: "2-3 months",
      skills: ["React", "Node.js", "MongoDB", "Payment Integration"],
      client: "TechStart Solutions",
      location: "Remote",
      posted: "2 days ago",
      proposals: 12,
      rating: 4.8,
      verified: true,
    },
    {
      id: "mobile-app-design",
      title: "Mobile App UI/UX Design",
      description:
        "Need a talented designer to create modern, user-friendly mobile app designs for iOS and Android. Experience with fintech apps preferred.",
      budget: "$800 - $1,500",
      duration: "3-4 weeks",
      skills: ["UI/UX Design", "Figma", "Mobile Design", "Prototyping"],
      client: "FinanceFlow",
      location: "Dubai, UAE",
      posted: "1 day ago",
      proposals: 8,
      rating: 4.9,
      verified: true,
    },
    {
      id: "wordpress-website",
      title: "WordPress Website Development",
      description:
        "Small business needs a professional WordPress website with custom theme, SEO optimization, and content management system.",
      budget: "$500 - $1,000",
      duration: "2-3 weeks",
      skills: ["WordPress", "PHP", "CSS", "SEO"],
      client: "Local Business Hub",
      location: "Addis Ababa, Ethiopia",
      posted: "3 days ago",
      proposals: 15,
      rating: 4.6,
      verified: false,
    },
    {
      id: "data-analysis",
      title: "Data Analysis and Visualization",
      description:
        "Seeking a data analyst to process sales data, create insights, and build interactive dashboards using Python and visualization tools.",
      budget: "$1,200 - $2,000",
      duration: "1-2 months",
      skills: ["Python", "Data Analysis", "Tableau", "SQL"],
      client: "DataDriven Corp",
      location: "Remote",
      posted: "5 days ago",
      proposals: 6,
      rating: 4.7,
      verified: true,
    },
  ]

  const freelancers = [
    {
      id: "sarah-johnson",
      name: "Sarah Johnson",
      title: "Full Stack Developer",
      rating: 4.9,
      reviews: 127,
      hourlyRate: "$45/hr",
      skills: ["React", "Node.js", "Python", "AWS"],
      location: "Dubai, UAE",
      avatar: "/placeholder.svg?height=80&width=80",
      description:
        "Experienced full-stack developer with 5+ years building scalable web applications. Specialized in React, Node.js, and cloud deployment.",
      completedProjects: 89,
      responseTime: "1 hour",
      languages: ["English", "Arabic"],
      availability: "Available",
    },
    {
      id: "ahmed-hassan",
      name: "Ahmed Hassan",
      title: "Mobile App Developer",
      rating: 4.8,
      reviews: 94,
      hourlyRate: "$40/hr",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      location: "Cairo, Egypt",
      avatar: "/placeholder.svg?height=80&width=80",
      description:
        "Mobile app specialist with expertise in cross-platform development. Built 50+ apps for startups and enterprises.",
      completedProjects: 67,
      responseTime: "2 hours",
      languages: ["English", "Arabic"],
      availability: "Available",
    },
    {
      id: "meron-tadesse",
      name: "Meron Tadesse",
      title: "UI/UX Designer",
      rating: 4.9,
      reviews: 156,
      hourlyRate: "$35/hr",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      location: "Addis Ababa, Ethiopia",
      avatar: "/placeholder.svg?height=80&width=80",
      description:
        "Creative designer focused on user-centered design. Helped 100+ companies improve their digital experiences.",
      completedProjects: 112,
      responseTime: "30 minutes",
      languages: ["English", "Amharic"],
      availability: "Busy",
    },
    {
      id: "david-wilson",
      name: "David Wilson",
      title: "Data Scientist",
      rating: 4.7,
      reviews: 73,
      hourlyRate: "$50/hr",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      location: "Remote",
      avatar: "/placeholder.svg?height=80&width=80",
      description:
        "Data scientist with expertise in machine learning and business intelligence. Delivered insights for Fortune 500 companies.",
      completedProjects: 45,
      responseTime: "3 hours",
      languages: ["English"],
      availability: "Available",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Active Freelancers" },
    { number: "5,000+", label: "Projects Completed" },
    { number: "$2M+", label: "Total Earnings" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Post Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center rounded-t-xl">
              <h2 className="text-xl font-bold text-slate-900">Post a New Project</h2>
              <button
                onClick={handleCancel}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.title ? "border-red-500" : "border-slate-300"
                  }`}
                  placeholder="e.g., E-commerce Website Development"
                />
                {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.description ? "border-red-500" : "border-slate-300"
                  }`}
                  placeholder="Describe your project in detail..."
                />
                {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">
                    Budget ($) *
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                      errors.budget ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="e.g., $1000-$2000"
                  />
                  {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget}</p>}
                </div>
                
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-slate-700 mb-1">
                    Deadline *
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                      errors.deadline ? "border-red-500" : "border-slate-300"
                    }`}
                  />
                  {errors.deadline && <p className="mt-1 text-sm text-red-500">{errors.deadline}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-slate-700 mb-1">
                  Required Skills *
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.skills ? "border-red-500" : "border-slate-300"
                  }`}
                  placeholder="e.g., React, Node.js, MongoDB"
                />
                {errors.skills && <p className="mt-1 text-sm text-red-500">{errors.skills}</p>}
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-700 to-coral-500 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Post Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                <img src="../logodvwhitey.png" alt="" className="w-50 h-15  border-rounded " style={{ borderRadius: "50%" }} // ✅ correct
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/elearning" className="text-slate-600 hover:text-coral-500 transition-colors">
                E-Learning
              </Link>
              <Link href="/freelance" className="text-blue-700 font-medium">
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
                onClick={handlePostProject}
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
              >
                Post Project
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
              Connect with
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Top African Talent
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Find skilled freelancers or discover your next opportunity. Our marketplace connects Ethiopian developers
              with global clients for mutual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handlePostProject}
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
              >
                Post a Project
              </button>
              <button
                onClick={() => setActiveTab("freelancers")}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-coral-500 transition-all"
              >
                Find Freelancers
              </button>
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

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
            <button className="flex items-center justify-center px-6 py-3 border border-slate-200 rounded-lg hover:border-coral-500 transition-colors">
              <Filter className="w-5 h-5 mr-2" />
              Filters
            </button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-8 bg-slate-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === "projects" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab("freelancers")}
              className={`px-6 py-2 rounded-md font-medium transition-all ${
                activeTab === "freelancers" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Freelancers ({freelancers.length})
            </button>
          </div>

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-2 gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">{project.title}</h3>
                        {project.verified && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full w-fit">
                            Verified Client
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600 mb-4 text-sm sm:text-base">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-1 bg-coral-100 text-coral-800 text-xs sm:text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 lg:flex lg:items-center lg:space-x-6 gap-2 lg:gap-0 text-xs sm:text-sm text-slate-600">
                        <div className="flex items-center">
                          <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{project.budget}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{project.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{project.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{project.proposals} proposals</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start lg:text-right gap-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                          <span className="text-sm text-slate-600">{project.rating}</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-2 lg:mb-4">by {project.client}</p>
                      </div>
                      <button
                        onClick={() => handleApplyNow(project.id)}
                        className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base whitespace-nowrap"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-4 border-t border-slate-100 gap-2">
                    <span className="text-sm text-slate-500">Posted {project.posted}</span>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-slate-600 hover:text-coral-500 transition-colors text-sm">
                        <Heart className="w-4 h-4 mr-1" />
                        Save
                      </button>
                      <button className="flex items-center text-slate-600 hover:text-coral-500 transition-colors text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Freelancers Tab */}
          {activeTab === "freelancers" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {freelancers.map((freelancer, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <img
                      src={freelancer.avatar || "/placeholder.svg"}
                      alt={freelancer.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 truncate">{freelancer.name}</h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full w-fit ${
                            freelancer.availability === "Available"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {freelancer.availability}
                        </span>
                      </div>
                      <p className="text-blue-700 font-medium mb-2 text-sm sm:text-base">{freelancer.title}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm text-slate-600 mb-2 gap-1">
                        <div className="flex items-center">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-current mr-1" />
                          {freelancer.rating} ({freelancer.reviews} reviews)
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                          <span className="truncate">{freelancer.location}</span>
                        </div>
                      </div>
                      <p className="text-lg font-bold text-slate-900">{freelancer.hourlyRate}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 text-sm sm:text-base line-clamp-3">{freelancer.description}</p>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {freelancer.skills.map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
                    <div>
                      <span className="text-slate-600">Projects:</span>
                      <span className="font-semibold ml-1">{freelancer.completedProjects}</span>
                    </div>
                    <div>
                      <span className="text-slate-600">Response:</span>
                      <span className="font-semibold ml-1">{freelancer.responseTime}</span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleHireNow(freelancer.id)}
                      className="flex-1 bg-gradient-to-r from-blue-700 to-coral-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                    >
                      Hire Now
                    </button>
                    <button
                      onClick={() => handleStartChat(freelancer.id)}
                      className="flex items-center justify-center px-3 sm:px-4 py-2 border border-slate-300 rounded-lg hover:border-coral-500 hover:text-coral-500 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h2>
            <p className="text-xl text-slate-600">Simple steps to connect and collaborate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Post Your Project</h3>
              <p className="text-slate-600">
                Describe your project requirements, budget, and timeline. Our platform will match you with qualified
                freelancers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Review Proposals</h3>
              <p className="text-slate-600">
                Receive proposals from talented freelancers. Review their profiles, portfolios, and ratings to make the
                best choice.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-coral-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Get Results</h3>
              <p className="text-slate-600">
                Work with your chosen freelancer through our secure platform. Pay only when you're satisfied with the
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-coral-100 mb-8">Join thousands of successful projects completed on our platform</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePostProject}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Post Your First Project
            </button>
            <button
              onClick={() => setActiveTab("freelancers")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Browse Freelancers
            </button>
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
                Connecting African talent with global opportunities through our freelance marketplace.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Clients</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Post a Project
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Freelancers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Freelancers</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Freelancer Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Trust & Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
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

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
      `}</style>
    </div>
  )
}
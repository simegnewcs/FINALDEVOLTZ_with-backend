// app/freelance/page.tsx - FULLY UPDATED FOR NEXT.JS API
"use client"

import { useState, useEffect } from "react"
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
  UserPlus,
  UserCheck,
  SlidersHorizontal,
  Check,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

// Define types for our data
interface Project {
  id: number
  title: string
  description: string
  budget: string
  deadline: string
  skills: string
  duration: string
  client_name: string
  location: string
  proposals: number
  rating: number
  verified: boolean
  status: string
  created_at: string
}

interface Freelancer {
  id: number
  name: string
  title: string
  rating: number
  reviews: number
  hourly_rate: string
  skills: string
  location: string
  avatar: string
  description: string
  completed_projects: number
  response_time: string
  languages: string
  availability: string
}

// User type definition
interface User {
  id: number
  name: string
  email: string
  role: 'freelancer' | 'client' | null
  isLoggedIn: boolean
}

export default function FreelancePage() {
  const [activeTab, setActiveTab] = useState("projects")
  const [searchQuery, setSearchQuery] = useState("")
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [showRoleSelectionModal, setShowRoleSelectionModal] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
    skills: "",
    duration: "",
    location: "Remote"
  })
  const [proposalData, setProposalData] = useState({
    proposal: "",
    price: ""
  })
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "" as 'freelancer' | 'client' | ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [projects, setProjects] = useState<Project[]>([])
  const [freelancers, setFreelancers] = useState<Freelancer[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    role: null,
    isLoggedIn: false
  })
  const [showFilterSidebar, setShowFilterSidebar] = useState(false)
  const [filterOptions, setFilterOptions] = useState({
    minBudget: "",
    maxBudget: "",
    skills: "",
    timePosted: "",
    sortBy: "newest",
    minRate: "",
    maxRate: "",
    availability: "",
    skillLevel: "",
  })

  const router = useRouter()

  // Check if user is logged in (from localStorage)
  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  // Fetch data based on active tab - UPDATED FOR NEXT.JS API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        if (activeTab === "projects") {
          const response = await fetch("/api/projects")
          if (!response.ok) throw new Error("Failed to fetch projects")
          const data = await response.json()
          setProjects(data.projects || data)
        } else {
          const response = await fetch("/api/users/freelancers")
          if (!response.ok) throw new Error("Failed to fetch freelancers")
          const data = await response.json()
          setFreelancers(data.freelancers || data)
        }
      } catch (err) {
        setError("Failed to load data. Please try again later.")
        console.error("Fetch error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [activeTab])

  // Show notification message
  const showNotificationMessage = (message: string) => {
    setNotificationMessage(message)
    setShowNotification(true)
    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  const handlePostProject = () => {
    if (!user.isLoggedIn) {
      setShowRoleSelectionModal(true)
      return
    }
    
    if (user.role === 'client') {
      setShowProjectModal(true)
    } else if (user.role === 'freelancer') {
      showNotificationMessage("You are not allowed to post a project.")
    } else {
      setShowRoleSelectionModal(true)
    }
  }

  const handleApplyNow = (projectId: number) => {
    if (!user.isLoggedIn) {
      setShowRoleSelectionModal(true)
      return
    }
    
    if (user.role === 'freelancer') {
      setSelectedProjectId(projectId)
      setShowApplyModal(true)
    } else if (user.role === 'client') {
      showNotificationMessage("This action is allowed only for Freelancers.")
    } else {
      setShowRoleSelectionModal(true)
    }
  }

  // Enhanced Hire Now function - UPDATED FOR NEXT.JS API
  const handleHireNow = async (freelancerId: number) => {
    if (!user.isLoggedIn) {
      setShowRoleSelectionModal(true)
      return
    }
    
    if (user.role === 'client') {
      try {
        const projectId = 1;
        
        const response = await fetch(`/api/projects/${projectId}/hire`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            freelancerId: freelancerId,
          }),
        })

        if (response.ok) {
          showNotificationMessage("Freelancer hired successfully! They have been notified.")
        } else {
          const data = await response.json()
          showNotificationMessage(data.message || "Error hiring freelancer")
        }
      } catch (err) {
        console.error("Hire error:", err)
        showNotificationMessage("Server error. Please try again later.")
      }
    } else if (user.role === 'freelancer') {
      showNotificationMessage("Not allowed for freelancers. Only clients can hire.")
    } else {
      setShowRoleSelectionModal(true)
    }
  }

  const handleStartChat = (userId: number) => {
    router.push(`/freelance/chat/${userId}`)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleProposalInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target
    setProposalData(prev => ({ ...prev, [name]: value }))
  }

  const handleRegistrationInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setRegistrationData(prev => ({ ...prev, [name]: value }))
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

  const validateRegistrationForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!registrationData.name.trim()) newErrors.name = "Name is required"
    if (!registrationData.email.trim()) newErrors.email = "Email is required"
    if (!registrationData.password.trim()) newErrors.password = "Password is required"
    if (registrationData.password !== registrationData.confirmPassword) newErrors.confirmPassword = "Passwords do not match"
    if (!registrationData.role) newErrors.role = "Please select a role"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle Submit Project - UPDATED FOR NEXT.JS API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      try {
        const response = await fetch("/api/projects", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            client_id: user.id,
          }),
        })

        const data = await response.json()
        if (response.ok) {
          showNotificationMessage("Project posted successfully!")
          setShowProjectModal(false)
          setFormData({ 
            title: "", 
            description: "", 
            budget: "", 
            deadline: "", 
            skills: "",
            duration: "",
            location: "Remote"
          })
          
          const projectsResponse = await fetch("/api/projects")
          if (projectsResponse.ok) {
            const projectsData = await projectsResponse.json()
            setProjects(projectsData.projects || projectsData)
          }
        } else {
          showNotificationMessage(data.message || "Error posting project")
        }
      } catch (err) {
        console.error("Error:", err)
        showNotificationMessage("Server error. Please try again later.")
      }
    }
  }

  // Handle Submit Application - UPDATED FOR NEXT.JS API
  const handleSubmitApplication = async () => {
    if (!selectedProjectId) return
    
    try {
      const response = await fetch(`/api/projects/${selectedProjectId}/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          project_id: selectedProjectId,
          user_id: user.id,
          proposal: proposalData.proposal,
          price: proposalData.price
        }),
      })

      if (response.ok) {
        showNotificationMessage("Application submitted successfully!")
        setShowApplyModal(false)
        setProposalData({ proposal: "", price: "" })
        
        const projectsResponse = await fetch("/api/projects")
        if (projectsResponse.ok) {
          const data = await projectsResponse.json()
          setProjects(data.projects || data)
        }
      } else {
        const data = await response.json()
        showNotificationMessage(data.message || "Error applying to project")
      }
    } catch (err) {
      console.error("Application error:", err)
      showNotificationMessage("Server error. Please try again later.")
    }
  }

  const handleRegister = async (role: 'freelancer' | 'client') => {
    setRegistrationData(prev => ({ ...prev, role }))
    
    if (validateRegistrationForm()) {
      try {
        const newUser = {
          id: Math.floor(Math.random() * 1000),
          name: registrationData.name,
          email: registrationData.email,
          role: role,
          isLoggedIn: true
        }
        
        setUser(newUser)
        localStorage.setItem('user', JSON.stringify(newUser))
        
        showNotificationMessage(`Successfully registered as ${role}!`)
        setShowRegistrationModal(false)
        setShowRoleSelectionModal(false)
        setRegistrationData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          role: ""
        })
        
        if (role === 'client') {
          setShowProjectModal(true)
        }
      } catch (err) {
        console.error("Registration error:", err)
        showNotificationMessage("Registration failed. Please try again.")
      }
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
      duration: "",
      location: "Remote"
    })
    setErrors({})
  }

  const handleCancelApplication = () => {
    setShowApplyModal(false)
    setProposalData({ proposal: "", price: "" })
    setSelectedProjectId(null)
  }

  const handleCancelRegistration = () => {
    setShowRegistrationModal(false)
    setRegistrationData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: ""
    })
    setErrors({})
  }

  // Apply filters - UPDATED FOR NEXT.JS API
  const applyFilters = async () => {
    setLoading(true)
    try {
      let url = ""
      const params = new URLSearchParams()
      
      if (activeTab === "projects") {
        url = "/api/filter/projects"
        if (filterOptions.minBudget) params.append("minBudget", filterOptions.minBudget)
        if (filterOptions.maxBudget) params.append("maxBudget", filterOptions.maxBudget)
        if (filterOptions.skills) params.append("skills", filterOptions.skills)
        if (filterOptions.timePosted) params.append("timePosted", filterOptions.timePosted)
        if (filterOptions.sortBy) params.append("sortBy", filterOptions.sortBy)
      } else {
        url = "/api/filter/freelancers"
        if (filterOptions.minRate) params.append("minRate", filterOptions.minRate)
        if (filterOptions.maxRate) params.append("maxRate", filterOptions.maxRate)
        if (filterOptions.skills) params.append("skills", filterOptions.skills)
        if (filterOptions.availability) params.append("availability", filterOptions.availability)
        if (filterOptions.skillLevel) params.append("skillLevel", filterOptions.skillLevel)
        if (filterOptions.sortBy) params.append("sortBy", filterOptions.sortBy)
      }
      
      const queryString = params.toString()
      const fullUrl = queryString ? `${url}?${queryString}` : url
      
      const response = await fetch(fullUrl)
      if (!response.ok) throw new Error("Failed to fetch filtered data")
      
      const data = await response.json()
      
      if (activeTab === "projects") {
        setProjects(data.projects || data)
      } else {
        setFreelancers(data.freelancers || data)
      }
      
      setShowFilterSidebar(false)
    } catch (err) {
      setError("Failed to apply filters. Please try again.")
      console.error("Filter error:", err)
    } finally {
      setLoading(false)
    }
  }

  // Reset filters - UPDATED FOR NEXT.JS API
  const resetFilters = () => {
    setFilterOptions({
      minBudget: "",
      maxBudget: "",
      skills: "",
      timePosted: "",
      sortBy: "newest",
      minRate: "",
      maxRate: "",
      availability: "",
      skillLevel: "",
    })
    
    const fetchData = async () => {
      setLoading(true)
      try {
        if (activeTab === "projects") {
          const response = await fetch("/api/projects")
          if (!response.ok) throw new Error("Failed to fetch projects")
          const data = await response.json()
          setProjects(data.projects || data)
        } else {
          const response = await fetch("/api/users/freelancers")
          if (!response.ok) throw new Error("Failed to fetch freelancers")
          const data = await response.json()
          setFreelancers(data.freelancers || data)
        }
      } catch (err) {
        setError("Failed to load data. Please try again later.")
        console.error("Fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    
    fetchData()
  }

  // Format date to relative time (e.g., "2 days ago")
  const formatRelativeTime = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInMs = now.getTime() - date.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
    
    if (diffInDays === 0) return "Today"
    if (diffInDays === 1) return "Yesterday"
    if (diffInDays < 7) return `${diffInDays} days ago`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
    return `${Math.floor(diffInDays / 30)} months ago`
  }

  // Filter projects and freelancers based on search query
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.skills.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const filteredFreelancers = freelancers.filter(freelancer => 
    freelancer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.skills.toLowerCase().includes(searchQuery.toLowerCase()) ||
    freelancer.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const stats = [
    { number: "1000+", label: "Active Freelancers" },
    { number: "500+", label: "Projects Completed" },
    { number: "$2M+", label: "Total Earnings" },
    { number: "98%", label: "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fadeIn">
          {notificationMessage}
        </div>
      )}

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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-slate-700 mb-1">
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g., 2-3 weeks"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="Remote">Remote</option>
                    <option value="Addis Ababa, Ethiopia">Addis Ababa, Ethiopia</option>
                    <option value="Dubai, UAE">Dubai, UAE</option>
                    <option value="Cairo, Egypt">Cairo, Egypt</option>
                    <option value="Other">Other</option>
                  </select>
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

      {/* Apply to Project Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center rounded-t-xl">
              <h2 className="text-xl font-bold text-slate-900">Apply to Project</h2>
              <button
                onClick={handleCancelApplication}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label htmlFor="proposal" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Proposal *
                </label>
                <textarea
                  id="proposal"
                  name="proposal"
                  value={proposalData.proposal}
                  onChange={handleProposalInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Describe why you're the best fit for this project..."
                />
              </div>
              
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Proposed Price ($) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={proposalData.price}
                  onChange={handleProposalInputChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="e.g., 500"
                />
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancelApplication}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmitApplication}
                  className="px-4 py-2 bg-gradient-to-r from-blue-700 to-coral-500 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Submit Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center rounded-t-xl">
              <h2 className="text-xl font-bold text-slate-900">Register as {registrationData.role === 'freelancer' ? 'Freelancer' : 'Client'}</h2>
              <button
                onClick={handleCancelRegistration}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form className="p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registrationData.name}
                  onChange={handleRegistrationInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.name ? "border-red-500" : "border-slate-300"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationInputChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                    errors.email ? "border-red-500" : "border-slate-300"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={registrationData.password}
                    onChange={handleRegistrationInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                      errors.password ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="••••••••"
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                </div>
                
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={registrationData.confirmPassword}
                    onChange={handleRegistrationInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                      errors.confirmPassword ? "border-red-500" : "border-slate-300"
                    }`}
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && <p className="mt-1 text-sm text-red-500">{errors.confirmPassword}</p>}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancelRegistration}
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleRegister(registrationData.role as 'freelancer' | 'client')}
                  className="px-4 py-2 bg-gradient-to-r from-blue-700 to-coral-500 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Role Selection Modal */}
      {showRoleSelectionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl max-w-md w-full animate-scaleIn">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-xl font-bold text-slate-900">Join DevVoltz Freelance</h2>
              <button
                onClick={() => setShowRoleSelectionModal(false)}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-slate-600 mb-6 text-center">Please select your role to continue</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => {
                    setRegistrationData(prev => ({ ...prev, role: 'freelancer' }))
                    setShowRegistrationModal(true)
                  }}
                  className="flex flex-col items-center p-6 border border-slate-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <UserCheck className="w-12 h-12 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Freelancer</h3>
                  <p className="text-sm text-slate-600 text-center">I want to find work and offer my services</p>
                </button>
                
                <button
                  onClick={() => {
                    setRegistrationData(prev => ({ ...prev, role: 'client' }))
                    setShowRegistrationModal(true)
                  }}
                  className="flex flex-col items-center p-6 border border-slate-200 rounded-lg hover:border-coral-500 hover:shadow-md transition-all"
                >
                  <UserPlus className="w-12 h-12 text-coral-600 mb-3" />
                  <h3 className="font-semibold text-slate-900 mb-2">Client</h3>
                  <p className="text-sm text-slate-600 text-center">I want to hire freelancers for my projects</p>
                </button>
              </div>
              
              <div className="text-center">
                <p className="text-slate-600 text-sm">
                  Already have an account?{" "}
                  <button className="text-blue-600 hover:underline">Sign In</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Sidebar */}
      {showFilterSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex z-50 animate-fadeIn">
          <div className="bg-white w-80 h-full overflow-y-auto animate-slideInRight">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-900">Filter Options</h2>
              <button
                onClick={() => setShowFilterSidebar(false)}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close filter"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-6">
              {activeTab === "projects" ? (
                <>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Budget Range ($)</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Min</label>
                        <input
                          type="number"
                          value={filterOptions.minBudget}
                          onChange={(e) => setFilterOptions({...filterOptions, minBudget: e.target.value})}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Max</label>
                        <input
                          type="number"
                          value={filterOptions.maxBudget}
                          onChange={(e) => setFilterOptions({...filterOptions, maxBudget: e.target.value})}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="10000"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Skills</h3>
                    <input
                      type="text"
                      value={filterOptions.skills}
                      onChange={(e) => setFilterOptions({...filterOptions, skills: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="React, Node.js, Design"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Time Posted</h3>
                    <select
                      value={filterOptions.timePosted}
                      onChange={(e) => setFilterOptions({...filterOptions, timePosted: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Any time</option>
                      <option value="24h">Last 24 hours</option>
                      <option value="3d">Last 3 days</option>
                      <option value="7d">Last week</option>
                      <option value="30d">Last month</option>
                    </select>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Hourly Rate ($)</h3>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Min</label>
                        <input
                          type="number"
                          value={filterOptions.minRate}
                          onChange={(e) => setFilterOptions({...filterOptions, minRate: e.target.value})}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-600 mb-1">Max</label>
                        <input
                          type="number"
                          value={filterOptions.maxBudget}
                          onChange={(e) => setFilterOptions({...filterOptions, maxRate: e.target.value})}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                          placeholder="200"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Skills</h3>
                    <input
                      type="text"
                      value={filterOptions.skills}
                      onChange={(e) => setFilterOptions({...filterOptions, skills: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="React, Node.js, Design"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Availability</h3>
                    <select
                      value={filterOptions.availability}
                      onChange={(e) => setFilterOptions({...filterOptions, availability: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Any availability</option>
                      <option value="Available">Available</option>
                      <option value="Busy">Busy</option>
                    </select>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Skill Level</h3>
                    <select
                      value={filterOptions.skillLevel}
                      onChange={(e) => setFilterOptions({...filterOptions, skillLevel: e.target.value})}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    >
                      <option value="">Any level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </>
              )}
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Sort By</h3>
                <select
                  value={filterOptions.sortBy}
                  onChange={(e) => setFilterOptions({...filterOptions, sortBy: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  {activeTab === "projects" ? (
                    <>
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="budget_high">Budget: High to Low</option>
                      <option value="budget_low">Budget: Low to High</option>
                    </>
                  ) : (
                    <>
                      <option value="rating_high">Rating: High to Low</option>
                      <option value="rating_low">Rating: Low to High</option>
                      <option value="rate_high">Rate: High to Low</option>
                      <option value="rate_low">Rate: Low to High</option>
                      <option value="projects_high">Projects: High to Low</option>
                    </>
                  )}
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <button
                  onClick={resetFilters}
                  className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={applyFilters}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-700 to-coral-500 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="">
                <img src="../logobest.jpg" alt="" className="w-30 h-12  border-rounded " style={{ borderRadius: "50%" }} // ✅ correct
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
              {user.isLoggedIn ? (
                <div className="flex items-center space-x-4">
                  <span className="text-slate-700">Hi, {user.name}</span>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user')
                      setUser({ id: 0, name: "", email: "", role: null, isLoggedIn: false })
                      showNotificationMessage("Logged out successfully!")
                    }}
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowRoleSelectionModal(true)}
                  className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all"
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Welcome to DevVoltz Freelance Page
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
              {!user.isLoggedIn && (
                <button
                  onClick={() => setShowRoleSelectionModal(true)}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:text-white transition-all"
                >
                  Register Now
                </button>
              )}
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
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            <button 
              onClick={() => setShowFilterSidebar(true)}
              className="flex items-center justify-center px-6 py-3 border border-slate-200 rounded-lg hover:border-coral-500 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
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

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
              <p className="mt-4 text-slate-600">Loading {activeTab}...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-700">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 text-red-700 underline"
              >
                Try again
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {!loading && !error && activeTab === "projects" && (
            <div className="space-y-6">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-slate-600">No projects found. Be the first to post one!</p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
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
                          {project.skills.split(',').map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 sm:px-3 py-1 bg-coral-100 text-coral-800 text-xs sm:text-sm rounded-full"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 lg:flex lg:items-center lg:space-x-6 gap-2 lg:gap-0 text-xs sm:text-sm text-slate-600">
                          <div className="flex items-center">
                            <DollarSign className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="truncate">${project.budget}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span className="truncate">{project.duration || 'Flexible'}</span>
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
                            <span className="text-sm text-slate-600">{project.rating || 'New'}</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-2 lg:mb-4">by {project.client_name}</p>
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
                      <span className="text-sm text-slate-500">Posted {formatRelativeTime(project.created_at)}</span>
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
                ))
              )}
            </div>
          )}

          {/* Freelancers Tab */}
          {!loading && !error && activeTab === "freelancers" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFreelancers.length === 0 ? (
                <div className="text-center py-12 col-span-full">
                  <p className="text-slate-600">No freelancers found. Try a different search term.</p>
                </div>
              ) : (
                filteredFreelancers.map((freelancer) => (
                  <div
                    key={freelancer.id}
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
                        <p className="text-lg font-bold text-slate-900">${freelancer.hourly_rate}/hr</p>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4 text-sm sm:text-base line-clamp-3">{freelancer.description}</p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                      {freelancer.skills.split(',').slice(0, 4).map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                          {skill.trim()}
                        </span>
                      ))}
                      {freelancer.skills.split(',').length > 4 && (
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                          +{freelancer.skills.split(',').length - 4}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs sm:text-sm">
                      <div>
                        <span className="text-slate-600">Projects:</span>
                        <span className="font-semibold ml-1">{freelancer.completed_projects}</span>
                      </div>
                      <div>
                        <span className="text-slate-600">Response:</span>
                        <span className="font-semibold ml-1">{freelancer.response_time}</span>
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
                ))
              )}
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
                <div className="">
                  <img src="../logobest.jpg" alt="" className="w-30 h-10  border-rounded " style={{ borderRadius: "50%" }} />
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
            <p>&copy; 2024 DevVoltz. All rights reserved. Made with ❤️ DevVoltz.</p>
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
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.2s ease-out;
        }
        .animate-slideInRight {
          animation: slideInRight 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"
import { 
  Users, 
  Award, 
  Zap, 
  Code, 
  Globe, 
  GraduationCap, 
  Briefcase,
  X,
  MapPin,
  Laptop,
  BookOpen,
  CreditCard,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function BootcampPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [selectedBootcamp, setSelectedBootcamp] = useState("")
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    // Bootcamp Information
    bootcampName: "",
    participationMode: "",
    
    // Personal Information
    fullName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phone: "",
    
    // Academic/Professional Info
    institution: "",
    fieldOfStudy: "",
    level: "",
    
    // In-Person Section
    address: "",
    city: "",
    country: "",
    
    // Online Section
    preferredPlatform: "",
    internetAvailability: "",
    
    // Bootcamp Details
    selectedCourse: "",
    priorExperience: "",
    expectations: "",
    
    // Payment Details
    paymentMethod: "",
    transactionReference: "",
    
    // Declaration
    agreeToTerms: false,
    digitalSignature: "",
    agreementDate: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const router = useRouter()

  // This ensures we only run client-specific code after hydration
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleApplyNow = (bootcampId: string) => {
    setSelectedBootcamp(bootcampId)
    setFormData(prev => ({ ...prev, bootcampName: bootcampId }))
    setShowRegistrationModal(true)
  }

  const handleDownloadCurriculum = (bootcampId: string) => {
    // Only run on client side
    if (isClient) {
      const link = document.createElement("a")
      link.href = `/curriculum-${bootcampId}.pdf`
      link.download = `DevVoltz-${bootcampId}-Curriculum.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  const handleContactInfo = () => {
    router.push("/contact")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined
    
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    // Required fields validation
    if (!formData.bootcampName) newErrors.bootcampName = "Bootcamp selection is required"
    if (!formData.participationMode) newErrors.participationMode = "Participation mode is required"
    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (!formData.institution) newErrors.institution = "Institution is required"
    if (!formData.fieldOfStudy) newErrors.fieldOfStudy = "Field of study is required"
    if (!formData.level) newErrors.level = "Level is required"
    
    // Conditional validation based on participation mode
    if (formData.participationMode === "in-person") {
      if (!formData.address) newErrors.address = "Address is required for in-person participation"
      if (!formData.city) newErrors.city = "City is required for in-person participation"
      if (!formData.country) newErrors.country = "Country is required for in-person participation"
    }
    
    if (formData.participationMode === "online") {
      if (!formData.preferredPlatform) newErrors.preferredPlatform = "Preferred platform is required for online participation"
      if (!formData.internetAvailability) newErrors.internetAvailability = "Internet availability information is required for online participation"
    }
    
    if (!formData.selectedCourse) newErrors.selectedCourse = "Course selection is required"
    if (!formData.priorExperience) newErrors.priorExperience = "Prior experience information is required"
    if (!formData.expectations) newErrors.expectations = "Expectations are required"
    if (!formData.paymentMethod) newErrors.paymentMethod = "Payment method is required"
    if (!formData.transactionReference) newErrors.transactionReference = "Transaction reference is required"
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms and conditions"
    if (!formData.digitalSignature) newErrors.digitalSignature = "Digital signature is required"
    if (!formData.agreementDate) newErrors.agreementDate = "Agreement date is required"
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you would typically send the data to your backend API
      console.log("Registration submitted:", formData)
      
      // Simulate API call success
      setTimeout(() => {
        alert("Your application has been submitted successfully!")
        setShowRegistrationModal(false)
        // Reset form data
        setFormData({
          bootcampName: "",
          participationMode: "",
          fullName: "",
          gender: "",
          dateOfBirth: "",
          email: "",
          phone: "",
          institution: "",
          fieldOfStudy: "",
          level: "",
          address: "",
          city: "",
          country: "",
          preferredPlatform: "",
          internetAvailability: "",
          selectedCourse: "",
          priorExperience: "",
          expectations: "",
          paymentMethod: "",
          transactionReference: "",
          agreeToTerms: false,
          digitalSignature: "",
          agreementDate: ""
        })
      }, 500)
    }
  }

  const handleCancel = () => {
    setShowRegistrationModal(false)
    setFormData({
      bootcampName: "",
      participationMode: "",
      fullName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      institution: "",
      fieldOfStudy: "",
      level: "",
      address: "",
      city: "",
      country: "",
      preferredPlatform: "",
      internetAvailability: "",
      selectedCourse: "",
      priorExperience: "",
      expectations: "",
      paymentMethod: "",
      transactionReference: "",
      agreeToTerms: false,
      digitalSignature: "",
      agreementDate: ""
    })
    setErrors({})
  }

  const upcomingBootcamps = [
    {
      id: "fullstack-web-dev",
      title: "Full Stack Web Development Bootcamp",
      description:
        "Comprehensive 16-week program covering frontend, backend, and deployment. From zero to job-ready developer.",
      duration: "16 weeks",
      format: "Hybrid (Online + In-person)",
      startDate: "March 15, 2024",
      endDate: "July 8, 2024",
      schedule: "Mon-Fri, 6:00 PM - 9:00 PM",
      price: "$1,999",
      earlyBird: "$1,599",
      location: "Addis Ababa & Online",
      instructor: "Sarah Johnson & Team",
      spots: 25,
      enrolled: 18,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB", "AWS"],
      outcomes: [
        "Build 5+ Portfolio Projects",
        "Job Placement Assistance",
        "Industry Mentorship",
        "Certificate of Completion",
      ],
    },
    {
      id: "mobile-app-dev",
      title: "Mobile App Development Bootcamp",
      description:
        "Learn to build native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      duration: "12 weeks",
      format: "Online",
      startDate: "April 1, 2024",
      endDate: "June 24, 2024",
      schedule: "Tue/Thu/Sat, 7:00 PM - 10:00 PM",
      price: "$1,499",
      earlyBird: "$1,199",
      location: "Online",
      instructor: "Ahmed Hassan",
      spots: 20,
      enrolled: 12,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["React Native", "Flutter", "Firebase", "App Store Deployment", "UI/UX Design"],
      outcomes: ["Build 3 Mobile Apps", "App Store Publishing", "Freelance Opportunities", "Industry Connections"],
    },
    {
      id: "data-science",
      title: "Data Science & Analytics Bootcamp",
      description:
        "Master data analysis, machine learning, and visualization tools to become a data-driven professional.",
      duration: "14 weeks",
      format: "Hybrid (Online + In-person)",
      startDate: "May 6, 2024",
      endDate: "August 12, 2024",
      schedule: "Mon/Wed/Fri, 6:30 PM - 9:30 PM",
      price: "$1,799",
      earlyBird: "$1,399",
      location: "Dubai & Online",
      instructor: "Dr. Meron Tadesse",
      spots: 15,
      enrolled: 8,
      rating: 4.9,
      image: "/placeholder.svg?height=300&width=400",
      skills: ["Python", "SQL", "Machine Learning", "Tableau", "Statistics", "Big Data"],
      outcomes: ["Real-world Projects", "Industry Certification", "Job Placement Support", "Data Portfolio"],
    },
  ]

  const completedBootcamps = [
    {
      id: "web-dev-jan-2024",
      title: "Full Stack Web Development - January 2024",
      graduates: 22,
      jobPlacement: "95%",
      avgSalary: "$45,000",
      duration: "16 weeks",
      completionDate: "January 2024",
      testimonials: [
        {
          name: "Daniel Bekele",
          role: "Full Stack Developer at TechCorp",
          content: "The bootcamp transformed my career completely. Now I'm working at my dream company!",
          rating: 5,
        },
      ],
    },
    {
      id: "mobile-dev-nov-2023",
      title: "Mobile App Development - November 2023",
      graduates: 18,
      jobPlacement: "89%",
      avgSalary: "$42,000",
      duration: "12 weeks",
      completionDate: "November 2023",
      testimonials: [
        {
          name: "Hanan Ahmed",
          role: "Mobile Developer at StartupXYZ",
          content: "Excellent curriculum and supportive instructors. I built my first app during the bootcamp!",
          rating: 5,
        },
      ],
    },
  ]

  const features = [
    {
      icon: Code,
      title: "Hands-on Projects",
      description: "Build real-world applications that showcase your skills to potential employers.",
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience in top tech companies.",
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "95% job placement rate with dedicated career services and industry connections.",
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive recognized certificates that validate your skills to employers.",
    },
    {
      icon: Globe,
      title: "Flexible Learning",
      description: "Choose from online, in-person, or hybrid formats to fit your schedule.",
    },
    {
      icon: GraduationCap,
      title: "Lifetime Access",
      description: "Get lifetime access to course materials and alumni network for continued growth.",
    },
  ]

  const stats = [
    { number: "500+", label: "Graduates" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "$48K", label: "Average Starting Salary" },
    { number: "4.9/5", label: "Student Rating" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Registration Modal */}
      {showRegistrationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl font-bold text-slate-900">Bootcamp Registration</h2>
              <button
                onClick={handleCancel}
                className="text-slate-500 hover:text-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-8">
              {/* Bootcamp Information Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                  Bootcamp Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bootcampName" className="block text-sm font-medium text-slate-700 mb-1">
                      Bootcamp Name *
                    </label>
                    <select
                      id="bootcampName"
                      name="bootcampName"
                      value={formData.bootcampName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.bootcampName ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select Bootcamp</option>
                      <option value="fullstack-web-dev">Full Stack Web Development</option>
                      <option value="mobile-app-dev">Mobile App Development</option>
                      <option value="data-science">Data Science & Analytics</option>
                    </select>
                    {errors.bootcampName && <p className="mt-1 text-sm text-red-500">{errors.bootcampName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Participation Mode *</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="participationMode"
                          value="online"
                          checked={formData.participationMode === "online"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="ml-2 text-slate-700">Online</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="participationMode"
                          value="in-person"
                          checked={formData.participationMode === "in-person"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                        />
                        <span className="ml-2 text-slate-700">In-Person</span>
                      </label>
                    </div>
                    {errors.participationMode && <p className="mt-1 text-sm text-red-500">{errors.participationMode}</p>}
                  </div>
                </div>
              </div>

              {/* Personal Information Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.fullName ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-slate-700 mb-1">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.gender ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    {errors.gender && <p className="mt-1 text-sm text-red-500">{errors.gender}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-slate-700 mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.dateOfBirth ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                    {errors.dateOfBirth && <p className="mt-1 text-sm text-red-500">{errors.dateOfBirth}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.email ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="john.doe@example.com"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.phone ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="+251 912 345 678"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Academic/Professional Info Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                  Academic/Professional Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-1">
                      University/College/School *
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.institution ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Addis Ababa University"
                    />
                    {errors.institution && <p className="mt-1 text-sm text-red-500">{errors.institution}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-slate-700 mb-1">
                      Field of Study/Profession *
                    </label>
                    <input
                      type="text"
                      id="fieldOfStudy"
                      name="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.fieldOfStudy ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Computer Science"
                    />
                    {errors.fieldOfStudy && <p className="mt-1 text-sm text-red-500">{errors.fieldOfStudy}</p>}
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="level" className="block text-sm font-medium text-slate-700 mb-1">
                      Year/Level *
                    </label>
                    <select
                      id="level"
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.level ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select Level</option>
                      <option value="high-school">High School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="graduate">Graduate</option>
                      <option value="professional">Professional</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.level && <p className="mt-1 text-sm text-red-500">{errors.level}</p>}
                  </div>
                </div>
              </div>

              {/* Conditional Sections based on Participation Mode */}
              {formData.participationMode === "in-person" && (
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                    In-Person Participation Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
                        Current Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.address ? "border-red-500" : "border-slate-300"
                        }`}
                        placeholder="Street address"
                      />
                      {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.city ? "border-red-500" : "border-slate-300"
                        }`}
                        placeholder="Addis Ababa"
                      />
                      {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1">
                        Country *
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.country ? "border-red-500" : "border-slate-300"
                        }`}
                      >
                        <option value="">Select Country</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                  </div>
                  </div>
                </div>
              )}

              {formData.participationMode === "online" && (
                <div className="border-b border-slate-200 pb-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <Laptop className="w-5 h-5 mr-2 text-blue-600" />
                    Online Participation Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="preferredPlatform" className="block text-sm font-medium text-slate-700 mb-1">
                        Preferred Platform *
                      </label>
                      <select
                        id="preferredPlatform"
                        name="preferredPlatform"
                        value={formData.preferredPlatform}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.preferredPlatform ? "border-red-500" : "border-slate-300"
                        }`}
                      >
                        <option value="">Select Platform</option>
                        <option value="zoom">Zoom</option>
                        <option value="google-meet">Google Meet</option>
                        <option value="microsoft-teams">Microsoft Teams</option>
                      </select>
                      {errors.preferredPlatform && <p className="mt-1 text-sm text-red-500">{errors.preferredPlatform}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="internetAvailability" className="block text-sm font-medium text-slate-700 mb-1">
                        Internet Availability *
                      </label>
                      <select
                        id="internetAvailability"
                        name="internetAvailability"
                        value={formData.internetAvailability}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                          errors.internetAvailability ? "border-red-500" : "border-slate-300"
                        }`}
                      >
                        <option value="">Select Availability</option>
                        <option value="excellent">Excellent (Stable, High Speed)</option>
                        <option value="good">Good (Mostly Stable)</option>
                        <option value="fair">Fair (Occasional Issues)</option>
                        <option value="poor">Poor (Frequent Issues)</option>
                      </select>
                      {errors.internetAvailability && <p className="mt-1 text-sm text-red-500">{errors.internetAvailability}</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Bootcamp Details Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-blue-600" />
                  Bootcamp Details
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="selectedCourse" className="block text-sm font-medium text-slate-700 mb-1">
                      Selected Course/Track *
                    </label>
                    <select
                      id="selectedCourse"
                      name="selectedCourse"
                      value={formData.selectedCourse}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.selectedCourse ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select Course</option>
                      <option value="frontend">Frontend Development</option>
                      <option value="backend">Backend Development</option>
                      <option value="fullstack">Full Stack Development</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="data-science">Data Science</option>
                    </select>
                    {errors.selectedCourse && <p className="mt-1 text-sm text-red-500">{errors.selectedCourse}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="priorExperience" className="block text-sm font-medium text-slate-700 mb-1">
                      Prior Experience *
                    </label>
                    <textarea
                      id="priorExperience"
                      name="priorExperience"
                      value={formData.priorExperience}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.priorExperience ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Describe any prior programming or technical experience you have..."
                    />
                    {errors.priorExperience && <p className="mt-1 text-sm text-red-500">{errors.priorExperience}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="expectations" className="block text-sm font-medium text-slate-700 mb-1">
                      Expectations from the Bootcamp *
                    </label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      value={formData.expectations}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.expectations ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="What do you hope to achieve from this bootcamp?"
                    />
                    {errors.expectations && <p className="mt-1 text-sm text-red-500">{errors.expectations}</p>}
                  </div>
                </div>
              </div>

              {/* Payment Details Section */}
              <div className="border-b border-slate-200 pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-blue-600" />
                  Payment Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-slate-700 mb-1">
                      Payment Method *
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.paymentMethod ? "border-red-500" : "border-slate-300"
                      }`}
                    >
                      <option value="">Select Payment Method</option>
                      <option value="cash">Cash</option>
                      <option value="bank-transfer">Bank Transfer</option>
                      <option value="telebirr">Telebirr</option>
                      <option value="chapa">Chapa</option>
                      <option value="card">Credit/Debit Card</option>
                    </select>
                    {errors.paymentMethod && <p className="mt-1 text-sm text-red-500">{errors.paymentMethod}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="transactionReference" className="block text-sm font-medium text-slate-700 mb-1">
                      Transaction Reference Number *
                    </label>
                    <input
                      type="text"
                      id="transactionReference"
                      name="transactionReference"
                      value={formData.transactionReference}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.transactionReference ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="TRX-123456789"
                    />
                    {errors.transactionReference && <p className="mt-1 text-sm text-red-500">{errors.transactionReference}</p>}
                  </div>
                </div>
              </div>

              {/* Declaration Section */}
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Declaration
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded mt-1"
                    />
                    <label htmlFor="agreeToTerms" className="ml-2 block text-sm text-slate-700">
                      I hereby declare that the information provided is true and correct to the best of my knowledge. 
                      I agree to the terms and conditions of the bootcamp program.
                    </label>
                  </div>
                  {errors.agreeToTerms && <p className="text-sm text-red-500">{errors.agreeToTerms}</p>}
                  
                  <div>
                    <label htmlFor="digitalSignature" className="block text-sm font-medium text-slate-700 mb-1">
                      Digital Signature (Full Name) *
                    </label>
                    <input
                      type="text"
                      id="digitalSignature"
                      name="digitalSignature"
                      value={formData.digitalSignature}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.digitalSignature ? "border-red-500" : "border-slate-300"
                      }`}
                      placeholder="Type your full name as digital signature"
                    />
                    {errors.digitalSignature && <p className="mt-1 text-sm text-red-500">{errors.digitalSignature}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="agreementDate" className="block text-sm font-medium text-slate-700 mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="agreementDate"
                      name="agreementDate"
                      value={formData.agreementDate}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all ${
                        errors.agreementDate ? "border-red-500" : "border-slate-300"
                      }`}
                    />
                    {errors.agreementDate && <p className="mt-1 text-sm text-red-500">{errors.agreementDate}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-100 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-700 to-coral-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Submit Application
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
              <div className="w-8 h-8 bg-gradient-to-r  rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
                 <img src="../logodvwhitey.png" alt="" className="w-20 h-10  border-rounded " style={{ borderRadius: "50%" }} // ✅ correct
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
              <Link href="/freelance" className="text-slate-600 hover:text-coral-500 transition-colors">
                Freelance
              </Link>
              <Link href="/software" className="text-slate-600 hover:text-coral-500 transition-colors">
                Software
              </Link>
              <Link href="/bootcamp" className="text-blue-700 font-medium">
                Bootcamp
              </Link>
              <Link href="/about" className="text-slate-600 hover:text-coral-500 transition-colors">
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
              Transform Your Career with
              <span className="bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent block">
                Intensive Bootcamps
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Fast-track your tech career with our intensive, job-focused bootcamp programs. From beginner to job-ready
              in months, not years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleApplyNow("fullstack-web-dev")}
                className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
              >
                Apply Now
              </button>
              <button
                onClick={handleContactInfo}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-coral-500 hover:text-coral-500 transition-all"
              >
                Schedule Info Session
              </button>
            </div>
          </div>

          {/* Stats - Using isClient to prevent hydration mismatch */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {isClient ? stat.number : "Loading..."}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Our Bootcamps?</h2>
            <p className="text-xl text-slate-600">Everything you need to launch your tech career</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bootcamp Tabs */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Bootcamp Programs</h2>
            <p className="text-xl text-slate-600">Choose from upcoming programs or see our success stories</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("upcoming")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "upcoming" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Upcoming Bootcamps
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeTab === "completed" ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Success Stories
              </button>
            </div>
          </div>

          {/* Upcoming Bootcamps */}
          {activeTab === "upcoming" && (
            <div className="space-y-8">
              {upcomingBootcamps.map((bootcamp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
                    <div className="relative">
                      <img
                        src={bootcamp.image || "/placeholder.svg"}
                        alt={bootcamp.title}
                        className="w-full h-48 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {bootcamp.spots - bootcamp.enrolled} spots left
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-2 p-4 sm:p-6">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 gap-4">
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{bootcamp.title}</h3>
                          <p className="text-slate-600 mb-4 text-sm sm:text-base">{bootcamp.description}</p>
                        </div>
                        <div className="text-left lg:text-right">
                          <div className="text-2xl font-bold text-blue-700">{bootcamp.earlyBird}</div>
                          <div className="text-sm text-slate-500 line-through">{bootcamp.price}</div>
                          <div className="text-sm text-green-600 font-medium">Early Bird Price</div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Program Details</h4>
                          <div className="space-y-2 text-sm text-slate-600">
                            <div>Duration: {bootcamp.duration}</div>
                            <div>Format: {bootcamp.format}</div>
                            <div>Schedule: {bootcamp.schedule}</div>
                            <div>Location: {bootcamp.location}</div>
                            <div>Instructor: {bootcamp.instructor}</div>
                            <div>Start Date: {bootcamp.startDate}</div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">What You'll Learn</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                            {bootcamp.skills.map((skill, idx) => (
                              <span key={idx} className="px-2 py-1 bg-coral-100 text-coral-800 text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Program Outcomes</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {bootcamp.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-center text-sm text-slate-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-full bg-slate-200 rounded-full h-2 max-w-xs">
                            <div
                              className="bg-gradient-to-r from-blue-700 to-coral-500 h-2 rounded-full"
                              style={{ width: `${(bootcamp.enrolled / bootcamp.spots) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-slate-600 whitespace-nowrap">
                            {bootcamp.enrolled}/{bootcamp.spots} enrolled
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button
                            onClick={() => handleDownloadCurriculum(bootcamp.id)}
                            className="px-4 py-2 border border-slate-300 rounded-lg hover:border-coral-500 hover:text-coral-500 transition-all text-sm sm:text-base"
                          >
                            Download Curriculum
                          </button>
                          <button
                            onClick={() => handleApplyNow(bootcamp.id)}
                            className="bg-gradient-to-r from-blue-700 to-coral-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completed Bootcamps */}
          {activeTab === "completed" && (
            <div className="space-y-8">
              {completedBootcamps.map((bootcamp, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">{bootcamp.title}</h3>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-700 mb-2">{bootcamp.graduates}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Graduates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{bootcamp.jobPlacement}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Job Placement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">{bootcamp.avgSalary}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Avg Starting Salary</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">{bootcamp.duration}</div>
                      <div className="text-slate-600 text-sm sm:text-base">Program Length</div>
                    </div>
                  </div>

                  {bootcamp.testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-lg p-4 sm:p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400">
                            ★
                          </div>
                        ))}
                      </div>
                      <p className="text-slate-600 mb-4 italic text-sm sm:text-base">"{testimonial.content}"</p>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-slate-600">{testimonial.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Launch Your Tech Career?</h2>
          <p className="text-xl text-coral-100 mb-8">
            Join hundreds of successful graduates who transformed their careers with our intensive bootcamp programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleApplyNow("fullstack-web-dev")}
              className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              Apply to Bootcamp
            </button>
            <button
              onClick={handleContactInfo}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
            >
              Schedule Info Session
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
                Transforming careers through intensive, job-focused bootcamp programs across Africa and the Middle East.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Full Stack Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Science
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Career Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Financing Options
                  </a>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-Y-2 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
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
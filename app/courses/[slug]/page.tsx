"use client"

import { useRouter, useParams } from "next/navigation"
import Image from "next/image"
import { useEffect, useState } from "react"

const allCourses = [
  // Web Development - Frontend
  {
    id: "html",
    title: "HTML Basics",
    category: "web-development",
    description: "Structure web content using HTML.",
    image: "/Html1.png/?height=200&width=300",
  },
  {
    id: "css",
    title: "CSS Styling",
    category: "web-development",
    description: "Style websites with CSS.",
    image: "/css.png?height=200&width=300",
  },
  {
    id: "javascript",
    title: "JavaScript Essentials",
    category: "web-development",
    description: "Make web pages interactive using JavaScript.",
    image: "/JS.jpg?height=200&width=300",
  },
  {
    id: "typescript",
    title: "TypeScript",
    category: "web-development",
    description: "Enhance JavaScript with static typing.",
    image: "/TS.png?height=200&width=300",
  },
  {
    id: "react",
    title: "React.js",
    category: "web-development",
    description: "Build user interfaces with React.",
    image:"/react.jpg?height=200&width=300",
  },
  {
    id: "ValueJS",
    title: "Vue.js",
    category: "web-development",
    description: "Progressive JavaScript framework for building UI.",
    image: "/Vue-Js.png?height=200&width=300",
  },
  {
    id: "AngularJS",
    title: "Angular",
    category: "web-development",
    description: "TypeScript-based web app framework.",
    image: "/Angular.jpg?height=200&width=300",
  },
  {
    id: "svelte",
    title: "Svelte",
    category: "web-development",
    description: "Cybernetically enhanced web apps.",
    image: "/svelte.png?height=200&width=300",
  },

  // Web Development - Backend
  {
    id: "nodejs",
    title: "Node.js",
    category: "web-development",
    description: "Run JavaScript on the server-side.",
    image: "/node.jpg?height=200&width=300",
  },
  {
    id: "PHP",
    title: "PHP",
    category: "web-development",
    description: "Server-side scripting for dynamic web content.",
    image: "/php.jpg?height=200&width=300",
  },
  {
    id: "Django",
    title: "Python (Django)",
    category: "web-development",
    description: "High-level Python web framework.",
    image: "/django.png?height=200&width=300",
  },
  {
    id: "ruby",
    title: "Ruby on Rails",
    category: "web-development",
    description: "Web development with Ruby framework.",
    image: "/rails.jpg?height=200&width=300",
  },
  {
    id: "javaspring",
    title: "Java (Spring)",
    category: "web-development",
    description: "Java-based framework for backend development.",
    image: "/Java spring.png?height=200&width=300",
  },
  {
    id: "csharpdotnet",
    title: "C# (.NET)",
    category: "web-development",
    description: "Microsoft framework for web apps.",
    image: "/Cnet.png?height=200&width=300",
  },
  {
    id: "goweb",
    title: "Go for Web",
    category: "web-development",
    description: "Fast backend services with Golang.",
    image: "/Go land.jpg?height=200&width=300",
  },

  // Mobile App - Native
  {
    id: "javaandroid",
    title: "Java for Android",
    category: "mobile-development",
    description: "Build Android apps using Java.",
    image: "/javaandroid.jpg?height=200&width=300",
  },
  {
    id: "Kotlin",
    title: "Kotlin for Android",
    category: "mobile-development",
    description: "Modern Android development with Kotlin.",
    image: "/kotlin.jpg?height=200&width=300",
  },
  {
    id: "swiftios",
    title: "Swift for iOS",
    category: "mobile-development",
    description: "Develop iOS apps with Swift.",
    image: "/swift.jpg?height=200&width=300",
  },
  {
    id: "objectivecios",
    title: "Objective-C",
    category: "mobile-development",
    description: "Legacy language for iOS apps.",
    image: "/ObjectC.jpg?height=200&width=300",
  },

  // Mobile App - Cross Platform
  {
    id: "reactnative",
    title: "React Native",
    category: "mobile-development",
    description: "Build cross-platform apps with React Native.",
    image: "/reactnative.jpg?height=200&width=300",
  },
  {
    id: "flutter",
    title: "Flutter & Dart",
    category: "mobile-development",
    description: "Fast mobile apps using Flutter.",
    image: "/flutter.jpg?height=200&width=300",
  },
  {
    id: "ionic",
    title: "Ionic Framework",
    category: "mobile-development",
    description: "Cross-platform hybrid apps with web tech.",
    image: "/iconic.jpg?height=200&width=300",
  },
  {
    id: "xamarin",
    title: "Xamarin",
    category: "mobile-development",
    description: "Mobile apps with C# and .NET.",
    image: "/Xamarin.jpg?height=200&width=300",
  },

  // Database - SQL
  {
    id: "SQL",
    title: "SQL",
    category: "database",
    description: "Popular open-source SQL database.",
    image: "/SQL.jpg?height=200&width=300",
  },
  {
    id: "MySQL",
    title: "MySQL",
    category: "database",
    description: "Popular open-source MySQL database.",
    image: "/MYSQL.jpg?height=200&width=300",
  },
  {
    id: "PostgrlSQL",
    title: "PostgreSQL",
    category: "database",
    description: "Advanced open-source relational DB.",
    image: "/postgress.jpg?height=200&width=300",
  },
  {
    id: "sqlite",
    title: "SQLite",
    category: "database",
    description: "Lightweight embedded SQL DB.",
    image: "/SQLite.jpg?height=200&width=300",
  },
  {
    id: "sqlserver",
    title: "MS SQL Server",
    category: "database",
    description: "Microsoft’s relational database.",
    image: "/MSSQLServer.jpg?height=200&width=300",
  },
  {
    id: "oracle",
    title: "Oracle DB",
    category: "database",
    description: "Enterprise-grade relational DB.",
    image: "/OracleDB.png?height=200&width=300",
  },

  // Database - NoSQL
  {
    id: "MongoDB",
    title: "MongoDB",
    category: "database",
    description: "Document-based NoSQL database.",
    image: "/OracleDB.png?height=200&width=300",
  },
  {
    id: "cassandra",
    title: "Cassandra",
    category: "database",
    description: "Scalable NoSQL wide-column DB.",
    image: "/Cassandra.png?height=200&width=300",
  },
  {
    id: "firebase",
    title: "Firebase",
    category: "database",
    description: "Realtime database & backend platform.",
    image: "/Firebase.png?height=200&width=300",
  },
  {
    id: "redis",
    title: "Redis",
    category: "database",
    description: "In-memory data store, used as DB or cache.",
    image: "/Redis.png?height=200&width=300",
  },

  // General Programming
  {
    id: "INTROTOBASICSPROGRAMMING",
    title: "INTROTOBASICSPROGRAMMING",
    category: "programming",
    description: "Versatile language for AI, scripting, web & more.",
    image: "/Basicprogramming.jpg?height=200&width=300",
  },
  {
    id: "Python",
    title: "Python Programming",
    category: "programming",
    description: "Versatile language for AI, scripting, web & more.",
    image: "/Python Programming.png?height=200&width=300",
  },
  {
    id: "Java",
    title: "Java Programming",
    category: "programming",
    description: "Widely-used, portable OOP language.",
    image: "/Java.jpg?height=200&width=300",
  },
  {
    id: "c",
    title: "C Language",
    category: "programming",
    description: "Low-level programming for systems and embedded devices.",
    image: "/C Language.png?height=200&width=300",
  },
  {
    id: "Cplusplus",
    title: "C++ Programming",
    category: "programming",
    description: "High-performance programming with OOP and low-level features.",
    image: "/C++ Programming.png?height=200&width=300",
  },
  {
    id: "Csyarph",
    title: "C# Programming",
    category: "programming",
    description: "Powerful OOP language for games and apps.",
    image: "/bobo.png?height=200&width=300",
  },
  {
    id: "Rust",
    title: "Rust Language",
    category: "programming",
    description: "Memory-safe system-level programming.",
    image: "/Rust Language.jpg?height=200&width=300",
  },
  {
    id: "golang",
    title: "Go (Golang)",
    category: "programming",
    description: "Efficient programming for backend services.",
    image: "/Go land.jpg?height=200&width=300",
  },
  {
    id: "rlang",
    title: "R Language",
    category: "programming",
    description: "Used for data science and statistical computing.",
    image: "/R Language.jpg?height=200&width=300",
  },
  {
    id: "matlab",
    title: "MATLAB",
    category: "programming",
    description: "Engineering and scientific computations.",
    image: "/MATLAB.png?height=200&width=300",
  },
  {
    id: "scala",
    title: "Scala",
    category: "programming",
    description: "Functional + OOP language running on JVM.",
    image: "/Scala.png?height=200&width=300",
  }
];


export default function CategoryPage() {
  const router = useRouter()
  const { slug } = useParams()
  const [filteredCourses, setFilteredCourses] = useState<typeof allCourses>([])

  useEffect(() => {
    const results = allCourses.filter((course) => course.category === slug)
    setFilteredCourses(results)
  }, [slug])

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-10 text-slate-800 capitalize">
          {slug?.toString().replace("-", " ")} Courses
        </h1>

        {filteredCourses.length === 0 ? (
          <p className="text-lg text-slate-500">No courses found in this category.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <Image
                  src={course.image}
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h2>
                  <p className="text-sm text-slate-600 line-clamp-2">{course.description}</p>
                  <button
                    onClick={() => router.push(`/elearning/course/${course.id}`)}
                    className="mt-4 w-full bg-gradient-to-r from-blue-700 to-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg transition"
                  >
                    View Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

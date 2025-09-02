// "use client";

// import "./each-course.css";

// import { useParams, useRouter } from "next/navigation";
// import { allCourses } from "@/lib/data";
// import { courseTopics } from "@/lib/topics";
// import ReactMarkdown from "react-markdown";
// import hljs from "highlight.js";
// import "highlight.js/styles/github.css";
// import dynamic from "next/dynamic";
// import {
//   FaBook,
//   FaCode,
//   FaUserCheck,
//   FaSignInAlt,
//   FaChartLine,
//   FaRegListAlt,
//   FaCopy,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { Settings, LogOut, User } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
//   ssr: false,
// });

// export default function CoursePage() {
//   const params = useParams();
//   const router = useRouter();
//   const id = params?.id;
//   const course = allCourses.find((c) => c.id === id);
//   const topics = courseTopics[id] || [];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [htmlCode, setHtmlCode] = useState("");
//   const [cssCode, setCssCode] = useState("/* Your CSS here */");
//   const [jsCode, setJsCode] = useState("// Your JS here");
//   const [editorTab, setEditorTab] = useState("html");
//   const [isFullScreen, setIsFullScreen] = useState(false);
//   const [showLeftSidebar, setShowLeftSidebar] = useState(true);
//   const [showRightSidebar, setShowRightSidebar] = useState(false);
//   const [copied, setCopied] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const sidebarRef = useRef(null);

//   const currentTopic = topics[currentIndex];
//   const progress = Math.round(((currentIndex + 1) / topics.length) * 100);

//   useEffect(() => {
//     hljs.highlightAll();
//     if (currentTopic?.code) {
//       setHtmlCode(currentTopic.code);
//     }
//     if (typeof window !== "undefined") {
//       window.scrollTo(0, 0);
      
//       // Check if mobile on mount and resize
//       const checkIsMobile = () => {
//         setIsMobile(window.innerWidth < 1024);
//         // On mobile, sidebar should be hidden by default
//         if (window.innerWidth < 1024) {
//           setShowLeftSidebar(false);
//         }
//       };
      
//       checkIsMobile();
//       window.addEventListener('resize', checkIsMobile);
      
//       return () => {
//         window.removeEventListener('resize', checkIsMobile);
//       };
//     }
//   }, [currentIndex, currentTopic]);

//   const handleCopy = () => {
//     if (currentTopic?.code) {
//       navigator.clipboard.writeText(currentTopic.code);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   const getCombinedCode = () => {
//     return `<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;
//   };

//   const toggleLeftSidebar = () => {
//     setShowLeftSidebar(prev => !prev);
//   };

//   if (!course || !currentTopic) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-yellow-50 text-gray-800 font-sans">
//         <div className="text-center p-6 max-w-md bg-white rounded-xl shadow-lg">
//           <h1 className="text-3xl font-bold text-blue-600 mb-4">404</h1>
//           <p className="text-lg mb-6">Course or topic not found.</p>
//           <button
//             onClick={() => router.push("/")}
//             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Return Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-yellow-50/30 text-gray-900 font-sans">
//       {/* Mobile Header */}
//       <div className="lg:hidden flex justify-between items-center p-4 bg-white border-b border-gray-200 shadow-sm">
//         <button
//           onClick={toggleLeftSidebar}
//           className="text-blue-600 text-2xl p-2 rounded-lg hover:bg-gray-100 whytog"
//           aria-label="Toggle left sidebar"
//         >
//           {showLeftSidebar ? <FaTimes /> : <FaBars />}
//         </button>
//         <Link href="/" className="flex items-center space-x-2">
//           <img
//             src="/logodvwhitey.png"
//             alt="DevVoltz Logo"
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-transparent">
//             DevVoltz
//           </span>
//         </Link>
//         <button
//           onClick={() => setShowRightSidebar(!showRightSidebar)}
//           className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
//           aria-label="Toggle right sidebar"
//         >
//           {showRightSidebar ? "Hide Tools" : "Show Tools"}
//         </button>
//       </div>

//       {/* Desktop Navigation */}
//       <nav className="hidden lg:block bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <button
//                 onClick={toggleLeftSidebar}
//                 className="text-blue-600 text-xl p-2 rounded-lg hover:bg-gray-100 mr-4"
//                 aria-label="Toggle left sidebar"
//               >
//                 {showLeftSidebar ? <FaTimes /> : <FaBars />}
//               </button>
//               <Link href="/" className="flex items-center space-x-2">
//                 <img
//                   src="/logodvwhitey.png"
//                   alt="DevVoltz Logo"
//                   className="w-10 h-10 rounded-full"
//                 />
//                 <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-pink-600 bg-clip-text text-transparent">
//                   DevVoltz
//                 </span>
//               </Link>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
//                 <Settings className="w-5 h-5" />
//               </Button>
//               <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100" onClick={() => console.log("Logout")}>
//                 <LogOut className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
//         {/* Left Sidebar */}
//         <aside 
//           ref={sidebarRef}
//           className={`bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-4 overflow-y-auto transition-all duration-300 ${
//             isMobile 
//               ? (showLeftSidebar 
//                   ? "fixed inset-y-0 left-0 z-40 w-64 shadow-xl transform translate-x-0" 
//                   : "fixed inset-y-0 left-0 z-40 w-64 shadow-xl transform -translate-x-full")
//               : (showLeftSidebar ? "block lg:w-1/6" : "hidden")
//           }`}
//         >
//           <h2 className="text-xl font-bold text-gray-800 mb-4">DevVoltz Tutorial</h2>
//           <ul className="space-y-2">
//             {topics.map((topic, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => {
//                     setCurrentIndex(index);
//                     if (isMobile) setShowLeftSidebar(false);
//                   }}
//                   className={`w-full flex items-center gap-2 text-left p-3 rounded-lg transition-colors ${currentIndex === index ? "bg-blue-600 text-white font-semibold shadow-md" : "hover:bg-gray-100 text-gray-700"}`}
//                 >
//                   <FaBook className="text-sm" />
//                   <span className="truncate">{topic.title}</span>
//                 </button>
//               </li>
//             ))}
//           </ul>
          
//           {/* Google Ad Space - Left Sidebar */}
//           <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-dashed border-gray-300">
//             <p className="text-xs text-gray-500 text-center mb-2">Advertisement</p>
//             <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
//               <span className="text-gray-500 text-sm">Google Ad Space</span>
//             </div>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className={`w-full ${showLeftSidebar ? 'lg:w-4/6' : 'lg:w-5/6'} p-4 sm:p-6 space-y-6 bg-white rounded-lg shadow-sm transition-all duration-300`}>
//           {/* Progress Bar */}
//           <div className="flex items-center justify-between mb-2">
//             <div className="w-full bg-gray-200 rounded-full h-2.5 mr-4">
//               <div 
//                 className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//             <span className="text-sm font-medium text-gray-700 whitespace-nowrap">{progress}% complete</span>
//           </div>

//           <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
//             <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center gap-3">
//               <FaBook className="text-pink-500" /> {currentTopic.title}
//             </h2>

//             <div className="prose max-w-none prose-lg prose-headings:font-semibold prose-p:text-gray-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-normal">
//               <ReactMarkdown>{currentTopic.note}</ReactMarkdown>
//             </div>

//             {currentTopic.code && (
//               <>
//                 <div className="flex justify-between items-center mt-8 mb-3">
//                   <h3 className="text-lg font-semibold text-gray-800">Example Code</h3>
//                   <button
//                     onClick={handleCopy}
//                     className="text-sm text-pink-600 hover:text-pink-700 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 transition-colors"
//                   >
//                     <FaCopy className="text-sm" /> {copied ? "Copied!" : "Copy Code"}
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto">
//                     <code className="language-html whitespace-pre">{currentTopic.code}</code>
//                   </pre>
//                 </div>
//               </>
//             )}

//             <div className={`mt-8 border border-gray-200 rounded-xl overflow-hidden ${isFullScreen ? "fixed inset-0 z-50 bg-white p-4 overflow-auto" : ""}`}>
//               <div className="flex justify-between items-center p-4 bg-gray-50 border-b border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-800">Try It Live</h3>
//                 <button
//                   onClick={() => setIsFullScreen(!isFullScreen)}
//                   className="text-sm text-blue-600 hover:text-blue-700 px-3 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
//                 >
//                   {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
//                 </button>
//               </div>

//               <div className="flex gap-2 p-4 bg-gray-50 border-b border-gray-200">
//                 {["html", "css", "js"].map((lang) => (
//                   <button
//                     key={lang}
//                     onClick={() => setEditorTab(lang)}
//                     className={`px-4 py-2 text-sm rounded-lg transition-colors ${editorTab === lang ? "bg-blue-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
//                   >
//                     {lang.toUpperCase()}
//                   </button>
//                 ))}
//               </div>

//               <MonacoEditor
//                 height="300px"
//                 defaultLanguage={editorTab}
//                 language={editorTab}
//                 value={editorTab === "html" ? htmlCode : editorTab === "css" ? cssCode : jsCode}
//                 onChange={(value) => {
//                   if (editorTab === "html") setHtmlCode(value);
//                   else if (editorTab === "css") setCssCode(value);
//                   else setJsCode(value);
//                 }}
//                 theme="vs-dark"
//                 className="rounded-b-lg"
//                 options={{ 
//                   fontSize: 14,
//                   minimap: { enabled: false },
//                   scrollBeyondLastLine: false,
//                   automaticLayout: true
//                 }}
//               />

//               <div className="p-4 bg-gray-50 border-t border-gray-200">
//                 <h4 className="text-sm font-medium text-gray-800 mb-2">Live Preview</h4>
//                 <iframe
//                   className="w-full h-64 border border-gray-300 rounded-lg bg-white"
//                   srcDoc={getCombinedCode()}
//                   title="Live Preview"
//                   sandbox="allow-same-origin allow-scripts"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between flex-wrap gap-3">
//             <button
//               onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
//               disabled={currentIndex === 0}
//               className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               ← Previous
//             </button>
//             <button
//               onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, topics.length - 1))}
//               disabled={currentIndex === topics.length - 1}
//               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               Next →
//             </button>
//           </div>
          
//           {/* Google Ad Space - Bottom of Main Content */}
//           <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-dashed border-gray-300">
//             <p className="text-xs text-gray-500 text-center mb-2">Advertisement</p>
//             <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center">
//               <span className="text-gray-500 text-sm">Google Ad Space</span>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className={`bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 transition-all duration-300 ${showRightSidebar ? "block" : "hidden lg:block"} lg:w-1/6`}>
//           <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-5 space-y-5 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-blue-100 rounded-lg">
//                 <FaUserCheck className="text-xl text-blue-600" />
//               </div>
//               <h3 className="text-md font-semibold text-gray-800">Track Your Progress</h3>
//             </div>
//             <ul className="text-sm text-gray-600 space-y-3">
//               <li className="flex items-center gap-3">
//                 <FaChartLine className="text-green-500" /> 
//                 <span>View completed lessons</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaBook className="text-green-500" /> 
//                 <span>Keep streaks</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCode className="text-green-500" /> 
//                 <span>Create paths</span>
//               </li>
//             </ul>
//             <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
//               <FaSignInAlt /> Sign Up Free
//             </button>
//             <p className="text-xs text-gray-500 text-center italic">Note: This is a simulated feature.</p>
//           </div>
          
//           {/* Google Ad Space - Right Sidebar */}
//           <div className="mt-6 p-4 bg-gray-100 rounded-lg border border-dashed border-gray-300">
//             <p className="text-xs text-gray-500 text-center mb-2">Advertisement</p>
//             <div className="w-full h-60 bg-gray-200 rounded flex items-center justify-center">
//               <span className="text-gray-500 text-sm">Google Ad Space</span>
//             </div>
//           </div>
//         </aside>
//       </div>
      
//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-12 mt-16 px-6">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//               <img
//                 src="/logodvwhitey.png"
//                 alt="DevVoltz Logo"
//                 className="w-8 h-8 rounded-full"
//               />
//               DevVoltz
//             </h2>
//             <p className="text-sm text-gray-400">
//               Empowering Africa's tech future from Addis Ababa to Dubai and beyond.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li className="hover:text-white transition-colors cursor-pointer">E-Learning</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Freelance</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Software</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Bootcamp</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Blog</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li className="hover:text-white transition-colors cursor-pointer">LinkedIn</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Twitter</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Facebook</li>
//               <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
//             </ul>
//           </div>
//         </div>

//         <hr className="border-gray-700 my-8" />

//         <div className="text-center text-sm text-gray-400">
//           © {new Date().getFullYear()} DevVoltz. All rights reserved. Made with DevVoltz in Addis Ababa & Dubai.
//         </div>
//       </footer>
//     </div>
//   );
// }
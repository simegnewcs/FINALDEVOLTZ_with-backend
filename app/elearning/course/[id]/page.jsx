"use client";

import "./each-course.css";

import { useParams, useRouter } from "next/navigation";
import { allCourses } from "@/lib/data";
import { courseTopics } from "@/lib/topics";
import ReactMarkdown from "react-markdown";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import dynamic from "next/dynamic";
import {
  FaBook,
  FaCode,
  FaUserCheck,
  FaSignInAlt,
  FaChartLine,
  FaRegListAlt,
  FaCopy,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function CoursePage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const course = allCourses.find((c) => c.id === id);
  const topics = courseTopics[id] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("/* Your CSS here */");
  const [jsCode, setJsCode] = useState("// Your JS here");
  const [editorTab, setEditorTab] = useState("html");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showLeftSidebar, setShowLeftSidebar] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentTopic = topics[currentIndex];
  const progress = Math.round(((currentIndex + 1) / topics.length) * 100);

  useEffect(() => {
    hljs.highlightAll();
    if (currentTopic?.code) {
      setHtmlCode(currentTopic.code);
    }
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [currentIndex, currentTopic]);

  const handleCopy = () => {
    if (currentTopic?.code) {
      navigator.clipboard.writeText(currentTopic.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getCombinedCode = () => {
    return `<!DOCTYPE html><html><head><style>${cssCode}</style></head><body>${htmlCode}<script>${jsCode}</script></body></html>`;
  };

  if (!course || !currentTopic) {
    return (
      <div className="flex items-center justify-center h-screen bg-brandYellow text-gray-800 font-sans">
        <div className="text-center p-6 max-w-md bg-white rounded-lg shadow">
          <h1 className="text-3xl font-bold text-brandPink mb-4">404</h1>
          <p className="text-lg mb-6">Course or topic not found.</p>
          <button
            onClick={() => router.push("/")}
            className="bg-brandBlue text-white px-4 py-2 rounded hover:bg-brandBlue/90"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brandYellow/20 text-gray-900 font-sans body1">
      <div className="lg:hidden flex justify-between items-center p-4 bg-white border-b border-brandBlue/30 hamburger">
        <button
          onClick={() => setShowLeftSidebar(!showLeftSidebar)}
          className="text-brandBlue text-2xl"
          aria-label="Toggle left sidebar"
        >
          {showLeftSidebar ? <FaTimes /> : <FaBars />}
        </button>
        <button
          onClick={() => setShowRightSidebar(!showRightSidebar)}
          className="bg-brandBlue text-white px-3 py-1 rounded text-sm hover:bg-brandBlue/90"
          aria-label="Toggle right sidebar"
        >
          {showRightSidebar ? "Hide Tools" : "Show Tools"}
        </button>
      </div>

      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-700 to-coral-500 rounded-lg flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-coral-500 bg-clip-text text-transparent">
                DevVoltz
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => console.log("Logout")}> {/* Replace with real logout */}
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row ">
        <aside className={`bg-brandBlue border-b lg:border-b-0 lg:border-r border-brandBlue/20 p-4 overflow-y-auto transition-all duration-300 wholeleft ${showLeftSidebar ? "left-sidebar-expanded" : "left-sidebar-collapsed"} w-25 lg:w-1/6`}>
          <h2 className="text-xl font-bold text-brandBlue">HTML Tutorial</h2>
          <ul className="space-y-1 text-sm topicesleft">
            {topics.map((topic, index) => (
              <li key={index}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full flex items-center gap-2 text-left p-2 rounded ${currentIndex === index ? "bg-brandBlue text-white font-semibold almetam" : "hover:bg-brandBlue/10 text-gray-700"}`}
                >
                  <FaBook className="text-sm" />
                  {topic.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="w-full lg:w-4/6 p-4 sm:p-6 space-y-6 bg-white mainCon">
          {/* <div className="w-full bg-brandPink/10 rounded-full h-3 progress1">
            <div
              className="bg-brandBlue h-3 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div> */}
          <p className="text-right text-sm text-gray-500 progress2">{progress}% complete</p>

          <div className="p-4 sm:p-6 bg-gray-50 border border-brandBlue/20 rounded shadow-sm text-base">
            <h2 className="text-xl font-semibold mb-4 text-brandBlue flex items-center gap-2">
              <FaBook className="text-brandPink" /> {currentTopic.title}
            </h2>

            <div className="prose max-w-none prose-sm sm:prose prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded list-decimal list-inside">
              <ReactMarkdown>{currentTopic.note}</ReactMarkdown>
            </div>

            {currentTopic.code && (
              <>
                <div className="flex justify-between items-center mt-6 mb-2">
                  <h3 className="text-lg font-semibold text-brandBlue">Example Code</h3>
                  <button
                    onClick={handleCopy}
                    className="text-sm text-brandPink hover:underline flex items-center gap-1"
                  >
                    <FaCopy /> {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
                <pre className="bg-gray-900 text-brandYellow text-sm p-4 rounded overflow-x-auto relative">
                  <code className="language-html whitespace-pre">{currentTopic.code}</code>
                </pre>
              </>
            )}

            <div className={`mt-6 border rounded-lg ${isFullScreen ? "fixed inset-0 z-50 bg-white p-4 overflow-auto" : ""}`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-brandBlue">Try It Live</h3>
                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="text-sm text-brandPink hover:underline"
                >
                  {isFullScreen ? "Exit Fullscreen" : "Fullscreen"}
                </button>
              </div>

              <div className="flex gap-2 mb-2">
                {["html", "css", "js"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setEditorTab(lang)}
                    className={`px-3 py-1 text-sm rounded ${editorTab === lang ? "bg-brandBlue text-white" : "bg-brandBlue/10 text-brandBlue"}`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>

              <MonacoEditor
                height="300px"
                defaultLanguage={editorTab}
                language={editorTab}
                value={editorTab === "html" ? htmlCode : editorTab === "css" ? cssCode : jsCode}
                onChange={(value) => {
                  if (editorTab === "html") setHtmlCode(value);
                  else if (editorTab === "css") setCssCode(value);
                  else setJsCode(value);
                }}
                theme="vs-dark"
                className="rounded border"
              />

              <h4 className="mt-4 text-sm text-brandBlue font-semibold">Live Preview</h4>
              <iframe
                className="w-full h-64 border mt-2 rounded"
                srcDoc={getCombinedCode()}
                title="Live Preview"
              />
            </div>
          </div>

          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
              disabled={currentIndex === 0}
              className="bg-brandBlue/10 hover:bg-brandBlue/20 text-brandBlue px-4 py-2 rounded disabled:opacity-50"
            >
              ← Previous
            </button>
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, topics.length - 1))}
              disabled={currentIndex === topics.length - 1}
              className="bg-brandBlue hover:bg-brandBlue/90 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Next →
            </button>
          </div>
        </main>

        <aside className={`bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 transition-all duration-300 asideright ${showRightSidebar ? "right-sidebar-expanded" : "right-sidebar-collapsed"} w-25 lg:w-1/6`}>
          <div className="bg-gray-50 rounded-lg border-gray-200 space-y-4 shadow-sm m-0">
            <div className="flex items-center gap-2">
              <FaUserCheck className="text-xl text-green-600" />
              <h3 className="text-md font-semibold text-gray-700">Track Your Progress</h3>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <FaChartLine className="text-green-500" /> View completed lessons
              </li>
              <li className="flex items-center gap-2">
                <FaBook className="text-green-500" /> Keep streaks
              </li>
              <li className="flex items-center gap-2">
                <FaCode className="text-green-500" /> Create paths
              </li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded text-sm font-semibold flex items-center justify-center gap-2">
              <FaSignInAlt /> Sign Up Free
            </button>
            <p className="text-xs text-gray-500 italic">Note: This is a simulated feature.</p>
          </div>
        </aside>

      </div>
        <footer className="bg-gray-900 text-white py-10 mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 footerpart">
          <div>
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-700 to-pink-500 text-white p-2 rounded">⚡</span>
              DevVoltz
            </h2>
            <p className="text-sm text-gray-400">
              Empowering Africa's tech future from Addis Ababa to Dubai and beyond.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>E-Learning</li>
              <li>Freelance</li>
              <li>Software</li>
              <li>Bootcamp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="text-center text-sm text-gray-400 footerpart">
          © {new Date().getFullYear()} DevVoltz. All rights reserved. Made with DevVoltz in Addis Ababa & Dubai.
        </div>
      </footer>
    </div>
  );
}

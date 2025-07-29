"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Mail, Phone, Linkedin, Github, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CVDownload from "./components/cv-download"

export default function CVWebsite() {
  const [darkMode, setDarkMode] = useState(false)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const skills = {
    "Frontend Development": ["HTML", "CSS", "JavaScript", "TypeScript"],
    "Frameworks & Libraries": ["React JS", "Next JS", "InertiaJS", "Bootstrap", "Tailwind CSS"],
    "State Management": ["Zustand", "Redux Toolkit"],
    "Build Tools": ["Webpack", "Vite", "Parcel"],
    "Design & Planning": ["Figma", "Notion"],
    "AI Development Tools": ["lovable.dev", "v0.dev"],
  }

  const workExperience = [
    {
      company: "Referral Factory",
      period: "2022 - PRESENT",
      position: "Frontend React Developer",
      description:
        "I'm currently working as a skilled Front-End Developer, building responsive and adaptive web applications using JavaScript, TypeScript, React.js, Inertia.js, and Tailwind CSS. I actively manage application state with Zustand and Redux Toolkit, and use modern development tools like Vite and Vitest for efficient workflows and component testing. I'm passionate about writing clean, performant code and creating user-friendly interfaces.",
    },
    {
      company: "Tutor (Freelance)",
      period: "2022 - 2023",
      position: "Javascript and React JS tutor",
      description:
        "As a front-end tutor, I taught HTML, CSS, JavaScript, React, Redux, and related technologies to beginners and junior developers. I created lesson plans, provided live coding sessions, and guided students through building real-world projects. My focus was on helping learners understand modern development principles, clean code practices, and debugging techniques.",
    },
    {
      company: "BrainX",
      period: "2020 - 2020",
      position: "React Developer",
      description:
        "I worked on building and maintaining dynamic web interfaces using React.js. I collaborated with design and backend teams to implement user-friendly components, manage state effectively using Redux Toolkit, and ensure responsive design with Tailwind CSS.",
    },
  ]

  const languages = [
    { name: "Armenian", level: "Native" },
    { name: "English", level: "Upper Intermediate" },
    { name: "Russian", level: "Pre-Intermediate" },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl">Sasun Mkrtumyan</div>
              <div className="hidden md:flex space-x-8">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="ml-4">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sasun Mkrtumyan
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">Frontend Developer</p>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Passionate about creating responsive, user-friendly web applications with modern technologies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get In Touch
                </Button>
                <Button onClick={() => scrollToSection("about")} variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="h-6 w-6 text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="/images/sasun-profile.jpeg"
                    alt="Sasun Mkrtumyan - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Skilled Front-End Developer with ~5 years of experience in building responsive and adaptive web
                  applications using JavaScript, TypeScript, React.js, Inertia.js, and Tailwind CSS. Proficient in
                  modern state management with Zustand and Redux Toolkit, and experienced with development tools like
                  Vite and Vitest for fast workflows and reliable component testing.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm passionate about clean, maintainable code, performance optimization, and delivering intuitive,
                  user-friendly interfaces. My approach combines technical expertise with strong collaborative skills,
                  allowing me to integrate seamlessly into any development team while maintaining a friendly and
                  adaptive working style.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I leverage modern design and planning tools like Figma for UI/UX design and Notion for comprehensive
                  project management and documentation. Additionally, I'm experienced in turning AI-generated UI mockups
                  into production-ready code using cutting-edge tools like lovable.dev and v0.dev, enabling rapid
                  prototyping and efficient development workflows from concept to deployment.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My development philosophy centers on continuous learning and staying current with emerging
                  technologies. I believe in writing code that not only works but is also scalable, maintainable, and
                  follows industry best practices. Whether working on complex state management, optimizing application
                  performance, or implementing responsive designs, I bring both technical precision and creative
                  problem-solving to every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {languages.map((lang, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <div className="font-semibold">{lang.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className={`py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-1000 ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section
          id="experience"
          className={`py-20 transition-all duration-1000 ${isVisible.experience ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">{job.company}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{job.position}</h4>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
                Ready to work together? Let's connect and discuss your next project.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="mailto:sasunmkrtumyan92@gmail.com"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 break-all">sasunmkrtumyan92@gmail.com</div>
                </div>
              </a>
              <a
                href="tel:37495575551"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="h-8 w-8 text-green-600 mr-4" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">+374 95 57 55 51</div>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/sasun-mkrtumyan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="h-8 w-8 text-blue-700 mr-4" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Connect with me</div>
                </div>
              </a>
              <div className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <Github className="h-8 w-8 text-gray-700 dark:text-gray-300 mr-4" />
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Private repositories</div>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <CVDownload />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sasun Mkrtumyan. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

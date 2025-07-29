"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CVDownload() {
  const generatePDFCV = () => {
    // Create a new window with the CV content
    const cvWindow = window.open("", "_blank")
    if (cvWindow) {
      cvWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sasun Mkrtumyan - CV</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.4;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          .cv-container {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 30px;
          }
          .left-column {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
          }
          .right-column {
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
            grid-column: 1 / -1;
          }
          .name {
            font-size: 32px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 5px;
          }
          .job-title {
            font-size: 18px;
            color: #666;
            font-weight: 500;
          }
          .section-title {
            font-size: 16px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 15px;
            padding-bottom: 5px;
            border-bottom: 2px solid #2563eb;
          }
          .contact-item {
            margin-bottom: 8px;
            font-size: 14px;
          }
          .skill-item {
            background: white;
            padding: 8px 12px;
            margin: 5px 0;
            border-radius: 4px;
            font-size: 14px;
            border-left: 3px solid #2563eb;
          }
          .language-item {
            margin-bottom: 8px;
            font-size: 14px;
          }
          .work-item {
            margin-bottom: 25px;
            border-left: 3px solid #2563eb;
            padding-left: 15px;
          }
          .work-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;
          }
          .company {
            font-weight: bold;
            color: #2563eb;
            font-size: 16px;
          }
          .period {
            background: #e5e7eb;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: bold;
          }
          .position {
            font-weight: 600;
            margin-bottom: 10px;
            color: #374151;
          }
          .description {
            font-size: 14px;
            line-height: 1.5;
            text-align: justify;
          }
          .education-item {
            margin-bottom: 20px;
            border-left: 3px solid #2563eb;
            padding-left: 15px;
          }
          .profile-text {
            font-size: 14px;
            line-height: 1.6;
            text-align: justify;
            margin-bottom: 20px;
          }
          @media print {
            body { margin: 0; padding: 15px; font-size: 12px; }
            .cv-container { gap: 20px; }
            .left-column, .right-column { padding: 15px; }
          }
        </style>
      </head>
      <body>
        <div class="cv-container">
          <div class="header">
            <div class="name">SASUN MKRTUMYAN</div>
            <div class="job-title">FRONTEND REACT DEVELOPER</div>
          </div>
          
          <div class="left-column">
            <div class="section-title">CONTACT</div>
            <div class="contact-item">📱 +37495575551</div>
            <div class="contact-item">📧 sasunmkrtumyan92@gmail.com</div>
            <div class="contact-item">📍 Armenia Yerevan</div>
            <div class="contact-item">💼 Linkedin</div>
            <div class="contact-item">🌐 sasunmkrtumyan.info</div>
            
            <br>
            <div class="section-title">SKILLS</div>
            <div class="skill-item">React JS</div>
            <div class="skill-item">Javascript</div>
            <div class="skill-item">Typescript</div>
            <div class="skill-item">Next JS</div>
            <div class="skill-item">Inertia JS</div>
            <div class="skill-item">Tailwind</div>
            <div class="skill-item">Bootstrap</div>
            <div class="skill-item">Responsive Design</div>
            <div class="skill-item">HTML / CSS</div>
            <div class="skill-item">Git/Github</div>
            <div class="skill-item">Zustand /Redux Toolkit</div>
            <div class="skill-item">Vite</div>
            <div class="skill-item">Vitest</div>
            
            <br>
            <div class="section-title">LANGUAGES</div>
            <div class="language-item">Armenian (Fluent)</div>
            <div class="language-item">English (upper intermediate)</div>
            <div class="language-item">russian (pre intermediate)</div>
          </div>
          
          <div class="right-column">
            <div class="section-title">PROFILE</div>
            <div class="profile-text">
              Skilled Front-End Developer with ~5 years of experience in building responsive and adaptive web applications using JavaScript, TypeScript, React.js, Inertia.js, and Tailwind CSS. Proficient in modern state management with Zustand and Redux Toolkit, and experienced with development tools like Vite and Vitest for fast workflows and reliable component testing. Passionate about clean, maintainable code, performance optimization, and delivering intuitive, user-friendly interfaces.
            </div>
            
            <div class="section-title">WORK EXPERIENCE</div>
            
            <div class="work-item">
              <div class="work-header">
                <div class="company">Referral Factory</div>
                <div class="period">2022 - PRESENT</div>
              </div>
              <div class="position">Frontend React Developer</div>
              <div class="description">
                I'm currently working as a skilled Front-End Developer, building responsive and adaptive web applications using JavaScript, TypeScript, React.js, Inertia.js, and Tailwind CSS. I actively manage application state with Zustand and Redux Toolkit, and use modern development tools like Vite and Vitest for efficient workflows and component testing. I'm passionate about writing clean, performant code and creating user-friendly interfaces.
              </div>
            </div>
            
            <div class="work-item">
              <div class="work-header">
                <div class="company">Tutor (Freelance)</div>
                <div class="period">2022 - 2023</div>
              </div>
              <div class="position">Javascript and React JS tutor</div>
              <div class="description">
                As a front-end tutor, I taught HTML, CSS, JavaScript, React, Redux, and related technologies to beginners and junior developers. I created lesson plans, provided live coding sessions, and guided students through building real-world projects. My focus was on helping learners understand modern development principles, clean code practices, and debugging techniques.
              </div>
            </div>
            
            <div class="work-item">
              <div class="work-header">
                <div class="company">BrainX</div>
                <div class="period">2020 - 2020</div>
              </div>
              <div class="position">React Developer</div>
              <div class="description">
                I worked on building and maintaining dynamic web interfaces using React.js. I collaborated with design and backend teams to implement user-friendly components, manage state effectively using Redux Toolkit, and ensure responsive design with Tailwind CSS.
              </div>
            </div>
            
            <div class="section-title">EDUCATION</div>
            
            <div class="education-item">
              <div class="work-header">
                <div class="company">Armenian Code Academy</div>
                <div class="period">2021- 2021</div>
              </div>
              <div class="position">Javascript / React JS Developer</div>
            </div>
            
            <div class="education-item">
              <div class="work-header">
                <div class="company">Yerevan State University</div>
                <div class="period">2009 - 2016</div>
              </div>
              <div class="position">Economist</div>
            </div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 30px; font-size: 12px; color: #666;">
          Generated on ${new Date().toLocaleDateString()}
        </div>
      </body>
      </html>
    `)
      cvWindow.document.close()

      // Auto-print after a short delay
      setTimeout(() => {
        cvWindow.print()
      }, 500)
    }
  }

  return (
    <div className="flex justify-center">
      <Button onClick={generatePDFCV} size="lg" className="bg-green-600 hover:bg-green-700">
        <Download className="mr-2 h-5 w-5" />
        Download CV (PDF)
      </Button>
    </div>
  )
}

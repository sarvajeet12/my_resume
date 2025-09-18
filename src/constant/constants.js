// ========================================= SKILLS Section ==================================================

// ------------------ Frontend---------------------------
import css from "../assets/icons/css_icon.png"
import html from "../assets/icons/html_icon.png"
import psd from "../assets/icons/psd_icon.png"
import redux from "../assets/icons/redux_icon.png"
import tailwind from "../assets/icons/tailwind_icon.png"
import react from "../assets/icons/reactjs_icon.png"
import vite from "../assets/icons/vite_icon.png"


// ------------------ Backend---------------------------
import node from "../assets/icons/nodejs_icon.png"
import express from "../assets/icons/express_icon.png"
import mongo from "../assets/icons/mongodb_icon.png"
import postman from "../assets/icons/postman_icon.png"


// ------------------- Language -------------------------
import js from "../assets/icons/js_icon.png"
import c from "../assets/icons/c_icon.png"


// ------------------- Tools -------------------------
import vercel from "../assets/icons/vercel_icon.png"
import netlify from "../assets/icons/netlify_icon.png"
import vscode from "../assets/icons/vscode_icon.png"
import git from "../assets/icons/git_icon.png"
import github from "../assets/icons/github_icon.png"





export const skills = [{
    title: "Frontend",
    tools: [{
        techStack: "HTML5",
        icon: html
    }, {
        techStack: "CSS3",
        icon: css
    },
    {
        techStack: "Photoshop",
        icon: psd
    },
    {
        techStack: "Redux",
        icon: redux
    }, {
        techStack: "React_v19",
        icon: react
    }, {
        techStack: "Vite",
        icon: vite
    }, {
        techStack: "Tailwind CSS",
        icon: tailwind
    }]
},
{
    title: "Backend",
    tools: [{
        techStack: "NodeJS",
        icon: node
    }, {
        techStack: "ExpressJS",
        icon: express
    },
    {
        techStack: "MongoDB",
        icon: mongo
    },
    {
        techStack: "Postman",
        icon: postman
    }]
},

{
    title: "Languages",
    tools: [{
        techStack: "JavaScript",
        icon: js
    }, {
        techStack: "C Language",
        icon: c
    }]
},
{
    title: "Tools",
    tools: [{
        techStack: "Vercel",
        icon: vercel
    }, {
        techStack: "Netlify",
        icon: netlify
    },
    {
        techStack: "Git",
        icon: git
    },
    {
        techStack: "GitHub",
        icon: github
    },
    {
        techStack: "VS Code",
        icon: vscode
    }]
}]




// ======================================= Company Experience Section ====================================================

// Logo
import bevarc from "../assets/company_logo/bevarc_logo.png"
import testunity from "../assets/company_logo/testunity_logo.jpeg"

export const experiencesData = [

    {
        id: 1,
        cmpyName: "TestUnity",
        cmpyLogo: testunity,
        role: "Software Developer Intern",
        duration: "July 2025 - Present",
        description: "I am currently working as a Full Stack Developer Intern at TestUnity, where I primarily work with the Next.js and TypeScript tech stack to build responsive and user-friendly web pages. My role involves developing features, fixing bugs across both frontend and backend, and working with AWS services like Amplify and EC2 for deployment and hosting. On the backend, I contribute using Node.js and manage databases with MongoDB, ensuring scalable and efficient application performance.",
        certificateLink: "#",
        certificateBtn: "View Certificate",
        employmentType: "Internship",
        workTime: "Full Time",
        workMode: "On-site",
        location: "Bengaluru, Karnataka, India",
        techStack: ["NextJs", "ReactJs", "TypeScript", "Nodejs", "MongoDB", "Git", "BitBucket", "Tailwind CSS"],
        glowColor: "rgb(255, 165, 0)"
    },

    {
        id: 2,
        cmpyName: "Bevarc Construction Pvt. Ltd.",
        cmpyLogo: bevarc,
        role: "Software Developer Intern",
        duration: "January 2025 - February 2025",
        description: "I completed a one month internship at Bevarc Construction Pvt. Ltd. as a Software Developer Intern. I built and tested web applications using React.js, worked with teams to create user-friendly designs, and improved performance through regular updates. I followed modern coding practices to make the apps fast and easy to maintain.",
        certificateLink: "https://drive.google.com/file/d/1pXJcaQwqGwihp0aUtttSPqgiACIgxYOx/view?usp=sharing",
        certificateBtn: "View Certificate",
        employmentType: "Internship",
        workTime: "Full Time",
        workMode: "Online",
        location: "Patna, Bihar, India",
        techStack: ["ReactJs", "TypeScript", "Shadcn", "Git", "GitHub", "Tailwind CSS"],
        glowColor: "rgb(255, 165, 0)"
    }

]





// ============================================= Project Section =======================================================

import LMS from "../assets/project_thumbnail/lms_thumbnail.png"
import codReview from "../assets/project_thumbnail/codereview_thumbnail.png"
import hms from "../assets/project_thumbnail/hms_thumbnail.png"
import Chatbot from "../assets/project_thumbnail/chatbotai_thumbnail.png"


export const projectsList = [
    {
        id: 1,
        thumbnail: LMS,
        projectName: "Ed-Tech Web App",
        projectSubTitle: `A full-stack Learning Management System built with the MERN stack (MongoDB, Express, React, Node.js). This platform enables students to enroll in courses, track progress, and interact with instructors, while instructors can create and manage courses, lectures, and student engagement.`,
        liveBtn: "Live",
        liveLink: "https://lms-client-33e7.onrender.com/",
        gitHubBtn: "Code",
        githubLink: "https://github.com/sarvajeet12/LMS",
        description: [{
            _id: 1,
            info: `Developed and implemented authentication authorization system ensuring secure access for students,
            instructors, and admins.`
        }, {
            _id: 2,
            info: `Integrated a seamless course management publishing platform, enabling course creation, editing, filtering, and
            structured lecture uploads.`
        }, {
            _id: 3,
            info: `Optimized course purchase flow with a secure payment gateway, enhancing user experience and transactional
            reliability.`
        }],
        techStack: ["ReactJs", "Nodejs", "ExpressJs", "MongoDB", "Redux Toolkit", "Tailwind CSS", "React Router", "React Toastify", "React Slick", "Axios", "JWT", "Cloudinary", "Razorpay", "Nodemailer"],
        glowColor: "rgb(255, 165, 0)"
    },
    {
        id: 2,
        thumbnail: codReview,
        projectName: "AI Code Reviewer",
        projectSubTitle: `Welcome to AI Code Reviewer, a full-stack MERN application that empowers developers to write cleaner, smarter, and more efficient code with instant AI-powered feedback. This project leverages Google Gemini AI for advanced code review, linting, and best-practice suggestions, all wrapped in a modern, beautiful UI.`,
        liveBtn: "Live",
        liveLink: "https://code-reviewer-client-b0dn.onrender.com/",
        gitHubBtn: "Code",
        githubLink: "https://github.com/sarvajeet12/Code-Reviewer",
        description: [{
            _id: 1,
            info: `Instant Smart Feedback: Just paste your code and get real-time AI suggestions to fix bugs, improve performance, and follow best coding practices.`
        }, {
            _id: 2,
            info: `Modern & Smooth Interface: Enjoy a sleek UI built with React, Tailwind, and cool animations that make code reviewing fun and easy.`
        }, {
            _id: 3,
            info: `Performance & Security Checks: The AI not only spots bugs but also flags security risks and slow code, helping you write safer and faster applications.`
        }],
        techStack: ["ReactJs", "Nodejs", "ExpressJs", "Vite", "PrismJS", "Tailwind CSS", "React Markdown", "Lottie Animations", "Google Gemini AI API", "Axios", "Dotenv", "Cors"],
        glowColor: "rgb(0, 255, 0)"
    },
    {
        id: 3,
        thumbnail: hms,
        projectName: "Hospital Management System",
        projectSubTitle: `Hospital Management System (HMS) is a full-stack web application designed to streamline and digitize hospital operations. Built with the powerful MERN stack (MongoDB, Express.js, React.js, Node.js), HMS provides a seamless experience for patients, doctors, and administrators. The system enables appointment scheduling, doctor management, secure authentication, messaging, and more—all in a modern, responsive interface.`,
        liveBtn: "Live",
        liveLink: "https://hospital-mangement-system-app.onrender.com/",
        gitHubBtn: "Code",
        githubLink: "https://github.com/sarvajeet12/Hospital-Mangement-System-App",
        description: [{
            _id: 1,
            info: `Developed a hospital management system with distinct user roles: Admin and Patient.`
        }, {
            _id: 2,
            info: `Implemented secure authentication and authorization, including email OTP verification.`
        }, {
            _id: 3,
            info: `Enabled patient-staff interactions, appointment booking, doctor filtering, and real-time status tracking`
        },
        {
            _id: 4,
            info: `Designed admin functionalities for managing appointments, doctors, and patient inquiries`
        }],
        techStack: ["ReactJs", "Nodejs", "ExpressJs", "Vite", "MongoDB", "CSS3", "React Router Dom", "React Icons", "React Multi Carousel", "React Toastify", "Cloudinary", "Nodemailer", "Zod", "JWT", "dotenv", "CORS", "Cookie-Parser", "Express-FileUpload"],
        glowColor: "rgb(0, 191, 255)"
    },
    {
        id: 3,
        thumbnail: Chatbot,
        projectName: "ChatBot Web App",
        projectSubTitle: `This is a full-stack, modern, and scalable chatbot platform built using the MERN stack (MongoDB, Express.js, React, Node.js). The app supports secure OTP-based authentication, real-time chat, and a clean, responsive UI.`,
        liveBtn: "Live",
        liveLink: "https://chatbot-c1at.onrender.com/",
        gitHubBtn: "Code",
        githubLink: "https://github.com/sarvajeet12/ChatBot",
        description: [{
            _id: 1,
            info: `Developed a chatbot integrating user authentication, authorization, and login functionality.`
        }, {
            _id: 2,
            info: `Implemented secure email OTP verification to enhance user account security.`
        }, {
            _id: 3,
            info: `Enabled chat management features, including chat creation, selection, deletion, and prompt search.`
        },
        {
            _id: 4,
            info: `Integrated Gemini API to provide dynamic AI-powered responses.`
        }],
        techStack: ["ReactJs", "Nodejs", "ExpressJs", "Vite", "MongoDB", "CSS3", "React Router Dom", "React Icons", "OTP Generator", "React Toastify", "Gmail SMTP via Nodemailer", "JWT", "dotenv", "CORS", "Axios"],
        glowColor: "rgb(255, 0, 0)"
    }
]


// ============================================= Education Section =======================================================

export const educationData = [
    {
        id: 1,
        degree: "Bachelor of Technology (B.Tech)",
        institution: "Gaya College of Engineering, Gaya",
        field: "Computer Science & Engineering",
        years: "2021 - 2025",
        grade: "8.02 CGPA",
        description:
            "I completed my B.Tech in Computer Science and Engineering, gaining strong skills in data structures, algorithms, and software development. I worked on web projects, explored operating systems and AI, and developed a problem-solving mindset. This degree built my technical foundation to create scalable, real-world applications with a user-focused approach.",
    },
    {
        id: 2,
        degree: "12th Grade (Intermediate/HSC)",
        institution: "Golden Bell Public School",
        field: "Science",
        years: "2019-2020",
        grade: "77.4%",
        description:
            "I completed my class 12 education from Golden Bell Public School, BiharSharif, Nalanda (Bihar) under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    },
    {
        id: 3,
        degree: "10th Grade (Matriculation/SSC)",
        institution: "Kendriya Vidyalaya",
        field: "All Subject",
        years: "2017-2018",
        grade: "67.7%",
        description:
            "I completed my class 10 education from Kendriya Vidyalaya, Katni (MP) under the CBSE board, where I studied Hindi, English, Science, Social Science, Math.",
    }
]




// ============================================= Certificate Section =======================================================
import Microsoft from "../assets/certificate_image/microsoft.jpg";
import Edunet from "../assets/certificate_image/edunet.jpg";
import Bevarc from "../assets/certificate_image/bevarc.png";
import Salesforce from "../assets/certificate_image/salesforce.jpg";
import Cisco from "../assets/certificate_image/cisco.jpg";


export const certificates = [
    {
        id: 1,
        title: "Microsoft Certified: Azure AI Engineer Associate",
        issuer: "Microsoft",
        date: "May 2025",
        imageUrl: `https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/details/certifications/`,
        image: Microsoft
    }, {
        id: 2,
        title: "Full Stack Web Development",
        issuer: "Edunet Foundation",
        date: "April 2024",
        imageUrl: `https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/details/certifications/`,
        image: Edunet
    }, {
        id: 3,
        title: "Software Developer Intern",
        issuer: "Bevarc Constructor Pvt. Ltd.",
        date: "February 2025",
        imageUrl: `https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/details/certifications/`,
        image: Bevarc
    }, {
        id: 4,
        title: "Salesforce developer virtual internship",
        issuer: "SmartInternz",
        date: "February 2024",
        imageUrl: `https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/details/certifications/`,
        image: Salesforce
    }, {
        id: 5,
        title: "Cisco AICTE Virtual Internship Program in Networking",
        issuer: "Cisco Networking Academy",
        date: "June 2024",
        imageUrl: `https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/details/certifications/`,
        image: Cisco
    },



]
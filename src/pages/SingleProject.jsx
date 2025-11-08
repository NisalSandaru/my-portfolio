import { useParams, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import moneymateImg from "@/assets/projectImgs/moneymate.png";
import moneymateVideo from "@/assets/projectVideos/moneymate.mp4";

// ✅ Project data
const projects = [
  {
    id: 1,
    title: "💰 MoneyMate – Personal Finance Manager",
    description:
      "MoneyMate is a full-stack personal finance manager that helps users track income, expenses, and visualize financial insights — all in one place. Built with React + Vite + TailwindCSS (Frontend) and Spring Boot + PostgreSQL (Backend).",
    image: moneymateImg,
    video: moneymateVideo,
    tags: [
      "React",
      "Vite",
      "TailwindCSS",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Docker",
      "Cloudinary",
      "Brevo",
      "Neon.tech",
      "Railway",
    ],
    frontendGithubUrl: "https://github.com/NisalSandaru/moneymanager_Frontend",
    backendGithubUrl: "https://github.com/NisalSandaru/moneymanager_Backend",
    liveUrl: "https://devnisalmoneymate.netlify.app/",
    builtWith:
      "React, TailwindCSS, Vite, Spring Boot, PostgreSQL, Docker, Cloudinary, Brevo, Neon.tech, Railway",
    features: [
      "JWT-based Register/Login with Email Activation",
      "Manage Income, Expenses, and Categories with Validation",
      "Dashboard Analytics (Recharts)",
      "Excel Download & Automated Email Reports",
      "Profile Image Upload via Cloudinary",
      "Daily Email & Notification Service",
      "Containerized Deployment using Docker",
    ],
    learnings: [
      "Gained hands-on experience in designing and developing a full-stack system with React and Spring Boot.",
      "Improved understanding of REST API design and secure data communication with JWT authentication.",
      "Learned Docker containerization and cloud-based deployment using Railway, Netlify, and Neon.tech.",
      "Enhanced knowledge of integrating email automation and image hosting services like Brevo and Cloudinary.",
    ],
    deployment: [
      "Frontend hosted on Netlify",
      "Backend deployed on Railway",
      "Database hosted on Neon.tech (PostgreSQL)",
      "Images stored with Cloudinary",
      "Email automation handled by Brevo",
    ],
  },
];

export const SingleProject = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-muted-foreground">
        <p>Project not found 😕</p>
        <Link to="/" className="mt-4 text-primary hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Theme & Navbar */}
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      {/* Content */}
      <main className="container mx-auto max-w-4xl py-24 px-6">
        {/* Back button */}
        <Link
          to="/"
          className="flex items-center gap-2 text-primary mb-8 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-muted-foreground mb-8">{project.description}</p>

        {/* Image or video */}
        {project.video ? (
          <video
            src={project.video}
            controls
            className="w-full rounded-lg shadow-lg mb-8"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg shadow-lg mb-8"
          />
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Built With */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">🧩 Built With</h3>
          <p className="text-muted-foreground">{project.builtWith}</p>
        </div>

        {/* Features */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">⚙️ Key Features</h3>
          <ul className="list-disc list-inside text-muted-foreground">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Deployment */}
        {project.deployment && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">🚀 Deployment Details</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {project.deployment.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings */}
        {project.learnings && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3">🧠 Challenges & Learnings</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3">🔗 Project Links</h3>
          <div className="flex flex-wrap gap-5 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            )}
            {project.frontendGithubUrl && (
              <a
                href={project.frontendGithubUrl}
                target="_blank"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={18} /> Frontend Code
              </a>
            )}
            {project.backendGithubUrl && (
              <a
                href={project.backendGithubUrl}
                target="_blank"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={18} /> Backend Code
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

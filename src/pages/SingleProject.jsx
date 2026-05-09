import { useParams, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar.jsx";

import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
} from "lucide-react";

// ================= MONEYMATE =================

import moneymateImg from "@/assets/projectImgs/moneymate.png";
import moneymateVideo from "@/assets/projectVideos/moneymate.mp4";

// ================= SALON =================

import salonImg from "@/assets/projectImgs/moneymate.png";
import salonVideo from "@/assets/projectVideos/moneymate.mp4";

import customerDashboardImg from "@/assets/projectImgs/moneymate.png";
import ownerDashboardImg from "@/assets/projectImgs/moneymate.png";
import architectureImg from "@/assets/architectureImg/salon_micro_arc.png";

// ================= PROJECT DATA =================

const projects = [
  // ======================================================
  // SALON PROJECT
  // ======================================================

  {
    id: 1,

    title: "✂️ Salon Booking Microservices Platform",

    description:
      "A scalable multi-role salon booking platform built using Spring Boot microservices architecture with API Gateway, Eureka Service Discovery, JWT authentication, RabbitMQ, Docker, and React frontend.",

    image: salonImg,

    video: salonVideo,

    tags: [
      "Spring Boot",
      "Microservices",
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "Docker",
      "RabbitMQ",
      "JWT",
      "MySQL",
      "WebSockets",
      "Spring Cloud",
      "API Gateway",
      "Eureka",
      "Keycloak",
      "OpenFeign",
      "Docker Compose",
      "Jib",
      "Cloudinary",
      "Axios",
      "Formik",
    ],

    frontendGithubUrl:
      "https://github.com/yourusername/salon-frontend",

    backendGithubUrl:
      "https://github.com/yourusername/salon-microservices",

    liveUrl: "",

    documentationUrl: "",

    builtWith:
      "React, Redux Toolkit, TailwindCSS, Axios, Formik, Spring Boot, Spring Security, JWT Authentication, Keycloak, Spring Cloud, Eureka Service Discovery, API Gateway, OpenFeign, RabbitMQ, WebSockets, Docker, Docker Compose, Jib, MySQL, Cloudinary",

    features: [
      "Customer appointment booking system",
      "Salon owner dashboard and service management",
      "Admin management panel",
      "Secure authentication and authorization using Keycloak and JWT",
      "RabbitMQ asynchronous notifications",
      "Real-time notifications using WebSockets",
      "Inter-service communication using OpenFeign clients",
      "API Gateway centralized routing",
      "Dockerized microservices deployment using Jib and Docker Compose",
      "Cloudinary image upload support",
      "Role-based authorization",
      "Real-time booking updates",
    ],

    deployment: [
      "Frontend deployed on Netlify",
      "Backend containerized using Docker",
      "Cloudinary used for image storage",
      "Microservices architecture configured with Eureka discovery",
      "Docker Compose used for local orchestration",
    ],

    learnings: [
      "Learned distributed system architecture using Spring Cloud.",
      "Improved understanding of microservices communication patterns.",
      "Implemented asynchronous communication with RabbitMQ.",
      "Learned API Gateway and centralized authentication handling.",
      "Gained experience with Docker-based deployment workflows.",
      "Improved understanding of scalable backend architecture.",
      "Learned service discovery and centralized routing concepts.",
    ],

    roles: [
      {
        title: "Customer Panel",

        features: [
          "Browse salons and services",
          "Book appointments online",
          "Manage bookings",
          "Receive notifications",
          "Payment integration support",
          "Real-time booking updates using WebSockets",
        ],

        image: customerDashboardImg,

        video: "",
      },

      {
        title: "Salon Owner Dashboard",

        features: [
          "Manage salon services",
          "View customer bookings",
          "Dashboard analytics",
          "Manage appointment schedules",
          "Update salon profile",
          "Manage salon availability",
        ],

        image: ownerDashboardImg,

        video: "",
      },

      {
        title: "Admin Panel",

        features: [
          "Manage users and salons",
          "Platform administration",
          "System monitoring",
          "Role and access management",
          "Microservice management",
          "Centralized authentication handling",
        ],

        image: "",

        video: "",
      },
    ],

    architecture: {
      title: "🏗️ Microservices Architecture",

      image: architectureImg,

      video: "",

      description:
        "System architecture built using Spring Cloud microservices with Eureka, API Gateway, RabbitMQ, JWT authentication, Docker, OpenFeign, and WebSockets.",
    },
  },

  // ======================================================
  // MONEYMATE
  // ======================================================

  {
    id: 2,

    title: "💰 MoneyMate – Personal Finance Manager",

    description:
      "MoneyMate is a full-stack personal finance manager that helps users track income, expenses, and visualize financial insights.",

    image: moneymateImg,

    video: moneymateVideo,

    tags: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Cloudinary",
      "Railway",
      "JWT",
      "TailwindCSS",
      "Recharts",
      "Brevo",
      "Neon.tech",
    ],

    frontendGithubUrl:
      "https://github.com/NisalSandaru/moneymanager_Frontend",

    backendGithubUrl:
      "https://github.com/NisalSandaru/moneymanager_Backend",

    liveUrl:
      "https://devnisalmoneymate.netlify.app/",

    documentationUrl: "",

    builtWith:
      "React, TailwindCSS, Vite, Spring Boot, PostgreSQL, Docker, Cloudinary, Brevo, Neon.tech, Railway",

    features: [
      "JWT authentication",
      "Expense management",
      "Dashboard analytics",
      "Excel reports",
      "Cloudinary image upload",
      "Daily email notifications",
      "Category management",
      "Financial analytics charts",
    ],

    deployment: [
      "Frontend hosted on Netlify",
      "Backend deployed on Railway",
      "Database hosted on Neon.tech",
      "Cloudinary for image hosting",
    ],

    learnings: [
      "Learned full-stack architecture",
      "Improved JWT authentication knowledge",
      "Learned cloud deployment workflows",
      "Improved REST API design knowledge",
    ],
  },
];

// ================= COMPONENT =================

export const SingleProject = () => {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === parseInt(id)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-muted-foreground">
        <p>Project not found 😕</p>

        <Link
          to="/"
          className="mt-4 text-primary hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main className="container mx-auto max-w-6xl py-24 px-6">

        {/* BACK BUTTON */}

        <Link
          to="/"
          className="flex items-center gap-2 text-primary mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* TITLE */}

        <h1 className="text-4xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
          {project.description}
        </p>

        {/* MAIN VIDEO / IMAGE */}

        {project.video ? (
          <video
            src={project.video}
            controls
            className="w-full rounded-2xl shadow-xl mb-10 border"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-xl mb-10 border"
          />
        ) : null}

        {/* TAGS */}

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUILT WITH */}

        {project.builtWith && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              🧩 Built With
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {project.builtWith}
            </p>
          </div>
        )}

        {/* FEATURES */}

        {project.features && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              ⚙️ Key Features
            </h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* ROLES */}

        {project.roles && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">
              👥 System Roles
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {project.roles.map((role, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-6 bg-card shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* TITLE */}

                  <h4 className="font-semibold text-xl mb-4">
                    {role.title}
                  </h4>

                  {/* VIDEO */}

                  {role.video ? (
                    <video
                      src={role.video}
                      controls
                      className="w-full h-56 object-cover rounded-xl shadow-lg mb-5 border"
                    />
                  ) : role.image ? (
                    <img
                      src={role.image}
                      alt={role.title}
                      className="w-full h-56 object-cover rounded-xl shadow-lg mb-5 border"
                    />
                  ) : null}

                  {/* FEATURES */}

                  {role.features && (
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 text-sm">
                      {role.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ARCHITECTURE */}

        {project.architecture && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">
              {project.architecture.title}
            </h3>

            {project.architecture.video ? (
              <video
                src={project.architecture.video}
                controls
                className="w-full rounded-2xl shadow-xl mb-6 border"
              />
            ) : project.architecture.image ? (
              <img
                src={project.architecture.image}
                alt={project.architecture.title}
                className="w-full rounded-2xl shadow-xl mb-6 border"
              />
            ) : null}

            <p className="text-muted-foreground leading-relaxed">
              {project.architecture.description}
            </p>
          </div>
        )}

        {/* DEPLOYMENT */}

        {project.deployment && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              🚀 Deployment Details
            </h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {project.deployment.map((d, index) => (
                <li key={index}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        {/* LEARNINGS */}

        {project.learnings && (
          <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-4">
              🧠 Challenges & Learnings
            </h3>

            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {project.learnings.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>
          </div>
        )}

        {/* LINKS */}

        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-5">
            🔗 Project Links
          </h3>

          <div className="flex flex-wrap gap-4">

            {/* LIVE */}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}

            {/* FRONTEND */}

            {project.frontendGithubUrl && (
              <a
                href={project.frontendGithubUrl}
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-secondary transition"
              >
                <Github size={18} />
                Frontend Code
              </a>
            )}

            {/* BACKEND */}

            {project.backendGithubUrl && (
              <a
                href={project.backendGithubUrl}
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-secondary transition"
              >
                <Github size={18} />
                Backend Code
              </a>
            )}

            {/* DOCUMENTATION */}

            {project.documentationUrl && (
              <a
                href={project.documentationUrl}
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl border hover:bg-secondary transition"
              >
                <FileText size={18} />
                Documentation
              </a>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
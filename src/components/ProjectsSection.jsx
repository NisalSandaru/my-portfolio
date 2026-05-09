import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import moneymateImg from "@/assets/projectImgs/moneymate.png";

import salonImg from "@/assets/projectImgs/moneymate.png";

const projects = [
  {
    id: 1,
    title: "Salon Booking Microservices Platform",
    description:
      "A scalable salon booking platform built using Spring Boot microservices architecture with API Gateway, Eureka Service Discovery, JWT authentication, RabbitMQ, Docker, and React frontend.",
    image: salonImg,
    tags: [
      "Spring Boot",
      "Microservices",
      "React",
      "Docker",
      "RabbitMQ",
      "JWT",
      "MySQL",
      "Redux Toolkit",
      "keycloak",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/yourgithub/salon-booking-system",
    features: [
      "Microservices architecture with API Gateway and Eureka",
      "JWT authentication and role-based authorization",
      "Salon owner dashboard and admin panel",
      "Real-time notifications with WebSockets",
      "Booking and payment management system",
      "Dockerized services with cloud deployment support",
    ],
  },

  {
    id: 2,
    title: "MoneyMate - Personal Finance Manager",
    description:
      "A full-stack personal finance management application for tracking income, expenses, categories, and financial analytics with secure JWT authentication.",
    image: moneymateImg,
    tags: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "TailwindCSS",
      "JWT",
      "Docker",
      "Cloudinary",
      "Recharts",
    ],
    demoUrl: "https://devnisalmoneymate.netlify.app/",
    githubUrl: "https://github.com/yourgithub/moneymate",
    features: [
      "Income and expense tracking",
      "JWT authentication and email verification",
      "Interactive financial analytics dashboard",
      "Excel export and email reporting",
      "Responsive modern UI design",
      "Cloud image upload support",
    ],
  },

  {
    id: 3,
    title: "Adventure Park Management System",
    description:
      "A management system developed for handling adventure park bookings, employee attendance, invoices, and activity management.",
    image: "/projects/asura-valley.png",
    tags: [
      "Java",
      "Swing",
      "MySQL",
      "Desktop Application",
      "JDBC",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/yourgithub/asura-valley-system",
    features: [
      "Employee attendance management",
      "Invoice and booking handling",
      "Activity scheduling system",
      "Admin management dashboard",
      "Database-driven desktop application",
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                      to={`/project/${project.id}`}
                      className=" text-indigo-300 hover:text-primary transition-colors duration-300"
                    >
                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Link
                      to={`/project/${project.id}`}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NisalSandaru"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

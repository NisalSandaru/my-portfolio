import { useParams, Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar.jsx";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import moneymateImg from "@/assets/projectImgs/moneymate.png";
import moneymateVideo from "@/assets/projectVideos/moneymate.mp4";

// Your project data (you can import from a shared file)
const projects = [
    {
        id: 1,
        title: "Money Manager",
        description: "MoneyMate is a full-stack personal finance manager built with React + Vite (Frontend) and Spring Boot (Backend).",
        image: moneymateImg,
        video: moneymateVideo,
        tags: ["React", "TailwindCSS", "Spring Boot", "Java"],
        githubUrl: "https://github.com/yourgithub/moneymate",
        demoUrl: "",
        features: [
            "Expense tracking and budgeting",
            "User authentication with JWT",
            "Interactive charts for financial analytics",
            "Responsive and intuitive UI design",
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
            <ThemeToggle />
            <StarBackground />
            <Navbar />

            <main className="container mx-auto max-w-4xl py-24 px-6">
                <Link
                    to="/"
                    className="flex items-center gap-2 text-primary mb-8 hover:underline"
                >
                    <ArrowLeft size={16} /> Back to Projects
                </Link>

                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-muted-foreground mb-8">{project.description}</p>

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

                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc list-inside text-muted-foreground mb-8">
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                <div className="flex space-x-4">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                        >
                            <Github size={20} /> GitHub
                        </a>
                    )}
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
                        >
                            <ExternalLink size={20} /> Live Demo
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
};

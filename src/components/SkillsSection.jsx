import { useState } from "react";
import { cn } from "@/lib/utils";
import htmllogo from "@/assets/logos/html5.svg";
import javalogo from "@/assets/logos/javalogo.png";
import javascriptlogo from "@/assets/logos/javascript.svg";
import phplogo from "@/assets/logos/php.svg";
import csslogo from "@/assets/logos/css.svg";
import springbootlogo from "@/assets/logos/springboot.svg";
import hibernatelogo from "@/assets/logos/hibernate.svg";
import springlogo from "@/assets/logos/spring.svg";
import reactlogo from "@/assets/logos/react.svg";
import mysqllogo from "@/assets/logos/mysql.svg";
import mongologo from "@/assets/logos/mongodb.svg";
import postgresslogo from "@/assets/logos/postgresql.svg";
import gitlogo from "@/assets/logos/git.svg";
import githublogo from "@/assets/logos/github.svg";
import dockerlogo from "@/assets/logos/docker.svg";
import intellijlogo from "@/assets/logos/intellijidea.svg";
import netbeanslogo from "@/assets/logos/apachenetbeanside.svg";
import vscodelogo from "@/assets/logos/vscode.png";
import ooplogo from "@/assets/logos/oop.png";
import mvclogo from "@/assets/logos/mvc.png";
import restapilogo from "@/assets/logos/api.png";
import micrologo from "@/assets/logos/microser.png";
import kafkalogo from "@/assets/logos/apachekafka.svg";
import eurekalogo from "@/assets/logos/euraka.png";
import agilelogo from "@/assets/logos/agile.png";
import typeScriptlogo from "@/assets/logos/typescript.svg";
import bootstraplogo from "@/assets/logos/bootstrap.svg";
import tailwindlogo from "@/assets/logos/tailwindcss.svg";
import shadcnlogo from "@/assets/logos/shadcnui.svg";
import reduxlogo from "@/assets/logos/redux.svg";
import axioslogo from "@/assets/logos/axios.svg";

// Skills data with logos (add matching SVGs to /public/logos)
const skills = [
    // Programming Languages
    { name: "Java", logo: javalogo, category: "programming" },
    { name: "JavaScript", logo: javascriptlogo, category: "programming" },
    { name: "TypeScript", logo: typeScriptlogo, category: "programming" },
    { name: "PHP", logo: phplogo, category: "programming" },
    { name: "HTML5", logo: htmllogo, category: "programming" },
    { name: "CSS3", logo: csslogo, category: "programming" },

    // Frameworks & Libraries
    { name: "Spring Boot", logo: springbootlogo, category: "frameworks" },
    { name: "Hibernate", logo: hibernatelogo, category: "frameworks" },
    { name: "Spring Data JPA", logo: springlogo, category: "frameworks" },
    { name: "React", logo: reactlogo, category: "frameworks" },
    { name: "React Native", logo: reactlogo, category: "frameworks" },
    { name: "Bootstrap", logo: bootstraplogo, category: "frameworks" },
    { name: "Tailwind CSS", logo: tailwindlogo, category: "frameworks" },
    { name: "shadcn/ui", logo: shadcnlogo, category: "frameworks" },
    { name: "Redux", logo: reduxlogo, category: "frameworks" },
    { name: "Axios", logo: axioslogo, category: "frameworks" },

    // Databases
    { name: "MySQL", logo: mysqllogo, category: "databases" },
    { name: "MongoDB", logo: mongologo, category: "databases" },
    { name: "PostgreSQL", logo: postgresslogo, category: "databases" },

    // Tools & Platforms
    { name: "Git", logo: gitlogo, category: "tools" },
    { name: "GitHub", logo: githublogo, category: "tools" },
    { name: "Docker", logo: dockerlogo, category: "tools" },
    { name: "IntelliJ IDEA", logo: intellijlogo, category: "tools" },
    { name: "NetBeans", logo: netbeanslogo, category: "tools" },
    { name: "VS Code", logo: vscodelogo, category: "tools" },

    // Core Concepts
    { name: "OOP", logo: ooplogo, category: "concepts" },
    { name: "MVC Architecture", logo: mvclogo, category: "concepts" },
    { name: "REST APIs", logo: restapilogo, category: "concepts" },
    { name: "Microservices", logo: micrologo, category: "concepts" },
    { name: "Kafka (Basic)", logo: kafkalogo, category: "concepts" },
    { name: "Netflix Eureka (Basic)", logo: eurekalogo, category: "concepts" },
    { name: "Agile Development", logo: agilelogo, category: "concepts" },
];


const categories = ["all", "programming", "frameworks", "databases", "tools", "concepts"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Technical Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-xl shadow-xs flex flex-col items-center justify-center gap-3 card-hover hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-12 h-12 object-contain drop-shadow-[0_0_8px_rgba(0,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(0,255,255,0.9)] transition-all duration-300"
                            />
                            <p className="text-sm font-medium text-center">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

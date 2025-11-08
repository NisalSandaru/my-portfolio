// import { useEffect, useState } from "react";
//
// export const StarBackground = () => {
//     const [stars, setStars] = useState([]);
//     const [meteors, setMeteors] = useState([]);
//     const [isDarkMode, setIsDarkMode] = useState(false);
//
//     useEffect(() => {
//         generateStars();
//         generateMeteors();
//
//         const handleResize = () => generateStars();
//         window.addEventListener("resize", handleResize);
//
//         const handleMouseMove = (e) => {
//             const x = (e.clientX / window.innerWidth - 0.5) * 40;
//             const y = (e.clientY / window.innerHeight - 0.5) * 40;
//             document.querySelector(".space-background")?.style.setProperty(
//                 "transform",
//                 `translate(${x}px, ${y}px)`
//             );
//         };
//         window.addEventListener("mousemove", handleMouseMove);
//
//         const observer = new MutationObserver(() => {
//             const isDark = document.documentElement.classList.contains("dark");
//             setIsDarkMode(isDark);
//         });
//         observer.observe(document.documentElement, {
//             attributes: true,
//             attributeFilter: ["class"],
//         });
//
//         return () => {
//             window.removeEventListener("resize", handleResize);
//             window.removeEventListener("mousemove", handleMouseMove);
//             observer.disconnect();
//         };
//     }, []);
//
//     const generateStars = () => {
//         const count = Math.floor((window.innerWidth * window.innerHeight) / 3000);
//         const colors = [
//             "rgba(255,255,255,0.9)",
//             "rgba(173,216,230,0.9)",
//             "rgba(255,215,180,0.9)",
//             "rgba(180,200,255,0.9)",
//         ];
//         const newStars = Array.from({ length: count }, (_, i) => ({
//             id: i,
//             size: Math.random() * 2 + 0.5,
//             x: Math.random() * 100,
//             y: Math.random() * 100,
//             color: colors[Math.floor(Math.random() * colors.length)],
//             opacity: Math.random() * 0.6 + 0.5,
//             duration: Math.random() * 3 + 2,
//         }));
//         setStars(newStars);
//     };
//
//     const generateMeteors = () => {
//         const newMeteors = Array.from({ length: 10 }, (_, i) => ({
//             id: i,
//             size: Math.random() * 2 + 1,
//             x: Math.random() * 100,
//             y: Math.random() * 25,
//             delay: Math.random() * 15,
//             duration: Math.random() * 4 + 4,
//         }));
//         setMeteors(newMeteors);
//     };
//
//     return (
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 space-background transition-transform duration-500 will-change-transform">
//             <div
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                     isDarkMode
//                         ? "bg-[radial-gradient(circle_at_25%_30%,rgba(139,92,246,0.4),transparent_70%),radial-gradient(circle_at_75%_70%,rgba(56,189,248,0.4),transparent_80%)]"
//                         : "bg-[radial-gradient(circle_at_30%_20%,rgba(255,220,150,0.4),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(173,216,230,0.4),transparent_80%)]"
//                 }`}
//             />
//
//             {/* Stars */}
//             {stars.map((s) => (
//                 <div
//                     key={s.id}
//                     className="absolute rounded-full animate-twinkle"
//                     style={{
//                         width: `${s.size}px`,
//                         height: `${s.size}px`,
//                         left: `${s.x}%`,
//                         top: `${s.y}%`,
//                         backgroundColor: s.color,
//                         opacity: s.opacity,
//                         filter: `drop-shadow(0 0 6px ${s.color})`,
//                         animationDuration: `${s.duration}s`,
//                     }}
//                 />
//             ))}
//
//             {/* Meteors */}
//             {meteors.map((m) => (
//                 <div
//                     key={m.id}
//                     className="absolute animate-meteor"
//                     style={{
//                         width: `${m.size * 100}px`,
//                         height: `${m.size * 2}px`,
//                         left: `${m.x}%`,
//                         top: `${m.y}%`,
//                         animationDelay: `${m.delay}s`,
//                         animationDuration: `${m.duration}s`,
//                         background:
//                             "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,215,180,0.3) 100%)",
//                         borderRadius: "9999px",
//                         filter: "drop-shadow(0 0 8px rgba(255,255,255,0.7))",
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };



import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 6;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            });
        }

        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteor.size * 30 + "px",
                        height: meteor.size * 1 + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );
};
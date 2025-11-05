import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {Navbar} from "@/components/Navbar.jsx";

export const Home = () => {
  return (
      <div className={"min-h-screen bg-background text-foreground overflow-hidden"}>
          {/* Theme toggle */}
          <ThemeToggle />

          {/* Background Effects */}
          <StarBackground />

          {/* Navbar */}
          <Navbar />

          {/* Main content */}

          {/* footer */}
      </div>
  )
}



import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-mode", newTheme === "light");
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="fixed top-20 right-4 z-50 bg-navy-light/50 backdrop-blur-sm hover:bg-navy-light border border-slate-dark light-mode:bg-white/50 light-mode:hover:bg-slate-light/80 light-mode:border-slate"
    >
      {theme === "dark" ? <Sun className="h-5 w-5 text-teal" /> : <Moon className="h-5 w-5 text-teal" />}
    </Button>
  );
}

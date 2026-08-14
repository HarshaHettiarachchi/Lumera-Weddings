import {
  createContext,
  useState,
  useEffect,
} from "react";
import type { ReactNode } from "react";

// Props interface for ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

// Define the structure of Theme Context data
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create Theme Context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// ThemeProvider component manages theme state globally
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Create theme state
  // Get saved theme from localStorage or set default theme as light
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Save theme value to localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Function to switch between light and dark themes
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
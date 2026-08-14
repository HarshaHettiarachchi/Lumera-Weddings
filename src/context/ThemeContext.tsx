import {
  createContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Props interface for ThemeProvider component
// children means the components wrapped inside ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Define the structure of Theme Context data
interface ThemeContextType {
  theme: string; // Current theme name (light/dark)
  toggleTheme: () => void; // Function to change theme
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

    // If current theme is light change to dark
    // If current theme is dark change to light
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


  return (

    // Provide theme data and toggle function
    // to all child components using Context API
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      {/* Render wrapped components */}
      {children}

    </ThemeContext.Provider>
  );
}
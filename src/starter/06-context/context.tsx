import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export const ThemeProvider = ({ children, defaultTheme = "system" }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

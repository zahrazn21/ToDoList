import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextType {
  text: string | null;
  setText: (text: string) => void;
  login: (username: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string | null>(null);

  const login = (username: string) => setText(username);
  const logout = () => setText(null);

  return (
    <AppContext.Provider value={{ text, login, logout , setText }}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth باید فقط داخل AuthProvider استفاده شود.");
  }
  return context;
}

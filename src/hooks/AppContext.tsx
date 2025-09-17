import { createContext, useContext, useState, type ReactNode } from "react";

interface AppContextType {
  text: string | null;
  setText: (text: string) => void;
  isOpen: number | null;
  setIsOpen: (open: number) => void;
  calendarOpen: boolean | null;
  setCalendarOpen: (open: boolean) => void;
  openAddTask: (open: number) => void;
  openCakendar: (open: boolean) => void;
  id: string;
  setId: (i: string) => void;
  userId: string;
  setUserId: (i: string) => void;
  login: (username: string) => void;
  logout: () => void;
}
const AppContext = createContext<AppContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const [id, setId] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const [calendarOpen, setCalendarOpen] = useState<boolean | null>(null);

  const login = (username: string) => setText(username);
  const logout = () => setText(null);

  const openAddTask = (test: number) => {
    if (test === 1) {
      setIsOpen(1);
    } else {
      setIsOpen(2);
    }
    if (test === 3) {
      setIsOpen(3);
    } else {
      setIsOpen(4);
    }
  };

  const openCakendar = (input: boolean) => {
    if (input === true) {
      setCalendarOpen(true);
    } else {
      setCalendarOpen(false);
    }
  };
  return (
    <AppContext.Provider
      value={{
        openCakendar,
        text,
        login,
        logout,
        setText,
        isOpen,
        setIsOpen,
        openAddTask,
        id,
        setId,
        calendarOpen,
        setCalendarOpen,
        setUserId,
        userId
      }}
    >
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

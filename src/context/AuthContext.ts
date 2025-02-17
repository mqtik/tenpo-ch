import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  login: () => {
    localStorage.setItem("token", "fake-token-123");
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false });
  },
}));

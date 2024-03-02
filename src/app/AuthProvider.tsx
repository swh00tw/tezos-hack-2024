"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { UserInfo } from "@/mockdata/user";
import clientEnv from "@/clientEnv";
import { useRouter } from "next/navigation";

const AuthContext = createContext<{
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
  logout: () => void;
}>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export function AuthProvider({
  children,
  serverUser,
}: {
  children: React.ReactNode;
  serverUser: UserInfo | null;
}) {
  const router = useRouter();
  const [user, setUser] = useState<UserInfo | null>(serverUser);

  const logout = async () => {
    setUser(null);
    await fetch(`${clientEnv.NEXT_PUBLIC_BASE_URL}/api/auth/logout`);
    router.refresh();
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

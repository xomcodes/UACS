import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react'
export type UserType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<UserType | null>(null);
function AuthProvider({children}: {children: React.ReactNode}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const unProtectedRoutes = ["/sign-in", "/forgot-password", "/verify-email", "reset-password"]

  useEffect(() => {
    if (router.pathname !== "/" && !unProtectedRoutes.includes(router.pathname)) {
      localStorage.getItem("login-user")
        ? setIsLoggedIn(true)
        : router.push("/sign-in");
    }
  }, []);

  const data = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={data}>
      {(isLoggedIn || router.pathname === "/" || unProtectedRoutes.includes(router.pathname)) && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
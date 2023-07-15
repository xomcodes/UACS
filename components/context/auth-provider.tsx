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

  useEffect(() => {
    if (router.pathname !== "/") {
      localStorage.getItem("login-user")
        ? setIsLoggedIn(true)
        : router.push("/login");
    }
  }, []);

  const data = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={data}>
      {(isLoggedIn || router.pathname === "/") && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
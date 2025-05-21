import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email && password) {
      setUser({ name: "Usuário", email });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name, email, password) => {
    if (name && email && password) {
      setUser({ name, email });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

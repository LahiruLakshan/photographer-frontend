import { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser } from '../api/authService';
import { useQuery } from 'react-query';

interface AuthContextType {
  user: any;
  isLoading: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user, isLoading } = useQuery('currentUser', getCurrentUser, {
    retry: false,
  });

  const logout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
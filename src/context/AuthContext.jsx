import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getToken, setToken, removeToken, getUser, setUser, removeUser, clearAuth } from "../services/auth/authStorage";
import { authApi } from "../services/auth/authApi";
import toast from "react-hot-toast";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUserState] = useState(getUser());
  const [token, setTokenState] = useState(getToken());
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!token && !!user;

  useEffect(() => {
    const storedToken = getToken();
    const storedUser = getUser();
    if (storedToken && storedUser) {
      setTokenState(storedToken);
      setUserState(storedUser);
    }
    setLoading(false);
  }, []);

  const login = useCallback(async (email, password, remember = false) => {
    try {
      const res = await authApi.login({ email, password });
      const { token: newToken, user: userData } = res.data;
      setToken(newToken);
      setUserState(userData);
      if (remember) {
        setToken(newToken);
        setUser(userData);
      }
      toast.success("Login successful!");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  const register = useCallback(async (data) => {
    try {
      const res = await authApi.register(data);
      const { token: newToken, user: userData } = res.data;
      setToken(newToken);
      setUserState(userData);
      setToken(newToken);
      setUser(userData);
      toast.success("Account created!");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await authApi.logout();
    } catch {} finally {
      clearAuth();
      setTokenState(null);
      setUserState(null);
      toast.success("Logged out");
    }
  }, []);

  const forgotPassword = useCallback(async (email) => {
    try {
      await authApi.forgotPassword(email);
      toast.success("Reset link sent to your email");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  const resetPassword = useCallback(async (data) => {
    try {
      await authApi.resetPassword(data);
      toast.success("Password reset successful");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Reset failed";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  const verifyEmail = useCallback(async (token) => {
    try {
      await authApi.verifyEmail(token);
      toast.success("Email verified!");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Verification failed";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  const updateProfile = useCallback(async (data) => {
    try {
      const res = await authApi.updateProfile(data);
      const updatedUser = res.data.user || res.data;
      setUserState(updatedUser);
      setUser(updatedUser);
      toast.success("Profile updated!");
      return { success: true };
    } catch (err) {
      const msg = err.response?.data?.message || "Update failed";
      toast.error(msg);
      return { success: false, error: msg };
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user, token, loading, isAuthenticated,
      login, register, logout,
      forgotPassword, resetPassword, verifyEmail,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

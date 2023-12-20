import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData } from "../pages/register/validator";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValues {
  signIn: (data: LoginData) => void;
  signUp: (data: RegisterData) => void; 
  signOut: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("sorcery-contacts:token");

    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const signIn = async (data: LoginData) => {
    try {
      const response = await api.post("/login", data);
      console.log(response)
      const { token } = response.data
  
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("sorcery-contacts:token", token);
  
      navigate("profile");
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      const response = await api.post("/users", data);
      console.log("Usuário registrado com sucesso:", response.statusText);
      navigate("/")
    } catch (error) {
      console.error("Erro ao tentar se registrar:", error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("sorcery-contacts:token");
    navigate("/")
  };
  

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

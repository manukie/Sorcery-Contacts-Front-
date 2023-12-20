import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
    const token = localStorage.getItem("sorcery-contacts:token")

    return token ? <Outlet /> : <Navigate to="/" />
}
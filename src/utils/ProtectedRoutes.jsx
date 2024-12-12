import { Outlet, Navigate } from "react-router-dom";
import { getUser } from "../appwrite/auth";
import { useEffect, useState } from "react";

// Unauthenticated user == null / then the authenticated == True
// Using Outlet we a are nesting routes and it allows to wrap those routes
// If not, Outlet is redirecting the user to '/login' page

const ProtectedRoutes = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const userData = JSON.parse(localStorage.getItem("user"));
                setUser(userData);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes
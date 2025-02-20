import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        return localStorage.getItem("user") || null; 
    });

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", user);
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const login = () => {
        setUser(username); 
    };

    const logout = () => {
        setUser(null);
        setUsername("");
        setPassword("");
    };

    const isAuthenticated = () => {
        return user !== null;
    };

    return (
        <AuthContext.Provider value={{ username, setUsername, password, setPassword, user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

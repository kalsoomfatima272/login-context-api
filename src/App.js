import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import PrivatePage from "./PrivatePage";
import { AuthContext, AuthProvider } from "./AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/private" element={<ProtectedRoute />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

// Protects the private route
const ProtectedRoute = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated() ? <PrivatePage /> : <Navigate to="/" />;
};

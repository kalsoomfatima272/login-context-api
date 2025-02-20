import React, { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const PrivatePage = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
                <h1 className="text-2xl font-bold">Welcome</h1>
                <h2 className="text-lg text-gray-700">{user}</h2>
                <button 
                    onClick={() => { logout(); navigate("/"); }} 
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default PrivatePage;

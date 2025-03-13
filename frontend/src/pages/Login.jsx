import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const data = await API.post("/users/login",{ email, password });
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        }catch(err){
            alert("Login Failed!");
        }
    };

    return(
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">
                    Green Mart Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );

    /*
<div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="password" required />
            <button type="submit">Login</button>
        </form>
        </div>
    */
};

export default Login;
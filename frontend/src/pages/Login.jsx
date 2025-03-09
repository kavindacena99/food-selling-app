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
        <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="password" required />
            <button type="submit">Login</button>
        </form>
        </div>
    );
};

export default Login;
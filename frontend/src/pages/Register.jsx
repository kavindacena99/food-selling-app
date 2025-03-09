import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try{
            await API.post("/users/register", { name,email,password });
            navigate("/login");
        }catch(error){
            alert("Registration failed!");
        }
    };

    return(
        <div>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="password" required />
            <button type="submit">Register</button>
        </form>
        </div>
    );
};

export default Register;
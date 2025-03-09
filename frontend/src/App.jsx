import { Routes, Route, useNavigate} from "react-router-dom";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hi This is home</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <button onClick={()=>navigate("/login")}>Go to Login</button><br />
      <button onClick={()=>navigate("/register")}>Go to Register</button>
    </div>
  );
}

export default App;

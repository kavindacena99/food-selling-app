import { Routes, Route, useNavigate} from "react-router-dom";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import API from "./services/api";
import "./App.css";

function App() {
  //const navigate = useNavigate();
  /*
  const handleLogout = async (e) => {
    e.preventDefault();

    try{
      await API.get
    }catch(err){

    }
  };
  */

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

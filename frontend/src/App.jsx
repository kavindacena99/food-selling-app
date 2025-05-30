import { Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";
import SellerDashboard from "./pages/seller/SellerDashboard";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;

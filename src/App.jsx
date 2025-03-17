import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorageUser, removeUserFromLocalStorage } from "./utils/LocalStorage";

function App() {
  const [user, setUser] = useState(getLocalStorageUser());

  const handleLogout = () => {
    setUser(null); // Clear user state
    removeUserFromLocalStorage();
  };

  return (
    <Router>
      <div className="min-h-screen w-screen bg-black">
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard user={user} onLogout={handleLogout} />} />
          <Route path="/employee-dashboard" element={<EmployeeDashboard user={user} onLogout={handleLogout} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

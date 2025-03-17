import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setUserInLocalStorage } from "../../utils/LocalStorage";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    const { employees, admin } = getLocalStorage();

    const userData = employees.find((user) => user.email === email && user.password === password);
    const adminData = admin.find((adminUser) => adminUser.email === email && adminUser.password === password);

    if (adminData) {
      const loggedInUser = { role: "admin", email: adminData.email };
      setUserInLocalStorage(loggedInUser);
      setUser(loggedInUser);
      navigate("/admin-dashboard"); 
    } else if (userData) {
      const loggedInUser = { role: "employee", email: userData.email };
      setUserInLocalStorage(loggedInUser);
      setUser(loggedInUser);
      navigate("/employee-dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <form onSubmit={handleLogin} className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

import { useNavigate } from "react-router-dom";

const Header = ({ title = "Dashboard", onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Clear user session
    navigate("/"); // Redirect to login
  };

  return (
    <div className="flex items-center justify-between px-10 py-6 bg-gray-800">
      <h1 className="text-2xl font-medium text-white">Welcome to {title}</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-5 py-2 rounded-2xl cursor-pointer text-lg font-medium transition-all duration-200 hover:bg-red-600"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

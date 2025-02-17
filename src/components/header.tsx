import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-0 w-full h-[50px] shadow-sm flex justify-between items-center px-4 bg-white">
      <h2 className="text-2xl font-semibold">Home</h2>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;

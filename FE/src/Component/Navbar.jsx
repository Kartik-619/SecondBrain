import { navLinks } from "../../constant/constants";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

const NavBar = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="w-screen sticky top-0 z-50">
      <nav className="w-full bg-black border-b px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-xl font-bold text-white">
          secondbrain
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {navLinks
            .filter(link => link.public || (link.private && user))
            .map(({ label, path }) => (
              <li key={label}>
                <Link 
                  to={path} 
                  className="text-white hover:text-blue-400 transition"
                >
                  {label}
                </Link>
              </li>
          ))}
        </ul>

        {/* Right-side Actions */}
        <div className="flex items-center gap-4 mr-5">
          {!user ? (
            <>
              <Link 
                to="/login" 
                className="text-white hover:text-blue-400 transition"
              >
                Login
              </Link>

              <Link 
                to="/register" 
                className="text-white hover:text-blue-400 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-gray-300 text-sm">
                Welcome {user?.name || "User"}
              </span>

              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
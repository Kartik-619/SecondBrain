import { navLinks } from "../../constant/constants";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/authStore";
import SearchBar from "./searchBar";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const { user, logout } = useUserStore();
  const navigate = useNavigate();

  const [mobileMenu, setMobileMenu] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
    setMobileMenu(false);
  };

  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="bg-black border-b border-gray-800 px-4 md:px-6 py-4">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-white">
            secondbrain
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6">
            {navLinks
              .filter((link) => link.public || (link.private && user))
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

          {/* Desktop Right Side */}
          <div className="hidden md:flex items-center gap-4">
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
                <div className="w-[250px]">
                  <SearchBar />
                </div>

                <span className="text-gray-300 text-sm whitespace-nowrap">
                  Welcome {user?.username || "User"}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 border-t border-gray-800 pt-4 flex flex-col gap-4">
            {/* Nav Links */}
            <ul className="flex flex-col gap-3">
              {navLinks
                .filter(
                  (link) => link.public || (link.private && user)
                )
                .map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      onClick={() => setMobileMenu(false)}
                      className="text-white hover:text-blue-400 transition block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>

            {!user ? (
              <div className="flex flex-col gap-3">
                <Link
                  to="/login"
                  className="text-white hover:text-blue-400 transition"
                  onClick={() => setMobileMenu(false)}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="text-white hover:text-blue-400 transition"
                  onClick={() => setMobileMenu(false)}
                >
                  Register
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {/* Mobile Search */}
                <div className="w-full">
                  <SearchBar />
                </div>

                <span className="text-gray-300 text-sm">
                  Welcome {user?.username || "User"}
                </span>

                <button
                  onClick={handleLogout}
                  className="bg-red-500 w-full px-3 py-2 rounded-lg text-white hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
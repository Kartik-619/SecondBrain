import { navLinks } from "../../constant/constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <nav className="w-full bg-white border-b border-black px-5 py-3 flex items-center justify-between">
        
        {/* Logo placeholder */}
        <div className="text-xl font-bold text-gray-800">
          secondbrain
        </div>

        {/* Navigation links */}
        <ul className="flex gap-6">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <Link 
                to={path} 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center gap-4">
          <button>
            <img src="/search.svg" alt="Search" className="w-5 h-5" />
          </button>
          <Link 
            to="/login" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Login
          </Link>
          <Link 
            to="/register" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

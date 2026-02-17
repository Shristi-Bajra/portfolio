import { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Hero Section", path: "/hero", icon: "🏠" },
    { name: "About", path: "/about", icon: "👤" },
    { name: "Resume", path: "/resume", icon: "📄" },
    { name: "Blog", path: "/blog", icon: "✍️" },
    { name: "Project", path: "/project", icon: "💼" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  return (
    <div
      className={`bg-slate-900 text-white h-screen ${isOpen ? "w-64" : "w-20"} transition-all duration-300 flex flex-col`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-slate-700">
        <span className={`font-semibold text-lg tracking-wide ${!isOpen && "hidden"}`}>
          Admin Panel
        </span>
        <button 
          className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-slate-800 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle sidebar"
        >
          <svg className={`w-5 h-5 transition-transform ${!isOpen && "rotate-180"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 mx-3 my-1 rounded-lg transition-all ${
                isActive 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/50" 
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`font-medium ${!isOpen && "hidden"}`}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-3 border-t border-slate-700">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition-all"
        >
          <span className="text-xl">🚪</span>
          <span className={`font-medium ${!isOpen && "hidden"}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

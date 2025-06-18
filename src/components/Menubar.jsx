import { useState, useContext, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  useClerk
} from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const { user } = useUser();
  const { credit } = useContext(AppContext);
  const navigate = useNavigate();

  const navLinks = [
    { key: "home", href: "/header", route: "/header" },
    { key: "remove", href: "/trynow", route: "/trynow" },
    { key: "pricing", href: "/pricing", route: "/pricing" },
    { key: "faq", href: "/legalpages", route: "/legalpages" },
    { key: "contact", href: "/aboutus", route: "/aboutus" }
  ];

  const getFormattedLabel = (key) => {
    switch (key) {
      case "remove":
        return "Remove BG";
      case "faq":
        return "FAQ";
      case "home":
        return "Home";
      case "pricing":
        return "Pricing";
      case "contact":
        return "Contact";
      default:
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
  };

  const handleNavigation = (route) => {
    setMenuOpen(false);
    navigate(route);
  };

  const handleOpenLogin = () => {
    setMenuOpen(false);
    openSignIn({});
  };

  const handleOpenRegister = () => {
    setMenuOpen(false);
    openSignUp({});
  };

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-white px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 shadow-md z-50">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => window.open("https://alphacut.ai", "_blank")}
      >
        <img src={assets.logo} alt="logo" className="h-10 w-auto object-contain" />
        <span className="text-2xl md:text-3xl font-bold text-indigo-700 tracking-tight">
          AlphaCut.<span className="text-gray-400">AI</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map((item) => (
          <a
            key={item.key}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              handleNavigation(item.route);
            }}
            className="text-gray-600 hover:text-indigo-600 hover:underline hover:underline-offset-4 transition-all font-medium cursor-pointer"
          >
            {getFormattedLabel(item.key)}
          </a>
        ))}

        <SignedOut>
          <button className="text-gray-700 hover:text-indigo-600 transition" onClick={handleOpenLogin}>
            Login
          </button>
          <button
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold px-4 py-2 rounded-full transition"
            onClick={handleOpenRegister}
          >
            Sign up
          </button>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/pricing")}
              className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full hover:scale-105 transition-all cursor-pointer"
            >
              <img src={assets.credits} alt="credits" className="h-5 w-5" />
              <span className="text-sm font-medium text-gray-600">Credits: {credit}</span>
            </button>
            <p className="text-gray-600 text-sm">Hi, {user?.firstName || "User"}</p>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "hidden",
                  userButtonAvatar: "hidden",
                  userButtonUsername: "text-gray-700 font-medium",
                  userButtonActionButton: "text-gray-700 hover:text-indigo-600"
                }
              }}
            />
          </div>
        </SignedIn>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-16 right-4 w-[90%] max-w-xs bg-white shadow-2xl rounded-lg px-6 py-4 transform transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } z-50`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(item.route);
              }}
              className="text-left text-gray-700 hover:text-indigo-600 font-medium transition cursor-pointer"
            >
              {getFormattedLabel(item.key)}
            </a>
          ))}

          <SignedOut>
            <button className="text-gray-700 hover:text-indigo-600" onClick={handleOpenLogin}>
              Login
            </button>
            <button
              className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium px-4 py-2 rounded-full transition"
              onClick={handleOpenRegister}
            >
              Sign up
            </button>
          </SignedOut>

          <SignedIn>
            <button
              onClick={() => {
                navigate("/pricing");
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-full hover:scale-105 transition"
            >
              <img src={assets.credits} alt="credits" className="h-5 w-5" />
              <p className="text-sm font-medium text-gray-600">Credits: {credit}</p>
            </button>
            <p className="text-gray-600">Hi, {user?.firstName || "User"}</p>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "hidden",
                  userButtonAvatar: "hidden",
                  userButtonUsername: "text-gray-700 font-medium",
                  userButtonActionButton: "text-gray-700 hover:text-indigo-600"
                }
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
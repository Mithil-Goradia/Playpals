import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-10 px-8 py-3
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-full
          text-white
          shadow-lg
        "
      >
        {/* NAV LINKS */}
        <button
          onClick={() => navigate("/home")}
          className="hover:text-green-400 transition"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/book")}
          className="hover:text-green-400 transition"
        >
          Find Games
        </button>

        <button
          onClick={() => navigate("/post")}
          className="hover:text-green-400 transition"
        >
          Post Game
        </button>

        {/* DIVIDER */}
        <div className="h-5 w-px bg-white/30" />

        {/* LOGOUT */}
        <button
          className="
            px-4 py-1.5 rounded-full
            bg-green-500 text-black font-medium
            transition-all
            hover:shadow-[0_0_20px_#22c55e]
          "
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

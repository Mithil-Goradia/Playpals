import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6">
      
      {/* LEFT — LOGO */}
      <div
        className="
          px-5 py-3
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-full
          text-white
          shadow-lg
          cursor-pointer
          hover:text-green-400
          transition
        "
        onClick={() => navigate("/home")}
      >
        <div className="flex items-center gap-2 font-bold">
          <span>
            Play<span className="text-green-500">Pals</span>
          </span>
        </div>
      </div>

      {/* CENTER — NAV LINKS (UNCHANGED) */}
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
      </div>

      {/* RIGHT — PROFILE */}
      <div
        className="
          px-0 py-0
          bg-white/10 backdrop-blur-lg
          border border-white/20
          rounded-full
          shadow-lg
        "
      >
        <button
          onClick={() => navigate("/profile")}
          className="
            px-7 py-3.5 rounded-full
            bg-green-500 text-black font-medium
            transition-all
            hover:shadow-[0_0_20px_#22c55e]
          "
        >
          Profile
        </button>
      </div>

    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Log() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      
      {/* LEFT SECTION */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div
          className="
            w-96 p-8 rounded-xl
            bg-white/10 backdrop-blur-lg
            border border-white/20
            shadow-lg
            transition-all duration-300
            hover:shadow-[0_0_55px_#22c55e]
          "
        >
          <img src="/logo.png" alt="Logo" className="w-[300px] mx-auto mb-6" />

          <h2 className="text-2xl font-bold mb-6 text-center text-green-400">
            Login
          </h2>

          {/* NAME */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="
                w-full px-4 py-2
                bg-white/20 text-white placeholder-gray-300
                border border-white/30 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                w-full px-4 py-2
                bg-white/20 text-white placeholder-gray-300
                border border-white/30 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="
                w-full px-4 py-2
                bg-white/20 text-white placeholder-gray-300
                border border-white/30 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4">
            <button
              onClick={()=>navigate('/signup')}
              className="
                flex-1 bg-green-500 text-black py-2 rounded-md
                hover:bg-green-400 transition font-medium
              "
            >
              Signup
            </button>

            <button
              onClick={()=>navigate('/home')}
              className="
                flex-1 bg-black/40 text-white py-2 rounded-md
                border border-white/30
                hover:bg-black/60 transition font-medium
              "
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Log;

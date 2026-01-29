import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* PAGE WRAPPER */}
      <div className="pt-32 px-6 max-w-6xl mx-auto">

        {/* TOP PROFILE CARD */}
        <div
          className="
            flex flex-col md:flex-row items-center gap-8
            p-8 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            mb-12
          "
        >
          {/* AVATAR */}
          <div className="relative">
            <img
              src="/avatar.png"
              alt="Profile"
              className="h-32 w-32 rounded-full object-cover border-2 border-green-500"
            />
            <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-500" />
          </div>

          {/* INFO */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold">
              Mithil <span className="text-green-500">Goradia</span>
            </h1>
            <p className="text-gray-400 mt-1">Football • Cricket</p>
            <p className="text-gray-500 text-sm mt-2">
              Andheri West, Mumbai
            </p>

            <button
              className="
                mt-4 px-6 py-2 rounded-lg
                bg-green-500 text-black font-medium
                hover:shadow-[0_0_20px_#22c55e]
                transition
              "
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Matches Played", value: 42 },
            { label: "Wins", value: 28 },
            { label: "Goals / Points", value: 65 },
            { label: "Win Rate", value: "67%" },
          ].map((stat, i) => (
            <div
              key={i}
              className="
                p-6 rounded-2xl text-center
                bg-white/10 backdrop-blur-xl
                border border-white/20
                hover:shadow-[0_0_25px_#22c55e]
                transition
              "
            >
              <h2 className="text-3xl font-bold text-green-400">
                {stat.value}
              </h2>
              <p className="text-gray-400 mt-2 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* UPCOMING GAMES */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Upcoming <span className="text-green-500">Games</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="
                  p-6 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                "
              >
                <h3 className="text-lg font-semibold">
                  Astro Turf Arena
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Football • Today • 7:00 PM
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  📍 Andheri West
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PAST GAMES */}
        <section className="mb-24">
          <h2 className="text-2xl font-bold mb-6">
            Past <span className="text-green-500">Games</span>
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="
                  flex justify-between items-center
                  p-5 rounded-xl
                  bg-white/5
                  border border-white/10
                "
              >
                <div>
                  <p className="font-medium">Greenfield Turf</p>
                  <p className="text-gray-500 text-sm">
                    Cricket • Won
                  </p>
                </div>

                <span className="text-green-400 font-semibold">
                  +3 Points
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
};

export default Profile;

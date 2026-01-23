import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div>   
        <div className="min-h-screen bg-black text-white">
            <Navbar />
        

            {/* HERO SECTION */}
            <section className="h-screen flex items-center justify-center px-6 pt-24 bg-gradient-to-b from-green-950 to-black">
            <div
                className="
                relative w-full max-w-5xl h-[520px]
                rounded-2xl overflow-hidden
                border border-white/20
                bg-white/10 backdrop-blur-xl
                shadow-lg
                "
            >
                {/* BACKGROUND VIDEO */}
                <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                >
                <source src="./hero.mp4" type="video/mp4" />
                </video>

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/30" />

                {/* CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Play without a <span className="text-green-500">full squad</span>
                </h1>

                <p className="text-gray-300 max-w-xl mb-8 text-lg">
                    Join nearby games or fill empty slots in turfs already booked.
                </p>

                <div className="flex gap-6">
                    <button
                    onClick={() => navigate("/book")}
                    className="
                        px-8 py-3 rounded-lg font-semibold
                        bg-green-500 text-black
                        transition-all duration-300
                        hover:shadow-[0_0_25px_#22c55e]
                    "
                    >
                    Find a Game
                    </button>

                    <button
                    onClick={() => navigate("/post")}
                    className="
                        px-8 py-3 rounded-lg font-semibold
                        border border-white/30
                        bg-white/10 backdrop-blur-md
                        transition-all duration-300
                        hover:shadow-[0_0_25px_#22c55e]
                    "
                    >
                    Post a Game
                    </button>
                </div>
                </div>
            </div>
            </section>

            {/* HOW IT WORKS — BENTO */}
            <section className="px-8 py-24 bg-gradient-to-b from-black via-zinc-900 to-black">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                How <span className="text-green-500">PlayPals</span> Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                
                {/* BIG TILE */}
                <div
                className="
                    md:col-span-2 md:row-span-2
                    relative p-8 rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    transition-all duration-300
                    hover:shadow-[0_0_40px_#22c55e]
                "
                >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                    Find Games Nearby
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                    Discover nearby turfs and games that already need players.
                    No full team? No problem.
                </p>

                <div className="absolute bottom-6 right-6 text-7xl font-bold text-white/10">
                    01
                </div>
                </div>

                {/* SMALL TILE */}
                <div
                className="
                    md:col-span-2
                    p-6 rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    transition-all duration-300
                    hover:shadow-[0_0_30px_#22c55e]
                "
                >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Join Instantly
                </h3>
                <p className="text-gray-400">
                    Book a single slot instead of an entire turf.
                </p>
                <div className="absolute bottom-6 right-6 text-7xl font-bold text-white/10">
                    02
                </div>
                </div>

                {/* SMALL TILE */}
                <div
                className="
                    p-6 rounded-2xl
                    bg-green-400/10 backdrop-blur-xl
                    border border-white/20
                    transition-all duration-300
                    hover:shadow-[0_0_30px_#22c55e]
                "
                >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Host Games
                </h3>
                <p className="text-gray-400">
                    Already booked a turf? Post open slots and fill them fast.
                </p>
                </div>

                {/* TALL TILE */}
                <div
                className="
                    md:row-span-2
                    p-6 rounded-2xl
                    bg-white/10 backdrop-blur-xl
                    border border-white/20
                    transition-all duration-300
                    hover:shadow-[0_0_30px_#22c55e]
                "
                >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Player Stats
                </h3>
                <p className="text-gray-400 leading-relaxed">
                    Track matches played, goals, wins and performance over time.
                </p>
                <div className="absolute bottom-6 right-6 text-7xl font-bold text-white/10">
                    03
                </div>

                <div className="mt-6 h-1 w-full bg-green-500/30 rounded-full" />
                </div>

                {/* WIDE TILE */}
                <div
                className="
                    md:col-span-3
                    p-6 rounded-2xl
                    bg-green-400/10 backdrop-blur-xl
                    border border-white/20
                    transition-all duration-300
                    hover:shadow-[0_0_30px_#22c55e]
                "
                >
                <h3 className="text-xl font-semibold mb-3 text-green-400">
                    Play More. Stress Less.
                </h3>
                <p className="text-gray-400">
                    No WhatsApp chaos. No last-minute cancellations.
                    Just show up and play.
                </p>
                </div>

            </div>
            </section>

            {/* SPORTS AVAILABLE */}
            <section className="px-8 py-24 bg-gradient-to-b from-black to-green-950">
            <div className="max-w-6xl mx-auto">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Choose Your <span className="text-green-500">Sport</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                    name: "Football",
                    image: "./cr.png",
                    },
                    {
                    name: "Cricket",
                    image: "./vk.png",
                    },
                    {
                    name: "Badminton",
                    image: "./bd.png",
                    },
                ].map((sport, i) => (
                    <div
                    key={i}
                    className="
                        group relative h-[320px] rounded-2xl overflow-hidden
                        cursor-pointer
                        border border-white/20
                    "
                    >
                    {/* IMAGE */}
                    <img
                        src={sport.image}
                        alt={sport.name}
                        className="
                        h-full w-full object-cover
                        transition-transform duration-700
                        group-hover:scale-110
                        "
                    />

                    {/* OVERLAY */}
                    <div className="
                        absolute inset-0
                        bg-gradient-to-t from-black/80 via-black/30 to-transparent
                    " />

                    {/* TEXT */}
                    <div className="absolute bottom-6 left-6 z-10">
                        <h3 className="text-3xl font-bold tracking-wide">
                        {sport.name}
                        </h3>
                        <p className="text-gray-300 mt-1">
                        Find games nearby
                        </p>
                    </div>

                    {/* GLOW ON HOVER */}
                    <div className="
                        absolute inset-0
                        opacity-0 group-hover:opacity-100
                        transition duration-500
                        shadow-[0_0_60px_#22c55e]
                    " />
                    </div>
                ))}
                </div>
            </div>
            </section>

            {/* GAMES NEAR YOU */}
            <section className="px-8 py-24 bg-gradient-to-b from-green-950 to-black">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold">
                    Games <span className="text-green-500">Near You</span>
                </h2>

                <button className="text-green-400 hover:underline">
                    View all →
                </button>
                </div>

                {/* SCROLLING FEED */}
                <div className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide ">
                {[
                    {
                    name: "Astro Turf Arena",
                    location: "Andheri West",
                    sport: "Football",
                    time: "7:00 PM",
                    capacity: 10,
                    available: 3,
                    image: "./turf.png",
                    },
                    {
                    name: "Greenfield Ground",
                    location: "Powai",
                    sport: "Cricket",
                    time: "6:30 PM",
                    capacity: 14,
                    available: 2,
                    image: "./turf.png",
                    },
                    {
                    name: "KickOff Zone",
                    location: "Bandra East",
                    sport: "Football",
                    time: "9:00 PM",
                    capacity: 8,
                    available: 1,
                    image: "./turf.png",
                    },
                ].map((game, i) => (
                    <div
                    key={i}
                    className="
                        min-w-[350px] rounded-2xl overflow-hidden
                        bg-white/10 backdrop-blur-xl
                        border border-white/20
                        transition-all duration-300
                        hover:shadow-[0_0_35px_#22c55e]
                    "
                    >
                    {/* IMAGE */}
                    <div className="relative h-44 w-full">
                        <img
                        src={game.image}
                        className="h-full w-full object-cover"
                        />

                        {/* SPORT PILL */}
                        <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-black/70 text-green-400">
                        {game.sport}
                        </span>

                        {/* SEATS WARNING */}
                        {game.available <= 2 && (
                        <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-red-500/80">
                            Almost Full
                        </span>
                        )}
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                        <h3 className="text-lg font-semibold">
                        {game.name}
                        </h3>

                        <p className="text-sm text-gray-400 mb-3">
                        📍 {game.location}
                        </p>

                        <div className="flex justify-between text-sm text-gray-400 mb-4">
                        <span>{game.time}</span>
                        <span>
                            {game.available}/{game.capacity} slots left
                        </span>
                        </div>

                        <button
                        className="
                            w-full py-2 rounded-md
                            bg-green-500 text-black font-medium
                            hover:shadow-[0_0_20px_#22c55e]
                        "
                        >
                        Join Game
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </section>


            {/* FOOTER */}
            <footer className="text-center text-gray-500 py-6 border-t border-white/10">
                © 2026 PlayPals. Play more. Worry less.
            </footer>
        </div>
    </div>
  );
}

export default Home;

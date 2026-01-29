import { useState } from "react";
import Navbar from "../components/Navbar";

const games = [
  {
    id: 1,
    sport: "Football",
    turf: "Astro Turf Arena",
    location: "Andheri West",
    time: "7:00 PM",
    capacity: 10,
    slotsLeft: 3,
    price: 250,
    postedBy: "Rahul Mehta",
    image: "/turf.png",
    note: "Popular turf with floodlights",
  },
  {
    id: 2,
    sport: "Cricket",
    turf: "Greenfield Turf",
    location: "Powai",
    time: "6:30 PM",
    capacity: 14,
    slotsLeft: 5,
    price: 300,
    postedBy: "Aman Shah",
    image: "/turf.png",
    note: "Spacious ground with nets",
  },
  {
    id: 3,
    sport: "Badminton",
    turf: "Smash Court",
    location: "Bandra",
    time: "9:00 PM",
    capacity: 4,
    slotsLeft: 1,
    price: 200,
    postedBy: "Neel Patel",
    image: "/turf.png",
    note: "Indoor court with air conditioning",
  },
];

function Book() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-950 text-white">
      <Navbar />

      {/* HERO + FILTER */}
      <section
        className="relative pt-45 pb-45 px-6 mb-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/vk.png')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Book Games <span className="text-green-500">Around You</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Filter by sport, time, location and price. Play when you want.
            </p>
          </div>

          {/* Filter Card */}
          <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl max-w-5xl mx-auto">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <label className="filter-label">Sport</label>
                <select className="filter-input">
                  <option>Football</option>
                  <option>Cricket</option>
                  <option>Badminton</option>
                </select>
              </div>

              <div>
                <label className="filter-label">Location</label>
                <select className="filter-input">
                  <option>Andheri</option>
                  <option>Bandra</option>
                  <option>Powai</option>
                </select>
              </div>

              <div>
                <label className="filter-label">Date</label>
                <input type="date" className="filter-input" />
              </div>

              <div>
                <label className="filter-label">Time</label>
                <select className="filter-input">
                  <option>Any</option>
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Night</option>
                </select>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
              <div>
                <label className="filter-label">Seats Needed</label>
                <select className="filter-input">
                  <option>1+</option>
                  <option>2+</option>
                  <option>5+</option>
                </select>
              </div>

              <div>
                <label className="filter-label">Price Range</label>
                <select className="filter-input">
                  <option>Any</option>
                  <option>₹0 – ₹300</option>
                  <option>₹300 – ₹600</option>
                  <option>₹600+</option>
                </select>
              </div>

              <button className="h-[52px] rounded-lg font-semibold bg-green-500 text-black hover:shadow-[0_0_30px_#22c55e] transition-all">
                Search Games
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GAME CARDS */}
      <section className="px-6 pb-24">
        <p className="text-center text-gray-300 mb-8 font-extrabold text-4xl p-7">Turfs available near you</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_#22c55e]"
            >
              {/* Image */}
              <div className="relative h-40">
                <img
                  src={game.image}
                  alt={game.turf}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-green-500 text-black font-semibold">
                  {game.sport}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{game.turf}</h3>
                <p className="text-sm text-gray-400 mb-2">📍 {game.location}</p>

                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>⏰ {game.time}</span>
                  <span>
                    👥 {game.slotsLeft}/{game.capacity}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedGame(game);
                    setShowModal(true);
                  }}
                  className="w-full py-2 rounded-lg bg-green-500 text-black font-semibold hover:shadow-[0_0_20px_#22c55e] transition-all"
                >
                  Join Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {showModal && selectedGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          ></div>

          <div className="relative z-10 w-full max-w-md p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Confirm Seat
            </h2>

            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="text-white font-medium">Turf:</span> {selectedGame.turf}</p>
              <p><span className="text-white font-medium">Sport:</span> {selectedGame.sport}</p>
              <p><span className="text-white font-medium">Location:</span> {selectedGame.location}</p>
              <p><span className="text-white font-medium">Time:</span> {selectedGame.time}</p>
              <p><span className="text-white font-medium">Posted by:</span> {selectedGame.postedBy}</p>
              <p><span className="text-white font-medium">Price:</span> ₹{selectedGame.price}</p>
              <p><span className="text-white font-medium">Note:</span> {selectedGame.note}</p>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 rounded-lg border border-white/30 hover:bg-white/10 transition"
              >
                Cancel
              </button>

              <button
                onClick={() => alert("Payment flow next 🚀")}
                className="flex-1 py-2 rounded-lg bg-green-500 text-black font-semibold hover:shadow-[0_0_20px_#22c55e] transition"
              >
                Pay ₹{selectedGame.price}
              </button>
            </div>

            <button className="mt-4 w-full text-md text-gray-400 underline hover:text-gray-200">
              Share via link
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;

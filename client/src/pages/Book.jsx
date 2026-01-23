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
    image: "/turf1.jpg",
  },
  {
    id: 2,
    sport: "Cricket",
    turf: "Greenfield Turf",
    location: "Powai",
    time: "6:30 PM",
    capacity: 14,
    slotsLeft: 5,
    image: "/turf2.jpg",
  },
  {
    id: 3,
    sport: "Badminton",
    turf: "Smash Court",
    location: "Bandra",
    time: "9:00 PM",
    capacity: 4,
    slotsLeft: 1,
    image: "/turf3.jpg",
  },
];

function Book() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="pt-25 text-center px-6">
        
      </section>

      {/* FILTER BAR */}
      {/* HERO + FILTER */}
<section
  className="
    relative pt-26 pb-26 px-6 mb-10
    bg-cover bg-center
  "
  style={{ backgroundImage: "url('/vk.png')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative z-10 max-w-6xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Book Games <span className="text-green-500">Around You</span>
      </h1>
      <p className="text-gray-300 max-w-xl mx-auto">
        Filter by sport, price, time and slots. Play when you want.
      </p>
    </div>

    {/* FILTER CARD */}
    {/* FILTER CARD */}
<div
  className="
    p-8 rounded-2xl
    bg-white/10 backdrop-blur-xl
    border border-white/20
    shadow-xl
    max-w-5xl mx-auto
  "
>
  {/* ROW 1 */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
    {/* SPORT */}
    <div>
      <label className="filter-label">Sport</label>
      <select className="filter-input">
        <option>Football</option>
        <option>Cricket</option>
        <option>Badminton</option>
      </select>
    </div>

    {/* LOCATION */}
    <div>
      <label className="filter-label">Location</label>
      <select className="filter-input">
        <option>Andheri</option>
        <option>Bandra</option>
        <option>Powai</option>
      </select>
    </div>

    {/* DATE */}
    <div>
      <label className="filter-label">Date</label>
      <input type="date" className="filter-input" />
    </div>

    {/* TIME */}
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

  {/* ROW 2 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
    {/* SEATS */}
    <div>
      <label className="filter-label">Seats Needed</label>
      <select className="filter-input">
        <option>1+</option>
        <option>2+</option>
        <option>5+</option>
      </select>
    </div>

    {/* PRICE */}
    <div>
      <label className="filter-label">Price Range</label>
      <select className="filter-input">
        <option>Any</option>
        <option>₹0 – ₹300</option>
        <option>₹300 – ₹600</option>
        <option>₹600+</option>
      </select>
    </div>

    {/* CTA */}
    <button
      className="
        h-[52px]
        rounded-lg font-semibold
        bg-green-500 text-black
        hover:shadow-[0_0_30px_#22c55e]
        transition-all
      "
    >
      Search Games
    </button>
  </div>
</div>

  </div>
</section>


      {/* GAME CARDS */}
      <section className="px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game) => (
            <div
              key={game.id}
              className="
                rounded-2xl overflow-hidden
                bg-white/10 backdrop-blur-lg
                border border-white/20
                transition-all duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_30px_#22c55e]
              "
            >
              {/* IMAGE */}
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

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">
                  {game.turf}
                </h3>
                <p className="text-sm text-gray-400 mb-2">
                  📍 {game.location}
                </p>

                <div className="flex justify-between text-sm text-gray-400 mb-4">
                  <span>⏰ {game.time}</span>
                  <span>
                    👥 {game.slotsLeft}/{game.capacity} slots
                  </span>
                </div>

                <button
                  className="
                    w-full py-2 rounded-lg
                    bg-green-500 text-black font-semibold
                    transition-all duration-300
                    hover:shadow-[0_0_20px_#22c55e]
                  "
                >
                  Join Game
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Book;

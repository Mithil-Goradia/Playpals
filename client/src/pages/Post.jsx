import Navbar from "../components/Navbar";

function Post() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="pt-32 px-6 flex justify-center">
        <div
          className="
            w-full max-w-3xl
            p-10 rounded-2xl
            bg-white/10 backdrop-blur-xl
            border border-white/20
            shadow-xl
          "
        >
          {/* HEADER */}
          <h1 className="text-3xl font-bold mb-2 text-center">
            Post a <span className="text-green-500">Game</span>
          </h1>
          <p className="text-gray-400 text-center mb-10">
            Got extra slots? Invite players nearby.
          </p>

          {/* SECTION 1 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="filter-label">Sport</label>
              <select className="filter-input">
                <option>Football</option>
                <option>Cricket</option>
                <option>Badminton</option>
              </select>
            </div>

            <div>
              <label className="filter-label">Turf Name</label>
              <input
                type="text"
                placeholder="Eg. Astro Arena"
                className="filter-input"
              />
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="filter-label">Date</label>
              <input type="date" className="filter-input" />
            </div>

            <div>
              <label className="filter-label">Time</label>
              <input type="time" className="filter-input" />
            </div>

            <div>
              <label className="filter-label">Location</label>
              <input
                type="text"
                placeholder="Andheri West"
                className="filter-input"
              />
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="filter-label">Total Slots</label>
              <input type="number" className="filter-input" />
            </div>

            <div>
              <label className="filter-label">Available Slots</label>
              <input type="number" className="filter-input" />
            </div>

            <div>
              <label className="filter-label">Price / Player (₹)</label>
              <input type="number" className="filter-input" />
            </div>
          </div>

          {/* NOTES */}
          <div className="mb-8">
            <label className="filter-label">Notes (optional)</label>
            <textarea
              rows="3"
              placeholder="Eg. Bring studs, friendly match"
              className="filter-input resize-none"
            />
          </div>

          {/* CTA */}
          <button
            className="
              w-full py-3 rounded-lg font-semibold
              bg-green-500 text-black
              hover:shadow-[0_0_30px_#22c55e]
              transition-all
            "
          >
            Post Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;

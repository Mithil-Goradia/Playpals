import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./pages/Log";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Log />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

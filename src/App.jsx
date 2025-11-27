import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import Bookings from "./pages/Bookings.jsx";
import Account from "./Component/Account.jsx";  // must match file exactly
import About from "./Component/About.jsx";      // must match file exactly



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/:id" element={<ListingPage />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

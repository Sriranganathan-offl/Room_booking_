import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/booking" element={<h1>Booking Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

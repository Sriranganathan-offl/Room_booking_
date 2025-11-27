import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";

import About from "./Component/About";
import Account from "./Component/Account";
import Home from "./pages/Home";

function App() {
  return (
    
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/booking" element={<h1>Booking Page</h1>} />
        <Route path="/about" element={<About />} />
         <Route path="/account" element={<Account/>} />
      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;

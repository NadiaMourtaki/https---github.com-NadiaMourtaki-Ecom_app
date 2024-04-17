import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Shop from "./pages/shop";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          
          <Route path="/Mens" element={<ShopCategory category="Men" />} />
          <Route path="/Womens" element={<ShopCategory category="Women" />} />
          <Route path="/Kids" element={<ShopCategory category="Kids" />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductId" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
  
          <Route path="/Login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

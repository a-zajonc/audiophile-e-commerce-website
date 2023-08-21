import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  About,
  Footer,
  Home,
  ProductCategory,
  ProductPage,
  Checkout,
} from "./Components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<ProductCategory />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      {window.location.pathname === "/checkout" ? null : <About />}
      <Footer />
    </div>
  );
}

export default App;

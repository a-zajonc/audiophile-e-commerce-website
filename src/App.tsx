import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  About,
  Footer,
  Home,
  ProductCategory,
  ProductPage,
  Checkout,
} from "./Pages";
import "./globals.scss";

function App() {
  return (
    <div
      className={
        window.location.pathname === "/checkout"
          ? "background-checkout"
          : "background-page"
      }
    >
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

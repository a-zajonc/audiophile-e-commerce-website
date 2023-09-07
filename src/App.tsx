import * as React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import { BasketContext } from "./context";

function App() {
  let location = useLocation();
  const [basket, setBasket] = React.useState([]);

  return (
    <div
      className={
        location.pathname === "/checkout"
          ? "background-checkout"
          : "background-page"
      }
    >
      <BasketContext.Provider value={{ basket, setBasket }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ProductCategory />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {window.location.pathname === "/checkout" ? null : <About />}
        <Footer />
      </BasketContext.Provider>
    </div>
  );
}

export default App;

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
import { PageNotFound } from "./Pages/PageNotFound";
import { Categories } from "./Pages/Home/Categories";

function App() {
  let location = useLocation();
  const storedBasket = localStorage.getItem("basket");
  const [basket, setBasket] = React.useState(
    storedBasket ? JSON.parse(storedBasket) : []
  );

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
          <Route path="/category/" element={<Categories />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/product/" element={<Categories />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        {window.location.pathname === "/checkout" ||
        location.pathname === "*" ? null : (
          <About />
        )}
        <Footer />
      </BasketContext.Provider>
    </div>
  );
}

export default App;

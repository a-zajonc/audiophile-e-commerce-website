import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  NavBar,
  About,
  Footer,
  Home,
  ProductCategory,
  ProductPage,
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
        </Routes>
      </BrowserRouter>

      <About />
      <Footer />
    </div>
  );
}

export default App;

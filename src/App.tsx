import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, About, Footer, Home, ProductCategory } from "./Components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<ProductCategory />} />
        </Routes>
      </BrowserRouter>

      <About />
      <Footer />
    </div>
  );
}

export default App;

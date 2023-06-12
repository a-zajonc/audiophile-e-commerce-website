import "./App.css";
import {
  Categories,
  Header,
  NavBar,
  ProductComponent,
  About,
  Footer,
} from "./Components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Categories />
      <ProductComponent />
      <About />
      <Footer />
    </div>
  );
}

export default App;

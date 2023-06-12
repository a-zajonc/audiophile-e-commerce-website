import "./App.css";
import {
  Categories,
  Header,
  NavBar,
  ProductComponent,
  About,
} from "./Components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Categories />
      <ProductComponent />
      <About />
    </div>
  );
}

export default App;

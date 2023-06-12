import "./App.css";
import { Categories, Header, NavBar, ProductComponent } from "./Components/";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Categories />
      <ProductComponent />
    </div>
  );
}

export default App;

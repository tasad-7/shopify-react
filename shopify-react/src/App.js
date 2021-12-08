import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage";
import Home from "./pages/Home"
import NavBar from "./components/navBar"
import NavMenu from "./components/navMenu";
import Cart from "./components/cart"


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Routes>
        <Route path="/products/:handle" element={<ProductPage />} />
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

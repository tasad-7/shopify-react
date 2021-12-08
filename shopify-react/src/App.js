import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/productPage";
import Home from "./pages/Home"
import NavBar from "./components/navBar"
import NavMenu from "./components/navMenu";
import Cart from "./components/cart"
import Footer from "./components/footer"


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
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import NavBar from "./component/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
// import ProductsList from "./component/ProductsList";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import DetailedProduct from "./pages/DetailedProduct";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const products = [
    {
      id: 0,
      name: "Smart Phone",
      img: "https://m.media-amazon.com/images/I/717jfWIn6tL._AC_SL1500_.jpg",
    },
    {
      id: 1,
      name: "Computers",
      img: "https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg",
    },
    {
      id: 2,
      name: "Tablets",
      img: "https://m.media-amazon.com/images/I/71mdoicpqWL._AC_SL1500_.jpg",
    },
  ];
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route element={<Home products={products} />} path="/" />
        {/* <Route element={<Home />} path="/" /> */}
        {/* <Route element={<ProductsList products={products} />} path="/products" /> */}
        <Route element={<Products products={products} />} path="/products" />
        <Route element={<Categories />} path="/categories" />
        <Route
          element={<DetailedProduct products={products} />}
          path="/product/:id"
        />
        <Route element={<ErrorPage />} path="/*" />
      </Routes>
    </div>
  );
}

export default App;

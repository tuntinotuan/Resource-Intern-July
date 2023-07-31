import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./components/layout/Main";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import Search from "./components/search/Search";
import AddProduct from "./components/product/AddProduct";
import ListProducts from "./components/product/ListProducts";
import ProductDisplay from "./components/product/ProductDisplay";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Main />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/products" element={<ProductPage />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<ListProducts />} />
            <Route path="add" element={<AddProduct />} />
            <Route path=":id" element={<ProductDisplay />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

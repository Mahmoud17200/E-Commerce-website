// condition  ? true  : false  && do the order

// all imports files
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Banners from "./Component/Banners";
import Blog from "./Component/Blog";
import Products from "./Component/Products";
import TwoBanners from "./Component/TwoBanners";
import ProductDetails from "./Component/ProductDetails";
import CollectionList from "./Component/CollectionList";
import Recommended from "./Component/Recommended";
import Brands from "./Component/Brands";
import Footer from "./Component/Footer";
import Categories from "./Component/Categories";
import CollectionProducts from "./Component/CollectionProducts";
import CategoriesPhone from "./Component/CategoriesPhone";
import CategoriesWatch from "./Component/CategoriesWatch";
import CategoriesCamera from "./Component/CategoriesCamera";
import Cart from "./Component/Cart";
import SideBar from "./Component/SideBar";
import CheckOut from "./Component/checkOut";
// import Wishlist from "./Component/Wishlist";
// import LatestBlog from "./Component/LatestBlog";
// css files
import "./css/responsive.css";
import "./css/products.css";
import "./css/index.css";

export default function App() {
  let goUp = () => {
    window.scroll({
      top: 0,
      right: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <button onClick={goUp} className="goUp">
        <img src="/svg icons/Arrow Up.png" alt="" />
      </button>
      <Navbar />
      <SideBar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banners />
              <Products />
              <TwoBanners />
              <CollectionList />
              <Recommended />
              <Brands />
              {/* <LatestBlog /> */}
              <Footer />
            </>
          }
        />
        <Route
          path="categories"
          element={
            <>
              <Categories />
              <Footer />
            </>
          }
        />
        <Route path="/categories/category" element={<CollectionProducts />} />
        <Route
          path="/categories/smart-phone"
          element={
            <>
              <CategoriesPhone />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories/smart-Watch"
          element={
            <>
              <CategoriesWatch />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories/Camera"
          element={
            <>
              <CategoriesCamera />
              <Footer />
            </>
          }
        />
        <Route
          path="Products"
          element={
            <>
              <h1>Products</h1>
            </>
          }
        />
        <Route
          path="blog"
          element={
            <>
              <Blog />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>this page not found</h1>
            </>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <>
              <ProductDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/Cart"
          element={
            <>
              <Cart />
              <Footer />
            </>
          }
        />
        {/* <Route path="/wishlist" element={
          <>
          <Wishlist/>
          </>
        } /> */}

        <Route path="/checkOut" element={
          <>
          <CheckOut/>
          </>
        } />
      </Routes>
    </div>
  );
}
import React from "react";
import { useState } from "react";
import { data } from "./db";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Slider from "@mui/material/Slider";
import "../css/categoriesPages.css";

export default function CategoriesPhone() {
  let filtered = data.filter((item) => item.categoryName === "Smart-Phone");
  let location = useLocation();

  let price = filtered.map((e) => e.price);
  let maxPrice = Math.max(...price);
  let minPrice = Math.min(...price);

  const [value, setValue] = useState([0, maxPrice]);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  window.scroll({
    top: 33.59,
    right: 0,
    behavior: "instant",
  });

  return (
    <div className="category-body">
      <div className="container-fluid">
        <div className="go-back">
          <h1>{location.pathname.slice(12)}</h1>
          <Link className="link mainLink" to="/categories">
            categories
          </Link>
          <span className="slash">/</span>
          <Link className="link supLink" to={location.pathname}>
            Camera
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="left-bar">
              <h1 className="filter-title">filter:</h1>
              <div className="price-filter">
                <h3 style={{ "margin-bottom": "20px" }}>price</h3>
                {`The Highest Price Is $${maxPrice}.00`}
                <Slider
                  style={{ "margin-top": "10px" }}
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  min={0}
                  step={10}
                  max={maxPrice}
                  sx={{
                    width: "200",
                    color: "#5360a6",
                  }}
                />
                <p>price: {` $${value[0]} - $${value[1]}`}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="products-content">
              <div className="row">
                {/* filter the products by price firstly */}
                {filtered.map((product) => {
                  return product.price <= value[1] &&
                    product.price >= value[0] ? (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12"
                      key={product.id}
                    >
                      <div className="card">
                        <div className="img-body">
                          <span className="state">{product.state}</span>
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.image}
                              className="card-img-top"
                              alt="..."
                            />
                          </Link>
                          <Link
                            to={`/product/${product.id}`}
                            className="shop-btn"
                          >
                            Quick Shop
                          </Link>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">
                            {product.title.substring(0, 20)}...
                          </h5>
                          <span className="card-price">
                            ${product.price}.00
                          </span>
                          <span className="in-stock d-block">
                            in stock {product.inStock} items
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : null;
                })}
                {value[1] < minPrice ? (
                  <h2 className="product-error">
                    No products found Use higher filter price Please
                  </h2>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

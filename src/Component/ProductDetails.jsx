import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./db";
import "../css/ProductDetails.css";
import { useDispatch, useSelector } from "react-redux";
import {  addToSideBar } from "../rtk/slices/cart-slice";

export default function ProductDetails() {
  const { cartItems, isSideBarOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  window.scroll({
    top: 60.799,
    left: 0,
    behavior: "instant",
  });

  let { productId } = useParams();

  let singleProduct = data.find(
    (product) => product.id === parseInt(productId),
  );

  let { id, title, price, image, inStock, review } = singleProduct;

  let [count, setCount] = useState(1);

  let dec = () => {
    if (count <= 1) {
      return 1;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="product-details">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="left-side quick">
              <img src={image} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="right-side quick">
              <h6>Vendor: Isotech - Electronics Products</h6>
              <h1 className="product-title">{title}</h1>
              <span className="review">there is only {review} reviews</span>
              <div className="all-price">
                <span className="product-old-price">$695.00</span>
                <span className="product-price">${price}.00</span>
              </div>
              <p className="items-count">only {inStock} items in Stock!</p>
              <div className="quantity">
                <h4>quantity</h4>
                <div className="quantity-cont">
                  <span
                    className="min"
                    onClick={() => {
                      setCount(dec);
                    }}
                  >
                    -
                  </span>
                  <span className="number">{count}</span>
                  <span
                    className="plus"
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
              <button
                className="btn"
                onClick={() =>
                  dispatch(
                    addToSideBar({
                      ...singleProduct,
                      quantity: count,
                    }),
                  )
                }
              >
                Add To Cart
              </button>
              <button className="btn">buy it now</button>
              <p className="pickup">
                Pickup available at <a href="#">France Warehouse</a>
              </p>
              <p className="ready">Usually ready in 24 hours</p>
              <a href="#">Check availability at other stores</a>

              <div className="social-media"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

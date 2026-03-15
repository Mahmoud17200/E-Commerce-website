import React, { useEffect, useRef } from "react";
import { data } from "./db";
import { Link } from "react-router-dom";
import "../css/products.css";
import { useDispatch, useSelector } from "react-redux";
import { addToSideBar, deleteFromCart } from "../rtk/slices/cart-slice";
import { current } from "@reduxjs/toolkit";

export default function Products() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let sideBar = useRef();
  const openSideBar = () => {
    sideBar.current.classList.add("active");
  };

  const closeSideBar = () => {
    sideBar.current.classList.remove("active");
  };

  // progress bar
  const FREE_SHIPPING_THRESHOLD = 800;
  const subtotal = cartItems .reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const progressPercent = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100,
  );

  return (
    <div className="products">
      {/* side bar */}
      <div ref={sideBar} className="sideBar">
        <div className="container">
          <div className="free-shipping-bar">
            {remaining > 0 ? (
              <p>
                You are <strong>${remaining.toFixed(2)}</strong> away from Free
                Shipping!
              </p>
            ) : (
              <p>
                <strong>Congrats! You’ve unlocked Free Shipping!</strong>
              </p>
            )}
            <div className="progress-container">
              <div
                className="progress-bar"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="upperNav">
            <h5>Item added to your cart</h5>
            <svg
              onClick={closeSideBar}
              fill="currentColor"
              className="closeBtn bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
          <div className="sideBar-control">
            <div className="row">
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="col-12">
                    <div className="selectedProduct">
                      <div className="img-body">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <div className="details-body">
                        <h4>{item.title}</h4>
                        <h5 className="item-price">${item.price}</h5>
                        <span onClick={() => dispatch(deleteFromCart(item))}>
                          remove
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sideBar-footer">
            <div className="total">
              <h5>subtotal</h5>
              <span className="all-prices">100</span>
            </div>
            <div className="buttons">
              <Link className="link" to="/cart">
                <button
                  onClick={() => deleteFromCart()}
                  className="btn btn-dark"
                >
                  view cart
                </button>
              </Link>
              <Link className="link" to="">
                <button className="btn btn-dark">check out</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* all products here */}
      <div className="container">
        <h1 className="products-title">trending products</h1>
        <div className="row">
          {data.map((product) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
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
                    <Link to={`/product/${product.id}`} className="shop-btn">
                      Quick Shop
                    </Link>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 20)}
                    </h5>
                    <span className="card-price">${product.price}.00</span>
                    <span className="in-stock d-block">
                      in stock {product.inStock} items
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

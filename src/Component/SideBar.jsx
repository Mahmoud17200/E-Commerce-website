import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addQuantity,
  closeSideBar,
  decreaseQuantity,
  deleteFromCart,
} from "../rtk/slices/cart-slice";
import "../css/sideBar.css";
import { Link, useLocation } from "react-router-dom";

// START JSX
export default function SideBar() {
  const { cartItems, isSideBarOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sidebarRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    dispatch(closeSideBar());
    function handleClickOutside(event) {
      if (
        isSideBarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        dispatch(closeSideBar());
      }
    }

    // إضافة event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // إزالة listener عند unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch, location]);

  const FREE_SHIPPING = 2000;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const progress = Math.min((subtotal / FREE_SHIPPING) * 100, 100);
  const remaining = Math.max(FREE_SHIPPING - subtotal, 0);

  return (
    <div
      ref={sidebarRef}
      className={`sideBar ${isSideBarOpen ? "active" : ""}`}
    >
      <div className="upperNav">
        <h5 className="fw-bold text-uppercase">
          your cart ({cartItems.length}){" "}
        </h5>
        <svg
          className="closeBtn"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={() => dispatch(closeSideBar())}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </div>
      {cartItems.length > 0 && (
        <div className="free-shipping-bar">
          <p>
            {subtotal >= FREE_SHIPPING ? (
              "🎉 Congratulations! You got Free Shipping!"
            ) : (
              <>
                You are <strong>${remaining}</strong> away from Free Shipping!
              </>
            )}
          </p>
          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                backgroundColor: progress === 100 ? "green" : "#ff9900",
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="sideBar-control">
        <div className="row position-relative">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message">
              <h4>your cart is empty</h4>
              <Link to="/">continue shopping</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="col-12">
                <div className="selectedProduct">
                  <div className="img-body">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="details-body">
                    <h4>{item.title}</h4>
                    <div className="price-quantity d-flex align-items-center justify-content-between">
                      <h5 className="item-price">${item.price}</h5>
                      <div className="items-control d-flex align-center">
                        <button
                          onClick={() => dispatch(decreaseQuantity(item))}
                          className="dec"
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          onClick={() => dispatch(addQuantity(item))}
                          className="inc"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span
                      className="remove-btn text-danger text-decoration"
                      onClick={() => dispatch(deleteFromCart(item))}
                    >
                      remove
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="sideBar-footer">
          <div className="total">
            <h5>Subtotal</h5>
            <span className="all-prices">
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0,
              )}
            </span>
          </div>
          <div className="buttons">
            <Link className="link" to="/cart">
              <button className="btn btn-dark">View Cart</button>
            </Link>
            <Link className="link" to="/checkOut">
              <button className="btn btn-dark">Check Out</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

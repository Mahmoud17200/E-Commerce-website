import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuantity,
  decreaseQuantity,
  deleteFromCart,
} from "../rtk/slices/cart-slice";
import { clearCart } from "../rtk/slices/cart-slice";
import "/src/css/cart.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  // console.log(subtotal);

  useEffect(() => {
    window.scroll({
      top: 33.59,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return cart.length === 0 ? (
    <div className="no-products">
      <h4>your cart is empty</h4>
      <p>
        You may check out all the available products and buy some in the shop
      </p>
      <Link to="/" className="btn">
        return to shop
      </Link>
    </div>
  ) : (
    <div className="container mt-5 mb-5">
      <button
        className=" clearBtn btn btn-danger text-capitalize mb-3 pt-1 pb-1"
        onClick={() => dispatch(clearCart())}
      >
        clear all products
      </button>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">image</th>
              <th scope="col">Product</th>
              <th scope="col">price</th>
              <th scope="col">quantity</th>
              <th scope="col">total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} />
                  </td>
                  <td>
                    <h5>{item.title}</h5>
                  </td>

                  <td>
                    <div className="price-cont">
                      <h6>${item.price}</h6>
                    </div>
                  </td>
                  <td>
                    <div className="items-control d-flex align-items-center">
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
                  </td>
                  <td className="total-price">
                    <h6 className="">${item.price * item.quantity}</h6>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="sub-total-sec">
        <div className="cont">
        <h5>Subtotal</h5>
        <span>${subtotal}</span>
        </div>
        <p>Taxes and shipping calculated at checkout</p>
        <Link className="btn" to="/checkout">check out</Link>
      </div>
    </div>
  );
}

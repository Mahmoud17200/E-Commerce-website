import React, { useState } from "react";
import "/src/css/checkout.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CheckOut() {
  const cart = useSelector((state) => state.cart.cartItems);
  const [shipping, setShipping] = useState(90);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  console.log(subtotal);

  return (
    <div className="check-out-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="left-side">
              <form action="">
                <h4 className="title-form text-capitalize ">contact</h4>
                <input
                  className="email d-block"
                  type="email"
                  placeholder="Email or mopile phone number"
                  required
                />
                <div className="email-check">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="d-inline-block"
                    id="checkbox"
                  />
                  <label htmlFor="checkbox">
                    email me with news and offers
                  </label>
                </div>
                <h4 className="title-form text-capitalize">delivery</h4>
                <select name="" className="country-region">
                  <option value="Egypt">Egypt</option>
                </select>
                <div className="name-details">
                  <input type="text" placeholder="first name" required />
                  <input type="text" placeholder="last name" required />
                </div>
                <input
                  type="text"
                  placeholder="address"
                  className="address"
                  required
                />
                <input
                  type="text"
                  placeholder="apartment, suite, etc.(optional)"
                  className="address"
                  required
                />
                <div className="city-details">
                  <input type="text" placeholder="city" required />
                  <select name="" id="country-region">
                    <option selected value="Egypt">
                      Egypt
                    </option>
                  </select>
                  <input
                    type="number"
                    placeholder="additional phone number"
                    required
                  />
                </div>
                <input type="number" placeholder="phone" required />
                <div className="save-info">
                  <input
                    type="checkbox"
                    name="saveInfo"
                    className=""
                    id="saveInfo"
                  />
                  <label htmlFor="saveInfo" className="d-inline-block">
                    save this informaions for the next time
                  </label>
                </div>
                <h4 className="payment  text-capitalize">payment</h4>
                <input
                  className="form-control"
                  type="text"
                  value="cash on delivery (COD)"
                  aria-label="input"
                  disabled
                  required
                />
                <input
                  className="btn btn-danger text-light"
                  type="button"
                  value="Complete order"
                />
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {cart.length < 1 ? (
              <>
                <div className="no-products">
                  <h4>your cart is empty</h4>
                  <p>
                    You may check out all the available products and buy some in
                    the shop
                  </p>
                  <Link to="/" className="btn">
                    return to shop
                  </Link>
                </div>
              </>
            ) : (
              <div className="right-side">
                <section className="products">
                  {cart.map((product) => {
                    return (
                      <div className="product-info">
                        <img src={product.image} alt="" />
                        <div className="info">
                          <h6 className="title">{product.title}</h6>
                          <span className="price">${product.price}</span>
                        </div>
                      </div>
                    );
                  })}
                </section>
                <section className="price-cont">
                  <div className="sub-total d-flex align-center justify-content-between">
                    <span>
                      subtotal:{" "}
                      <span className="fw-bolder">[{cart.length}]</span>{" "}
                      {cart.length > 1 ? "items" : "item"}
                    </span>
                    <span> ${subtotal}</span>
                  </div>
                  <div className="shipping d-flex align-center justify-content-between">
                    <span>shipping:</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="total d-flex align-center justify-content-between">
                    <span>total:</span>
                    <span className="total-price">${subtotal + shipping}</span>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;

{
  /* <input className="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled/>
<input className="form-control" type="text" value="Disabled readonly input" aria-label="Disabled input example" disabled readonly/>   */
}

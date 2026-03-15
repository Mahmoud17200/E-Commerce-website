import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="column first-column">
              <h1 className="section-title">about us</h1>
              <p>
                The exciting contemporary brand Suruchi is known for its
                attention to detail and premium graphics.
              </p>
              <div className="social-media">
                <ul>
                  <li>
                    <img src="/svg icons/svgexport-66.png" />
                  </li>
                  <li>
                    <img src="/svg icons/svgexport-67.png" />
                  </li>
                  <li>
                    <img src="/svg icons/svgexport-68.png" />
                  </li>
                  <li>
                    <img src="/svg icons/svgexport-69.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="column second-column">
              <h1>quick Link</h1>
              <ul>
                <li>
                  <Link className="link" to="FAQ">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="link" to="find store location">
                    find store location
                  </Link>
                </li>
                <li>
                  <Link className="link" to="privacy policy">
                    privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="link" to="refund policy">
                    refund policy
                  </Link>
                </li>
                <li>
                  <Link className="link" to="terms of service">
                    terms of service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="column third-column">
              <h1>Company</h1>
              <ul>
                <li>
                  <Link className="link" to="wishlist">
                    wishlist
                  </Link>
                </li>
                <li>
                  <Link className="link" to="find store location">
                    my account
                  </Link>
                </li>
                <li>
                  <Link className="link" to="privacy policy">
                    product compare
                  </Link>
                </li>
                <li>
                  <Link className="link" to="refund policy">
                    cart
                  </Link>
                </li>
                <li>
                  <Link className="link" to="terms of service">
                    about us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

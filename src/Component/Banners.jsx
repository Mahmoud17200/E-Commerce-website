import React from "react";
import { Link } from "react-router-dom";
import "/src/css/banners.css";

export default function Slideshow() {
  return (
    <div className="banners">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="left-banner">
              <img src="/img/sec1-1.jpg" alt="" />
              <div className="box">
                <h1>Galaxy folding phones</h1>
                <p>
                  Which can vary depending on the brand and model electronic
                  device.
                </p>
                <Link to="/shop" className="btn btn-light">
                  shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="row right-banner">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="upper-banner">
                  <img src="/img/sec1-2.png" alt="" />
                  <div className="box">
                    <h1>Special Discount</h1>
                    <p>up to 50% off</p>
                    <a href="#" className="link">
                      shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <div className="bottom-banner">
                  <img src="/img/sec1-3.png" alt="" />
                  <div className="box">
                    <h1>Special Discount</h1>
                    <p>up to 30% off</p>
                    <a href="#" className="link">
                      shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

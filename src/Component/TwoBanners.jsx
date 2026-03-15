import React from "react";
import "../css/twoBanners.css";

export default function TwoBanners() {
  return (
    <div className="two-banners">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="banner left-banner">
              <span className="overlay"></span>
              <img src="/img/Banner2-2.png" />
              <div className="content">
                <h2>GoPro omni Camera</h2>
                <p>Pair text with an icon to focus on your store's features</p>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="banner right-banner">
              <span className="overlay"></span>
              <img src="/img/Banner2-1.png" />
              <div className="content">
                <h2>IPhone 14 Pro Max</h2>
                <p>Pair text with an icon to focus on your store's features</p>
                <button className="btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

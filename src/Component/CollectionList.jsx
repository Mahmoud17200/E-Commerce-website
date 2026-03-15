import React from "react";
import { Link } from "react-router-dom";
import { categories } from "./db";

import "../css/brands.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

import "../css/collectionList.css";

export default function CollectionList() {
  return (
    <div className="collectionList">
      <div className="container">
        <div className="row">
          <div className="collection lg1024">
            <div className="hero">
              <h1 className="section-title">collection list</h1>
              <Splide
                className="categories Slider splide"
                options={{
                  perPage: 5,
                  perMove: 1,
                  type: "loop",
                }}
              >
                <SplideSlide className="item">
                  <Link className="link" to="/categories/Smart-Watch">
                    <div className="content">
                      <img src="/img/watch2.png" />
                      <h6 className="text-center">watch</h6>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide className="item">
                  <Link className="link" to="/categories/Camera">
                    <div className="content">
                      <img src="/img/cam8.png" />
                      <h6 className="text-center">camera</h6>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide className="item">
                  <Link className="link" to="/categories/Smart-Phone">
                    <div className="content">
                      <img src="/img/phone3.png" />
                      <h6 className="text-center">smart phone</h6>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/accessories4.png" />
                    <h6 className="text-center">accessories</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/laptop.png" />
                    <h6 className="text-center">laptop</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <Link className="link" to="/categories/Smart-Phone">
                    <div className="content">
                      <img src="/img/phone5.png" />
                      <h6 className="text-center">smart phone</h6>
                    </div>
                  </Link>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="collection md768">
            <div className="hero">
              <h1 className="section-title">collection list</h1>
              <Splide
                className="categories Slider splide"
                options={{
                  perPage: 3,
                  perMove: 1,
                  type: "loop",
                }}
              >
                <SplideSlide className="item">
                  <Link to="/categories/Smart-Watch">
                    <div className="content">
                      <img src="/img/watch2.png" />
                      <h6 className="text-center">watch</h6>
                    </div>
                  </Link>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/cam8.png" />
                    <h6 className="text-center">camera</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/phone3.png" />
                    <h6 className="text-center">smart phone</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/accessories4.png" />
                    <h6 className="text-center">accessories</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/laptop.png" />
                    <h6 className="text-center">laptop</h6>
                  </div>
                </SplideSlide>
                <SplideSlide className="item">
                  <div className="content">
                    <img src="/img/phone5.png" />
                    <h6 className="text-center">phone</h6>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
          <div className="name sm360">
            <div className="item">
              <div className="hero">
                <h1 className="section-title">collection list</h1>
                <Splide
                  className="categories Slider splide"
                  options={{
                    perPage: 1,
                    perMove: 1,
                    type: "loop",
                  }}
                >
                  <SplideSlide className="item">
                    <Link to="/categories/Smart-Watch">
                      <div className="content">
                        <img src="/img/watch2.png" />
                        <h6 className="text-center">watch</h6>
                      </div>
                    </Link>
                  </SplideSlide>
                  <SplideSlide className="item">
                    <div className="content">
                      <img src="/img/cam8.png" />
                      <h6 className="text-center">camera</h6>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="item">
                    <div className="content">
                      <img src="/img/phone3.png" />
                      <h6 className="text-center">smart phone</h6>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="item">
                    <div className="content">
                      <img src="/img/accessories4.png" />
                      <h6 className="text-center">accessories</h6>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="item">
                    <div className="content">
                      <img src="/img/laptop.png" />
                      <h6 className="text-center">laptop</h6>
                    </div>
                  </SplideSlide>
                  <SplideSlide className="item">
                    <div className="content">
                      <img src="/img/phone5.png" />
                      <h6 className="text-center">phone</h6>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 let rightClick = () => {
    let hero = document.querySelector(".collection-List .scroll-control");
    hero.scrollLeft += 900;
    if (hero.scrollLeft >= 0) {
      hero.scrollLeft = 900;
    } else {
      hero.scrollLeft = 0;
    }
  };
  let leftClick = () => {
    let hero = document.querySelector(".collection-List .scroll-control");
    if (hero.scrollLeft <= 471) {
      hero.scrollLeft = 0;
    } else {
      hero.scrollLeft = 471;
    }
  };
*/

import React from "react";
import "../css/brands.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function Brands() {
  return (
    <div className="brands-section">
      <div className="brands lg1024">
        <Splide
          className="Slider splide"
          options={{
            perPage: 5,
            perMove: 1,
            type: "loop",
          }}
        >
          <SplideSlide className="item">
            <img src="/img/brands.png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (1).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (2).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (3).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (4).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (5).png" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="brands md768">
        <Splide
          className="Slider splide"
          options={{
            perPage: 3,
            perMove: 1,
            type: "loop",
          }}
        >
          <SplideSlide className="item">
            <img src="/img/brands.png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (1).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (2).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (3).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (4).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (5).png" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="brands sm360">
        <Splide
          className="Slider splide"
          options={{
            perPage: 1,
            perMove: 1,
            type: "loop",
          }}
        >
          <SplideSlide className="item">
            <img src="/img/brands.png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (1).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (2).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (3).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (4).png" />
          </SplideSlide>
          <SplideSlide className="item">
            <img src="/img/brands (5).png" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

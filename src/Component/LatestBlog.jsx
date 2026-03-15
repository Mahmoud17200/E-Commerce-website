import React from "react";
import { Link } from "react-router-dom";
import "../css/latestBlog.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function LatestBlog() {
  return (
    <div className="latestBlog">
      <div className="container-fluid">
        <h1 className="section-title text-center">latest blog</h1>
        <div className="hero lg1024">
          <Splide
            className="splide"
            options={{
              perPage: 3,
              perMove: 1,
              type: "loop",
            }}
          >
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="hero md768">
          <Splide
            className="splide"
            options={{
              perPage: 2,
              perMove: 1,
              type: "loop",
            }}
          >
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
        <div className="hero sm360">
          <Splide
            className="splide"
            options={{
              perPage: 1,
              perMove: 1,
              type: "loop",
            }}
          >
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog1.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog2.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog3.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog4.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide className="swiperSlide">
              <div className="card">
                <img src="/img/blog5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-date">September 2023</p>
                  <h1 className="card-title">
                    Black and silver camera beside MacBook Pro
                  </h1>
                  <Link className="link" to="/">
                    <button className="btn btn-primary">load more</button>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}

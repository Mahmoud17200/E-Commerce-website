import React from "react";

import { catName } from "./db";
import "../css/categories.css";
import { Link } from "react-router-dom";

export default function Categories() {
  window.scroll({
    top: 58,
    left: 0,
    behavior: "instant",
  });
  return (
    <>
      <div className="categories">
        <div className="container-fluid">
          <h1 className="text-center section-title">collections</h1>
          <div className="cat">
            <div className="row">
              {catName.map((item) => {
                return (
                  <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
                    <div className="card">
                      <div className="card-img">
                        <span className="shadow"></span>
                        <div className="className">
                          <Link to={`/categories/${item.categoryName}`}>
                            <img
                              src={item.image}
                              className="card-img-top"
                              alt="..."
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <Link
                          className="link"
                          to={`/categories/${item.categoryName}`}
                          value={item.category}
                        >
                          <a>{item.category}</a>
                          <li>
                            <img src="/svg icons/svgexport-23.png" />
                          </li>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="cat-result">
            {category.map((item) => {
              return (
                <div className="container d-flex">
                  <img style={{ width: "50px" }} src={item.image} alt="" />
                  <h3>{item.title}</h3>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
}

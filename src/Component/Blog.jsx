import React from "react";
import "../css/blog.css";
import { blog } from "./db";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container-fluid">
        <h1 className="section-title">News</h1>
        <div className="row">
          {blog.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <p className="card-date">September 2023</p>
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

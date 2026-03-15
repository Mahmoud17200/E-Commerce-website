import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openSideBar } from "../rtk/slices/cart-slice";

export default function LowerNavbar() {
  let [catMenuOpen, setCatMenuOpen] = useState(false);
  let [fixedNav, setFixedNav] = useState(false);

  let toggleCatMenu = () => {
    !catMenuOpen ? setCatMenuOpen(true) : setCatMenuOpen(false);
  };

  function fixedNavbar() {
    if (window.scrollY >= 15) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }
    window.addEventListener("scroll", fixedNavbar);


  let closeCatMenu = (e) => {
    setCatMenuOpen(false);
  };

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <nav
        className={
          fixedNav
            ? "lowerNav navbar navbar-expand-lg active"
            : "lowerNav navbar navbar-expand-lg"
        }
      >
        <div className="container control">
          <div className="Categories">
            <h5 onClick={toggleCatMenu}>
              <img src="/svg icons/menu.svg" alt="" /> All Categories
            </h5>
            {/* category menu drop down */}
            <div
              className={catMenuOpen ? "category-menu active" : "category-menu"}
            >
              <ul>
                <li>
                  <Link className="link" to="/categories/smart-Phone">
                    <div onClick={closeCatMenu} className="cat">
                      <img src="/svg icons/svgexport-15.svg" alt="" />
                      <p className="cat-name">smart phones</p>
                      <img
                        className="cursor-right"
                        src="/svg icons/svgexport-23.png"
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/categories/Camera">
                    <div onClick={closeCatMenu} className="cat">
                      <img src="/svg icons/svgexport-12.png" alt="" />
                      <p className="cat-name">camera</p>
                      <img
                        className="cursor-right"
                        src="/svg icons/svgexport-23.png"
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/categories/smart-Phone">
                    <div onClick={closeCatMenu} className="cat">
                      <img src="/svg icons/svgexport-15.svg" alt="" />
                      <p className="cat-name">iPad & tablet</p>
                      <img
                        className="cursor-right"
                        src="/svg icons/svgexport-23.png"
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeCatMenu}
                    className="link"
                    to="/categories/smart-Watch"
                  >
                    <div className="cat">
                      <img src="/svg icons/svgexport-17.png" alt="" />
                      <p className="cat-name">smart watch</p>
                      <img
                        className="cursor-right"
                        src="/svg icons/svgexport-23.png"
                        alt=""
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <ul className="navbar-nav">
            <span className="column-border"></span>
            <li className="nav-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/categories" className="link">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="link">
                Products
                <img src="/svg icons/arrow-down.svg" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="link">
                Blog
              </Link>
            </li>
          </ul>
          <div className="nav-icons">
            <ul>
              <li>
                <Link to="/wishlist">
                  <img src="/svg icons/whishlist.png" />
                </Link>
              </li>
              <li>
                <span onClick={() => dispatch(openSideBar())}>
                  <img src="/svg icons/cart2.svg" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

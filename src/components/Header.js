import { useState } from "react";
import { Link } from "react-router-dom";
// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      alt="Food Fire Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("header Rendered");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          {/*  <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>*/}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

const Navbar = () => {
    const [menu, setMenu] = useState("");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="logo" />
                <p >SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}>
                    <Link style={{textDecoration:'none' , color:' #515151'}} to='/'>Shop</Link>
                    {menu === "Shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("Men") }}>
                    <Link style={{textDecoration:'none' ,color:' #515151'}} to='/Mens'>Men</Link>
                    {menu === "Men" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("Women") }}>
                    <Link style={{textDecoration:'none', color:' #515151'}} to='/Womens'>Women</Link>
                    {menu === "Women" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("Kids") }}>
                    <Link style={{textDecoration:'none' , color:' #515151'}} to='/Kids'>Kids</Link>
                    {menu === "Kids" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/Login'><button>Login</button></Link>
                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faBasketShopping,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import Hm from "../component/img/H&M.png"

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["H&M HOME", "Woman", "Men", "Baby", "Kids", "Sport", "Sale", "지속가능성"];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };

  return (
    <div className="navBar">
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>

      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
            <FontAwesomeIcon icon={faHeart} />
            <span style={{ cursor: "pointer" }}>즐겨찾기</span>
            <FontAwesomeIcon icon={faBasketShopping} />
            <span style={{ cursor: "pointer" }}>장바구니</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
            <FontAwesomeIcon icon={faHeart} />
            <span style={{ cursor: "pointer" }}>즐겨찾기</span>
            <FontAwesomeIcon icon={faBasketShopping} />
            <span style={{ cursor: "pointer" }}>장바구니</span>
          </div>
        )}
      </div>
      <div className="nav-logo">
        <Link to="/">
          <img
            width={100}
            src={Hm}
          />
        </Link>
      </div>

       <div class="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li>
              <a href="#" key={index}>
                {menu}
              </a>
            </li>
          ))}
        </ul>

       <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" onKeyPress={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

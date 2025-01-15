import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menuList = ["Woman", "Men", "Baby", "Kids", "Home", "Sale"];
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToHome = () =>{
    navigate("/")
  }
  const search = (event) => {
    if(event.key === 'Enter'){
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  };
  return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
          <FontAwesomeIcon icon={faHeart} />
          <div>즐겨찾기</div>
          <FontAwesomeIcon icon={faBasketShopping} />
          <div>장바구니</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu33MvMQxzeLQWuQTeJbGoEUq_bsuAH1HMag&s"
          alt="H&M"
          onClick={goToHome}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
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
          <input type="text" placeholder="제품검색" onKeyPress={(event)=>search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

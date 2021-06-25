import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAthentication = () => {
    if(user){

      auth.signOut();

    }
   }
  return (
    <nav className="header">
      <Link to="/">
        <img className="header__logo" src="/images/logo.png" alt="" />
      </Link>

      {/*Search box*/}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/**Links */}

      <div className="header__nav">
        {/**1 Link */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAthentication}  className="header__option">
            <span className="header__OptionOne">Hello {user ?user.email : 'Guest'}</span>
            <span className="header__OptionTwo">{user ? 'sign Out' : 'sign In'}</span>
          </div>
        </Link>

        {/**2 Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__OptionOne">Returns</span>
            <span className="header__OptionTwo">& Orders</span>
          </div>
        </Link>

        {/**3 Link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__OptionOne">Your</span>
            <span className="header__OptionTwo">Prime</span>
          </div>
        </Link>

        {/**4 Link */}
        <Link to="/checkout" className="header__link">
          <div className="header__Basket">
            <ShoppingCartIcon />
            <span className="basket__count">{basket.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;

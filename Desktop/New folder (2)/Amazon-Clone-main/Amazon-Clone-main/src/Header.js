import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }]= useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAWZgVmr7NL6do8sjOxdWw7mzLVNrUI5BpqW-HKGXCACxX38WJ5RsmxZN5B4114vR3g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAWZgVmr7NL6do8sjOxdWw7mzLVNrUI5BpqW-HKGXCACxX38WJ5RsmxZN5B4114vR3g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAWZgVmr7NL6do8sjOxdWw7mzLVNrUI5BpqW-HKGXCACxX38WJ5RsmxZN5B4114vR3g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReAWZgVmr7NL6do8sjOxdWw7mzLVNrUI5BpqW-HKGXCACxX38WJ5RsmxZN5B4114vR3g&usqp=CAU"
        />
      </Link>

      <div className=" header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to ="/login">
        <div className="header__option">
          <span className="header__optionLine1">Hello Guest</span>
          <span className="header__optionLine2">Sign In</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLine1">Returns</span>
          <span className="header__optionLine2">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLine1">Yours</span>
          <span className="header__optionLine2">Prime</span>
        </div>
        <Link to ="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

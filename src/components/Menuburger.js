import "./Menuburger.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Menuburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="burgerMenu">
      <button className="buttonMenu" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <RxCross2 /> : <BiMenu />}
      </button>
      <nav>
        <div className="listMenuDiv">
          <ul
            className="listMenu"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <li onClick={() => setIsOpen(false)}>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tourlist">Tournament list</Link>
            </li>
            <li>
              <Link to="/characterslist">Character list</Link>
            </li>
            <li>
              <Link to="/gameboard">Current tournament</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menuburger;

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
            <Link to="/">
              <li
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <a href="/">Home</a>
              </li>
            </Link>
            <li>
              <a href="/tourlist">Tournament list</a>
            </li>
            <li>
              <a href="/characterslist">Character list</a>
            </li>
            <li>
              <a href="/gameboard">Current tournament</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menuburger;

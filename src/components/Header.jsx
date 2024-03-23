import { useState } from "react";
import { Link } from "react-router-dom";
import Applayout from "../App";

const Titel = () => {
  return (
    <a href="./">
      <img className="h-20 " src="../Food Fire Logo.png" alt="Logo" />
    </a>
  );
};
const HeaderComponent = () => {
  const [Fliper, SetFliper] = useState(true);

  function fliphandler() {
    Fliper === true ? SetFliper(false) : SetFliper(true);
  }

  return (
    <>
      <div className="flex justify-between items-center ">
        <Titel />
        <div className="">
          <ul className="flex gap-20">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About us</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Instamart">Instamart</Link></li>
            <li><Link to="/card is not cread yet">Card</Link></li>
          </ul>
        </div>
        {Fliper === true ? (
          <button onClick={fliphandler}>logIn</button>
        ) : (
          <button onClick={fliphandler}>logOut</button>
        )}
      </div>
    </>
  );
};

export default HeaderComponent;

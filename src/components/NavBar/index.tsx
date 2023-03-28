import { useState } from 'react';
//import { useSelector, useDispatch } from "react-redux";
//import { setShowMenu, selectShowMenu } from "@store/Slices/appSlice";
import "./navbar.css";
import NavToggle from "../NavToggle";
import Menu from "../Menu";
const NavBar = ({ title = "" }) => {
  const [menuToggle, setMenuToggle] = useState(false);
  //const dispatch = useDispatch();
  //const menuToggle = useSelector(selectShowMenu);
  const onMenuToggle = () => {
    //dispatch(setShowMenu(!menuToggle));
    setMenuToggle(!menuToggle);
  };
  return (
    <>
      <nav className="navbar">
        <NavToggle checked={menuToggle} onClick={onMenuToggle} />
        <h1>{title}</h1>
      </nav>
      <Menu setShowMenu={setMenuToggle} showMenu={menuToggle} selectShowMenu=''/>
    </>
  );
};

export default NavBar;

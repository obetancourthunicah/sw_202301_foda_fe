import { setShowMenu, selectShowMenu } from "@store/Slices/appSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAuth, resetSecData } from "@store/Slices/secSlice";

import {BiLogIn, BiLogOut, BiUser, BiUserPlus } from 'react-icons/bi';

import "./Menu.css";

const Menu = () => {
  const user = useSelector(selectAuth);
  const showMenu = useSelector(selectShowMenu);
  const dispatch = useDispatch();
  const classNames = showMenu ? "menu" : "menu hidden";
  const navigate = useNavigate();
  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowMenu(!showMenu));
    navigate((e.target as HTMLAnchorElement).getAttribute("href")||'');
  };
  const onLogoutHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(resetSecData());
    dispatch(setShowMenu(!showMenu));
    navigate("/login");
  };
  if (!user?.token) {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/login" onClick={(e)=>{}}>
              <BiLogIn />&nbsp;Iniciar Sesión
            </a>
          </li>
          <li>
            <a href="/signup" onClick={onClickHandler}>
              <BiUserPlus/>&nbsp;Crear Cuenta
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={classNames}>
        <ul>
          <li>
            <a href="/home" onClick={onLogoutHandler}>
              <BiLogOut/>&nbsp;Cerrar Sesión
            </a>
          </li>
           <li>
            <a href="/cashflow" onClick={onClickHandler}>
              <BiLogOut/>&nbsp;CashFlow
            </a>
          </li>
           <li>
            <a href="/admin/cashflow" onClick={onClickHandler}>
              <BiLogOut/>&nbsp;Admin CashFlow
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Menu;

import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderType} from "./HeaderContainer";

const Header = (props: HeaderType) => {

    return ( <header className={s.header}>
        <img src='https://img.favpng.com/20/11/13/logo-flower-royalty-free-png-favpng-T5kbUFNpSV0tFXRpGLzqXexZD.jpg'/>
        <div className={s.loginBlock}>
            {props.isAuth ? props.login  : <NavLink className={s.loginLink} to={'/login'}>Login</NavLink>}

        </div>
    </header>);
}
export default Header
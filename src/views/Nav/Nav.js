import React from "react";
import './Nav.scss'
import logo from "../../assets/images/logo.png"
import {
    Link, NavLink
} from "react-router-dom";
class Nav extends React.Component {

    render() {
        let isLogin = this.props.isLogin
        return (

            <header>
                <div className="header-container">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="nav">
                        <a className="video-chat" href="#">
                            Video chat
                        </a>

                        <a className="about-us" href="#">
                            About us
                        </a>
                    </div>
                    {
                        isLogin ?

                            <div className="avata">
                                <img src={require("../../assets/images/avt.jpeg")} alt="avata" />
                            </div>
                            :
                            <button class="btn btn-Login">
                                <a href="#" class="header__navbar-icon-link">
                                    <i class="fa-solid fa-mobile-screen"></i>
                                </a>
                                <a href="#" class="header__navbar-icon-link">
                                    <i class="fab fa-facebook"></i>
                                </a>
                                <a href="#" class="header__navbar-icon-link">
                                    <i class="fa-brands fa-google"></i>
                                </a>
                                <a href="#" class="header__navbar-icon-link">
                                    <i class="fa-brands fa-apple"></i>
                                </a>
                                <a href="#" class="header__navbar-item-link">
                                    Login
                                </a>
                            </button>
                    }

                </div>
            </header>

            // <div className="topnav">

            //     <NavLink to="/" exact >Home</NavLink>
            //     <NavLink to="/todo"  >Todo</NavLink>
            //     <NavLink to="/about"  >About</NavLink>
            //     <NavLink to="/user"  >User</NavLink>

            //     {/* <Link className="active" to="/">Home</Link>
            //     <Link to="/todo">Todo</Link>
            //     <Link to="/about">About</Link> */}
            // </div>
        )
    }
}

export default Nav;

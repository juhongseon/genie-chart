import React from "react";
import {NavLink} from "react-router-dom";

export default function Header(){
    return (
        <React.Fragment>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink to={'/'} className="navbar-brand">GenieChart</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink exact to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/search'}>Search</NavLink></li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
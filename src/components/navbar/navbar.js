import React, { Component } from 'react';
import "./navbarStyle.css"
import {Form, Link} from "react-router-dom";
import {menueItem} from "./menueItem";
class navbar extends Component {
    state = {clicked:false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
   render() {
        return (
            <nav className='NavBarItem'>
                <h1 className='Navbarlogo'>
                    Trippy
                </h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menue activate" : "nav-menue"}>
                    {menueItem.map((item,index)=>{
                         return(
                            <li key={index}>
                            <Link className={item.cName} to={item.url} href='/'><i className={item.icon}></i>{item.title}</Link>
                        </li>
                        )}
                    )}
                    <button className='button'>Sign Up</button>
                </ul>
            </nav>
        );
    }
}


export default navbar;
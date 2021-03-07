import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import {Link, NavLink} from 'react-router-dom'
import './css/Header.css'
// import Login from  './section/Login';
import {DataContext} from './Context';
import SearchBar from './section/SearchBar'








export class Header extends Component {
    static contextType = DataContext;

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

   
    render() {
        const {toggle} = this.state;
        const {cart} = this.context;
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                    <img src={Menu} alt="" width="20"/>
                </div>
                <div className="logo">
                    <h1><NavLink to="/">Nike</NavLink></h1>
                    
                    
                </div>
            
                <nav>
                    <ul className={toggle ? "toggle" : ""}> 
                       <li><SearchBar /></li>
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/product">Product</NavLink></li>
                        <li><NavLink exact to="/Login">Sigin</NavLink></li>
                        <li className="close"  onClick={this.menuToggle}>
                            <img src={Close} alt="" width="30" />
                        </li>
                    </ul>
                    <div className="nav-cart">
                        <span>{cart.length}</span>
                        <Link to="/cart">
                            <img src={CartIcon} alt=""  width="30"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button.js'
import logo from '../logo.svg';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"/>
                        </span>
                        MY cart
                    </ButtonContainer>
                </Link>
                
            </NavWrapper>
        );
    }
}

export default Navbar;


const NavWrapper = styled.nav`
    background : #2a2a72;
    .nav-link {
        color : #f3f3f3 !important ;
        font-size: 1.3rem;
        text-transform: capitalize;

    }
`;
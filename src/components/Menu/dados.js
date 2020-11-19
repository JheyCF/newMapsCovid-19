import React from 'react';
import { Link } from 'react-router-dom'

import Logo from '../logo-menu/index';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import "./styles.css"

library.add(fas);

function Menu() {
    return (
        <div>
            <div id="menu">
                {/*<div id="libra">
                    <a href="https://www.vlibras.gov.br/" target="blank">
                    <img src= {require('./libras.png')} /> </a>
                    <a href="https://www.vlibras.gov.br/" target="blank"> Vlibra</a>
                </div>
                <div id="">
                    <Logo />
    </div>*/}
                
                <nav id="menu-opcao">
                    <ul>

                        <div id="page-menu" className="menu-li" >
                                <li>  
                                <Link to="/">  
                                    <p>Home </p></Link>
                           </li> 
                           </div>                        
                        
                        <li id="back-menu">
                            <div className="menu-li"> 
                                <Link to="/data"> 
                                    Dados 
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="menu-li">
                                <Link to="/contact"> 
                                    Cuidados </Link>   
                            </div>
                        </li>
                        <li>
                            <div className="menu-li"> 
                                <Link to="/sobre">
                                    Sobre</Link>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>  
            {/*
            <div id="responsivo">  
                {/* Menu responsivo
                <nav>
                    <ul>
                        <li id="click-responsivo">
                            <Link to="/"> 
                                <FontAwesomeIcon className="fas" icon="home" />
                            </Link>
                        
                        </li>
                        <li> 
                        <Link to="/data"> <FontAwesomeIcon className="fas" icon="chart-bar" />
                            </Link>
                        </li>
                        <li>
                        <Link to="/contact"> <FontAwesomeIcon className="fas" icon="comment" />
                            </Link>   
                        </li>
                        <li> 
                        <Link to="/sobre"> <FontAwesomeIcon className="fas" icon="info-circle" />
                            </Link>
                        </li>
                    </ul>
                </nav>

                </div>*/}
        </div>
    )
};

export default Menu;

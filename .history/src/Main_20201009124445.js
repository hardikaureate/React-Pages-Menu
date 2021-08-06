import React, { Component } from 'react'
import ReactDom from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {Route, NavLink, HashRouter} from 'react-router-dom';

class Main extends Component {
        render(){
                return(
                        <HashRouter>
                        <div>
                                <ul className="header">
                                        <li><Navlink to="/home">Home</=></li>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/contact">Contact</a></li>
                                </ul>

                                <div className="content">
             
                                </div>
                        </div>
                        </HashRouter>
                )
        }
}

export default Main;
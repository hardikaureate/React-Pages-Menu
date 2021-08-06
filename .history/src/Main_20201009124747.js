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
                                        <li><Navlink to="/">Home</Navlink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>

                                <div className="content">
                                        <Route path="/" Component={Home} />
                                </div>
                        </div>
                        </HashRouter>
                )
        }
}

export default Main;
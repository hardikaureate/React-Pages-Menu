import React, { Component } from 'react'
import {Route, Link, HashRouter} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';


class Main extends Component {
        render(){
                return(
                        <HashRouter>
                        <div>
                                <ul className="header">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/About">About</Link></li>
                                        <li><Link to="/Contact">Contact</Link></li>
                                </ul>

                                <div className="content">
                                        <Route path="/" Component={Home} />
                                        <Route path="/About" component={About} />
                                        <Route path="/Contact" Component={Contact} />
                                </div>
                        </div>
                        </HashRouter>
                )
        }
}

export default Main;
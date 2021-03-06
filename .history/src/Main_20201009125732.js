import React, { Component } from 'react'
import {Route, Link, HashRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';


class Main extends Component {
        render(){
                return(
                        <HashRouter>
                        <div>
                                <ul className="header">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                </ul>

                                <div className="content">
                                        <Route  path="/" component={Home} />
                                        <Route path="/about" component={About} />
                                        <Route path="/contact" component={Contact} />
                                </div>
                        </div>
                        </HashRouter>
                )
        }
}

export default Main;
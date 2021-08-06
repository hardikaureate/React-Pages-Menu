import React, { Component } from 'react'
import {Route, Link, HashRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Errorpage from './Errorpage'


class Main extends Component {
        render(){
                return(
                        <HashRouter>
                        <React.Fragment>
                                <ul className="header">
                                        <li><Link exact to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>

                                </ul>

                                <div className="content">
                                        <Route exact path="/" component={Home} />
                                        <Route exact path="/about" component={About} />
                                        <Route exact path="/contact" component={Contact} />
                                        <Route component={Errorpage} />
                                </div>
                        </React.Fragment>
                        </HashRouter>
                )
        }
}

export default Main;
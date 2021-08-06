import React, { Component } from 'react'
import ReactDom from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import {Route, NavLink, HashRouter} from 'react-router-dom';

class Main extends Component {
        render() {
          return (
            <HashRouter>
              <div>
                <h1>Simple SPA</h1>
                <ul className="header">
                  <li><NavLink to="/">Home</NavLink></li>
       
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                  <Route path="/" component={Home}/>
                 
                  <Route path="/contact" component={Contact}/>
                </div>
              </div>
            </HashRouter>
          );
        }
      }

export default Main;
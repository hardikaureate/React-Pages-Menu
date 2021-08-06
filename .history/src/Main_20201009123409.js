import React, { Component } from 'react'
import ReactDom from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class Main extends Component {
        render(){
                return(
                        <div>
                                <ul className="header">
                                        <li><a href="/home">Home</a></li>
                                        <li><a href="">About</a></li>
                                        <li><a href="">Contact</a></li>
                                </ul>
                        </div>
                )
        }
}

export default Main;
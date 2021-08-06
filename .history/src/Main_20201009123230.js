import React, { Component } from 'react'
import ReactDom from 'react-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';

class Main extends Component {
        render(){
                return(
                        <div>
                        <Home />
                        <About />
                        <Contact />
                        </div>
                )
        }
}

export default Main;
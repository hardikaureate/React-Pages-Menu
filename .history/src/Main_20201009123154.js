import React, { Component } from 'react'
import ReactDom from 'react-dom';
import About from './About';
import Home from './Home';

class Main extends Component {
        render(){
                return(
                        <div>
                        <Home />
                        <About />
                        <h1>Hardik</h1>
                        <p>Hello AL</p>
                        </div>
                )
        }
}

export default Main;
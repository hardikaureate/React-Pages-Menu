import React, { Component } from 'react'

export default class Clock extends Component {
        constructor(props) {
                super(props);
                console.log('constructtt');
                this.state = {date: new Date().toLocaleTimeString()};
              }
            
              componentDidMount() {
                      console.log('DidMount')
              }
              
              componentWillUnmount() {
                      console.log('WillMount')
              }
              
              render() {
                      console.log('Rendering')
                return (
                  <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date}.</h2>
                  </div>
                );
              }
}

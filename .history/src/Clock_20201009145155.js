import React, { Component } from 'react'

export default class Clock extends Component {
        constructor(props) {
                super(props);
                console.log('constructtt');
                this.state = {date: new Date()};
              }
            
              componentDidMount() {
                      console.log('DidMount')
              }

              componentDidMount(){
                      this.Tid = setInterval( () => 
                              this.tick(), 1000
                      );
              }
              
              componentWillUnmount() {
                      console.log('WillMount')
                      clearInterval(this.Tid)
              }

              tick(){
                      this.setState({
                              aajdate : new Date()
                      })
              }
              
              render() {
                      console.log('Rendering')
                return (
                  <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.aajdate.toLocaleTimeString()}.</h2>
                  </div>
                );
              }
}

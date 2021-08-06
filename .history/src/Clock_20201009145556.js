import React, { Component } from 'react'

export default class Clock extends Component {
        constructor(props) {
                super(props);
                console.log('constructtt');
                this.state = {date: new Date()};
              }

              componentDidMount(){
                console.log('DidMount')
                      this.Tid = setInterval( () => 
                              this.tick(), 1000
                      );
              }
              
              componentWillUnmount() {
                      console.log('WillMount')
                      clearInterval(this.Tid)
              }

              tick(){
                //console.log('tick()method')
                      this.setState({
                              date : new Date()
                      })
              }
              
              render() {
                      console.log('Rendering')
                return (
                  <div>
                    <h1 className="common">Hello, world!</h1>
                    <h2 className="common">It is {this.state.date.toLocaleTimeString()}.</h2>
                  </div>
                );
              }
}

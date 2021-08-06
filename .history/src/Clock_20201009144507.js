class Clock extends React.Component {
        constructor(props) {
          super(props);
          console.log('constructtt');
          this.state = {date: new Date()};
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
              <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
          );
        }
      }
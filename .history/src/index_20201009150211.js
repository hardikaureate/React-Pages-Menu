import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Main';
import Clock from './Clock';

ReactDOM.render( 
<React.Fragment>
<Clock name="Company" />
<Main/>
</React.Fragment>
, document.getElementById('root'));

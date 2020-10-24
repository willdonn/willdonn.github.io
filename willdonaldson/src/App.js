import {HashRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home';
import ThreeDPrinting from './3DPrinting';

class App extends React.Component 
{
  render ()
  {
    return (

      <Router>
        <nav>
          <NavLink exact to="/"><a>Will Donaldson</a></NavLink>
          <NavLink to="/3DPrinting"><a>3D Printing</a></NavLink>
          
        </nav>

        <div>
          
          <Route exact path="/" component={Home}/>
          <Route path="/3DPrinting" component={ThreeDPrinting}/>
        </div>

      </Router>
    );
  }
}

export default App;

import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home';
import ThreeDPrinting from './3DPrinting';
import Projects from './Projects';
import Contact from './Contact';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const trackingId = "G-5MFR4H6KR9"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends React.Component 
{
  render ()
  {
    return (

      <Router history={history}>
        <nav>
          <NavLink exact to="/">Will Donaldson</NavLink>
          <NavLink to="/3Dprinting">3D Printing</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          {/* <NavLink to="/Contact">Contact</NavLink> */}
        </nav>

        <div>
          
          <Route exact path="/" component={Home}/>
          <Route path="/3Dprinting" component={ThreeDPrinting}/>
          <Route path="/projects" component={Projects}/>
          {/* <Route path="/Contact" component={Contact} /> */}
        </div>

      </Router>
    );
  }
}

export default App;

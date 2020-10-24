import React from 'react';
import './Home.css';

// This is an example of managing a list of items in React, including delete,
// edit and add operations for the list!

class Home extends React.Component {
  
    // We use arrow functions => to generate our list of items right inside our 
    // JSX expression, as well as to handle the onChange event of the input 
    // textbox: https://www.w3schools.com/js/js_arrow_function.asp
    //
    // We setup delete and edit handlers with each item, and we have our button 
    // click handled by the submit handler, all of which are defined above.
    render() {
      return (
        <div>
          <span>
            <img src="will.jpeg" alt="Will Portrait"/>
            <ul>
                <li>
                  <a href="https://www.linkedin.com/in/will-donaldson528">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/willdonn">github</a>
                </li>
                <li>
                  <a href="https://mcmasterneudose.ca/team">McMaster Neudose</a>
                </li>
                <li>
                  <a href="WilldonnCheckers.jar">Play Checkers!</a>
                </li>
              </ul>
          </span>
        </div>
      )
    }
  }

export default Home;
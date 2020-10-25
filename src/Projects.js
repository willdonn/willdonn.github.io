import React from 'react';
import './App.css';

class Projects extends React.Component {
  
    render() {
      return (
        <div>
          <div class="container">
            <h1>Checkers</h1>
            <img src="Checkers.png" alt="Checkers Screen" class="image"/>
            <div class="right">
              <h2>Checkers Implementation Written in Java</h2>
              <a href="https://github.com/willdonn/Checkers">Source code</a>
              <p>Uses Java Swing framework for UI. Two player or one player game modes available. Currently working on implementing a minimax algorithm for single player mode.</p>
              <p>Download the executable Jar<a href="WilldonnCheckers.jar">here</a>.</p>
            </div><br/>
            
          </div>
        </div>
      )
    }
  }

export default Projects;
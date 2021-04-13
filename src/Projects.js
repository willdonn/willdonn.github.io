import React from 'react';
import './App.css';

class Projects extends React.Component {
  
    render() {
      return (
        <div>
          <div class="container">
            <h1>Conway's Game Of Life</h1>
            <img src="images/Conway'sGameOfLife.png" alt="Conway Screen" class="image"/>
            <div class="right">
              <h2>Conway's Game of Life Implementation Written in Java</h2>
              <a href="https://github.com/willdonn/GameOfLife">Source code</a>
              <p>Uses Java Swing framework for UI. Set Initial state by clicking on cells then press play to continuously update the state, or next to step to the next state.</p>
              <p>Download the executable Jar<a href="ConwayGameOfLife.jar">here</a>.</p>
            </div><br/>
            <h1>Checkers</h1>
            <img src="images/Checkers.png" alt="Checkers Screen" class="image"/>
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
import React from 'react';
import './App.css';

class Projects extends React.Component {
  
    render() {
      return (
        <div>
          <h1>Projects</h1>
          <div class="container">
            <h1>Shopify Shipping Cost App</h1>
            <img src="images/Shopify_shipping_cost_app.png" alt="Shopify shipping cost" class="image"/>
            <div class="right">
              <h2>Shopify custom shipping app Written in Javascript</h2>
              <p>Custom shipping cost application developed for local Shopify business using Google Maps API.</p>
              <p>Uses Node.js hosted on Heroku to service shipping cost api requests.</p>
              <p>Visit the Shopify store<a href='https://monumentmanager.ca/'>here</a>.</p>
            </div><br/>
            <h1>Conway's Game Of Life</h1>
            <img src="images/GameOfLife.png" alt="Conway Screen" class="image"/>
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
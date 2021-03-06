import React from 'react';
import Slideshow from './Slideshow';
import './App.css';

import { ReactBingmaps } from 'react-bingmaps';

class Home extends React.Component {

    render() {
      return (
        <div>
          <div class="container">
            <h1>About Me</h1>
            
            <div>
              <p>I am a fourth year Software Engineering and Management Student from McMaster University.</p>
              <p>Find Me On:</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/will-donaldson528">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/willdonn">GitHub</a>
                </li>
                <li>
                  <a href="https://mcmasterneudose.ca/team">McMaster Neudose</a>
                </li>
              </ul>
            </div>
            
            <img src="images/kite.png" class="image2" alt="Kite"/>

          </div>
          
          <div class="container">
            <h1>Work Experience</h1>
            <a href="Will_Donaldson_Resume.pdf">Resume</a><br/>
            <img src="images/fireball-blue.png" alt="McMaster Fireball" class="image"/>
            <div class="right">
              <h2>Digital Systems and Interfacing Teaching Assistant - McMaster University</h2>
              <p class="subtitle">September 2020 - December 2020</p>
              <a href="http://www.cas.mcmaster.ca/~leduc/2D04.html">course website</a>
              <p>I am responsible for supervising, assisting, and evaluating student's lab work.</p>
              <p>The labs consist of program Intel FPGAs using<a href="https://www.intel.ca/content/www/ca/en/software/programmable/quartus-prime/overview.html">Quartus Prime</a>.</p>
            </div><br/>
            <img src="images/internshipwill.jpg" alt="Will Selfie" class="image"/>
            <div class="right">
              <h2>IT Applications Intern - Honda of Canada Mfg.</h2>
              <p class="subtitle">May 2019 - September 2020</p>
              <p>I completed a 16 month internship at Honda of Canada Manufacturing as part of the IT Applications group.</p>
            </div><br/>
            
          </div>

          <div class="container">
          <h1>Extracurricular</h1>
          <img src="images/will.jpeg" alt="Will Portrait" class="image"/>
            <div class="right">
              <h2>Firmware Specialist - McMaster Interdisiplinary Satellite Team</h2>
              <p class="subtitle">September 2017 - Present</p>
              <p>I am currently working on developing/ testing firmware written in C++ for the<a href="https://mcmasterneudose.ca">McMaster Neudose Mission</a>.</p>
              <p>The development includes:</p>
              <ul>
                <li>Firm Real Time Application Logic</li>
                <li>Embedded Device Drivers</li>
                <li>Interrupt Handlers</li>
              </ul>
            </div><br/>
          </div>

        </div>
      )
    }
  }

export default Home;
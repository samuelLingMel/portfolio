import React, { Component } from 'react';
import memoryGameImg from './memoryGameScreenShot.png'
import trashureImg from './trashureScreenShot.png'
import codingWikiImg from './codingWikiScreenShot.png'
import noughtsAndCrossesImg from './noughtsAndCrossesScreenShot.png'
import githubImg from './github.png'
import trialImg from './trial.png'
import './Project.css'

class Projects extends React.Component {
  render() {
    return(
      <h1 class='project-grid'>
        <div class='card'>
          <div class='front-face'>
            <img src={memoryGameImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Pairs</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/wdi-fundamentals-memorygame">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/memory-game/index.html">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
          
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={codingWikiImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Coding Wiki</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/Coding-Wiki">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://mysterious-thicket-44355.herokuapp.com/">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={noughtsAndCrossesImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Noughts and Crosses</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/Noughts-and-Crosses">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://samuellingmel.github.io/Noughts-and-Crosses/">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

        <div class='card'>
          <div class='front-face'>
            <img src={trashureImg} alt="" height='300px' width = '300px'/>
            <h5 class='title'>Trashure</h5>
          </div>
          <div class='back-face'> 
            <div class='github'>
              <a href="https://github.com/samuelLingMel/trashure">
                <img src={githubImg} alt=""/>
              </a>
            </div>
            <div class='demo'>
              <a href="https://trashure.herokuapp.com/">
                <img src={trialImg} alt=""/>
              </a>
            </div>
          </div>
        </div>

      </h1>
    )
  }
}



export default Projects

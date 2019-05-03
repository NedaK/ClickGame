import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


function Nav(props){
  const userGuess = props.correct;
  let startGame = props.didGameStart;
  if(!startGame){
    return(

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">Clicky Game</li>
          <li className="nav-item">Click any image to begin</li>
          <li className="nav-item">Score {props.score} | Top Score {props.topScore}</li>
      </ul>
      </nav>
   ); 
  }
  else{
    return(

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul className="navbar-nav nav-fill w-100">
          <li className="nav-item">Clicky Game</li>
          
          {userGuess
            ? <li className="nav-item">You Guessed Correctly!</li>
            : <li className="nav-item">You Guessed Incorrectly!</li>
            }
          
          
          <li className="nav-item">Score {props.score} | Top Score {props.topScore}</li>
      </ul>
      </nav>
   ); 
  };
  
  
};

export default Nav;
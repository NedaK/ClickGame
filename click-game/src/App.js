import React from 'react';
import Nav from "./components/Nav"
import AnimalCard from "./components/AnimalCard"
import Wrapper from "./components/Wrapper"
import animals from "./animals.json";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component{

  state ={
    animals: animals,
    score: 0,
    top_score: 0,
    correct: true,
    gameStarted: false,
    selected: []
  };

  addScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  setTopScore = () =>{
    if(this.state.top_score < this.state.score){
      this.setState({top_score: this.state.score})
    }
  };

//show if guess is correct or incorrect to user
  showGuess = () =>{
    let guess = "Correct!"
    if(this.state.correct !== true){
       guess = "Incorrect!";
    }
    console.log(guess);
    //console.log(this.state.correct);
    return this.state.correct;
  }

  
  gameEnd = () =>{
    console.log("game over");
    
    this.setTopScore();

    this.setState({score: 0});
    this.setState({selected: []});
    this.setState({gameStarted:false});
    this.setState({correct: true});
  }
  

  handleSelected = (id) =>{
    console.log(id);
    
    this.setState({gameStarted: true});

    if (this.state.selected.indexOf(id)!== -1){
      //set state and then do all other stuff
      this.setState({correct: false}, ()=>{
        this.showGuess();
        setTimeout(this.gameEnd, 3000)
       
      });
      
    }
   else{
      //let joinedArray = this.state.selected.concat(id);
      this.setState({selected: this.state.selected.concat(id)}, ()=>{
        console.log("selected: "+ this.state.selected)
        this.addScore();
        this.showGuess();
        this.setState({animals: this.shuffle(this.state.animals)})
      });
       
    }
    //console.log(this.state.selected);
  };


  //Fisher-Yates shuffle algorithm
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  };


  render(){
    return (
      <div>
      <Nav correct={this.state.correct} score={this.state.score} topScore={this.state.top_score} didGameStart = {this.state.gameStarted}/>
    <Wrapper>
    <AnimalCard animals = {this.state.animals} handleSelected = {this.handleSelected}/>
     
    </Wrapper>
    </div>
    )
  }


}



export default App;

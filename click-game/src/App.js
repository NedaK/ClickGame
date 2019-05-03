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

  showTopScore = () =>{
    this.setState({top_score: this.state.score})
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
    if(this.state.top_score < this.state.score){
      this.setState({top_score: this.state.score})
    }
    console.log("game over");
    this.setState({score: 0});
    this.setState({selected: []});
    this.setState({gameStarted:false});
    this.setState({correct: true});
  }
  

  handleSelected = (id) =>{
    console.log(id);
    //console.log(typeof id);
    //console.log(typeof this.state.selected);
    //console.log(this.isempty());
    this.setState({gameStarted: true});

    if (this.state.selected.indexOf(id)!== -1){
      this.setState({correct: false}, ()=>{
        this.showTopScore();
        this.showGuess();
        setTimeout(this.gameEnd, 3000)
       // this.gameEnd();
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


  // handleRemove = id =>{
  //   const filteredFriends = this.state.friends.filter(f => f.id !== id);
  //   this.setState({friends: filteredFriends});
  // };

  render(){
    return (
      <div>
      <Nav correct={this.state.correct} score={this.state.score} topScore={this.state.top_score} didGameStart = {this.state.gameStarted}/>
    <Wrapper>
    <AnimalCard animals = {this.state.animals} handleSelected = {this.handleSelected}/>
     
    {/* {this.state.animals.map(object=>{
      return <AnimalCard name={object.name}  image={object.image}  remove={() => this.handleRemove(object.id)} />
    })}  */}
    </Wrapper>
    </div>
    )
  }


}



export default App;

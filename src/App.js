import React, { Component } from "react";
import CharacterImages from "./CharacterImages.json";
import Heading from "./components/Heading";
import Score from "./components/Score";
import Character from "./components/Character";

let guessArr = [];
let score = 0;
let highScore = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {stateChange: true};
  }

 
// check if selected image id is in guess array
// if it not, add it to the guess array as a selected entry and add 1 to the score
// if it is in the guess array, the game is over and the high score is reset if needed
  guess = id => {
    if (guessArr.indexOf(id) > -1) {
      if (score > highScore) {
        this.setState({ stateChange: true });
        highScore = score;
        score = 0;
        guessArr = [];
      } else {
        this.setState({ stateChange: true });
        score = 0;
        guessArr = [];
      }
    } else {
      this.setState({ stateChange: false });
      guessArr.push(id);
      score++;
    }
  };

  render() {
    return (
      <div>
        <div className="row">
          <Heading />
        </div>
        <div className="row">
          <Score score={score} highScore={highScore} />
        </div>
        <div className="container">
          <div className="row" >
            <Character onClick={this.guess} characters={CharacterImages}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

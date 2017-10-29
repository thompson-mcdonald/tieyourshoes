import React, { Component } from 'react';
import './App.css';

let ptOne = [
  "watch everyone get bigger",
  "the fireplace is inflating",
  "peace in",
  "what would you do?",
  "accumulate",
  "take your time",
  "find your feet",
  "stand tough",
  "tie your shoes",
  "have a rest •"
]

let ptTwo = [
  "when the team dies",
  "at the last garrison",
  "untied left",
  "air force one",
  "and there’s no one",
  "to tie your shoes"
]

let num = Math.floor(Math.random() * 42000);

function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

var ptOneNew = shuffle(ptOne);
var ptTwoNew = shuffle(ptTwo);

function printLine(array, num) {
  let result = array[num];
  return result;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mw6 f3 center w-90 white pt5 v-mid mt6">
          <div className="v-mid tc">
            <p className="ttu f3">{printLine(ptOneNew, 1)}</p>
            <p className="ttu f3">{printLine(ptOneNew, 2)}</p>
            <p className="ttu f3">{printLine(ptOneNew, 3)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

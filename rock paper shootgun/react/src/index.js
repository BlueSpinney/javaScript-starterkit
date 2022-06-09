import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let choice = 0;
let en = 0
let name = ["shootgun","rock","paper"]

class Button extends React.Component {


    render() {
      return (

        <button 
          className="square" 
          
          onClick={() => this.props.onClick()}>
          {this.props.value}
          {this.props.aName}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        states: Array(3).fill(null),
      };
    }

    handleClick(i) {
      this.setState({states: null});
      let squares = ["","",""]
      squares[i] =  "X ";
      this.setState({states: squares});
      choice = i

    }

    renderSquare(i,aName) {
      return (
        <Button
          value={this.state.states[i]}
          aName = {aName}
          onClick={() => this.handleClick(i)}
        />
      );
    }
    exefight(ch){
      en = Math.floor(Math.random() *  2 + 1);
      alert(en)
      if (ch === en - 1){
        alert("you lose")
      }
      else if (ch === en){
        alert("draw")
      }
      else{
        alert("you win")
      }

    }
    renderFight(){
      return (
        <button onClick={() => this.exefight(choice)}>

        start fight
        </button>
      )
    }
  
    render() {
      const status = 'rock paper shootgun';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0,name[0])}
            {this.renderSquare(1,name[1])}
            {this.renderSquare(2,name[2])}
          </div>
          {this.renderFight()}
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game-board">
            <Board />
        </div>

      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  

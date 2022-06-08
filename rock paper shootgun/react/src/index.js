import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let nlst =["rock","paper","shootgun"];

class Button extends React.Component {


    render() {
      return (

        <button 
          className="square" 
          
          onClick={() => this.props.onClick()}>
          {this.props.value}
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
    /*
    checkState(x) {
      alert(x)
    }
    */

    handleClick(i) {
      alert(this.state.states[i])
      this.setState({states: null});
      let squares = [null,null,null]
      squares[i] = 'X';
      this.setState({states: squares});
      alert(this.state.states[i])
      if (this.state.states === ",X,"){
        alert("first")
      }
//      checkState(this.state.states[i])

    }

    renderSquare(i) {
      return (
        <Button
          value={this.state.states[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'rock paper shootgun';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
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
  

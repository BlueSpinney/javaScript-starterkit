import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let nlst =["rock","paper","shootgun"];

class Button extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        clicked : false,
        name: nlst[this.props.i],
      };
    }

    render() {
      return (
        <button className="square" onClick={() => { this.setState({clicked: true}); }}>
          {this.state.name}
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


    renderSquare(i) {
      return <Button i={this.start.buttons[i]} />;
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
  
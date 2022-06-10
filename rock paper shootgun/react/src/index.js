import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import shootgun from './shootgun.jpg';
import stone from './stone.jpg'
import paper from './paper.png';

let choice = 0;
let en = 0
let name = ["shootgun","rock","paper"]
let imglst = [shootgun,stone,paper]
let pck = 0

class Image extends React.Component {

  render() {
    return(
      <img src={imglst[pck]} alt="shootgun" width="300" height="300">

      </img>
    );
  }
}

class Button extends React.Component {


    render() {
      return (
        <>
          <img src={imglst[this.props.pcck]} alt="shootgun" width="300" height="300"></img>
          <button 
            className="square" 
            
            onClick={() => this.props.onClick()}>
            {this.props.value}
            {this.props.aName}
          </button>
        </>
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
      alert(this.props.pcck)
      this.setState({pcck: pck})
      alert(this.props.pcck)
      let squares = ["","",""]
      squares[i] =  "X ";
      this.setState({states: squares});
      choice = i



    }
    renderimg() {
      return (
        <Image>

        </Image>
      );
    }

    renderSquare(i,aName,p) {
      return (
        <Button
          value={this.state.states[i]}
          aName = {aName}
          onClick={() => this.handleClick(i)}
          pcck = {p}
        />
      );
    }
    exefight(ch){
      pck = en
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
            {this.renderSquare(0,name[0],pck)}
            {this.renderSquare(1,name[1],pck)}
            {this.renderSquare(2,name[2],pck)}
            {this.renderimg()}
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
  

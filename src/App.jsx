import { useState } from "react";
import "./App.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXisNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXisNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  let rightText;
  let leftText;
  if (winner) {
    status = `${winner} WINS`;
    rightText = "";
    leftText = "";
  } else {
    status = "";
    xIsNext ? (leftText = "YOUR MOVE") : (rightText = "YOUR MOVE");
  }

  //if winner is true
  //status will display winner
  //left side will be empty
  //right side will be empty

  //if isNext is null
  //left side div will display Your move
  //right side will be empty

  //if isNext is true
  // left side will be empty
  //right side will display Your move

  return (
    <>
      <div className="outer-container">
        <div className="side-div">
          <p className="move-title">{leftText}</p>
          <p className="x">X</p>
        </div>
        <div className="central-div">
          <div className="title-div">
            <h2 className="title"></h2>
          </div>
          <div className="board">
            <div className="row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
          <div className="status">{status}</div>
        </div>
        <div className="side-div">
          <p className="move-title">{rightText}</p>
          <p className="o">O</p>
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningLines.length; i++) {
    const [a, b, c] = winningLines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

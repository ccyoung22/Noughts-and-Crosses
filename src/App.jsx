import { useState } from "react";
import "./App.css";

export default function Square() {
  return (
    <div className="outer-container">
      <h2 className="title">Noughts and Crosses</h2>
      <div className="board">
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
        <button className="square">X</button>
      </div>
    </div>
  );
}

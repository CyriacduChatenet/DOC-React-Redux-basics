import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { setText } from './slices/input.slice';
import {increment, decrement } from './slices/counter.slice';

function App() {
  const banner = useSelector((state) => state.banner.value);
  const input = useSelector((state) => state.input.value);
  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch()

  const [title, setTitle] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{banner}</p>
        <input type="text" onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={() => dispatch(setText(title))}>set Text</button>
        <p>{input}</p>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <p>{counter}</p>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;

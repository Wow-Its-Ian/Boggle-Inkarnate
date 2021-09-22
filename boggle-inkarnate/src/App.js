import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {
  const dice = [
    'aaafrs',
    'aaeeee',
    'aafirs',
    'adennn',
    'aeeeem',
    'aeegmu',
    'aegmnn',
    'afirsy',
    'bjkqxz',
    'ccenst',
    'ceiilt',
    'ceilpt',
    'ceipst',
    'ddhnot',
    'dhhlor',
    'dhlnor',
    'dhlnor',
    'eiiitt',
    'emottt',
    'ensssu',
    'fiprsy',
    'gorrvw',
    'iprrry',
    'nootuw',
    'ooottu',
  ];
  const boardSize = 5;
  const row = new Array(boardSize);

  const [boardLayout, setBoardLayout] = useState([row, row, row, row, row]);

  const randomizeBoard = () => {
    let copyDice = [...dice];
    const copyBoard = [...boardLayout];

    for (let i = 0; i < boardLayout.length; i++) {
      const currentRow = [...copyBoard[i]];

      for (let j = 0; j < currentRow.length; j++) {
        const dieIdx = Math.floor(Math.random() * copyDice.length);

        const letterIdx = Math.floor(Math.random() * 6);

        currentRow[j] = copyDice[dieIdx][letterIdx];

        copyDice.splice(dieIdx, 1);
      }
      console.log('currentRow: ', currentRow);
      copyBoard[i] = currentRow;
    }
    setBoardLayout(copyBoard);
  };
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Boggle</h1>
      <Board boardLayout={boardLayout}></Board>
      <StartButton randomizeBoard={randomizeBoard}></StartButton>
    </div>
  );
}

function Board(props) {
  const boardLayout = props.boardLayout;
  // randomizeBoard();

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
        height: '500px',
        width: '500px',
      }}
    >
      {/* {boardLayout.map((row, idx) => {
        // console.log('row: ', row);
        // console.log('idx: ', idx);

        const currentRow = row[idx];

        row.map((cell, idx) => {
          currentRow[idx] = <div>R</div>;
          console.log('currentRow: ', currentRow);
          return currentRow;
        });
      })} */}
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[0][0]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[0][1]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[0][2]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[0][3]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[0][4]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[1][0]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[1][1]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[1][2]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[1][3]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[1][4]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[2][0]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[2][1]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[2][2]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[2][3]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[2][4]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[3][0]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[3][1]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[3][2]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[3][3]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[3][4]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[4][0]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[4][1]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[4][2]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[4][3]}
      </div>
      <div
        style={{
          border: '5px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '50px',
        }}
      >
        {boardLayout[4][4]}
      </div>
    </div>
  );
}

function StartButton(props) {
  return <button onClick={props.randomizeBoard}>Start Game</button>;
}

export default App;

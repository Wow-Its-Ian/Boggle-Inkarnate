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
  const [letterSelected, setLetterSelected] = useState(false);
  const [currentWord, setCurrentWord] = useState('');
  // const [validCells, setValidCells] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const selectLetter = (row, cell) => {
    const letter = boardLayout[row][cell];
    let wordInProgress = currentWord;
    if (letterSelected) {
      if (lastSelected) {
        // console.log('lastSelected: ', lastSelected);
        // console.log('lastSelected[0] + 1: ', lastSelected[0] + 1);
        // console.log('lastSelected[1] + 1: ', lastSelected[1] + 1);
        // console.log('lastSelected[1] - 1: ', lastSelected[1] - 1);
        // console.log('lastSelected[1]: ', lastSelected[1]);
        // console.log('row: ', row);

        if (
          row === lastSelected[0] + 1 ||
          row === lastSelected[0] - 1 ||
          row === lastSelected[0]
        ) {
          if (
            cell === lastSelected[1] + 1 ||
            cell === lastSelected[1] - 1 ||
            cell === lastSelected[1]
          ) {
            console.log('VALID CELL: ', letter);
            setCurrentWord(wordInProgress + letter);
            setLastSelected([row, cell]);
          } else {
            console.log('INVALID CELL: ', letter);
          }
        } else {
          console.log('INVALID CELL: ', letter);
        }
      }
    }
    if (!letterSelected) {
      console.log('wordInProgress + letter: ', wordInProgress + letter);
      setCurrentWord(wordInProgress + letter);
      setLetterSelected(true);
      setLastSelected([row, cell]);
    }

    // const newValidCells = [];

    // if(row + 1 < 5) {
    //   if(cell + 1 < 5) {
    //     newValidCells.push([row + 1, cell])
    //     newValidCells.push([row + 1, cell +1]);
    //   }
    //   if(cell - 1 >= 0) {
    //     newValidCells.push([row + 1, cell -1 ])
    //   }
    // }
    // if(row - 1 >= 0) {
    //   if(cell + 1 < 5) {
    //     newValidCells.push([row - 1, cell])
    //     newValidCells.push([row - 1, cell +1]);
    //   }
    //   if(cell - 1 >= 0) {
    //     newValidCells.push([row - 1, cell -1 ])
    //   }
    // }
    // if(row + 1)
    // }
  };

  const letterHoverStart = () => {
    return;
  };

  const letterHoverEnd = () => {
    return;
  };

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
      <Board selectLetter={selectLetter} boardLayout={boardLayout}></Board>
      <CurrentWordDisplay currentWord={currentWord}></CurrentWordDisplay>
      <StartButton randomizeBoard={randomizeBoard}></StartButton>
    </div>
  );
}

function CurrentWordDisplay(props) {
  const { currentWord } = props;

  return (
    <div>
      <h2>Current Word: </h2>
      <h3>{currentWord && currentWord}</h3>
    </div>
  );
}

function Board(props) {
  const { boardLayout, selectLetter } = props;
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
        onClick={() => selectLetter(0, 0)}
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
        onClick={() => selectLetter(0, 1)}
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
        onClick={() => selectLetter(0, 2)}
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
        onClick={() => selectLetter(0, 3)}
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
        onClick={() => selectLetter(0, 4)}
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
        onClick={() => selectLetter(1, 0)}
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
        onClick={() => selectLetter(1, 1)}
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
        onClick={() => selectLetter(1, 2)}
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
        onClick={() => selectLetter(1, 3)}
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
        onClick={() => selectLetter(1, 4)}
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
        onClick={() => selectLetter(2, 0)}
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
        onClick={() => selectLetter(2, 1)}
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
        onClick={() => selectLetter(2, 2)}
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
        onClick={() => selectLetter(2, 3)}
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
        onClick={() => selectLetter(2, 4)}
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
        onClick={() => selectLetter(3, 0)}
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
        onClick={() => selectLetter(3, 1)}
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
        onClick={() => selectLetter(3, 2)}
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
        onClick={() => selectLetter(3, 3)}
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
        onClick={() => selectLetter(3, 4)}
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
        onClick={() => selectLetter(4, 0)}
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
        onClick={() => selectLetter(4, 1)}
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
        onClick={() => selectLetter(4, 2)}
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
        onClick={() => selectLetter(4, 3)}
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
        onClick={() => selectLetter(4, 4)}
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

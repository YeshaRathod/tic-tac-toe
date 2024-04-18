import { useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import GameOver from './components/GameOver';
import Log from './components/Log';
import Player from './components/Player';
import { Winning_Combinations } from './components/Winning_Combinations';



const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns && gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return gameBoard
}

function deriveWinner(gameBoard, players) {
  let winner;
  for (const combination of Winning_Combinations) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]
    }
  }
  return winner;
}


function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurn] = useState([]);       //function handleSelectSquare() toggle between 'X' and 'O' as the active player when a square is selected.
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  //  const [activePlayer, setActivePlayer] = useState('X');       //function handleSelectSquare() toggle between 'X' and 'O' as the active player when a square is selected.
  //      COMMENT OUT BECAUSE WE ONLY NEED ACTIVEPLAYER WHICH WE WILL RECEIVE IN GAMETURN 
  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')


    setGameTurn(prevTurns => {

      const activePlayer = deriveActivePlayer(gameTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevTurns];

      return updatedTurns;
    })
  }
  function handleRematch() {
    // console.log("rematch button was clicked");
    setGameTurn([]);

  }


  function handleplayernamechange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>

          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={handleplayernamechange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handleplayernamechange} />

        </ol>
        {/*  <GameBoard onSelectSqaure={handleSelectSquare} activePlayerSymbol={activePlayer} />       Passed the handleSelectSquare function as a prop (onSelectSquare) to the GameBoard component. 
                                                                                                      Passed the activePlayerSymbol state as a prop to the GameBoard component.*/}
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}

        <GameBoard onSelectSqaure={handleSelectSquare} Board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

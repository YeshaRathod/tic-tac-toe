const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({ onSelectSqaure, activePlayerSymbol }) {       //Received the onSelectSquare and activePlayerSymbol props in the function parameters.
    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    //WE COMMENTOUT THIS BEACUSE THERE IS ANOTHER COMPONENT LOG.JS WHICH WILL TRACT ALL CHANGES IN GAMEBOARD AND SHOWS OUTPUT AS A LIST WITH EXTRA DATA THAN THIS THATS WHY WE DONT NEED THIS
    //028 Avoid Intersecting States!

    // function handleSelectSquare(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {                                      //prevGameBoard is the previous state of the gameBoard.
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]     // creates a shallow copy of the two-dimensional array (gameBoard). It ensures that you are not modifying the original state directly.
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;               //updates the specified cell in the copied array. ------------In the handleSelectSquare function, updated the cell with the activePlayerSymbol instead of a hardcoded 'X'.
    //         return updatedBoard;                    //returned, and it becomes the new state.
    //     })

    //     onSelectSqaure();          //Invoked onSelectSquare() after updating the state to notify the parent component that a square has been selected.
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (                              //display the game board. The gameBoard state is mapped to create the rows and columns of buttons:
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}



//export default function GameBoard({ onSelectSqaure, Board }) {

//WE COMMENTOUT const [gameBoard, setGameBoard] = useState(initialGameBoard)  &&  function handleSelectSquare(rowIndex, colIndex)      BEACUSE THERE IS ANOTHER COMPONENT LOG.JS WHICH WILL TRACT ALL CHANGES IN GAMEBOARD AND SHOWS OUTPUT AS A LIST WITH EXTRA DATA THAN THIS THATS WHY WE DONT NEED THIS
//028 Avoid Intersecting States!

//     return (
//         <ol id="game-board">
//             {Board.map((row, rowIndex) => (                              //display the game board. The gameBoard state is mapped to create the rows and columns of buttons:
//                 <li key={rowIndex}>
//                     <ol>
//                         {row.map((playerSymbol, colIndex) => (
//                             <li key={colIndex}>
//                                 <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
//                             </li>
//                         ))}
//                     </ol>
//                 </li>
//             ))}
//         </ol>
//     );
// }

export default function GameBoard({ onSelectSqaure, Board }) {
    return (
        <ol id="game-board">
            {Board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSqaure(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}

import React from 'react'

export default function Log({ turns }) {
    return <ol id="log"><h2>
        {turns.map((turn) => (<li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row},{turn.square.col}
        </li>))}
    </h2>
    </ol>
}


//Certainly! In simple terms, this Log component in React is meant to display a log or history of moves made in a game. 
//The component receives a prop called turns, which is an array representing the sequence of moves.
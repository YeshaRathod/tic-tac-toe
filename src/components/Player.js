import React, { useState } from 'react';


export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value)
    }

    function handleEditclick() {
        setIsEditing(editing => !editing);
        if (isEditing) { onChangeName(symbol, playerName) };
    }

    let editableplayername = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editableplayername = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayername}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditclick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

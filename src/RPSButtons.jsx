import React from 'react';
import RPSButton from './RPSButton';
import { RecordsContext } from './recordsContext';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    const records = React.useContext(RecordsContext);
    return (
        <div>
            {moves.map((move) => (
                <RPSButton
                    key={move}
                    onClick={() => props.onButtonPressed(move)}
                    move={move}
                    records={records.filter((record) => record.move === move)}
                />
            ))}
        </div>
    );
}

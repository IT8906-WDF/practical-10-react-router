import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './recordSlice';
import RPSButton from './RPSButton';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    const records = useSelector((store) => store.record.value);
    const dispatch = useDispatch();
    return (
        <div>
            {moves.map((move) => (
                <RPSButton
                    key={move}
                    onClick={() => dispatch(add(move))}
                    move={move}
                    records={records.filter((record) => record.move === move)}
                />
            ))}
        </div>
    );
}

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './recordSlice';
import { IsEmojiContext, emoji } from './isEmojiContext';

export default function RPSRecords(props) {
    const records = useSelector(function (store) {
        return store.record.value;
    });
    const dispatch = useDispatch();

    const isEmoji = React.useContext(IsEmojiContext);

    const winCount = records.filter((record) => record.result === 'Win').length;
    const totalCount = records.length;
    const winPercentage = totalCount ? ((winCount / totalCount) * 100).toFixed(2) : 0;
    return (
        <div>
            <p>Rounds (Win %: {winPercentage}):</p>
            <ol>
                {records.map(function (record, index) {
                    // Sample record: { result: "Win", move: "Rock" }
                    return (
                        <li key={index} onClick={() => dispatch(remove(index))}>
                            {record.result} ({isEmoji ? emoji[record.move] : record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

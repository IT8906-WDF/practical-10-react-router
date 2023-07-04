import React from 'react';
import { IsEmojiContext, emoji } from './isEmojiContext';
import { RecordsContext } from './recordsContext';

export default function RPSRecords(props) {
    const records = React.useContext(RecordsContext);
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
                        <li key={index} onClick={() => props.onDeleteRecord(index)}>
                            {record.result} ({isEmoji ? emoji[record.move] : record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

import React from 'react';
import RPSButtons from './RPSButtons';
import RPSInput from './RPSInput';
import RPSRecords from './RPSRecords';
import { IsEmojiContext } from './isEmojiContext';
import { RecordsContext } from './recordsContext';
import recordsReducer from './recordsReducer';

export default function RockPaperScissors(props) {
    const [isEmoji, setIsEmoji] = React.useState(false);
    const [records, dispatch] = React.useReducer(recordsReducer, []);

    return (
        <RecordsContext.Provider value={records}>
            <IsEmojiContext.Provider value={isEmoji}>
                <div>
                    <h1>Play rock-paper-scissors with me!</h1>
                    <RPSButtons
                        onButtonPressed={(move) => {
                            dispatch({ name: 'add', move: move });
                        }}
                    />
                    <button
                        onClick={function () {
                            setIsEmoji(!isEmoji);
                        }}
                    >
                        Toggle Emoji
                    </button>
                    <RPSInput onAdd={(record) => dispatch({ name: 'force add', record: record })} />
                    <RPSRecords
                        onDeleteRecord={(index) => {
                            dispatch({ name: 'remove', index: index });
                        }}
                    />
                </div>
            </IsEmojiContext.Provider>
        </RecordsContext.Provider>
    );
}

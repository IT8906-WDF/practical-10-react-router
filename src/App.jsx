import Age from './Age';
import Hello from './Hello';
import Hobby from './Hobby';
import RockPaperScissors from './RockPaperScissors';
import TitleLi from './TitleLi';

const hobbies = [
    { emoji: '🏊', title: 'Swim' },
    { emoji: '🏃', title: 'Run' },
    { emoji: '🎮', title: 'Game' },
    { title: 'Sleep' },
];

export default function App() {
    const name = 'ENTER YOUR NAME';
    return (
        <div>
            <Hello name={name}></Hello>
            <div>
                <ol>
                    <TitleLi title="Name">{name}</TitleLi>
                    <Age value={1} />
                    <TitleLi title="Hobbies">
                        <ol>
                            {hobbies
                                .filter(function (hobby) {
                                    return hobby.emoji;
                                })
                                .map(function (hobby) {
                                    return <Hobby key={hobby.title} title={hobby.title} emoji={hobby.emoji} />;
                                })}
                        </ol>
                    </TitleLi>
                </ol>
            </div>
            <RockPaperScissors />
        </div>
    );
}

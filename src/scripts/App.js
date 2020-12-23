import '../style.css';
import { loadImage, loadTagAreas } from './init';
import { getSelected, clearSelected, addToSelected, showClicked, removeAllCircles } from './tag';
import { loadQuestion, allQuestionsAsked } from './question';
import validateAnswer from './validateAnswer';
import { submitResult, createResultForm } from './submitResult';
import answers from './testAnswers';
import { getLeaderboard, addToLeaderboard, renderLeaderboard } from './testLeaderboard';

const App = () => {
    loadImage();
    loadTagAreas();
    renderLeaderboard();

    let questionId = loadQuestion();
    let numOfMistakes = 0;

    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag) => {
        tag.addEventListener('click', (e) => {
            addToSelected(e);
            showClicked(e);
        });
    });

    const answerBtn = document.querySelector('#answer-btn');
    answerBtn.addEventListener('click', () => {
        // Replace below line with backend
        const { answer } = answers.find(({ id }) => id === questionId);

        const answerIsCorrect = validateAnswer(answer, getSelected());

        if (answerIsCorrect) {
            removeAllCircles();
            clearSelected();
            const isGameOver = allQuestionsAsked();

            if (isGameOver) {
                const numOfMistakesCopy = numOfMistakes;
                numOfMistakes = 0;
                createResultForm(numOfMistakesCopy);
                const form = document.querySelector('form');
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitResult(numOfMistakesCopy);
                    e.target.remove();
                    renderLeaderboard();
                });
                console.log('Game Over');
            } else {
                questionId = loadQuestion();
            }
        } else {
            console.log('Keep trying!');
            numOfMistakes += 1;
        }
    });
};

export default App;

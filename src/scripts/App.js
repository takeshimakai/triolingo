import '../style.css';
import { loadImage, loadTagAreas } from './init';
import { getSelected, clearSelected, addToSelected, showClicked, removeAllCircles } from './tag';
import { loadQuestion, allQuestionsAsked, resetAskedStatus } from './question';
import validateAnswer from './validateAnswer';
import { submitResult, createResultForm } from './submitResult';
import answers from './testAnswers';
import { renderLeaderboard } from './testLeaderboard';
import announcementBox from './announcementBox';
import { getLeaderboard } from '../firebase/firestore';

const App = async () => {
    loadImage();
    loadTagAreas();

    const leaderboard = await getLeaderboard();
    let questionId = loadQuestion();
    let numOfMistakes = 0;
    let isGameOver = false;

    renderLeaderboard(leaderboard);

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
            isGameOver = allQuestionsAsked();

            if (isGameOver) {
                isGameOver = false;
                const numOfMistakesCopy = numOfMistakes;
                numOfMistakes = 0;
                createResultForm(numOfMistakesCopy);
                resetAskedStatus();
                const form = document.querySelector('form');
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    submitResult(numOfMistakesCopy);
                    renderLeaderboard();
                    questionId = loadQuestion();
                    e.target.remove();
                });
                announcementBox('Game over');
            } else {
                announcementBox('Correct!');
                questionId = loadQuestion();
            }
        } else {
            announcementBox('Wrong answer! Keep trying!');
            numOfMistakes += 1;
        }
    });
};

export default App;

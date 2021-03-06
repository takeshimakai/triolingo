import '../style.css';
import { loadImage, loadTagAreas } from './init';
import { getSelected, clearSelected, addToSelected, showClicked, removeAllCircles } from './tag';
import { loadQuestion, allQuestionsAsked, resetAskedStatus } from './question';
import validateAnswer from './validateAnswer';
import createResultForm from './createResultForm';
import renderLeaderboard from './renderLeaderboard';
import announcementBox from './announcementBox';
import { getLeaderboard, addToLeaderboard, getAnswer } from '../firebase/firestore';

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
    answerBtn.addEventListener('click', async () => {
        const answerIsCorrect = validateAnswer(await getAnswer(questionId), getSelected());

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
                    const name = document.querySelector('#name').value;
                    addToLeaderboard(name, numOfMistakesCopy);
                    leaderboard.push({ name, result: numOfMistakesCopy });
                    renderLeaderboard(leaderboard);
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

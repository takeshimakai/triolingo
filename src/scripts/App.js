import '../style.css';
import { loadImage, loadTagAreas } from './init';
import { getSelected, clearSelected, addToSelected, showClicked, removeAllCircles } from './tag';
import { loadQuestion, allQuestionsAsked } from './question';
import validateAnswer from './validateAnswer';
import { createResultForm } from './submitScore';
import answers from './testAnswers';

const App = () => {
    loadImage();
    loadTagAreas();

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
        const selected = getSelected();

        // Replace below line with backend
        const { answer } = answers.find(({ id }) => id === questionId);

        const answerIsCorrect = validateAnswer(answer, selected);

        if (answerIsCorrect) {
            removeAllCircles();
            clearSelected();
            const isGameOver = allQuestionsAsked();

            if (isGameOver) {
                createResultForm(numOfMistakes);
                console.log('Game Over');
            } else {
                questionId = loadQuestion();
            }
        } else {
            console.log('Keep trying!');
            numOfMistakes += 1;
        }

        console.log(numOfMistakes);
        return numOfMistakes;
    });
};

export default App;

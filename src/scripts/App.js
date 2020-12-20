import '../style.css';
import { loadImage, loadTagAreas } from './init';
import { showClicked } from './tag';
import { loadQuestion } from './loadQuestion';

const App = () => {
    loadImage();
    loadTagAreas();
    loadQuestion();

    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag) => {
        tag.addEventListener('click', showClicked);
    });
};

export default App;

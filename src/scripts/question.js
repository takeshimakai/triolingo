const questions = [
    {
        id: 'hommes',
        question: 'Hommes',
        asked: false,
    },
    {
        id: 'femmes',
        question: 'Femmes',
        asked: false,
    },
];

const loadQuestion = () => {
    const index = questions.findIndex((question) => question.asked === false);

    if (index === -1) {
        return null;
    }

    const questionElement = document.querySelector('#question');
    questionElement.textContent = questions[index].question;
    questions[index].asked = true;
    return questions[index].id;
};

const allQuestionsAsked = () => questions.every((question) => question.asked === true);

const resetAskedStatus = () => questions.forEach((question) => {
    question.asked = false;
});

export { loadQuestion, allQuestionsAsked, resetAskedStatus };

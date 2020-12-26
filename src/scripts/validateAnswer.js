const validateAnswer = (correctAnswer, submittedAnswer) => {
    console.log(correctAnswer);
    console.log(submittedAnswer);
    if (submittedAnswer.length !== correctAnswer.length) {
        return false;
    }
    for (let i = 0; i < submittedAnswer.length; i++) {
        if (!correctAnswer.includes(submittedAnswer[i])) {
            return false;
        }
    }
    return true;
};

export default validateAnswer;

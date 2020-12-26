const validateAnswer = (correctAnswer, submittedAnswer) => {
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

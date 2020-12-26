const createResultForm = (result) => {
    const form = document.createElement('form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.placeholder = 'Enter your name';

    const resultDisplay = document.createElement('p');
    resultDisplay.id = 'result-display';
    switch (true) {
        case (result === 0):
            resultDisplay.textContent = "Félicitations! Vous êtes fraçais(e)! Vous n'avez fait aucune erreur!";
            break;
        case (result > 0 && result < 3):
            resultDisplay.textContent = `Nice! You only made ${result} mistake(s)!`;
            break;
        case (result >= 3):
            resultDisplay.textContent = `You made ${result} mistakes! Need more practice!`;
            break;
        default:
            break;
    }

    const submitBtn = document.createElement('button');
    submitBtn.id = 'submit-btn';
    submitBtn.textContent = 'submit result';

    form.append(resultDisplay, nameInput, submitBtn);

    document.body.appendChild(form);
};

export default createResultForm;

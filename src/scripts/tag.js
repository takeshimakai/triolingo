let selected = [];

const getSelected = () => selected;

const clearSelected = () => {
    selected = [];
};

const addToSelected = (e) => {
    const index = selected.findIndex((element) => element === e.target.id);
    if (index === -1) {
        selected.push(e.target.id);
    } else {
        selected.splice(index, 1);
    }
};

const showClicked = (e) => {
    if (!e.target.hasChildNodes()) {
        const circle = document.createElement('div');
        circle.classList.add('clicked');
        e.target.appendChild(circle);
    } else {
        e.target.firstElementChild.remove();
    }
};

const removeAllCircles = () => document.querySelectorAll('.clicked').forEach((circle) => circle.remove());

export {
    getSelected,
    clearSelected,
    addToSelected,
    showClicked,
    removeAllCircles,
};

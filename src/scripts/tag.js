const selected = [];

const getSelected = () => selected;

const addToSelected = (e) => selected.push(e.target.id);

const showClicked = (e) => {
    if (!e.target.hasChildNodes()) {
        const circle = document.createElement('div');
        circle.classList.add('clicked');
        e.target.appendChild(circle);
    } else {
        e.target.firstElementChild.remove();
    }
};

export { getSelected, addToSelected, showClicked };

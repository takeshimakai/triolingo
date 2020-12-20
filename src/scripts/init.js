import defaultImg from '../assets/image.jpg';

const imgContainer = document.querySelector('#img-container');

const loadImage = () => {
    const img = document.createElement('img');
    img.src = defaultImg;
    imgContainer.appendChild(img);
};

const loadTagAreas = () => {
    const tagContainer = document.createElement('div');
    tagContainer.id = 'tag-container';

    for (let i = 0; i < 8; i++) {
        const tag = document.createElement('div');
        tag.classList.add('tag');
        tagContainer.appendChild(tag);
    }

    imgContainer.appendChild(tagContainer);
};

export { loadImage, loadTagAreas };

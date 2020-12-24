const announcementBox = (message) => {
    console.log('announcement!');
    const box = document.createElement('div');
    box.id = 'announcement-box';
    box.textContent = message;

    document.body.appendChild(box);

    setTimeout(() => box.remove(), 1000);
};

export default announcementBox;

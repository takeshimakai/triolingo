const addToLeaderboard = (leaderboard, name, result) => {
    if (leaderboard.length === 0) {
        leaderboard.push({ rank: 1, name, result });
    } else {
        const index = leaderboard.findIndex((element) => result <= element.result);
        if (index === -1) {
            const rank = leaderboard[leaderboard.length - 1].rank + 1;
            leaderboard.push({ rank, name, result });
        } else {
            const { rank } = leaderboard[index];
            if (leaderboard[index].result > result) {
                for (let i = index; i < leaderboard.length; i++) {
                    leaderboard[i].rank += 1;
                }
            }
            leaderboard.splice(index, 0, { rank, name, result });
        }
    }

    if (leaderboard.length > 10) {
        leaderboard.pop();
    }
};

const renderLeaderboard = (leaderboard) => {
    const leaderboardContent = document.querySelector('#leaderboard-content');
    leaderboardContent.innerHTML = '';

    leaderboard.forEach((leader) => {
        const leaderContainer = document.createElement('div');
        leaderContainer.classList.add('leader-container');
        leaderboardContent.appendChild(leaderContainer);

        Object.keys(leader).forEach((key) => {
            const element = document.createElement('p');
            element.classList.add(key);
            element.textContent = `${key[0].toUpperCase() + key.substring(1)}: ${leader[key]}`;
            leaderContainer.appendChild(element);
        });
    });
};

export { addToLeaderboard, renderLeaderboard };

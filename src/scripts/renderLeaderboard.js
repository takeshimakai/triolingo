const rankLeaderboard = (leaderboard) => {
    leaderboard.sort((a, b) => a.result - b.result);

    for (let i = 0; i < leaderboard.length; i++) {
        if (i === 0) {
            leaderboard[i].rank = 1;
        } else if (leaderboard[i].result === leaderboard[i - 1].result) {
            leaderboard[i].rank = leaderboard[i - 1].rank;
        } else if (leaderboard[i].result > leaderboard[i - 1].result) {
            leaderboard[i].rank = leaderboard[i - 1].rank + 1;
        }
        const { rank, name, result } = leaderboard[i];
        leaderboard[i] = { rank, name, result };
    }
};

const renderLeaderboard = (leaderboard) => {
    rankLeaderboard(leaderboard);

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

export default renderLeaderboard;

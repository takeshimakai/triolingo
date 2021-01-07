const rankLeaderboard = (leaderboard) => {

    return leaderboard
        .sort((a, b) => a.result - b.result)
        .map((l, i) => {
            let rank

            if (i === 0) {
                rank = 1;
            } else if (result === leaderboard[i - 1].result) {
                rank = leaderboard[i - 1].rank;
            } else if (result > leaderboard[i - 1].result) {
                rank = leaderboard[i - 1].rank + 1;
            }

            return { rank, ...l }
        })
};

const renderLeaderboard = (leaderboard) => {
    const ranked = rankLeaderboard(leaderboard);

    const leaderboardContent = document.querySelector('#leaderboard-content');
    leaderboardContent.innerHTML = '';

    // Only render top 8
    for (let i = 0; i < ranked.length && i < 8; i++) {
        const leaderContainer = document.createElement('div');
        leaderContainer.classList.add('leader-container');
        leaderboardContent.appendChild(leaderContainer);

        Object.keys(ranked[i]).forEach((key) => {
            const element = document.createElement('p');
            element.classList.add(key);
            element.textContent = `${key[0].toUpperCase() + key.substring(1)}: ${ranked[i][key]}`;
            leaderContainer.appendChild(element);
        });
    }
};

export default renderLeaderboard;

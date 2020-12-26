import { firestore } from './initFirebase';

const leaderboardCollection = firestore.collection('leaderboard');

const getLeaderboard = async () => {
    const leaderboard = [];
    const docs = await leaderboardCollection.get();
    docs.forEach((doc) => {
        const { name, result } = doc.data();
        leaderboard.push({ name, result });
    });
    return leaderboard;
};

const addToLeaderboard = (name, result) => leaderboardCollection.add({ name, result });

export { getLeaderboard, addToLeaderboard };

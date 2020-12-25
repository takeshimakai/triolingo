import { firestore } from './initFirebase';

const getLeaderboard = async () => {
    const leaderboard = [];
    const docs = await firestore.collection('leaderboard').get();
    docs.forEach((doc) => {
        const { rank, name, result } = doc.data();
        leaderboard.push({ rank, name, result });
    });
    return leaderboard;
};

export { getLeaderboard };

import { firestore } from './initFirebase';

const collectionRef = (collection) => firestore.collection(collection);

const getLeaderboard = async () => {
    const leaderboard = [];
    const docs = await collectionRef('leaderboard').get();
    docs.forEach((doc) => {
        const { name, result } = doc.data();
        leaderboard.push({ name, result });
    });
    return leaderboard;
};

const addToLeaderboard = async (name, result) => {
    try {
        await collectionRef('leaderboard').add({ name, result });
    } catch (e) {
        logError(e)
    }
}

const getAnswer = (questionId) => collectionRef('answers').doc(questionId).get().then((doc) => doc.data().answer);

export { getLeaderboard, addToLeaderboard, getAnswer };

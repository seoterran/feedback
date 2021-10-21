const { getDatabase } = require('./mongo');

const collectionName = 'feedbacks';

async function addFeedback(feedback) {
    const database = await getDatabase();
    await database.collection(collectionName).insertOne(feedback);
}

// order feedbacks by datetime by default
async function getFeedbacks(order = { '_id': -1 }, query = {}) {
    const database = await getDatabase();
    const feedbacks = await database.collection(collectionName).find(query).sort(order).toArray();
    return feedbacks.map(feedback => {
        return {
            date: feedback._id.getTimestamp(),
            ...feedback
        }
    })
}

module.exports = {
    addFeedback,
    getFeedbacks,
};
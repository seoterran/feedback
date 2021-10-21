const { startDatabase, } = require('./db/mongo');
const { addFeedback, getFeedbacks } = require('./db/feedback');

const express = require('express');
const cors = require('cors');

const app = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT;

app.use(express.json());

// enabling CORS for all requests
app.use(cors());

/* ToDo 
- add body validation
- add auth 
*/
app.get('/feedbacks', async (req, res, next) => {

    try {
        res.send(await getFeedbacks());
    } catch (e) {
        next(e);
    }
});

app.post('/feedbacks', async (req, res, next) => {
    try {
        const feedback = req.body; // userId, sessionId, rating, comment
        await addFeedback(feedback);
        res.send({ message: 'New feedback added! ' });
    }
    catch (e) {
        next(e);
    }
});

app.use(function (err, req, res, next) {
    res.status(500).send({ error: err.message || 'Something failed!' })
})

startDatabase().then(async () => {
    // adding sample feedback
    await addFeedback({
        date: new Date(),
        userId: 'user-1',
        sessionId: 'session-1',
        rating: 5,
        comment: 'Good Game!'
    });

    app.listen(port, async () => {
        console.log('listening on port ', port);
    });
});
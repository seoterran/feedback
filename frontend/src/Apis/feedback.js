import axios from 'axios';

const baseURL = 'http://localhost:3013'; 

const feedbackAPI = axios.create({
    baseURL: `${baseURL}`
});

export default {
    feedbacks: {
        get: async () => {
            try {
                const { data } = await feedbackAPI.get('/feedbacks');
                return data;
            } catch (e) {
                return 'Failed to retrieve feedbacks'
            }
        },
        post: async (feedback) => {
            try {
                const { data } = await feedbackAPI.post('/feedbacks', feedback);
                return data.message;
            } catch (e) {
                return 'Failed to submit feedback'
            }
        }
    }
};



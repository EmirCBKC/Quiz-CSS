import axios from "axios";

export async function getQuestions() {

    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || "Failed to get questions");
        } else if (error.request) {
            throw new Error("Failed to get questions");
        } else {
            throw error;
        }
    }

};
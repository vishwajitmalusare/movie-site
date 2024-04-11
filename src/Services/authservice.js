import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const apiService = axios.create({
    baseURL: API_URL,
    timeout: 10000, //Timeout after 10 seconds
});

export const registerUser = async (data) => {
    try{
        const response = await apiService.post('/register', data);
        console.log('response: ', response);
        return response.data;
    } catch(error) {
        throw error.response.data;
    }
}
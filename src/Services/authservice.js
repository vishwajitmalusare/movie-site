import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

const apiService = axios.create({
    baseURL: API_URL,
    timeout: 10000, //Timeout after 10 seconds
});

export const registerUser = async (regData) => {
    try {
        const response = await apiService.post('/register', regData);
        return response.data;
    } catch(error) {
        throw error.response.data;
    }
}

export const loginUser = async (loginData) => {
    try {
        const response = await apiService.post('/login', loginData);
        return response.data;
    } catch(error){
        console.log('error: ', error);
        throw error.response.data;
    }
}

// tokem : 417c99a2ecb32a1ce6ca7db79f7c01c3215a6476
import axios from 'axios';

export const key = '417c99a2ecb32a1ce6ca7db79f7c01c3215a6476';
const api = axios.create({
	baseURL: 'https://api-ssl.bitly.com/v4/',
	headers: {
		Authorization: `Bearer ${key}`,
	},
});

export default api;

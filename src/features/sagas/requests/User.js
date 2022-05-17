import axios from 'axios';

export function requestGetUSer(action) {
	// const apiCall = async () => {
	// 	const res = await axios.get('https://jsonplaceholder.typicode.com/users');
	// 	console.log('app', res);
	// 	return res;
	// };
	// apiCall();

	return axios.request({
		method: 'get',
		url: 'https://jsonplaceholder.typicode.com/users/1',
	});
	
}

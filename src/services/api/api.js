import axios from 'axios';

const BASE_URL = 'http://swapi.dev/api/';

class API {
	get(url) {
		return this.makeRequest(url, 'get');
	}

	makeRequest(url, method) {
		const requestParams = {
			method,
			headers: {
				'Content-Type': 'application/json',
			},
		};
		return this.sendRequest(url, requestParams);
	}

	sendRequest(url, requestParams) {
		return new Promise((resolve, reject) => {
			axios(`${BASE_URL + url}`, requestParams)
				.then(result => {
					resolve(result);
				})
				.catch(reason => {
					reject(reason);
				});
		});
	}
}

export default new API();

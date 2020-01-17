const fetch = require('node-fetch')
const querystring = require('querystring')

function request(url, headers = {}, ...req) {
	return new Promise((resolve, reject) => {
		const [ method, route, { query, body }, end ] = req
		end()
	
		fetch(`${url}${route}${ query ? `?${querystring.stringify(query)}` : ""}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				...headers
			},
			body: body ? JSON.stringify(body) : null
		})
		.then(res => {
			// if (!res.ok) throw new Error(res.json())
			return res.json()
		})
		.then(json => {
			resolve(json)
		})
		//.catch(async err => {
			//resolve
	//	})
	})
}

module.exports = request
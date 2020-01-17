const RouteBuilder = require('./RouteBuilder')
const Req = require('./Request')

function Request(url, headers) {
	return RouteBuilder(Req.bind(null, url, headers))
}

module.exports = Request
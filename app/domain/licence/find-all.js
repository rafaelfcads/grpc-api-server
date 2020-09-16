
const _ = require('lodash')
const licences = require('./licences.json')

module.exports = (call, callback) => callback(null, {
	message: _.find(licences, { id: call.request.id })
})


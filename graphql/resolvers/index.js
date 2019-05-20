const {merge} = require('../../node_modules/lodash/lodash')

const userResolvers = require('./user')
const repResolvers = require('./representative')

const resolvers = merge(userResolvers, repResolvers)

module.exports = resolvers

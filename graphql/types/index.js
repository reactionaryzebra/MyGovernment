const mergeGraphqlSchemas = require('merge-graphql-schemas')
const mergeTypes = mergeGraphqlSchemas.mergeTypes
const User = require("./user")
const Representative = require("./representative")
const Article = require("./article")
const Bill = require("./bill")
const Channel = require("./channel")
const Committee = require("./committee")
const AuthToken = require('./authToken')

const typeDefs = [User, Representative, Article, Bill, Channel, Committee, AuthToken];

console.log(mergeTypes)
module.exports = mergeTypes(typeDefs, { all: true });

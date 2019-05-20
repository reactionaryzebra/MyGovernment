const { makeExecutableSchema } = require("../node_modules/graphql-tools/dist");

const typeDefs = require("./types/index");
const resolvers = require("./resolvers/index");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;

const Channel = require("./channel")
const Committee = require("./committee")
const Bill = require("./bill")
const Article = require("./article")

module.exports = `
type Representative {
  office: String!
  name: String!
  party: String
  phones: [String]
  urls: [String]
  photoUrl: String
  division: String
  proPublicaId: String
  channels: [Channel]
  committees: [Committee]
  bills: [Bill]
  news: [Article]
}

type Query {
  representatives(address: String!): [Representative!]!
  representative(address: String!, name: String!): Representative
}
`;

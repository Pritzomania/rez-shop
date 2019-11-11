const Mutation = require("./resolvers/Mutation");
const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/Query");
const db = require("./db.js");

const createServer = () => {
  return new GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    context: req => {
      return {
        ...req,
        db
      };
    }
  });
};

module.exports = createServer;

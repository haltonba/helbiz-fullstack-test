const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const VehiclesAPI = require("./vehicles");
const typeDefs = require("./schema")
const resolvers = require("./resolvers")
 
const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    dataSources: () => ({
        vehiclesAPI: new VehiclesAPI()
    })
});
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`Server finna scoot at http://localhost:4000${server.graphqlPath}`)
);
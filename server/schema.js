const { gql } = require('apollo-server-express');

// Constructs a schema, using GraphQL schema language.

const typeDefs = gql`

  type VehicleStatus {
    bike_id: ID!
    lat: Float!
    lon: Float!
    is_reserved: Int!
    is_disabled: Int!
    vehicle_type: String!
  }

  type Query {
    vehicles: [VehicleStatus]
    vehicle(id: ID!): VehicleStatus
  }
`;

module.exports = typeDefs;
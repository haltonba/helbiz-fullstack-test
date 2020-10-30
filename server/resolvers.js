// Populates data for single schema field.

const resolvers = {
    Query: {
        vehicles: (_, __, { dataSources }) =>
            dataSources.vehiclesAPI.getAllVehicles(),
        vehicle: (_, { id }, { dataSources }) =>
            dataSources.vehiclesAPI.getVehicleById(id)
        }
};

module.exports = resolvers;
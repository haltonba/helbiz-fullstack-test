const { RESTDataSource } = require('apollo-datasource-rest');

// Connects to Helbiz API to populate schema fields.

class VehiclesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.helbiz.com/admin/reporting/arlington/gbfs/free_bike_status.json';
    this.initialize({});
  }

  vehicleReducer(vehicle) {
    return {
        bike_id: vehicle.bike_id,
        lat: vehicle.lat,
        lon: vehicle.lon,
        is_reserved: vehicle.is_reserved,
        is_disabled: vehicle.is_disabled,
        vehicle_type: vehicle.vehicle_type  
    };
  }

  async getAllVehicles() {
    const response = await this.get('');
    return Array.isArray(response.data.bikes)
      ? response.data.bikes.map(vehicle => this.vehicleReducer(vehicle))
      : [];
  }

  async getVehicleById(vehicleId) {
    const response = await this.get('');
    let vehicle = response.data.bikes.filter(vehicle => vehicle.bike_id === vehicleId)
    return this.vehicleReducer(vehicle[0]);
  }
}

module.exports = VehiclesAPI;


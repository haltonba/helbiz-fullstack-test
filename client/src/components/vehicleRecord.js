import React from 'react'

// Component renders an individual vehicle line item.

const VehicleRecord = ({vehicle}) => {

  return (
    <tr>
        <td>{vehicle.bike_id}</td>
        <td>{vehicle.lat}°</td>
        <td>{vehicle.lon}°</td>
        <td>{vehicle.is_reserved === 0 ? "No" : "Yes"}</td>
        <td>{vehicle.is_disabled === 0 ? "No" : "Yes"}</td>
        <td>{vehicle.vehicle_type}</td>
    </tr>
  );
}

export default VehicleRecord;
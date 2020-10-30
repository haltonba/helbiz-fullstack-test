import React from 'react'
import VehicleRecord from "./vehicleRecord"

// Component renders table headers and all applicable individual VehicleRecord line items.

const VehiclesRecordsTable = ({vehicles}) => {

    const renderVehicles = () => {
        return vehicles.map((vehicle, index) => <VehicleRecord key={index} vehicle={vehicle}/>)
    }

    return (
        <div>
            <table id="vehicle-records-table">
                <thead>
                    <tr>
                        <th>Bike ID</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Reserved?</th>
                        <th>Disabled?</th>
                        <th>Vehicle Type</th>
                    </tr>
                </thead>
                <tbody id="table-body">
                    {renderVehicles()}
                </tbody>
            </table>
        </div>
    );
}
  
export default VehiclesRecordsTable;
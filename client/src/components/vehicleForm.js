import React, {useState} from 'react'

// Input/Submit form to query API for specific bike_id.

const VehicleForm = ({handleSearch}) => {

    const [vechicleId, setVehicleId] = useState("");

    const handleChange = (event) => {
        setVehicleId(event.target.value)
    }

    // Clears form input on submit.

    const handleFormReset = () => {
        setVehicleId("")
    }

    return (
        <form id="vehicle-form" onReset={handleFormReset} onSubmit={(event, vehicleId) => handleSearch(event, vechicleId.toUpperCase())}>
            <input id="vehicle-input" type="text" placeholder="Enter Bike ID" value={vechicleId} onChange={handleChange}/>
            <input id="search-button" type="submit" value="Search"/>
        </form>
    );
}
  
export default VehicleForm;
import React, {useState, useEffect} from 'react'
import VehicleForm from "../components/vehicleForm"
import VehiclesRecordsTable from "../components/vehiclesRecordsTable"
import Loader from "../components/loader"

// Container houses table and search form.

const VehiclesContainer = () => {

    const [vehicles, setVehicles] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    // Fetches vehicles from GraphQL API. Adjusts query based on if bike_id was passed through search form.

    const fetchData = async (id="") => {
        setLoader(true)
        await fetch('http://localhost:4000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: id === "" ? 
                '{ vehicles {bike_id lat lon is_reserved is_disabled vehicle_type} }' :
                `{ vehicle(id: "${id}") {bike_id lat lon is_reserved is_disabled vehicle_type} }`
            }),
        })
        .then(res => res.json())
        .then(json => setVehicles(id === "" ? json.data.vehicles : [json.data.vehicle]));
        setLoader(false)
    }

    // On search submit, fetches vehicles based on data passed into search form.

    const handleSearch = (event, vehicleId) => {
        event.preventDefault()
        vehicleId === "" ? fetchData() : fetchData(vehicleId)
    }

    return (
        <div>
            <VehicleForm handleSearch={handleSearch}/>
            {loader ? <Loader/> : null}
            {vehicles.length === 0 ? null : vehicles[0] === null ? <h3 id="error">Cannot find vehicle. Try a different Bike ID.</h3> : <VehiclesRecordsTable vehicles={vehicles}/>}
            {}
        </div>
    );
}
  
export default VehiclesContainer;
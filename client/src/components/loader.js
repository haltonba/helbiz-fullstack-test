import React from 'react'

// Loading spinner set to active as client is fetching from API.

const Loader = () => {

    return (
        <div id="loader-view">
            <section className="loader-container">
                <span className="loader"></span>
            </section>
        </div>
    );
}
  
export default Loader;
import React from 'react';

const AirportsList = ({ airports }) => {
    return (
        <div>
            <h3>Lista de Aeropuertos</h3>
            <ul>
                {airports.map(airport => (
                    <li key={airport.id}>{airport.name} ({airport.type})</li>
                ))}
            </ul>
        </div>
    );
};

export default AirportsList;

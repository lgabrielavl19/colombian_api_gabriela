import React from 'react';

const AirportGroupByRegion = ({ groupedData }) => {
    return (
        <div>
            <h3>Aeropuertos Agrupados por Región, Departamento, Ciudad y Tipo</h3>
            {Object.keys(groupedData).length > 0 ? (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Región</th>
                            <th>Departamento</th>
                            <th>Ciudad</th>
                            <th>Tipo</th>
                            <th>Conteo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(groupedData).map(region => (
                            Object.keys(groupedData[region] || {}).map(department => (
                                Object.keys(groupedData[region][department] || {}).map(city => (
                                    Object.keys(groupedData[region][department][city].types || {}).map(type => (
                                        <tr key={`${region}-${department}-${city}-${type}`}>
                                            <td>{region}</td>
                                            <td>{department}</td>
                                            <td>{city}</td>
                                            <td>{type}</td>
                                            <td>{groupedData[region][department][city].types[type]}</td>
                                        </tr>
                                    ))
                                ))
                            ))
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default AirportGroupByRegion;

// src/components/AirportsComponent.js
import React, { useEffect, useState } from 'react';
import { groupAirportsByDepartmentAndCity } from '../dataProcessing/airportsProcessing';

const AirportsComponent = () => {
    const [airports, setAirports] = useState([]);
    const [groupedData, setGroupedData] = useState({});
    const [loadingTime, setLoadingTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const start = Date.now();
            const response = await fetch('https://api-colombia.com/api/v1/Airport');
            const data = await response.json();
            const end = Date.now();
            setLoadingTime(end - start);
            setAirports(data);
            setGroupedData(groupAirportsByDepartmentAndCity(data));
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Aeropuertos por Región, Departamento, Ciudad y Tipo</h2>
            <div>
                <h3>Cantidad de Registros: {airports.length}</h3>
                <h3>Tiempo de Respuesta: {loadingTime} ms</h3>
            </div>
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

export default AirportsComponent;

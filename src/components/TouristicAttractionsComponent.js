// src/components/TouristicAttractionsComponent.js
import React, { useState, useEffect } from 'react';
import { fetchAttractions, groupAttractionsByDepartmentAndCity } from '../dataProcessing/attractionsProcessing';

const TouristicAttractionsComponent = () => {
  const [attractions, setAttractions] = useState([]);
  const [groupedAttractions, setGroupedAttractions] = useState({});
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const data = await fetchAttractions();
      const end = Date.now();
      setLoadingTime(end - start);
      setAttractions(data);
      setGroupedAttractions(groupAttractionsByDepartmentAndCity(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Atracciones Turísticas por Departamento y Ciudad</h2>
      <div>
        <h3>Cantidad de Registros: {attractions.length}</h3>
        <h3>Tiempo de Respuesta: {loadingTime} ms</h3>
      </div>
      <h3>Datos Agrupados:</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Departamento</th>
            <th>Ciudad</th>
            <th>Conteo de Atracciones</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(groupedAttractions).map(department => (
            Object.values(department.cities).map(city => (
              <tr key={`${department.name}-${city.name}`}>
                <td>{department.name}</td>
                <td>{city.name}</td>
                <td>{city.attractions}</td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
      <h3>Lista Completa de Atracciones:</h3>
      <ul>
        {attractions.map(attraction => (
          <li key={attraction.id}>
            {attraction.name} - {attraction.city?.name || "Unknown City"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristicAttractionsComponent;

// src/components/PresidentsComponent.js
import React, { useState, useEffect } from 'react';
import { fetchPresidents, groupPresidentsByParty } from '../dataProcessing/presidentsProcessing';

const PresidentsComponent = () => {
  const [presidents, setPresidents] = useState([]);
  const [groupedPresidents, setGroupedPresidents] = useState([]);
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const start = Date.now();
      const data = await fetchPresidents();
      const end = Date.now();
      setLoadingTime(end - start);
      setPresidents(data);
      setGroupedPresidents(groupPresidentsByParty(data));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Presidentes por Partido Político</h2>
      <div>
        <h3>Cantidad de Registros: {presidents.length}</h3>
        <h3>Tiempo de Respuesta: {loadingTime} ms</h3>
      </div>
      <h3>Datos Agrupados por Partido Político:</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Partido Político</th>
            <th>Conteo de Presidentes</th>
          </tr>
        </thead>
        <tbody>
          {groupedPresidents.map(({ party, count }) => (
            <tr key={party}>
              <td>{party}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {groupedPresidents.map(({ party, count, presidents }) => (
        <div key={party}>
          <h4>{party} ({count} presidentes)</h4>
          <ul>
            {presidents.map(president => (
              <li key={president.id}>
                {president.name} {president.lastName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PresidentsComponent;

// src/App.js
import React, { useState, useEffect } from 'react';
import Tabs from './components/Tabs';
import PresidentsComponent from './components/PresidentsComponent';
import AirportsComponent from './components/AirportsComponent';
import TouristicAttractionsComponent from './components/TouristicAttractionsComponent';

function App() {
  // Opcional: Si deseas manejar el estado global de datos, lo puedes hacer aquí.
  
  return (
    <div className="App">
      <h1>Dashboard Colombia</h1>
      <Tabs
        tabs={{
          'Presidentes': <PresidentsComponent />,
          'Atracciones Turísticas': <TouristicAttractionsComponent />,
          'Aeropuertos': <AirportsComponent />
        }}
      />
    </div>
  );
}

export default App;

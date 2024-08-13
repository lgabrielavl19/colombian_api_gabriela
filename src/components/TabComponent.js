import React, { useState } from 'react';
import AirportsComponent from './AirportsComponent';
import PresidentComponent from './PresidentComponent';
import TouristAttractionComponent from './TouristAttractionComponent';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('airports');

    const renderContent = () => {
        switch (activeTab) {
            case 'airports':
                return <AirportsComponent />;
            case 'presidents':
                return <PresidentComponent />;
            case 'touristAttractions':
                return <TouristAttractionComponent />;
            default:
                return null;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab('airports')}>Aeropuertos</button>
                <button onClick={() => setActiveTab('presidents')}>Presidentes</button>
                <button onClick={() => setActiveTab('touristAttractions')}>Atracciones Turísticas</button>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default TabComponent;

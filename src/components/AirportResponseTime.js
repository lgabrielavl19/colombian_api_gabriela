import React, { useEffect, useState } from 'react';

const AirportResponseTime = () => {
    const [responseTime, setResponseTime] = useState(0);

    useEffect(() => {
        const startTime = Date.now();
        fetch('https://api-colombia.com/api/v1/Airport')
            .then(response => response.json())
            .then(() => {
                const endTime = Date.now();
                setResponseTime(endTime - startTime);
            });
    }, []);

    return (
        <div>
            <h3>Tiempo de Respuesta: {responseTime} ms</h3>
        </div>
    );
};

export default AirportResponseTime;

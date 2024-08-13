export const groupAirportsByDepartmentAndCity = (airports) => {
    const groupedData = {};

    airports.forEach(airport => {
        const region = airport.department?.region || 'Sin Región';
        const department = airport.department?.name || 'Sin Departamento';
        const city = airport.city?.name || 'Sin Ciudad';
        const type = airport.type || 'Sin Tipo';

        if (!groupedData[region]) {
            groupedData[region] = {};
        }
        if (!groupedData[region][department]) {
            groupedData[region][department] = {};
        }
        if (!groupedData[region][department][city]) {
            groupedData[region][department][city] = { types: {}, count: 0 };
        }

        if (!groupedData[region][department][city].types[type]) {
            groupedData[region][department][city].types[type] = 0;
        }

        groupedData[region][department][city].types[type]++;
        groupedData[region][department][city].count++;
    });

    return groupedData;
};

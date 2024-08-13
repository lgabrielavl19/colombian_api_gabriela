// src/dataProcessing/attractionsProcessing.js

export const fetchAttractions = async () => {
  try {
    const response = await fetch('https://api-colombia.com/api/v1/TouristicAttraction');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching attractions:', error);
    return [];
  }
};

export const groupAttractionsByDepartmentAndCity = (attractions) => {
  return attractions.reduce((acc, attraction) => {
    const departmentName = attraction.city?.department?.name || "Unknown Department";
    const cityName = attraction.city?.name || "Unknown City";

    if (!acc[departmentName]) {
      acc[departmentName] = {
        name: departmentName,
        cities: {}
      };
    }

    if (!acc[departmentName].cities[cityName]) {
      acc[departmentName].cities[cityName] = {
        name: cityName,
        attractions: 0
      };
    }

    acc[departmentName].cities[cityName].attractions += 1;
    return acc;
  }, {});
};

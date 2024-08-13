// src/dataProcessing/presidentsProcessing.js

export const fetchPresidents = async () => {
  try {
    const response = await fetch('https://api-colombia.com/api/v1/President');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching presidents:', error);
    return [];
  }
};

export const groupPresidentsByParty = (presidents) => {
  const grouped = presidents.reduce((acc, president) => {
    const party = president.politicalParty || "Unknown Party";
    if (!acc[party]) {
      acc[party] = [];
    }
    acc[party].push(president);
    return acc;
  }, {});

  const result = Object.keys(grouped).map(party => ({
    party,
    count: grouped[party].length,
    presidents: grouped[party],
  }));

  result.sort((a, b) => b.count - a.count);

  return result;
};

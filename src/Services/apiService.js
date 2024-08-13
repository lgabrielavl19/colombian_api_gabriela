
const API_BASE_URL = "https://api-colombia.com/api/v1";

export const fetchPresidents = async () => {
    const response = await fetch(`${API_BASE_URL}/President`);
    return response.json();
};

export const fetchAirports = async () => {
    const response = await fetch(`${API_BASE_URL}/Airport`);
    return response.json();
};

export const fetchAttractions = async () => {
    const response = await fetch(`${API_BASE_URL}/TouristicAttraction`);
    return response.json();
};

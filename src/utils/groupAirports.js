// src/utils/groupAirports.js

export const groupAirports = (airports) => {
  return airports.reduce((acc, airport) => {
      const { region, department, city, type } = airport;

      if (!acc[region]) {
          acc[region] = { departamento: {} };
      }

      if (!acc[region].departamento[department]) {
          acc[region].departamento[department] = { ciudad: {} };
      }

      if (!acc[region].departamento[department].ciudad[city]) {
          acc[region].departamento[department].ciudad[city] = { tipo: {} };
      }

      if (!acc[region].departamento[department].ciudad[city].tipo[type]) {
          acc[region].departamento[department].ciudad[city].tipo[type] = 0;
      }

      acc[region].departamento[department].ciudad[city].tipo[type]++;

      return acc;
  }, {});
};

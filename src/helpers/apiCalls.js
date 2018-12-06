export const fetchFilms = async () => {
  try {
    const url = 'https://swapi.co/api/films/';
    const response = await fetch(url);
    const films = await response.json();
    return films;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export const fetchPeople = async () => {
  try {
    const url = 'https://swapi.co/api/people/';
    const response = await fetch(url);
    const people = await response.json();
    return people;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export const fetchVehicles = async () => {
  try {
    const url = 'https://swapi.co/api/vehicles/';
    const response = await fetch(url);
    const vehicles = await response.json();
    return vehicles;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

export const fetchPlanets = async () => {
  try {
    const url = 'https://swapi.co/api/planets/';
    const response = await fetch(url);
    const planets = await response.json();
    return planets;
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
};

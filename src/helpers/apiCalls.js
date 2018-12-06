export const fetchFilms = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);
  if (response.ok) {
    const films = await response.json();
    return films;
  } else {
    throw new Error('films not fetched');
  }
};

export const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people/';
  const response = await fetch(url);
  if (response.ok) {
    const people = await response.json();
    return people;
  } else {
    throw new Error('people not fetched');
  }
};

export const fetchVehicles = async () => {
  const url = 'https://swapi.co/api/vehicles/';
  const response = await fetch(url);
  if (response.ok) {
    const vehicles = await response.json();
    return vehicles;
  } else {
    throw new Error('vehicles not fetched');
  }
};

export const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets/';
  const response = await fetch(url);
  if (response.ok) {
    const planets = await response.json();
    return planets;
  } else {
    throw new Error('planets not fetched');
  }
};

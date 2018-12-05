// Dumping place for API calls

export const fetchFilms = async () => {
  const url = 'https://swapi.co/api/films/';
  const response = await fetch(url);
  const films = await response.json();
  return films;
};

export const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people/';
  const response = await fetch(url);
  const people = await response.json();
  return people;
};

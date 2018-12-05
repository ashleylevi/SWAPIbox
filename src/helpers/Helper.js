// Dumping place for data cleaner methods

export const getRandomFilm = filmArray => {
  const randomNumber = Math.floor(Math.random() * 6);
  return filmArray[randomNumber];
};

// export const cleanPeopleData = async peopleArray => {
//   const peoplePromises = peopleArray.map(async person => {
//     const homeworldFetch = await fetch(person.homeworld);
//     const homeworld = await response.json(homeworldFetch);

//     const speciesFetch = await fetch(person.species[0]);
//     const species = await response.json(speciesFetch);
//     return {
//       name: person.name,
//       homeworld: '',
//       homeworldPopulation: '',
//       species: '',
//       isFavorite: false,
//     };
//   });
//   return Promise.all(peoplePromises);
// };

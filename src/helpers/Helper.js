// Dumping place for data cleaner methods

export const getRandomFilm = filmArray => {
  const randomNumber = Math.floor(Math.random() * 6);
  return filmArray[randomNumber];
};

export const cleanPeopleData = async peopleArray => {
  const people = await peopleArray.map(async person => {
    const { homeworld, species } = person;

    const fetches = [fetch(homeworld), fetch(species)];
    const response = await Promise.all(fetches);

    const parsedResponses = [response[0].json(), response[1].json()];

    const parsedData = await Promise.all(parsedResponses);

    const homeworldObj = parsedData[0];
    const speciesObj = parsedData[1];
    console.log({
      name: person.name,
      homeworld: homeworldObj.name,
      homePop: homeworldObj.population,
      species: speciesObj.name,
      isFavorite: false
    });

    return {
      name: person.name,
      homeworld: homeworldObj.name,
      homePop: homeworldObj.population,
      species: speciesObj.name,
      isFavorite: false
    };
  });
  return Promise.all(people);
};

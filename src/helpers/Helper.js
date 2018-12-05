// Dumping place for data cleaner methods

export const getRandomFilm = filmArray => {
  const randomNumber = Math.floor(Math.random() * 6);
  return filmArray[randomNumber];
};

export const cleanPeopleData = async peopleArray => {
  const peoplePromises = peopleArray.map(async person => {
    const { homeworld, species } = person;

    const fetches = [fetch(homeworld), fetch(species)];
    const response = await Promise.all(fetches);

    const parsedResponses = [response[0].json(), response[1].json()];

    const parsedData = await Promise.all(parsedResponses);
    console.log(parsedData);
  });
};

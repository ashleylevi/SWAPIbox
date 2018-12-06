export const getRandomFilm = filmArray => {
  const randomNumber = Math.floor(Math.random() * 6);
  return filmArray[randomNumber];
};

export const cleanPeopleData = async peopleArray => {
  const people = peopleArray.map(async person => {
    const { homeworld, species } = person;

    const fetches = [fetch(homeworld), fetch(species)];
    const response = await Promise.all(fetches);

    const parsedResponses = [response[0].json(), response[1].json()];

    const parsedData = await Promise.all(parsedResponses);

    const homeworldObj = parsedData[0];
    const speciesObj = parsedData[1];

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

export const cleanVehicleData = async vehiclesArray => {
  const vehicles = await vehiclesArray.map(async vehicle => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      isFavorite: false
    };
  });
  return Promise.all(vehicles);
};

export const cleanPlanetsData = async planetsArray => {
  const planets = await planetsArray.map(async planet => {
    const { residents } = planet;
    const promisedPeople = residents.map(async resident => {
      const response = await fetch(resident);
      return response.json();
    });

    const resolvedResidents = await Promise.all(promisedPeople);

    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: resolvedResidents,
      isFavorite: false
    };
  });
  return Promise.all(planets);
};

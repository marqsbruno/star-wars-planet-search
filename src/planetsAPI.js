async function fetchPlanets() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default fetchPlanets;

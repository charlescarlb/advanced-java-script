/*
  You should write the code in this file
*/

const getUniqueTypes = pokemon => {
 let uniqueTypes =[]
  pokemon.forEach(pokemon=> { 
    if (!uniqueTypes.includes(pokemon.type)) {
      uniqueTypes.push(pokemon.type)
    }

 });
 return uniqueTypes
};

const orderByPower = pokemons => {

};

const getPokemonNamesForType = (type,pokemon) => {
  const filteredPokemon = pokemon.filter (pokemon => pokemon.type === type);
  return filteredPokemon.map (pokemon => pokemon.name);
};


const filterByType = (type, pokemon) => {
  return pokemon.filter(pokemon=>{
    return pokemon.type===type
  })
};

const getTotalPokemonPowerForType = (type, pokemon) => {
  // const filteredPokemon = pokemon.filter (pokemon=> );
  // const totalPower =filteredPokemon.reduce ((acc, curr) => acc + curr.power, 0);
  // return totalPower;


};


const getTypeAggregatedInformation = (type, pokemon) => {
  const filteredPokemon = pokemon.filter(pokemon => pokemon.type === type);
  const count = filteredPokemon.length;
  const totalPower = filteredPokemon.reduce((acc, curr) => acc + curr.power, 0);
  const averagePower = totalPower / count;
  return {
    count,
    totalPower,
    averagePower
  };
};

export const utils = {
  getUniqueTypes,
  orderByPower,
  filterByType,
  getPokemonNamesForType,
  getTotalPokemonPowerForType,
  getTypeAggregatedInformation
};

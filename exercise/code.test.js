/*
  Do not modify this file
*/

const { utils } = require('./code');
const { EXPECTATION_ITEMS, POKEMONS: pokemons } = require('../data/expectations');

describe('Pokemons', () => {
  describe('getUniqueTypes(pokemons)', () => {
    it('should return the list of unique pokemon types', () => {
      const result = utils.getUniqueTypes(pokemons);
      
      expect(result).toEqual(EXPECTATION_ITEMS.getUniqueTypes.expectations[0].output);
    });
  });

  describe('orderByPower(pokemons)', () => {
    it('should return the list of pokemons ordered by power', () => {
      const result = utils.orderByPower(pokemons);

      expect(result).toEqual(EXPECTATION_ITEMS.orderByPower.expectations[0].output);
    });
  });

  describe('filterByType(type, pokemons)', () => {
    it('should filter the list by type', () => {
      EXPECTATION_ITEMS.filterByType.expectations.forEach(exp => {
        const result = utils.filterByType(...exp.input, pokemons);
        expect(result).toEqual(exp.output)
      });
    });
  });

  describe('getPokemonNamesForType(type, pokemons)', () => {
    it('should return the list of pokemons of a given type', () => {
      EXPECTATION_ITEMS.getPokemonNamesForType.expectations.forEach(exp => {
        const result = utils.getPokemonNamesForType(...exp.input, pokemons);
        expect(result).toEqual(exp.output)
      });
    });
  });

  describe('getTotalPokemonPowerForType(type, pokemons)', () => {
    it('should return the total power of a given type water', () => {
      EXPECTATION_ITEMS.getTotalPokemonPowerForType.expectations.forEach(exp => {
        const result = utils.getTotalPokemonPowerForType(...exp.input, pokemons);
        expect(result).toEqual(exp.output)
      });
    });
  });

  describe('getTypeAggregatedInformation(type, pokemons)', () => {
    it('should return an object with the list of pokemon names and the total power of given type water', () => {
      EXPECTATION_ITEMS.getTypeAggregatedInformation.expectations.forEach(exp => {
        const result = utils.getTypeAggregatedInformation(...exp.input, pokemons);
        expect(result).toEqual(exp.output)
      });
    });
  });
});

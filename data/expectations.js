export const POKEMONS = [
  { name: "Squirtle", type: "water", power: 20 },
  { name: "Pikachu", type: "electric", power: 50 },
  { name: "Charmander", type: "fire", power: 10 },
  { name: "Zapdos", type: "electric", power: 30 },
  { name: "Voltorb", type: "electric", power: 10 },
  { name: "Ponyta", type: "fire", power: 50 },
  { name: "Raichu", type: "electric", power: 40 }
];

export const EXPECTATION_ITEMS = {
  getUniqueTypes: {
    name: 'Get unique types',
    expectations: [
      {input: [], output: ["water","electric","fire"]}
    ]
  },
  orderByPower: {
    name: 'Sort pokemons by power',
    expectations: [
      {input: [], output: [
        { name: "Charmander", type: "fire", power: 10 },
        { name: "Voltorb", type: "electric", power: 10 },
        { name: "Squirtle", type: "water", power: 20 },
        { name: "Zapdos", type: "electric", power: 30 },
        { name: "Raichu", type: "electric", power: 40 },
        { name: "Pikachu", type: "electric", power: 50 },
        { name: "Ponyta", type: "fire", power: 50 }
      ]}
    ]
  },
  filterByType: {
    name: 'Filter pokemons by type',
    expectations: [
      {input: ["water"], output: [
        { name: "Squirtle", type: "water", power: 20 }]
      },
      {input: ["electric"], output: [
        { name: "Pikachu", type: "electric", power: 50 },
        { name: "Zapdos", type: "electric", power: 30 },
        { name: "Voltorb", type: "electric", power: 10 },
        { name: "Raichu", type: "electric", power: 40 }
      ]},
      {input: ["fire"], output: [
        { name: "Charmander", type: "fire", power: 10 },
        { name: "Ponyta", type: "fire", power: 50 }
      ]}
    ]
  },
  getPokemonNamesForType: {
    name: 'Get pokemon names for one type',
    expectations: [
      {input: ["water"], output: ["Squirtle"]},
      {input: ["electric"], output: ["Pikachu", "Zapdos", "Voltorb", "Raichu"]},
      {input: ["fire"], output: ["Charmander", "Ponyta"]}
    ]
  },
  getTotalPokemonPowerForType: {
    name: 'Get total pokemon power for one type',
    expectations: [
      {input: ["water"], output: 20},
      {input: ["electric"], output: 130},
      {input: ["fire"], output: 60}
    ]
  },
  getTypeAggregatedInformation: {
    name: 'Aggregate pokemon information for a given type',
    expectations: [
      {input: ["water"], output: {
        type: "water",
        pokemons: ["Squirtle"],
        power: 20
      }},
      {input: ["electric"], output: {
        type: "electric",
        pokemons: ["Pikachu", "Zapdos", "Voltorb", "Raichu"],
        power: 130
      }},
      {input: ["fire"], output: {
        type: "fire",
        pokemons: ["Charmander", "Ponyta"],
        power: 60
      }}
    ]
  },
}
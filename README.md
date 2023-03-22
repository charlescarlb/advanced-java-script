# MFR Advance JS challenge: Arrays in depth

## Description
This is a little exercise where you can live coding the solution and see in real-time the result and why is it failing.

## How to use it

First of all, fork this repository, so you can work with in your own copy.

The main goal of this challenge is to solve all the exercises. Each one is a function that you can find in `/exercise/code.js`. You will se those functions to be empty, so your mission would be to write the code that will match the expected output.

## Objective
You need to implement the following functions in `/exercise/code.js``:
* getUniqueTypes
* orderByPower
* filterByType
* getPokemonNamesForType
* getTotalPokemonPowerForType
* getTypeAggregatedInformation

To solve this exercise, you will need to use the array functions we have seen in class:
* map()
* filter()
* reduce()
* forEach()
* ...


## How can I know the expected output?

If you start the live server in the `index.html` file. you will have the following interface:
![](./docs/web.png)

In this interface you will see each of the exercise to be solve. Each row is a and these functions have an input that are going to receive, and an expected output. When you press the `Run!` button, the function will be executed using the selected input, and will tell you if the result is correct or not, with the actual result so you can compare:

### Wrong answer
![](./docs/wrong.png)

### Correct answer
![](./docs/success.png)

The collection you are going to use is the following:
```js
const POKEMONS = [
  { name: "Squirtle", type: "water", power: 20 },
  { name: "Pikachu", type: "electric", power: 50 },
  { name: "Charmander", type: "fire", power: 10 },
  { name: "Zapdos", type: "electric", power: 30 },
  { name: "Voltorb", type: "electric", power: 10 },
  { name: "Ponyta", type: "fire", power: 50 },
  { name: "Raichu", type: "electric", power: 40 }
];
```

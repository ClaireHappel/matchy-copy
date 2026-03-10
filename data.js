/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// init animal to an object literal
var animal = {};
// use dot notation to give animal a property of species with any species value
animal.species = 'cat';
// use bracket notation to give animal a property of name with any name value
animal['name'] = 'Roy';
// use either notation to create a key noises
animal.noises = [];
// print animal to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// init noises to an array literal
var noises = [];
// use bracket notation to give noises it's first element
noises[0] = 'purr';
// add an element to the end of noises
noises[1] = 'meow';
// add a noise to the front via a function
noises.unshift('growl');
// add a noise to the end of noises, make it so it is always the end of noises
noises.push('hiss');
// log the length of noises
console.log(noises.length);
// log the last element of noises without hard coding the index
console.log(noises[noises.length - 1]);
// log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// use bracket syntax to assign the array noises to it's key on animal
animal.noises = noises;
// add another nose to the noises array
animal.noises.push('mwrrow');
// log animal
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create a var called animals and assign it to an empty array
var animals = [];
//push animal that was created into animals
animals.push(animal)
//console log animals 
console.log(animals)
//create a variable called duck and assign it to given data
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//push duck to animals
animals.push(duck);
//log animals to console
console.log(animals);
//create two more animals with all properties, include at least two sounds 
var dog = { species: 'dog', name: 'Diggy Dog', noises: ['growl', 'bark']};
var alligator = { species: 'alligator', name: 'Gator Ade', noises: ['hiss', 'chirp']};
//push both animals 
animals.push(dog, alligator);
//log animals to console 
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assign friends to an array literal
var friends = [];
// I: one input, an array
// O: one output, a arandom index 
// C: use Math.random
// E: none
function getRandom(array) {
   // return the rounded down result of Math.random multiplied by max minus min plus 1 and then added to min
  return Math.floor(Math.random() * (Math.floor(array.length - 1) - Math.ceil(0) + 1) + Math.ceil(0));
}

// set index to getRandom called with animals as the argument
var index = getRandom(animals);
// push the name of animal at this index to the friends array
friends.push(animals[index].name);
// console log friends
console.log(friends)
// use bracket notation to add friends list as property with the value set as the friends array
animals[getRandom(animals)].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
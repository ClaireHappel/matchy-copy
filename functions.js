/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, an array and a string
// O: one output, either an object or null
// C: none
// E: none
function search(arr, str){
    // loop through array
    for (let i = 0; i < arr.length; i++){
        // if a name in array matches string
        if (arr[i].name === str){
            // return that object
            return arr[i];
        }
    }
    // else return null
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: three inputs, an array, a string, and an object
// O: none
// C: if an animal's name matches the string, replace the animal with object
// E: none
function replace(animals, name, replacement){
    // loop through the array animals
    for (var i = 0; i < animals.length; i++){
        // if a name on an object matches given name
        if (animals[i].name === name){
            // replace that object with replacement
            animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, an array and a string
// O: none
// C: remove any animal that's name matches the string
// E: none
function remove(animals, name){
    // loop through animals array
    for (var i = 0; i < animals.length; i++){
        // if a name in animals equals the name given
        if (animals[i].name === name){
            // remove it from the array
            animals.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// I: two inputs, an array and an object
// O: none
// C: none
// E: name and species properties should have a length greater than 0
function add(animals, animal){
    // if both name and species have a length greater than 0
    if (animal.name.length !== 0 && animal.species.length !== 0) {
      // loop over the array
      for (var i = 0; i < animals.length; i++) {
        // if the animal's name exists within animals
        if (animal.name === animals[i].name) {
          // return without modifying
          return;
        }
      } 
      // else push animal into animals object
      animals.push(animal);
    }
  }
/**
 * You did it! You're all done with Matchy!
 */


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
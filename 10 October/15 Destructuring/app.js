/* const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

// const a = alphabet[0];
// const b = alphabet[1];
const[a, b, c, ... rest] = alphabet;

// const newArray = alphabet.concat(numbers);
const newArray = [... alphabet, ... numbers];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);
console.log(newArray);

function sumAndMultiply (a, b) {
    return [a + b, a * b, a / b];
}
const array = sumAndMultiply(2, 3);
const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
console.log(array);
console.log(sum);
console.log(multiply); */

const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Rice',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}
/* const personTwo = {
    age: 32,
    favoriteFood: 'Watermelon',
}

const {name: firstName, address: {city}} = personTwo;

const personThree = {...personOne, ...personTwo};
console.log(firstName);
console.log(city); */
function printUser({name, age, favoriteFood = 'Watermelon'}){
    console.log(`Name is: ${name}. Age is ${age}. Food is ${favoriteFood}`);
}
printUser(personOne)
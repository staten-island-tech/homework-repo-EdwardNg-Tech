///Type Conversions
let a = 2 + '2';
console.log(a);
//The result is 22.
// When adding an integer and a string, the integer will be converted to a string and will then concatenate both strings.
let b = 2 + 2 + '2';
console.log(b);
//The result is 42.
//When adding more than two variables together, the variables will be added in order. In this case, the two integers are added before being converted to a string. Then, the two strings will be concatenated together.
let c = 2 + true;
console.log(c);
//The result is 3.
//When adding an integer and a boolean together, the boolean is converted to an integer and added to the integer.
let d = 2 + true + '2';
console.log(d);
//The result is 32.
//When an integer is being added to a boolean, the boolean is converted to an integer and added. Then, when adding an integer to a string, the integer is converted to a string and the two are concatenate together.
let e = true + '2';
console.log(e);
//The result is true2.
//When adding a boolean to a string, the boolean is converted to a string and then the two are concatenated together.
let f = Number('2');
console.log(f);
//The result is 2.
//The variable is being converted from a string to an integer.
let g = Number('Hello');
console.log(g);
//The result is NaN.
//When converting a string with text to an integer, the result will be not a number (NaN).
let h = Number('Hello');
console.log(typeof(h));
//The result is number.
//The type of NaN is a number.
let i = Boolean(1);
console.log(i);
//The result is true.
//When the integer 1 is converted to a boolean, the result is true.
let j = Boolean(5);
console.log(j);
//The result is true.
//When an integer greater than or equal to one is converted into a boolean, the result is true.
let k = Boolean(0);
console.log(k);
//The result is false.
//When the integer 0 is converted to a boolean, the result is false. 
let l = Boolean(10000);
console.log(l);
//The result is true.
let m = Boolean('hello');
console.log(m);
//The result is true.
//When converting strings to Booleans, the result is true.
let n = Boolean('');
console.log(n);
//The result is false.
//When converting empty strings to Booleans, the result is false.
let o = Boolean(undefined);
console.log(o);
//The result is false.
//When an undefined variable is converted into a boolean, the result is false.
let p = Boolean(null);
console.log(p);
//The result is false.
//When a null variable is converted into a boolean, the result is false.
let q = Boolean('false');
console.log(q);
//The result is true.
//Any string with a value converted into a boolean will result in true.
let r = '';
if (r !== undefined) || (r !== null)  (r !== 0) {
}
//if statement that checks whether variable r is a string with a value and runs when there is a string value.
if ([]) {
}
//if statement will run becuase an object (array) will result in a true boolean.

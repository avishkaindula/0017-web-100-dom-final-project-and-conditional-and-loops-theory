const myName = "Indula";

// if (true) {
//   console.log("Hello!!");
// }
// This code gets executed

// if (false) {
//   console.log("Hello!!");
// }
// This code won't get executed

// true and false are boolean values

// Comparison Operators
// == , ===  (Equality Operators)
// > , < , >= , <=  (Greater Than, Lesser Than)
// These Greater Than, Lesser Than values can also be used to compare letters in alphabetical order
// ! ,!= , !== (Negation/inverse) - This is how we set some-thing is NOT true
// These are used to compare values

// Logical Operators
// These are used to combine two or more comparison operators
// && (AND)
// || (OR)

console.log(5 == "5");
// result = true
// == only compare the value

console.log(5 === "5");
// result = false
// === compare value and also the type of the value

console.log(4 !== "4");
// result = true
// this outputs the result as true because the "types" of values are different

console.log(4 != "4");
// result = false

console.log(3 > 1);
// result = true

console.log("a" > "b");
// result = false

console.log("cb" > "ab");
// result = true

console.log(!(3 > 1));
// result = false
// this gives the opposite of the real output

console.log(5 === 5 && 2 === 3);
// result = false

console.log(5 === 5 || 2 === 3);
// result = true
// the result shows as true because one of the logics are true

console.log(2 === 2 || (2 === 3 && 5 === 6));
// result = true
// JS will automatically bracket the && and compare it before comparing the || values
// the brackets was added by prettier extension. I didn't add them.

console.log((2 === 2 || 2 === 2) && 5 === 6)
// result = false
// brackets gets executed first.
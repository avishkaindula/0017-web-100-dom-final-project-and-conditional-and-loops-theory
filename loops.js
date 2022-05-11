// Loops for arrays
// for - Loops n number of times
// for ... of - Loop through all elements of an array

// Loops for objects
// for ... in - Loop through all properties in an object
// while - Loop as long as certain condition is met

// --------------------------------------------------------------------------------------------------------
// the regular for loop

for (let i = 0; i < 10; i++) {
  // i stands for iteration. But we can name it whatever we want.
  // we use "let" instead of const here.
  // (let i;)
  // i++ means i = i + 1
  // if we use i = i + 2 instead of i++ the value of i counts like 2,4,6,8
  console.log(i);
}

// --------------------------------------------------------------------------------------------------------
// the for-of loop

const users = [
  "Indula",
  "Yashodha",
  "Janith",
  "Geethma",
  "Janeesha",
  "Shameen",
];

console.log(users);
// This just console logs the array
// but we want to console log the names inside that array as individual items.
// for that we use for-of loop

for (const userName of users) {
  // we use const instead of let in here.
  //   This for of loop get executed again and again for every element inside the array
  console.log(userName);
}

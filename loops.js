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
// result
// Indula
// Yashodha
// Janith
// Geethma
// Janeesha
// Shameen

// --------------------------------------------------------------------------------------------------------
// for-in loop

const loggedInUser = {
  userName: "Indula",
  age: 21,
  isAdmin: true,
};

for (const key in loggedInUser) {
  // this constant holds the different property names. (often referred as keys)
  // we can use whatever we want as the name of the const instead of key.
  console.log(key);
  // result
  // userName
  // age
  // isAdmin
  console.log(loggedInUser[key]);
  // this is how we access the values of a property inside an array.
}

// --------------------------------------------------------------------------------------------------------
// while loop
// In while the code get executed until the condition is "true"

// while (true) {
//   console.log("You are an idiot!");
// }
// We can create an infinite loop like this!

let isFinished = false;

while (!isFinished) {
  // ! means the opposite. The opposite of isFinished = false in the 81st line is isFinished = true
  // So because the isFinished is set to true at the beginning, the while loop starts to get executed.

  isFinished = confirm("Do you want to quit");
  // confirm is an alternative to "alert"
  // This will ask the user to click "ok" or "cancel" instead of just "ok"

  // "cancel" means isFinished = false; so the ! of isFinished = false; is isFinished = true;
  // so when we select cancel, the condition sets to true and the code keeps looping

  // "ok" means isFinished = true; so the ! of isFinished = true; is isFinished = false;
  // so when we select ok, the condition sets to false and the code stops looping

  // so the code keeps on looping until we select "ok" rather than "cancel"
}

console.log("Done!");
// This console.log("Done!"); code line get executed "after" the above while code is finished executing.

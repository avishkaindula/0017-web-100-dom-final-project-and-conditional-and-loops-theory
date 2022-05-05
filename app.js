const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
// we can use const instead of let if the value of the variable never get overwritten.

// const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = 60 - enteredTextLength;
  // const remainingCharacters = maxAllowedChars - enteredTextLength;
  // This is an alternative way to write the code in the 11th line.

  remainingCharsElement.textContent = remainingCharacters;

  if (remainingCharacters === 0) {
    remainingCharsElement.classList.add("zero");
    productNameInputElement.classList.add("zero");
  } else if (remainingCharacters <= 10) {
    remainingCharsElement.classList.add("warning");
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.remove("zero");
    productNameInputElement.classList.remove("zero");
  } else {
    remainingCharsElement.classList.remove("zero", "warning");
    productNameInputElement.classList.remove("zero", "warning");
    // remainingCharsElement.classList.remove("warning");
    // productNameInputElement.classList.remove("warning");
    // We can write both of this code inside the 26th and 27th line by using a ","
  }
  // this if statement won't get executed if we write it "outside" the function while
  // making the remainingCharsElement a global variable.
  // I can't find the reason for this.
  // This overall conditional block is evaluated by JS starting from the "top" and go to "bottom"
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);

// --------------------------------------------------------------------------------------------------------------------------

// const spanElement = document.getElementById("remaining-chars");

// spanElement.style.color = "red";
// spanElement.style.fontSize = "30px";
// We can access css properties by using .style
// But the css property names in this JS code have camel case while css property names in CSS files has - marks.

// spanElement.className = "first-class second-class"
// This is how we set a class to an html element using JS.
// In here, there are two classes created and added to the remaining-chars element which are first-class and second-class
// Which means we can add more than one class to the same html element.

// spanElement.className = "warning";
// If there's already a class applied to the span element in the html code, then this code will "overwrite" that class
// and create a class called .warning
// so this code will overwrite some-class class and create a class called warning instead.

// spanElement.classList.add("warning");
// this code will add a class called warning to the span element while still keeping the some-class class to.

// spanElement.classList.remove("warning");
// this code will remove the .warning class form the span element.

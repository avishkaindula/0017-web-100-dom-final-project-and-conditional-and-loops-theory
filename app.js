const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
// we can use const instead of let if the value of the variable never get overwritten.

// const maxAllowedChars = productNameInputElement.maxLength;

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = 60 - enteredTextLength;
  // const remainingCharacters = maxAllowedChars - enteredTextLength;
  // This is an alternative way to write the code in the 10th line.

  remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);

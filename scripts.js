const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Clear previous result
  result.innerText = '';

  // Validation for empty inputs
  if (!dividend || !divider) {
    // Display error message if either input is empty
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return; // Exit the function
}

  // Parse the inputs to float numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Check for non-numeric inputs
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    // Log error and display critical error message
    console.error(new Error("Non-numeric input detected."));
    document.body.innerHTML = "Something critical went wrong. Please reload the page";
    return; // Exit the function
}

  // Check for division by zero
  if (dividerNum === 0) {
    // Log error and display division by zero message
    console.error(new Error("Invalid division by zero."));
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return; // Exit the function
}


// Perform the division and handle whole and decimal results
const divisionResult = dividendNum / dividerNum;

if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult; // Show whole number
} else {
    result.innerText = Math.floor(divisionResult); // Show floored whole number
}

});


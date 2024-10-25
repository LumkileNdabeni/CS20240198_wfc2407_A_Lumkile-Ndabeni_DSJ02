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
      result.innerText = "Division not performed. Both values are required in inputs. Try again";
      return;
  }

  // Parse inputs to numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Check for non-numeric inputs
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
      console.error(new Error("Non-numeric input detected."));
      document.body.innerHTML = "Something critical went wrong. Please reload the page";
      return;
  }

// Check for division by zero
if (dividerNum === 0) {
    console.error(new Error("Invalid division by zero."));
    result.innerText = "Division not performed. Invalid number provided. Try again";
    return;
}


});


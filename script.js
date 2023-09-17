//your JS code here. If required.
// Initialize an empty string to store the FizzBuzz output
let output = "";

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Check for multiples of both three and five first
  if (i % 3 === 0 && i % 5 === 0) {
    output += "FizzBuzz";
  }
  // Check for multiples of three
  else if (i % 3 === 0) {
    output += "Fizz";
  }
  // Check for multiples of five
  else if (i % 5 === 0) {
    output += "Buzz";
  }
  // For all other numbers
  else {
    output += i.toString();
  }

  // Add a newline character after each number/string (except the last one)
  if (i < 100) {
    output += "\n";
  }
}

// Display the FizzBuzz output using the alert function
alert(output);

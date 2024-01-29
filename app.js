 // Import the built-in 'readline' module for reading user input
const readline = require('readline');

// Create an interface to read input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter a number
rl.question('Enter a number: ', (userInput) => {
  // Parse the user input as a number
  const number = parseFloat(userInput);

  // Check if the input is a valid number
  if (!isNaN(number)) {
    // Add 5 to the input number
    const result = number + 5;

    // Print the result
    console.log(`Result: ${result}`);
  } else {
    // If the input is not a valid number, notify the user
    console.log('Invalid input. Please enter a valid number.');
  }

  // Close the interface
  rl.close();
});

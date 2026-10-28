// greet.js
const name = process.argv[2] || 'World';
console.log(`Hello, ${name}!`);

// Node.js provides process.argv — an array containing the command-line arguments passed to the script. 
// The first two elements are always the path to node and the path to your script, so the first user-provided 
// argument is at index 2:
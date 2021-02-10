const { connect } = require('./client'); // connect must be imported/required as an object
const { setupInput } = require('./input');

console.log('Connecting ...'); 

connect(); // the connect function we made (in client.js) does the connecting...

setupInput(); // call the input setup function
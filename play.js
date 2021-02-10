const { connect } = require('./client'); // connect must be imported/required as an object
const { setupInput } = require('./input');

console.log('Connecting ...'); 

// connect(); // the connect function we made (in client.js) does the connecting...


setupInput(connect()); // call the input setup function

// Instead we pass the return value (the connection object) of connect()
// into our setUpInput so that the function can use it to write 
// commands to the server!
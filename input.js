const { wasd, msgs } = require('./constants');
/* Setup User Interface */
// So we can handle user input via stdin

// Stores the active TCP connection object.
let connection;
let movementID;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true); // so that every keypress is registered as an input (so we dont have to press enter for a "line")
  stdin.setEncoding('utf8'); // so that characters are not encoded in binary
  stdin.resume(); // resume() makes it so that stdin does not stop listening/running and client.js doesn't exit
  stdin.on("data", handleUserInput); 
  return stdin;
};

const handleUserInput = function(key) { // this is our callback for handling user input
  if (key === '\u0003') { // u0003 maps to control+c 
    process.exit(); // quit the process of running client.js
  }

  if (Object.keys(wasd).includes(key)) clearInterval(movementID); // stops previous setInverval move .write if the key is a movement key
  
  for (const move of Object.keys(wasd)) {
    if (key === move) {
      movementID = setInterval(() => {
        connection.write(wasd[move]);
      }, 50);    // The "connection" is an object that was passed into the setUpInput function call from play.js
    }
  } 

  for (const say of Object.keys(msgs)) { // in the msgs obj x = nom nom, e = incoming!, x = you DED
    if (key === say) {
      connection.write("Say: " + msgs[say]);    // The "connection" is an object that was passed into the setUpInput function call from play.js
    }
  }
  
}; // because this function is only used in reference and not called elsewhere we dont need to export it



module.exports = { setupInput };
const net = require('net'); // require 'net' module from node

//Establish connection with game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("connect", (data) => { // The "connect" event is triggered on a connection as soon as it is successfully established.
    console.log("Connection established XD");
    conn.write("Name: AJM"); // .write method lets you send an argument string to the server at anytime!
  });
  
  conn.on("data", (data) => {
    console.log("Server says: " + data);
  });

  return conn; // the object returned from net.createConnection({host,port})
};

/* Setup User Interface */
// So we can handle user input via stdin

const setupInput = function() {
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
};

setupInput(); // call the input setup function

module.exports = { connect }; // must be exported as an object {}
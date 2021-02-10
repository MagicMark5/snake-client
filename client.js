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

  conn.on("connect", (data) => {
    // movement upon connection, start loop
    // for (let i = 0; i <= 10; i++) {
    //   setInterval(() => {
    //     conn.write("Move: up");
    //   }, 500); 
    // }
  });
  
  conn.on("data", (data) => {
    console.log("Server says: " + data);
  });

  return conn; // the object returned from net.createConnection({host,port})
}

module.exports = { connect }; // must be exported as an object {}
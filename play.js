const net = require('net'); // require 'net' module from node

//Establish connection with game server

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on("data", (data) => {
    console.log("Server says: " + data);
  })

  return conn; // the object returned from net.createConnection({host,port})
}

console.log('Connecting ...'); 
connect(); // the connect function we made does the connecting...
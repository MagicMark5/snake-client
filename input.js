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
}; // because this function is only used in reference and not called elsewhere we dont need to export it



module.exports = { setupInput };
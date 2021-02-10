const IP = '135.23.222.131';
const PORT = 50542;
const name = "AJM";
const wasd = {
  "\u0077": "Move: up", 
  "\u0061": "Move: left", 
  "\u0073": "Move: down",
  "\u0064": "Move: right"
};
const msgs = {
  "\u0078": "nom nom!", // x key says "yummy!"
  "\u0072": "You DED!", // r key says...
  "\u0065": "Incoming!", // e key
};

module.exports = {
  IP,
  PORT, 
  name, 
  wasd, 
  msgs
};

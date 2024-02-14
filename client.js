const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });


  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on("connect", () => {
    console.log("you are connected YO");
    conn.write("Say: hi!");
    conn.write("Name: TJS");
  });

  return conn;

};

console.log("Connecting ...");

module.exports = { connect }
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,



  });


  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("you are connected YO");
    conn.write("Name: TJS");
  });
  
  return conn;

};

module.exports = connect;
const net = require("net");

const conn = net.createConnection({
  host: "localhost", // change to IP address of computer, more on that below
  port: 3000,
});

conn.on("data", (data) => {
  console.log("Server says: ", data);
});

conn.on("connect", () => {
  conn.write("Hello from client!");
});

conn.setEncoding("utf8"); // interpret data as text
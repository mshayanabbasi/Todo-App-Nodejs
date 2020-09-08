const http = require("http");
const app = require("./app");

const server = http.createServer(app);

server.listen(process.env.PORT || 8888, function () {
  var port = server.address().port;
  console.log("Express is working on port " + port);
});

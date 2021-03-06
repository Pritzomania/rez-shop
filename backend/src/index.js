require("dotenv").config({
  path: "variables.env"
});

const createServer = require("./createServer");
const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  server => {
    console.log(`Server is running at port ${server.port}`);
  }
);

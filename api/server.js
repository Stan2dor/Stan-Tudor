const express = require("express");
const App = require("./App");

// const cors = require("cors");
const helmet = require("helmet");
// const morgan = require("morgan");
// const { logger } = require("./middleware/middleware");
// const usersRoutes = require("./users/usersRoutes");
const server = express();

server.use(helmet());
server.use(express.json());
// server.use(morgan());
// server.use(logger);
// server.use("/api/users", usersRoutes);
// server.use(cors);
server.use(App);

// global middlewares and the user's router
// --------------------------------------------
server.get("/", (req, res) => {
  res.send(App);
});
server.get("/api", (req, res) => {
  res.json({ message: "api is working" });
});
server.get("/users", (req, res) => {
  res.json({ message: "users is here" });
});
server.use("*", (req, res) => {
  res.send("<h1>Hello there</h1>");
});
server.use((err, req, res, next) => {
  res.status(500).json({ message: err.message, stack: err.stack });
});
server.use(function (req, res) {
  res.status(404).send("Aint nobody got time for that");
});

module.exports = server;

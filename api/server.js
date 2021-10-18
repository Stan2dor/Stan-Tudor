const express = require("express");
const db = require("../data/db-config");
// const App = require("../src/App");

const cors = require("cors");
const helmet = require("helmet");
// const morgan = require("morgan");
const postsRoutes = require("../posts/postsRouter");
const usersRoutes = require("../users/usersRoutes");
const server = express();

server.use(express.json());
server.use(helmet());
// server.use(morgan());
server.use(cors);


server.use("/api/posts", postsRoutes);
server.use("/api/users", usersRoutes);

// server.use(App);

// --------------------------------------------
server.get("/", (req, res) => {
  res.json({ message: "Homepage" });
});

server.get("/api", (req, res) => {
  res.json({ message: "api is working" });
});

server.get("/api/users", (req, res) => {
  db("users")
    .then((users) => {
      res.json({ message: "users is here" });
    })
    .catch((err) => {
      res.status(500).json({ err: "failed to get users" });
    });
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
});
server.use(function (req, res) {
  res.status(404).send(" 404 - page not found");
});

module.exports = server;

const express = require("express");
const { config } = require("./config");
const { logger } = require("./middlewares/logger");
const userRoutes = require("./routes/userRoutes");
const bodyParser = require("body-parser");
const connectDb = require("./database/connectDb");

const app = express();
connectDb();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = config.port;
const cors = require("cors");

app.use(
  cors({
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(logger);

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

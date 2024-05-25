const express = require("express");
const { config } = require("./config");
const { logger } = require("./middlewares/logger");
const health = require("./routes/healthRoutes");
const bodyParser = require("body-parser");
const connectDb = require("./database/connectDb")

const app = express();
connectDb();

// JSON veri analizi için bodyParser middleware'ini uygula
app.use(bodyParser.json());

// URL kodlu veri analizi için bodyParser middleware'ini uygula
app.use(bodyParser.urlencoded({ extended: true }));

//RESTFUL API
//GET POST PUT DELETE

const port = config.port;
const cors = require("cors");

app.use(
  cors({
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(logger);

app.use("/users", health);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


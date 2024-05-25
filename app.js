const express = require("express");
const { config } = require("./config");
const { logger } = require("./middlewares/logger");
const health = require("./routes/healthRoutes");

const app = express();

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

app.use("/",health );


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//client --->>>  sunucu ---->>> middlwares ---->> endpoint



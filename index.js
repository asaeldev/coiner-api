const express = require("express");
const cors = require("cors");
const appRouter = require("./routes/index");

const config = require("./config/config");
const {
  ornErrorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const app = express();

const allowedDomains =
  config.env === "production"
    ? ["https://asaeldev-coiner-ui.herokuapp.com/"]
    : ["http://localhost:3000"];

const corsSettings = {
  origin: (origin, callback) => {
    if (allowedDomains.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Domain not allowed", false));
    }
  },
};

app.use(express.json());
app.use(cors(corsSettings));

require("./utils/auth/index");

app.get("/", (req, res) => {
  res.send("Welcome to Coiner API");
});

appRouter(app);

app.use(ormErrorHandler);
app.use(boomErrorHandler);

app.listen(config.port, () => {
  console.log("App running on port: ", config.port);
});

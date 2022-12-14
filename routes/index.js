const express = require("express");
const router = express.Router();
const coinsRouter = require("./coins.routes");
const customersRoutes = require("./customers.routes");
const administratorsRoutes = require("./administrators.routes");
const alertsRouter = require("./alerts.routes");

const appRouter = (app) => {
  app.use("/api/v1", router);
  router.use("/customers", customersRoutes);
  router.use("/administrators", administratorsRoutes);
  router.use("/assets", coinsRouter);
  router.use("/alerts", alertsRouter);
};

module.exports = appRouter;

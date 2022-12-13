const express = require("express");
const router = express.Router();

const AlertsController = require("../controllers/alerts.controller");
const alertsController = new AlertsController();

router.get("/", async (req, res) => {
  const response = {
    success: true,
    data: [],
  };

  response.data = await alertsController.all();
  res.status(200).json(response);
});

router.post("/", async (req, res, next) => {
  const { assetId, desiredPrice, telegramId } = req.body;
  const response = {
    success: true,
    data: [],
  };

  try {
    response.data = await alertsController.create({
      assetId,
      desiredPrice,
      telegramId,
    });
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;

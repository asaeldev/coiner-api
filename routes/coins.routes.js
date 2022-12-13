const express = require("express");
const router = express.Router();
const passport = require("passport");

const { checkRoles } = require("../middlewares/auth.handler");
const CoinsController = require("../controllers/coins.controller");

const coinsController = new CoinsController();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkRoles("administrator", "customer"),
  async (req, res, next) => {
    let response = {
      success: true,
      data: [],
    };
    let statusCode = 200;

    try {
      response.data = await coinsController.all();
    } catch (error) {
      response.success = false;
      next(error);
    }

    res.status(statusCode).json(response);
  }
);

module.exports = router;

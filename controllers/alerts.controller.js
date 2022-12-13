const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class AlertsController {
  constructor() {}

  async all() {
    return await models.Alerts.findAll();
  }

  async findOne(id) {
    const alert = await models.Alerts.findOne({
      where: { id },
    });

    if (!alert) {
      throw new boom.notFound("Alert was not found.");
    }

    return alert;
  }

  async create(data) {
    try {
      const alert = await models.Alerts.create(data);
      return this.findOne(alert.id);
    } catch (error) {
      throw new boom.internal("Internal error occurred" + error);
    }
  }

  async delete(id) {
    const deletedRows = await models.Alerts.destroy({ where: { id } });
    return deletedRows > 0;
  }
}

module.exports = AlertsController;

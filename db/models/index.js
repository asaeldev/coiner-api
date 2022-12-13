const { Users, UsersSchema } = require("./users.model");
const { Alerts, AlertsSchema } = require("./alerts.model");

function setupModels(sequelize) {
  Users.init(UsersSchema, Users.config(sequelize));
  Alerts.init(AlertsSchema, Alerts.config(sequelize));

  Users.associate(sequelize.models);
  Alerts.associate(sequelize.models);

  Users.addHook("beforeCreate", "generatePassword", async (user, options) => {
    user.password = Users.createPassword(user.password);
  });
}

module.exports = setupModels;

const { Users, UsersSchema } = require("./users.model");

function setupModels(sequelize) {
  Users.init(UsersSchema, Users.config(sequelize));
  Users.associate(sequelize.models);

  Users.addHook("beforeCreate", "generatePassword", async (user, options) => {
    user.password = Users.createPassword(user.password);
  });
}

module.exports = setupModels;

const users = require('./users/users.service.js')
const registers = require('./registers/registers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(registers);
}

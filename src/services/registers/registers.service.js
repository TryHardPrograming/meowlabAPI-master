// Initializes the `registers` service on path `/registers`
const { Registers } = require('./registers.class');
const createModel = require('../../models/registers.model');
const hooks = require('./registers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    // paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/registers', new Registers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('registers');

  service.hooks(hooks);
};

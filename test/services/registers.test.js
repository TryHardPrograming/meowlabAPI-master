const assert = require('assert');
const app = require('../../src/app');

describe('\'registers\' service', () => {
  it('registered the service', () => {
    const service = app.service('registers');

    assert.ok(service, 'Registered the service');
  });
});

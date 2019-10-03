'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on ravencore-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('ravencore-lib').errors.extend(spec);


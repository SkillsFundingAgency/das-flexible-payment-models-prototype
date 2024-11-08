const express = require('express')

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/feature.js');

require('./routes/1/employer.js');
require('./routes/1/training-provider.js');

require('./routes/change-of-standard/routes.js');
require('./routes/change-of-status/routes.js');
require('./routes/functional-skills/routes.js');
require('./routes/additional-funding/routes.js');

require('./routes/v3/training-provider.js');

module.exports = router

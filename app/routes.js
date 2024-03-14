const express = require('express')

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/feature.js');

require('./routes/1/employer.js');
require('./routes/1/training-provider.js');

require('./routes/change-of-course/routes.js');
require('./routes/change-of-status/routes.js');

module.exports = router

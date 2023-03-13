const express = require('express')

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

require('./routes/1/employer.js');
require('./routes/1/training-provider.js');

module.exports = router

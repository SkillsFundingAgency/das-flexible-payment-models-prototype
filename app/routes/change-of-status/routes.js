const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Version 1
router.post('/change-of-status/training-provider/v1/edit-learner-status/action', function (req, res) {
    var stoptp = req.session.data['stoptp']

    if (stoptp == "yes") {
        res.redirect('../pause-date')
    }
    else if 
    (stoptp == "continuing") {
        res.redirect('../resume-date')
    }
    else if 
    (stoptp == "redundancy") {
        res.redirect('../stop-date-redundant')
    }
    else {
        res.redirect('../stop-date')
    }
})

// Version 2
router.post('/change-of-status/training-provider/v2/edit-learner-status/action', function (req, res) {
    var stoptp = req.session.data['stoptp']

    if (stoptp == "yes") {
        res.redirect('../pause-date')
    }
    else if 
    (stoptp == "continuing") {
        res.redirect('../resume-date')
    }
    else if 
    (stoptp == "redundancy") {
        res.redirect('../stop-date-redundant')
    }
    else {
        res.redirect('../stop-date')
    }
})

// Payment Status
router.post('/change-of-status/employer/payment-status/v1/break-freeze/action', function (req, res) {
    var freeze = req.session.data['freeze']

    if (freeze == "no") {
        res.redirect('../')
    }
    else {
        res.redirect('../freeze-confirmed')
    }
})
router.post('/change-of-status/employer/payment-status/v1/break-unfreeze/action', function (req, res) {
    var unfreeze = req.session.data['unfreeze']

    if (unfreeze == "no") {
        res.redirect('../')
    }
    else {
        res.redirect('../unfreeze-confirmed')
    }
})
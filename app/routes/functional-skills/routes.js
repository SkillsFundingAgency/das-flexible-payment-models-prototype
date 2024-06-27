const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/functional-skills/post-approval/v2/withdraw/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../index')
    }
    else {
        res.redirect('../reason--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v2/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal')
    }
    else {
        res.redirect('../stop-date')
    }
})

// Version 3

router.post('/functional-skills/post-approval/v3/withdraw/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../index')
    }
    else {
        res.redirect('../reason--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v3/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal')
    }
    else {
        res.redirect('../stop-date')
    }
})

// Version 4

router.post('/functional-skills/post-approval/v4/withdraw/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../index')
    }
    else {
        res.redirect('../reason--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v4/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal')
    }
    else {
        res.redirect('../stop-date')
    }
})

router.post('/functional-skills/post-approval/v4/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v4/funding-warning/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../')
    }
    else {
        res.redirect('../confirm--withdrawal-unfunded')
    }
})
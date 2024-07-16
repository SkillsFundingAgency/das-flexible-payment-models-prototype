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

// Version 3
router.post('/change-of-status/training-provider/v3/edit-learner-status/action', function (req, res) {
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

router.post('/change-of-status/training-provider/v3/waiting-to-start/edit-learner-status/action', function (req, res) {
    var stoptp = req.session.data['stoptp']
if 
    (stoptp == "continuing") {
        res.redirect('../resume-date-planned-start-date')
    }
    else {
        res.redirect('../stop-date')
    }
})



// Version 4
router.post('/change-of-status/training-provider/v4/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']

    if (learnerstatus == "break") {
        res.redirect('../pause-date')
    }
    else if (learnerstatus == "in-learning") {
        res.redirect('../resume-date')
    }
    else if (learnerstatus == "redundant") {
        res.redirect('../stop-date-redundant')
    }
    else if (learnerstatus == "withdrawn") {
        res.redirect('../reason--withdrawal')
    }
    else {
        res.redirect('../edit-learner-status')
    }
})

router.post('/change-of-status/training-provider/v4/waiting-to-start/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']
    if (learnerstatus == "waiting-to-start") {
        res.redirect('../apprentice-details--resume-confirmed')
    }
    else {
        res.redirect('../apprentice-details--withdrawal-confirmed')
    }
})
    
router.post('/change-of-status/training-provider/v4/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal')
    }
    else {
        res.redirect('../stop-date')
    }
})

// Payment Status v3
router.post('/change-of-status/employer/v3/break-freeze/action', function (req, res) {
    var freeze = req.session.data['freeze']

    if (freeze == "no") {
        res.redirect('../apprentice-details?employer-freeze=false')
    }
    else {
        res.redirect('../freeze-confirmed')
    }
})
router.post('/change-of-status/employer/v3/break-unfreeze/action', function (req, res) {
    var unfreeze = req.session.data['unfreeze']

    if (unfreeze == "no") {
        res.redirect('../apprentice-details?employer-freeze=true')
    }
    else {
        res.redirect('../unfreeze-confirmed')
    }
})

// Version 5
router.post('/change-of-status/training-provider/v5/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']

    if (learnerstatus == "break") {
        res.redirect('../pause-date')
    }
    else if (learnerstatus == "in-learning") {
        res.redirect('../resume-date')
    }
    else if (learnerstatus == "redundant") {
        res.redirect('../stop-date-redundant')
    }
    else if (learnerstatus == "withdrawn") {
        res.redirect('../withdrawal-warning')
    }
    else {
        res.redirect('../edit-learner-status')
    }
})

router.post('/change-of-status/training-provider/v5/waiting-to-start/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']
    if (learnerstatus == "waiting-to-start") {
        res.redirect('../resume-date-planned-start-date')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})
    
router.post('/change-of-status/training-provider/v5/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal-unfunded')
    }
    else {
        res.redirect('../stop-date')
    }
})

router.post('/change-of-status/training-provider/v5/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})

router.post('/change-of-status/training-provider/v5/funding-warning/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../apprentice-details')
    }
    else {
        res.redirect('../confirm--withdrawal-unfunded')
    }
})

// Version 6
router.post('/change-of-status/training-provider/v6/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']

    if (learnerstatus == "break") {
        res.redirect('../pause-date')
    }
    else if (learnerstatus == "in-learning") {
        res.redirect('../resume-date')
    }
    else if (learnerstatus == "redundant") {
        res.redirect('../stop-date-redundant')
    }
    else if (learnerstatus == "withdrawn") {
        res.redirect('../withdrawal-warning')
    }
    else {
        res.redirect('../edit-learner-status')
    }
})

router.post('/change-of-status/training-provider/v6/waiting-to-start/edit-learner-status/action', function (req, res) {
    var learnerstatus = req.session.data['learner-status']
    if (learnerstatus == "waiting-to-start") {
        res.redirect('../resume-date-planned-start-date')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})
    
router.post('/change-of-status/training-provider/v6/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal-unfunded')
    }
    else {
        res.redirect('../stop-date')
    }
})

router.post('/change-of-status/training-provider/v6/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})

router.post('/change-of-status/training-provider/v6/funding-warning/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../apprentice-details')
    }
    else {
        res.redirect('../confirm--withdrawal-unfunded')
    }
})

// Payment Status v4
router.post('/change-of-status/employer/v4/break-freeze/action', function (req, res) {
    var freeze = req.session.data['freeze']

    if (freeze == "no") {
        res.redirect('../apprentice-details?employer-freeze=false')
    }
    else {
        res.redirect('../freeze-confirmed')
    }
})
router.post('/change-of-status/employer/v4/break-unfreeze/action', function (req, res) {
    var unfreeze = req.session.data['unfreeze']

    if (unfreeze == "no") {
        res.redirect('../apprentice-details?employer-freeze=true')
    }
    else {
        res.redirect('../unfreeze-confirmed')
    }
})
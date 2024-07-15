const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('/functional-skills/manage-functional-skils/v1/confirm-functional-skill/action', function (req, res) {
    var IsCorrectFunctionalSkill = req.session.data['is-correct-functional-skill']

    if (IsCorrectFunctionalSkill == "false") {
        res.redirect('../select-functional-skill')
    }
    else {
        res.redirect('../functional-skills?new-skill=yes')
    }
})

router.post('/functional-skills/v3/recognise-prior-learning-english/action', function (req, res) {
    var RPL = req.session.data['rpl']

    if (RPL == "no") {
        res.redirect('../learning-aim-maths')
    }
    else {
        res.redirect('../recognise-prior-learning-english--add')
    }
})
router.post('/functional-skills/v3/recognise-prior-learning-maths/action', function (req, res) {
    var RPL = req.session.data['rpl']

    if (RPL == "no") {
        res.redirect('../check-your-answers')
    }
    else {
        res.redirect('../recognise-prior-learning-maths--add')
    }
})
router.post('/functional-skills/v4/confirm-delete/action', function (req, res) {
    var DeleteSkill = req.session.data['delete']

    if (DeleteSkill == "no") {
        res.redirect('../check-your-answers?added-another=true')
    }
    else {
        res.redirect('../check-your-answers?added-another=false')
    }
})

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

// Version 5

router.post('/functional-skills/post-approval/v5/withdraw/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../index')
    }
    else {
        res.redirect('../reason--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v5/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal')
    }
    else {
        res.redirect('../stop-date')
    }
})

router.post('/functional-skills/post-approval/v5/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})

router.post('/functional-skills/post-approval/v5/funding-warning/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

if (continuewithdrawal == "no") {
        res.redirect('../')
    }
    else {
        res.redirect('../confirm--withdrawal-unfunded')
    }
})
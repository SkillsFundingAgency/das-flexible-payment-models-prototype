const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Change of status
router.post('/training-provider/v3/change-of-status/edit-learner-status/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

    if (continuewithdrawal == "no") {
        res.redirect('../../details?learner-status=in-learning')
    }
    else {
        res.redirect('../reason--withdrawal?learner-status=withdrawn')
    }
})
router.post('/training-provider/v3/change-of-status/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal-unfunded')
    }
    else {
        res.redirect('../stop-date')
    }
})
router.post('/training-provider/v3/change-of-status/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})
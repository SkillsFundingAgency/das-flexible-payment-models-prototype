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
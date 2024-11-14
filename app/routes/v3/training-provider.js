const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Change of status
router.post('/training-provider/v3/change-of-status/edit-learner-status--withdrawal-only/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

    if (continuewithdrawal == "no") {
        res.redirect('../../details?learner-status=in-learning')
    }
    else {
        res.redirect('../learner-status--reason--withdrawal?learner-status=withdrawn')
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

router.post('/training-provider/v3/change-of-status/edit-learner-status/action', function (req, res) {
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
        res.redirect('../reason--withdrawal?learner-status=withdrawn')
    }
    else {
        res.redirect('../edit-learner-status')
    }
})

router.post('/training-provider/v3/change-of-start-date/view-changes/action', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=start-date')
    }
    else {
        res.redirect('../../details/banner/start-date-cancelled?change=none')
    }
})

router.post('/training-provider/v3/change-of-price/view-changes/action', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=training-price')
    }
    else {
        res.redirect('../../details/banner/price-cancelled?change=none')
    }
})
router.post('/training-provider/v3/change-of-price/review-changes/action', function (req, res) {
    var approve = req.session.data['approve']

    if (approve == "no") {
        res.redirect('../../details/banner/price-rejected?change=none')
    }
    else {
        res.redirect('../set-costs')
    }
})
router.post('/training-provider/v3/change-of-price/set-costs/action', function (req, res) {
    var trainingprice = parseFloat(req.session.data['training-price']) || 0;
    var endpointprice = parseFloat(req.session.data['end-point-price']) || 0;
    var total = trainingprice + endpointprice;

    if (total === 9000) {
        res.redirect('../../details/banner/price-approved?change=none');
    } else {
        res.redirect('../set-costs?error=total-invalid');
    }
})
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const version = 'v3'

router.post('/training-provider/' + version + '/approvals/add/action/entry-method', function (req, res) {
    var addApprenticeDetails = req.session.data['add-apprentice-details']

    if (addApprenticeDetails == "csv-file") {
        res.redirect('/training-provider/' + version + '/approvals/add/file-upload')
    }
    else if (addApprenticeDetails == "manually") {
        res.redirect('/training-provider/' + version + '/approvals/add/select-journey')
    }
})

router.post('/training-provider/' + version + '/approvals/add/action/select-journey', function (req, res) {
    var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

    if (addApprenticeDetails2 == "existing-cohort") {
        res.redirect('/training-provider/' + version + '/approvals/choose-cohort')
    }
    else if (addApprenticeDetails2 == "new-cohort") {
        res.redirect('/training-provider/' + version + '/approvals/add/select-employer')
    }
})

router.post('/training-provider/' + version + '/approvals/add/action/confirm-employer', function (req, res) {
    var confirmEmployer = req.session.data['confirm-employer']

    if (confirmEmployer == "yes") {
        res.redirect('/training-provider/' + version + '/approvals/add/select-payments-pilot')
    }
    else {
        res.redirect('/training-provider/' + version + '/approvals/add/select-employer')
    }
})

router.post('/training-provider/' + version + '/approvals/action/recognise-prior-learning', function (req, res) {
    var priorLearning = req.session.data['prior-learning']
    var pilotProgram = req.session.data['pilot-program']
    var deliveryMethod = req.session.data['delivery-method']

    if (priorLearning == "yes") {
        res.redirect('/training-provider/' + version + '/approvals/recognise-prior-learning-details')
    }
    else {
        res.redirect('/training-provider/' + version + '/approvals/add/select-option')
    }
})
router.post('/training-provider/' + version + '/approvals/action/recognise-prior-learning-details', function (req, res) {
    var pilotProgram = req.session.data['pilot-program']
    var deliveryMethod = req.session.data['delivery-method']

    if (pilotProgram == "No") {
        res.redirect('/training-provider/' + version + '/approvals/approve-details-non-pilot')
    }
    else {
        if (deliveryMethod == "portable-flexi-job") {
            res.redirect('/training-provider/' + version + '/approvals/approve-details-pilot-pjf')
        }
        else {
            res.redirect('/training-provider/' + version + '/approvals/approve-details-pilot-non-pjf')
        }
    }
})

router.post('/training-provider/' + version + '/approvals/add/action/personal-details', function (req, res) {
    var pilotProgram = req.session.data['pilot-program']
    var deliveryMethod = req.session.data['delivery-method']

    if (pilotProgram == "No") {
        res.redirect('/training-provider/' + version + '/approvals/add/training-details-non-pilot')
    }
    else {
        if (deliveryMethod == "portable-flexi-job") {
            res.redirect('/training-provider/' + version + '/approvals/add/training-details-pilot-pfj')
        }
        else {
            res.redirect('/training-provider/' + version + '/approvals/add/training-details-pilot-non-pfj')
        }
    }
})

router.post('/training-provider/' + version + '/approvals/action/portable-flexi-job', function (req, res) {
    var priorLearning = req.session.data['prior-learning']
    var pilotProgram = req.session.data['pilot-program']
    var deliveryMethod = req.session.data['delivery-method']

    
    if (pilotProgram == "No") {
        res.redirect('/training-provider/' + version + '/approvals/approve-details-non-pilot')
        }
    else {
        if (deliveryMethod == "portable-flexi-job") {
            res.redirect('/training-provider/' + version + '/approvals/approve-details-pilot-pjf')
        }
        else {
            res.redirect('/training-provider/' + version + '/approvals/approve-details-pilot-non-pjf')
        }
    }
})

// Change of status
router.post('/training-provider/' + version + '/change-of-status/edit-learner-status--withdrawal-only/action', function (req, res) {
    var continuewithdrawal = req.session.data['continue-withdrawal']

    if (continuewithdrawal == "no") {
        res.redirect('../../details?learner-status=in-learning')
    }
    else {
        res.redirect('../learner-status--reason--withdrawal?learner-status=withdrawn')
    }
})
router.post('/training-provider/' + version + '/change-of-status/reason--withdrawal/action', function (req, res) {
    var reasonforwithdrawal = req.session.data['reason-for-withdrawal']
if 
    (reasonforwithdrawal == "Apprenticeship never started") {
        res.redirect('../confirm--withdrawal-unfunded')
    }
    else {
        res.redirect('../stop-date')
    }
})
router.post('/training-provider/' + version + '/change-of-status/stop-date/action', function (req, res) {
    var year = req.session.data['withdrawal-year']

if (year >= "2024") {
        res.redirect('../funding-warning')
    }
    else {
        res.redirect('../confirm--withdrawal')
    }
})

router.post('/training-provider/' + version + '/change-of-status/edit-learner-status/action', function (req, res) {
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

router.post('/training-provider/' + version + '/change-of-start-date/view-changes/action', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=start-date')
    }
    else {
        res.redirect('../../details/banner/start-date-cancelled?change=none')
    }
})

router.post('/training-provider/' + version + '/change-of-price/view-changes/action', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=training-price')
    }
    else {
        res.redirect('../../details/banner/price-cancelled?change=none')
    }
})
router.post('/training-provider/' + version + '/change-of-price/review-changes/action', function (req, res) {
    var approve = req.session.data['approve']

    if (approve == "no") {
        res.redirect('../../details/banner/price-rejected?change=none')
    }
    else {
        res.redirect('../set-costs')
    }
})
router.post('/training-provider/' + version + '/change-of-price/set-costs/action', function (req, res) {
    var trainingprice = parseFloat(req.session.data['training-price']) || 0;
    var endpointprice = parseFloat(req.session.data['end-point-price']) || 0;
    var total = trainingprice + endpointprice;

    if (total === 9000) {
        res.redirect('../../details/banner/price-approved?change=none');
    } else {
        res.redirect('../set-costs?error=total-invalid');
    }
})


// Change of standard
router.post('/training-provider/' + version + '/change-of-standard/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "no") {
        res.redirect('../recognise-prior-learning')
    }
    else {
        res.redirect('../update-price')
    }
})
router.post('/training-provider/' + version + '/change-of-standard/recognise-prior-learning/action', function (req, res) {
    var rpl = req.session.data['rpl']

    if (rpl == "no") {
        res.redirect('../reason-for-change')
    }
    else {
        res.redirect('../recognise-prior-learning-current')
    }
})
router.post('/training-provider/' + version + '/change-of-standard/recognise-prior-learning-current/action', function (req, res) {
    var priorLearning = req.session.data['prior-learning']

    if (priorLearning == "no") {
        res.redirect('../reason-for-change')
    }
    else {
        res.redirect('../recognise-prior-learning-details')
    }
})
router.post('/training-provider/' + version + '/change-of-standard/view-changes/action', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=standard')
    }
    else {
        res.redirect('../../details/banner/standard-cancelled?change=none')
    }
})

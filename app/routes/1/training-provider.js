const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// CHANGE VERSION TO THE VERSION
const version = 'v2'

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
    else if (priorLearning == "no") {
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

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Employer
router.post('/change-of-standard/training-provider/v1/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "yes") {
        res.redirect('/change-of-standard/training-provider/v1/recognise-prior-learning')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v1/update-price')
    }
})
router.post('/change-of-standard/training-provider/v1/recognise-prior-learning/action', function (req, res) {
    var priorLearning = req.session.data['prior-learning']

    if (priorLearning == "yes") {
        res.redirect('/change-of-standard/training-provider/v1/reason-for-change')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v1/recognise-prior-learning-details')
    }
})

// Employer v2
router.post('/change-of-standard/training-provider/v2/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "no") {
        res.redirect('/change-of-standard/training-provider/v2/recognise-prior-learning')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v2/update-price')
    }
})
router.post('/change-of-standard/training-provider/v2/recognise-prior-learning/action', function (req, res) {
    var priorLearning = req.session.data['prior-learning']

    if (priorLearning == "no") {
        res.redirect('/change-of-standard/training-provider/v2/reason-for-change')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v2/recognise-prior-learning-details')
    }
})

// Employer v3
router.post('/change-of-standard/training-provider/v3/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "no") {
        res.redirect('/change-of-standard/training-provider/v3/recognise-prior-learning')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v3/update-price')
    }
})
router.post('/change-of-standard/training-provider/v3/recognise-prior-learning/action', function (req, res) {
    var rpl = req.session.data['rpl']

    if (rpl == "no") {
        res.redirect('/change-of-standard/training-provider/v3/reason-for-change')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v3/recognise-prior-learning-current')
    }
})
router.post('/change-of-standard/training-provider/v3/recognise-prior-learning-current/action', function (req, res) {
    var priorLearning = req.session.data['prior-learning']

    if (priorLearning == "no") {
        res.redirect('/change-of-standard/training-provider/v3/reason-for-change')
    }
    else {
        res.redirect('/change-of-standard/training-provider/v3/recognise-prior-learning-details')
    }
})


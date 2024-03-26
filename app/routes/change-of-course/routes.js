const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Employer
router.post('/change-of-course/training-provider/v1/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "yes") {
        res.redirect('/change-of-course/training-provider/v1/recognise-prior-learning')
    }
    else {
        res.redirect('/change-of-course/training-provider/v1/update-price')
    }
})
router.post('/change-of-course/training-provider/v1/recognise-prior-learning/action', function (req, res) {
    var priorLearning = req.session.data['prior-learning']

    if (priorLearning == "yes") {
        res.redirect('/change-of-course/training-provider/v1/reason-for-change')
    }
    else {
        res.redirect('/change-of-course/training-provider/v1/recognise-prior-learning-details')
    }
})

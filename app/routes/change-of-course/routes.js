const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Employer
router.post('/change-of-course/training-provider/price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "no") {
        res.redirect('/change-of-course/training-provider/confirm-change-of-course')
    }
    else {
        res.redirect('/change-of-course//training-provider/update-price')
    }
})


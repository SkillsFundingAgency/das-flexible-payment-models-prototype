const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Employer
router.post('/change-of-course/04-price-change/action', function (req, res) {
    var useProvider = req.session.data['change-price']

    if (useProvider == "no") {
        res.redirect('/change-of-course/05-confirm-change-of-course')
    }
    else {
        res.redirect('/change-of-course/04-price-change-2')
    }
})


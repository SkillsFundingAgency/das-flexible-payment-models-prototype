const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// V1
router.post('/additional-funding/pre-approval/v1/ehc-plan/action', function (req, res) {
    var ehcplan = req.session.data['ehc-plan']

    if (ehcplan == "yes") {
        res.redirect('/additional-funding/pre-approval/v1/share-ehc-plan')
    }
    else {
        res.redirect('../recognise-prior-learning')
    }
})
router.post('/additional-funding/pre-approval/v1/care-leaver/action', function (req, res) {
    var careleaver = req.session.data['care-leaver']

    if (careleaver == "yes") {
        res.redirect('/additional-funding/pre-approval/v1/share-care-leaver')
    }
    else {
        res.redirect('../ehc-plan')
    }
})
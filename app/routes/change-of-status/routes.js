const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


router.post('/change-of-status/training-provider/v1/edit-learner-status/action', function (req, res) {
    var stoptp = req.session.data['stoptp']

    if (stoptp == "yes") {
        res.redirect('../pause-date')
    }
    else if 
    (stoptp == "continuing") {
        res.redirect('../resume-date')
    }
    else if 
    (stoptp == "redundancy") {
        res.redirect('../stop-date-redundant')
    }
    else {
        res.redirect('../stop-date')
    }
})
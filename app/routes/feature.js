//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/feature/COP/current/action/details-of-mismatch', function (req, res) {
    var SubmitStatusViewModel = req.session.data['SubmitStatusViewModel']

    if (SubmitStatusViewModel == "Confirm") {
        res.redirect('/feature/COP/current/change-apprentice-details')
    }
    else {
        res.redirect('/feature/COP/current/apprentice-details')
    }
})
router.post('/feature/COP/v1/action/details-of-mismatch', function (req, res) {
    var SubmitStatusViewModel = req.session.data['SubmitStatusViewModel']

    if (SubmitStatusViewModel == "Confirm") {
        res.redirect('/feature/COP/v1/change-apprentice-details')
    }
    else {
        res.redirect('/feature/COP/v1/apprentice-details')
    }
})
router.post('/feature/COP/v3/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v3/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v3/training-provider/apprentice-details-request')
    }
})
router.post('/feature/COP/v4/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v3/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v3/training-provider/apprentice-details-request')
    }
})
router.post('/feature/COP/v4/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v4/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v4/employer/apprentice-details-request')
    }
})

//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// CHANGE VERSION TO THE VERSION
const version = 'v1'

// Employer
router.post('/employer/' + version + '/apprentice/add/action/confirm-provider-details', function (req, res) {
    var useProvider = req.session.data['use-provider']

    if (useProvider == "No") {
        res.redirect('/employer/' + version + '/apprentice/add/provider-details')
    }
    else {
        res.redirect('/employer/' + version + '/apprentice/add/start-adding-apprentices')
    }
})

router.post('/employer/' + version + '/apprentice/add/action/start-adding-apprentices', function (req, res) {
    var whoIsAddingApprentices = req.session.data['WhoIsAddingApprentices']

    if (whoIsAddingApprentices == "Provider") {
        res.redirect('/employer/' + version + '/apprentice/add/message-for-training-provider')
    }
    else {
        res.redirect('/employer/' + version + '/apprentice/add/select-standard')
    }
})

router.post('/employer/' + version + '/apprentice/add/action/approve-details', function (req, res) {
    var selection = req.session.data['selection']

    if (selection == "Send") {
        res.redirect('/employer/' + version + '/apprentice/add/notify-training-provider')
    }
    else {
        res.redirect('/employer/' + version + '/apprentice/add/approved')
    }
})

router.post('/feature/COP-current/action/details-of-mismatch', function (req, res) {
    var SubmitStatusViewModel = req.session.data['SubmitStatusViewModel']

    if (SubmitStatusViewModel == "Confirm") {
        res.redirect('/feature/COP-current/change-apprentice-details')
    }
    else {
        res.redirect('/feature/COP-current/apprentice-details')
    }
})

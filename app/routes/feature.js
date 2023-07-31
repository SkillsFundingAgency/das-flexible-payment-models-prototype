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
        res.redirect('/feature/COP/v4/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v4/training-provider/apprentice-details-request')
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
router.post('/feature/COP/v5/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v5/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v5/training-provider/apprentice-details-request')
    }
})

router.post('/feature/COP/v5/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v5/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v5/employer/apprentice-details-request')
    }
})


router.post('/feature/COP/v7/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v7/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v7/training-provider/apprentice-details-request')
    }
})

router.post('/feature/COP/v7/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COP/v7/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COP/v7/employer/apprentice-details-request')
    }
})

router.post('/feature/COSD/v1/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COSD/v1/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COSD/v1/training-provider/apprentice-details-request')
    }
})

router.post('/feature/COSD/v1/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COST/v1/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COST/v1/employer/apprentice-details-request')
    }
})



router.post('/feature/COSD/v1/training-provider/action/view-start-date-change', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COSD/v1/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COSD/v1/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/COSD/v1/employer/action/view-start-date-change', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/COST/v1/employer/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/COST/v1/employer/change-start-date-request-apprentice-details')
    }
})


router.post('/feature/COSD/v1/training-provider/change-start-date', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/COSD/v1/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/COSD/v1/training-provider/reason-for-change-start-date')
    }
})

router.post('/feature/COSD/v1/training-provider/change-start-date-error', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/COSD/v1/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/COSD/v1/training-provider/reason-for-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/reason-for-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-error', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/reason-for-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/change-start-date', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/reason-for-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/change-start-date-error', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2016") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/reason-for-change-start-date')
    }
})



router.post('/feature/Change-of-circs/cop-cosd/training-provider/action/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/action/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/apprentice-details-request')
    }
})



/////////Change of price withdrawal //////////


router.post('/feature/Change-of-circs/cop-cosd/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/apprentice-details-request')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/apprentice-details-request')
    }
})



/////////Change of start date withdrawal //////////


router.post('/feature/Change-of-circs/cop-cosd/training-provider/action/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/action/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/apprentice-details-request')
    }
})

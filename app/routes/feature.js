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

///////// COP legacy - withdrawal //////////


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


///////// Change of circs //////////
///////// COP journey- change of start date //////////

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

/////////COP journey - change of start date withdrawal //////////

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


///////// Change of circs - COD //////////
///////// COD journey- change of start date //////////

router.post('/feature/Change-of-circs/cod/training-provider/change-start-date', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2022") {
        res.redirect('/feature/Change-of-circs/cod/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/training-provider/confirm-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cod/training-provider/change-start-date-error', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2022") {
        res.redirect('/feature/Change-of-circs/cod/training-provider/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/training-provider/confirm-change-start-date')
    }
})


router.post('/feature/Change-of-circs/cod/employer/change-start-date', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2022") {
        res.redirect('/feature/Change-of-circs/cod/employer/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/employer/confirm-change-start-date')
    }
})

router.post('/feature/Change-of-circs/cod/employer/change-start-date-error', function (req, res) {
    var EffectiveFromYear = req.session.data['EffectiveFromYear']

    if (EffectiveFromYear <= "2022") {
        res.redirect('/feature/Change-of-circs/cod/employer/change-start-date-error')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/employer/confirm-change-start-date')
    }
})

/////////Change of startdate withdrawal //////////

router.post('/feature/Change-of-circs/cod/training-provider/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cod/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/Change-of-circs/cod/employer/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cod/employer//change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cod/employer/change-start-date-request-apprentice-details')
    }
})


router.post('/feature/Change-of-circs/cosd/training-provider/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cosd/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cosd/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/Change-of-circs/cosd/employer/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cosd/employer//change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cosd/employer/change-start-date-request-apprentice-details')
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


router.post('/feature/Change-of-circs/cop/training-provider/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop/training-provider/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop/training-provider/apprentice-details-request')
    }
})

router.post('/feature/Change-of-circs/cop/employer/action/view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop/employer/apprentice-details-request')
    }
})



router.post('/payemnts/c-05-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw-2']

    if (withdraw-2 == "yes") {
        res.redirect('/payments/c-06-withdrawal-confirmation')
    }
    else {
        res.redirect('/payments/c-07-apprentice-details-request')
    }
})



/////////Change of start date withdrawal //////////


router.post('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-view-changes', function (req, res) {
    var withdraw2 = req.session.data['withdraw2']

    if (withdraw2 == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/training-provider/change-start-date-request-apprentice-details')
    }
})

router.post('/feature/Change-of-circs/cop-cosd/employer/change-start-date-view-changes', function (req, res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "yes") {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/withdrawal-confirmation')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop-cosd/employer/apprentice-details-request')
    }
})


/////////COP error message - over 100 //////////


router.post('/feature/Change-of-circs/cop/training-provider/review', function (req, res) {
    var review = req.session.data['apprenticeship-training-price']

    if (apprenticeship-training-price >= "100001") {
        res.redirect('/feature/Change-of-circs/cop/training-provider/update-price-error-2')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop/training-provider/confirm-update')
    }
})

router.post('/feature/Change-of-circs/cop/employer/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/cop/employer/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/cop/employer/rejected')
    }
})


/////////Review COP / accept or reject COP //////////







router.post('/feature/Change-of-circs/review-cop/training-provider/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cop/training-provider/set-costs')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cop/training-provider/rejected')
    }
})


router.post('/payments/c-02-review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/payments/c-03-set-costs')
    }
    else {
        res.redirect('/payments/c-03-rejected')
    }
})



router.post('/feature/Change-of-circs/review-cop/employer/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cop/employer/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cop/employer/rejected')
    }
})

/////////Review COD / accept or reject COD //////////


router.post('/feature/Change-of-circs/review-cod/training-provider/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cod/training-provider/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cod/training-provider/rejected')
    }
})

router.post('/feature/Change-of-circs/review-cod/employer/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cod/employer/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cod/employer/rejected')
    }
})


router.post('/feature/Change-of-circs/review-cosd/training-provider/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cosd/training-provider/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cosd/training-provider/rejected')
    }
})

router.post('/feature/Change-of-circs/review-cosd/employer/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('/feature/Change-of-circs/review-cosd/employer/approved')
    }
    else {
        res.redirect('/feature/Change-of-circs/review-cosd/employer/rejected')
    }
})


router.post('/payments/break', function (req, res) {
    var stop = req.session.data['stop']

    if (stop == "yes") {
        res.redirect('-pause-date')
    }
    else {
        res.redirect('-stop-date')
    }
})



router.post('/payments/break-freeze', function (req, res) {
    var freeze = req.session.data['freeze']

    if (freeze == "yes") {
        res.redirect('-freeze-date')
    }
    else {
        res.redirect('b-01-apprentice-details')
    }
})

router.post('/payments/break-tp', function (req, res) {
    var stoptp = req.session.data['stoptp']

    if (stoptp == "yes") {
        res.redirect('-pause-date-tp')
    }

    else if 
    (stoptp == "continuing") {
        res.redirect('-resume-date-tp')
    }
    else {
        res.redirect('-stop-date-tp')
    }
})


router.post('/payments/break-e', function (req, res) {
    var stope = req.session.data['stope']

    if (stope == "yes") {
        res.redirect('-pause-date-e')
    }

    else if 
    (stope == "continuing") {
        res.redirect('-resume-date-e')
    }
    else {
        res.redirect('-stop-date-e')
    }
})



router.post('/payments/review', function (req, res) {
    var review = req.session.data['review']

    if (review == "yes") {
        res.redirect('approved')
    }
    else {
        res.redirect('rejected')
    }
})






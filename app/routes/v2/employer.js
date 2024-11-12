const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Change of status
router.post('/employer/v2/provider-payments/withhold/action', function (req, res) {
    var freeze = req.session.data['withhold']

    if (freeze == "no") {
        res.redirect('../../details?employer-freeze=false')
    }
    else {
        res.redirect('../../details/banner/payments--withheld-confirmed')
    }
})

router.post('/employer/v2/provider-payments/active/action', function (req,  res) {
    var activate = req.session.data['activate']

    if (activate == "no") {
        res.redirect('../../details?employer-withheld=true')
    }
    else {
        res.redirect('../../details/banner/payments--active-confirmed?employer-withheld=false')
    }
})
router.post('/employer/v2/change-of-price/view-changes/action', function (req,  res) {
    var withdraw = req.session.data['withdraw']

    if (withdraw == "no") {
        res.redirect('../../details?change=none')
    }
    else {
        res.redirect('../../details/banner/price-cancelled?change=none')
    }
})
router.post('/employer/v2/change-of-price/review-changes/action', function (req,  res) {
    var approve = req.session.data['approve']

    if (approve == "no") {
        res.redirect('../../details/banner/price-rejected?change=none')
    }
    else {
        res.redirect('../../details/banner/price-approved?change=none')
    }
})
router.post('/employer/v2/change-of-start-date/review-changes/action', function (req,  res) {
    var approve = req.session.data['approve']

    if (approve == "no") {
        res.redirect('../../details/banner/start-date-rejected?change=none')
    }
    else {
        res.redirect('../../details/banner/start-date-approved?change=none')
    }
})
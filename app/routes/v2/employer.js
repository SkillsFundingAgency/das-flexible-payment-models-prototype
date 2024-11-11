const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Change of status
router.post('/employer/v2/provider-payments/withhold/action', function (req, res) {
    var freeze = req.session.data['withhold']

    if (freeze == "no") {
        res.redirect('../../details?employer-freeze=false')
    }
    else {
        res.redirect('../../details/banner/withheld-confirmed')
    }
})

router.post('/employer/v2/provider-payments/active/action', function (req,  res) {
    var activate = req.session.data['activate']

    if (activate == "no") {
        res.redirect('../../details?employer-withheld=true')
    }
    else {
        res.redirect('../../details/banner/active-confirmed?employer-withheld=false')
    }
})
//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here




router.post('/training-provider/approvals/add/action/entry-method', function (req, res) {
  var addApprenticeDetails = req.session.data['add-apprentice-details']

  if (addApprenticeDetails == "csv-file"){
    res.redirect('/training-provider/approvals/add/file-upload')
  }
  else if (addApprenticeDetails == "manually") {
    res.redirect('/training-provider/approvals/add/select-journey')
  }
})

router.post('/training-provider/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort"){
    res.redirect('/training-provider/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/training-provider/approvals/add/select-employer')
  }
})

router.post('/training-provider/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes"){
    res.redirect('/training-provider/approvals/add/select-payments-pilot')
  }
  else {
    res.redirect('/training-provider/approvals/add/select-employer')
  }
})

router.post('/training-provider/approvals/action/recognise-prior-learning', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes"){
    res.redirect('/training-provider/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no"){
    if (pilotProgram == "No"){
      res.redirect('/training-provider/approvals/approve-details-non-pilot')
    }
    else {
      if (deliveryMethod == "portable-flexi-job"){
        res.redirect('/training-provider/approvals/approve-details-pilot-pjf')
      }
      else{
        res.redirect('/training-provider/approvals/approve-details-pilot-non-pjf')
      }
    }
  }
})
router.post('/training-provider/approvals/action/recognise-prior-learning-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No"){
    res.redirect('/training-provider/approvals/approve-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job"){
      res.redirect('/training-provider/approvals/approve-details-pilot-pjf')
    }
    else{
      res.redirect('/training-provider/approvals/approve-details-pilot-non-pjf')
    }
  }
})

router.post('/training-provider/approvals/add/action/personal-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No"){
    res.redirect('/training-provider/approvals/add/training-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job"){
      res.redirect('/training-provider/approvals/add/training-details-pilot-pfj')
    }
    else{
      res.redirect('/training-provider/approvals/add/training-details-pilot-non-pfj')
    }
  }
})

// Employer
router.post('/employer/apprentice/add/action/confirm-provider-details', function (req, res) {
  var useProvider = req.session.data['use-provider']

  if (useProvider == "No"){
    res.redirect('/employer/apprentice/add/provider-details')
  }
  else {
    res.redirect('/employer/apprentice/add/start-adding-apprentices')
  }
})

router.post('/employer/apprentice/add/action/start-adding-apprentices', function (req, res) {
  var whoIsAddingApprentices = req.session.data['WhoIsAddingApprentices']

  if (whoIsAddingApprentices == "Provider"){
    res.redirect('/employer/apprentice/add/message-for-training-provider')
  }
  else {
    res.redirect('/employer/apprentice/add/select-standard')
  }
})

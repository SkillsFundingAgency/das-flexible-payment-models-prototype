const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router

router.post('/approvals/add/action/entry-method', function (req, res) {
  var addApprenticeDetails = req.session.data['add-apprentice-details']

  if (addApprenticeDetails == "csv-file"){
    res.redirect('/approvals/add/file-upload')
  }
  else if (addApprenticeDetails == "manually") {
    res.redirect('/approvals/add/select-journey')
  }
})

router.post('/approvals/add/action/select-journey', function (req, res) {
  var addApprenticeDetails2 = req.session.data['add-apprentice-details-2']

  if (addApprenticeDetails2 == "existing-cohort"){
    res.redirect('/approvals/choose-cohort')
  }
  else if (addApprenticeDetails2 == "new-cohort") {
    res.redirect('/approvals/add/select-employer')
  }
})

router.post('/approvals/add/action/confirm-employer', function (req, res) {
  var confirmEmployer = req.session.data['confirm-employer']

  if (confirmEmployer == "yes"){
    res.redirect('/approvals/add/select-course')
  }
  else {
    res.redirect('/approvals/add/select-employer')
  }
})

router.post('/approvals/action/recognise-prior-learning', function (req, res) {
  var priorLearning = req.session.data['prior-learning']
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (priorLearning == "yes"){
    res.redirect('/approvals/recognise-prior-learning-details')
  }
  else if (priorLearning == "no"){
    if (pilotProgram == "No"){
      res.redirect('/approvals/approve-details-non-pilot')
    }
    else {
      if (deliveryMethod == "portable-flexi-job"){
        res.redirect('/approvals/approve-details-pilot-pjf')
      }
      else{
        res.redirect('/approvals/approve-details-pilot-non-pjf')
      }
    }
  }
})
router.post('/approvals/action/recognise-prior-learning-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No"){
    res.redirect('/approvals/approve-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job"){
      res.redirect('/approvals/approve-details-pilot-pjf')
    }
    else{
      res.redirect('/approvals/approve-details-pilot-non-pjf')
    }
  }
})

router.post('/approvals/add/action/personal-details', function (req, res) {
  var pilotProgram = req.session.data['pilot-program']
  var deliveryMethod = req.session.data['delivery-method']

  if (pilotProgram == "No"){
    res.redirect('/approvals/add/training-details-non-pilot')
  }
  else {
    if (deliveryMethod == "portable-flexi-job"){
      res.redirect('/approvals/add/training-details-pilot-pfj')
    }
    else{
      res.redirect('/approvals/add/training-details-pilot-non-pfj')
    }
  }
})

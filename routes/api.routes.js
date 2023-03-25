const router = require("express").Router();
const axios = require('axios')

router.get("/phones", (req, res) => {
  const phoneData = require('../data/phones.json')
  res.json({data:phoneData})
});


router.get("/phones/:phoneId", (req, res) => {
    const {phoneId} = req.params
  const phoneData = require('../data/phones.json')
 let filteredPhone =  phoneData[phoneId]
  res.json({data:filteredPhone})
});


module.exports = router;

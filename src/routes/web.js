const express = require('express');
const { getHomepage, getABC, getHoiDanIT } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/checkabc', getABC)
router.get('/hoidanit', getHoiDanIT)

module.exports = router;
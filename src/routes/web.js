const express = require('express');
const { getHomepage, getABC, getHoiDanIT, postCreateUser } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/checkabc', getABC)
router.get('/hoidanit', getHoiDanIT)
router.post('/create-user', postCreateUser)

module.exports = router;
const express = require('express');
const { getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage, getUpdatePage } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage)
router.get('/checkabc', getABC)
router.get('/hoidanit', getHoiDanIT)
router.post('/create-user', postCreateUser)
router.get('/create', getCreatePage)
router.get('/update', getUpdatePage)

module.exports = router;
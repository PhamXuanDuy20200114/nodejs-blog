const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('homepage.ejs')
}
const getABC = (req, res) => {
    res.send('Check ABC')
}
const getHoiDanIT = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}
module.exports = {
    getHomepage, getABC, getHoiDanIT
}
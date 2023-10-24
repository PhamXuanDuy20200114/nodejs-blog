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
const postCreateUser = (req, res) => {
    console.log(">>> res body: ", req.body)
    res.send('create a new user')
}
module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser
}
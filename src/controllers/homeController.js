const getHomepage = (req, res) => {
    res.send('Hello world')
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
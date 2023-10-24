const connection = require('../config/database')

let user = []

const getHomepage = (req, res) => {
    connection.query(
        'SELECT * FROM Users u',
        function (err, results, fields) {
            user = results;
            console.log(">>result: ", results); // results contains rows returned by server

            console.log(">>>check users: ", user)
            res.send(JSON.stringify(user))
        }
    );
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
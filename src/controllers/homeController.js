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
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // console.log(">>> email: ", email, ">>> name: ", name, ">>>city:", city)

    connection.query(
        `INSERT INTO 
        Users (email, name, city) 
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results)

            res.send('Create user success')
        }
    );
}
module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser
}
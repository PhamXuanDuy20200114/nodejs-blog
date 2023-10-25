const connection = require('../config/database')
const { getAllUsers } = require('../services/CRUDService')

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('homepage.ejs', { listUsers: results })
}
const getABC = (req, res) => {
    res.send('Check ABC')
}
const getHoiDanIT = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}
const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // console.log(">>> email: ", email, ">>> name: ", name, ">>>city:", city)

    // connection.query(
    //     `INSERT INTO 
    //     Users (email, name, city) 
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results)

    //         res.send('Create user success')
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, [email, name, city])
    console.log(">>result: ", results);

    res.send('Create user success')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs')
}
module.exports = {
    getHomepage, getABC, getHoiDanIT, postCreateUser, getCreatePage
}
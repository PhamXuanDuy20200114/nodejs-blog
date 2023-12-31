const connection = require('../config/database')
const { getAllUsers, getUserByID, updateByID, deleteUserByID } = require('../services/CRUDService')

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

    res.redirect('/')
}
const getCreatePage = (req, res) => {
    res.render('create.ejs', {})
}
const getUpdatePage = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserByID(userID);
    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userID = req.body.userID;

    await updateByID(email, name, city, userID);
    //res.send("Update success")
    res.redirect('/'); //render lai homepage
}
const postDeleteUser = async (req, res) => {
    const userID = req.params.id;
    let user = await getUserByID(userID);
    res.render('delete.ejs', { userDelete: user }); //render lai homepage
}

const postHandleRemoveUser = async (req, res) => {
    let userID = req.body.userID;
    await deleteUserByID(userID);
    res.redirect('/')
}

module.exports = {
    getHomepage, getABC, getHoiDanIT,
    postCreateUser, getCreatePage,
    getUpdatePage, postUpdateUser,
    postDeleteUser, postHandleRemoveUser
}
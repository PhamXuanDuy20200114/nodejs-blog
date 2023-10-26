const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM Users u');
    return results;
}

const updateByID = async (email, name, city, userID) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name = ?, city = ? 
        WHERE id = ?;
        `, [email, name, city, userID])
    return results;
}


module.exports = {
    getAllUsers,
    updateByID
};
require('dotenv').config();
const express = require('express'); //common js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const mysql = require('mysql2');

const app = express() //app express
const port = process.env.PORT || 8888 // port => hardcode 
//Nếu k có process.env.PORT thì dùng cổng 8888

//config template engine va static file
configViewEngine(app);

//Khai bao route
app.use('/test', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307, //default: 3306
    user: 'root',//default: empty
    password: '123456',
    database: 'hoidanit'
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>result: ", results); // results contains rows returned by server
        console.log(">>fields: ", fields); // fields contains extra meta data about results, if available
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
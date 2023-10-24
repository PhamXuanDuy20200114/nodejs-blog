require('dotenv').config();
const express = require('express'); //common js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database');

const app = express() //app express
const port = process.env.PORT || 8888 // port => hardcode 
//Nếu k có process.env.PORT thì dùng cổng 8888

//config template engine va static file
configViewEngine(app);

//Khai bao route
app.use('/test', webRoutes)

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>result: ", results); // results contains rows returned by server
    }
);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
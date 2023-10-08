const express = require('express'); //common js
//import express from 'express'; //esmodules
const path = require('path');//common js
require('dotenv').config();

const app = express() //app express
const port = process.env.PORT // port => hardcode

//Khai bao template engine
app.set('views', path.join(__dirname, 'views/'))
app.set('view engine', 'ejs')

console.log(">>> Check env: ", process.env)
//Khai bao route
app.get('/abc', (req, res) => {
    res.send('Check abc!')
})
app.get('/hoidanit', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
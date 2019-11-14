const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;
const path = require('path');
const myConnection = require('express-myconnection');
const mysql = require('mysql');


//Setting ups
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//connecting to database
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: 'ganesh',
  port: 3306,
  database: 'nodewithmysql'
}, 'single'));

//For testing
app.get('/',(req,res) =>{
    res.send('Wel come to Nodejs world');
})

app.listen(Port, () => {
    console.log(`Server is running on this ${Port}`)
});



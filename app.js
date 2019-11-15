const express = require('express');
const app = express();
const Port = process.env.PORT || 3000;
const path = require('path');
const myConnection = require('express-myconnection');
const mysql = require('mysql');
const customerRoutes = require('./routes/customer');

//Setting ups
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//Setting ups to static file
app.use(express.static(path.join(__dirname, 'public')));

//connecting to database
app.use(myConnection(mysql,{
  host: 'localhost',
  user: 'root',
  password: 'ganesh',
  port: 3306,
  database: 'nodewithmysql'
}, 'single'));


//routes
app.use('/', customerRoutes);



app.listen(Port, () => {
    console.log(`Server is running on this ${Port}`);
});



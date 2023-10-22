const express= require('express')
const cors= require('cors')
const App= express();
const db= require('./db.js');
const Key_Gen= require('./key.js');
const Auth= require('./routes/Auth.js');

App.use(express.json());
App.use(cors());

App.use('/Auth',Auth);

App.listen(5500,()=>
{
    console.log("Server is listining on port: 5500");
})
const express= require('express')
const cors= require('cors')
const App= express();
const Auth= require('./routes/Auth.js');
const gen_keys =require('./key.js')
require("dotenv").config();
const port= process.env.PORT;

App.use(express.json());
App.use(cors());

App.use('/Auth',Auth);

App.listen(port,()=>
{
    console.log("Server is listining");
})
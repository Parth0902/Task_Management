const express= require('express')
const cors= require('cors')
const App= express();
const Auth= require('./routes/Auth.js');
const Task= require('./routes/Task.js');
const verify =require('./middlewares/Verify.js');
require("dotenv").config();
const port= process.env.PORT;

App.use(express.json());
App.use(cors());

App.use('/Auth',Auth);

App.use('/Task',verify);
App.use('/Task',Task);

App.listen(port,()=>
{
    console.log("Server is listining");
})
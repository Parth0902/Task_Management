const {MongoClient}= require('mongodb');
require('dotenv').config();

const uri= process.env.MONGO_URI;
module .exports= new MongoClient(uri).db('Task_Management');
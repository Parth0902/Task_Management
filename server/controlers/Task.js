const router =require('express').Router();
const db= require('../db.js').collection('Tasks');

const getAllTasks=async(req,res)=>
{
  const user= req.params.user;
  console.log(user);
  try{
    const reply= await db.find({AssignedTo:user}).toArray();
    console.log(reply);
    res.json(reply);
  }
  catch(err){
    console.log(err);
  }
}

const CreateTask=async (req,res)=>
{
   
    const {startDate, dueDate,taskName, discription, assignedTo,assignedBy}= req.body;
    
    if(startDate==="" || dueDate==="" || taskName==="" ||  discription==="" ||  assignedTo==="" || assignedBy===""){
       res.json("Null Entries"); 
    }
    else{

        const task={
            StartDate:startDate,
            DueDate:dueDate,
            TaskName:taskName,
            Discription:discription,
            AssignedTo:assignedTo,
            AssignedBy:assignedBy
        }

        try{
            const reply= await db.insertOne(task);
            res.json("Task Added");
        }
        catch(err){
            console.log(err);
        }
    }

}

module.exports={CreateTask,getAllTasks};
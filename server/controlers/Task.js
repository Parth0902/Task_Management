const { ObjectId } = require('mongodb');

const router =require('express').Router();
const db= require('../db.js').collection('Tasks');

const getAllTasks=async(req,res)=>
{
  const user= req.params.user;
 
  try{
    const reply= await db.find({AssignedTo:user}).toArray();
   
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
            AssignedBy:assignedBy,
            Status:"incomplete"
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

const EditTask = async(req, res) => {
    const {startDate, dueDate,taskName, discription, assignedTo,assignedBy, id}= req.body;
    
    if(startDate==="" || dueDate==="" || taskName==="" ||  discription==="" ||  assignedTo==="" || assignedBy===""  || id === ""){
       res.json("Null Entries"); 
    }
    else {
        try {
            const task={
                StartDate:startDate,
                DueDate:dueDate,
                TaskName:taskName,
                Discription:discription,
                AssignedTo:assignedTo,
                AssignedBy:assignedBy,
                Status:"incomplete"
            }
            const dbRes = await db.updateOne({_id: new ObjectId(id)}, {$set: task});
            if (dbRes.acknowledged) {
                res.json("task updated");
            } else {
                res.json('No Changes')
                console.log("No Changes");
            }
        } catch (err) {
            res.json("database Error");
            console.log(err);
        }
    }
}

module.exports={CreateTask,getAllTasks, EditTask};
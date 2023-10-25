const router= require('express').Router();
const {CreateTask}= require('../controlers/Task.js');

// router.get('/AllTasks',getAllTasks);
// router.get('/AssignedByManager',getTasksAssignedByManager);
router.post('/CreateTask',CreateTask);
// router.post('/taskDelete',TaskDelete);
// router.post('/EditTask',EditTask);

module.exports=router;
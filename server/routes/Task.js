const router= require('express').Router();
const {CreateTask,getAllTasks}= require('../controlers/Task.js');

router.get('/AllTasks/:user',getAllTasks);
// router.get('/AssignedByManager',getTasksAssignedByManager);
router.post('/CreateTask',CreateTask);
// router.post('/taskDelete',TaskDelete);
// router.post('/EditTask',EditTask);

module.exports=router;
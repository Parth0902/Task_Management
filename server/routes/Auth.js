const router= require ("express").Router();
const{register,login} =require('../controlers/Auth.js');

router.post('/Register',register);
router.post('/Login',login);
module.exports=router;

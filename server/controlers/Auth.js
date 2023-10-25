const db= require('../db.js');
const bcrypt = require("bcrypt");
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

require('dotenv').config();
// hashing the password using bcrypt
const hashPass=async(pass)=>
{
    const salt=await bcrypt.genSalt();
    pass=await bcrypt.hash(pass,salt);
    return pass;
}

// register route
const register=async (req,res)=>
{
    const {name,email ,password, access}=req.body;
    
    // if all filds are not empty then only proceed
    if(name!=="" && password!=="" && access!==""){

        // check if the user already exists or not
       const U= await db.collection('User').findOne({Email:email,Access:access});
       if(U){
          
          res.json('User with same email Already exists');
       }
       else{

            const user={
                Name:name,
                Email:email,
                Password: await hashPass(password),
                Access:access
            }
        
            try{
                const reply= await db.collection('User').insertOne(user);
                res.json("registerd Successfully");
            }
            catch(err){
                console.log(err);
            }
       }
        
    }
    else{
        console.log('empty fields');
    }
}

const login= async(req,res)=>{
    const {email,password}=req.body;
    
    // if all filds are not empty then only proceed
    if(email!=='' && password!==''){
        const user= await db.collection('User').findOne({Email:email});

        if(user){
            const privateKeyPath = path.join('./', 'keys', 'private_key.pem');
            const OgPassword= user.Password;
            const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
            
            const payload = {user:user.Name,email:user.Email,access:user.Access};
            
            const token = jwt.sign(payload,privateKey, { algorithm: 'RS256' });

            bcrypt.compare(password,OgPassword,(err,result)=>
            {
                if(err) throw err;
                if(result===true){
                   res.json({msg:'Login Successfull',token:token,user:{name:user.Name,email:user.Email,access:user.Access}});
                }
                else{
                    res.json({msg:'UserName or password is incorrect'});
                }

            })
        }
        else{
            res.json({msg:'User is not regiterd'});
        }
     

    }
    else{
        res.json({msg:'Blank fields'});
    }

}



module.exports ={register,login};
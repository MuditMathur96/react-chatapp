import User from '../models/User.js';
import expressJWT from 'express-jwt';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';

let jwt_secret = process.env.JWT_Secret;

export const register =async(req,res)=>{
    console.log("Inside Register Controller");
    const {email,username,password} = req.body;
    if(!email || !username || !password)
    return res.status(403).json({message:"Email Password Or Username are required"});
    
    let hashPassword = await bcrypt.hash(password,10);

    let newUser = new User({
        email:email.toLowerCase(),
        username,
        password:hashPassword
    });
    try{
        let data= await newUser.save();
        return res.status(201).json(data);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
    

}


export const login = async(req,res)=>{

    let {email,password} = req.body;

    if(!email || !password)
    return res.status(401).json({message:"Email or password is required"});

    try{
        let userToFind = await User.findOne({email:email.toLowerCase()});
        if(!userToFind) return res.status(404).json({message:"Invalid email "});
    
        let isValidUser = await bcrypt.compare(password,userToFind.password);
        if(!isValidUser) return res.status(404).json({message:"Invalid credentials "});
    
        
        userToFind.password = undefined;
        console.log("user found:",userToFind);
        let secret =process.env.JWT_Secret;
        if(!secret) return res.status(500).json({message:"Could not make token for you "});
    
        let token =jwt.sign({user:userToFind},secret,{
            expiresIn:'7d'
        });
        return res.status(200).json({user:userToFind,token})
    }
    catch(err){
        console.log("error in login",err);
        return res.status(500).json(err);
    
    }
    



}


console.log("jwt secret",jwt_secret);
export const isLoggedIn = expressJWT({
    secret:jwt_secret,
    algorithms:['HS256'] 
});


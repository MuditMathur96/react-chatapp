import express from "express";
import {register,login,isLoggedIn} from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/register",register);
router.post("/login",login);

router.get("/me",isLoggedIn,(req,res)=>{
    return res.status(200).json({
        message:"Private Data",
        user:req.user
    
    });
})

export default router;
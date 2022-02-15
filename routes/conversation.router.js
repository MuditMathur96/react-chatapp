import express from "express";
import {create,get} from '../controllers/conversation.controller.js';

const router = express.Router();

router.get("/",(req,res)=>{
    return res.send("Got Conversation!!")
})
router.post("/",create);
router.get("/:id",get);



export default router;
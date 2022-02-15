import express from 'express';
import  'dotenv/config';
import mongoose from 'mongoose';
import morgan from 'morgan';

import authRouter from './routes/auth.router.js';
import conversationRouter from './routes/conversation.router.js';
import messageRouter from './routes/message.router.js';




const port = process.env.PORT;
const mongo_uri = process.env.MongoURI
const app = express();



app.use(morgan("dev"));
app.use(express.json());

app.use("/auth",authRouter);
app.use("/conversation",conversationRouter);

app.use((err,req,res ,next)=>{
   if(err.name=== 'UnauthorizedError')
   {
       return res.status(401).json({message:"Invalid Token"});
   }
   
  next();

})

mongoose.connect(mongo_uri,()=>{
    console.log("Connected To Database");
    app.listen(port,()=>{
        console.log("Listening to port "+port);
    })
})


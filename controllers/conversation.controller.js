import Conversation from '../models/Conversation.js';


export const create=async(req,res)=>{
    
     const {senderId,receiverId} = req.body;
     console.log(senderId,receiverId);

     if(!senderId || !receiverId)
     return res.status(400).json({mesasg:"Could not get participants!!"});

     if(senderId == receiverId)
     return res.status(400).json({mesasg:"Cannot send message to yourself"});


     let newConversation = new Conversation({
         members:[senderId,receiverId]
     });

     try{
        let savedConversation =await newConversation.save();
        return res.status(201).json(savedConversation);
     }
     catch(err){
         console.log(err);
         return res.status(500).json({message:"error while creating conversation",err});
     }



}

export const get=async(req,res)=>{
    let {id} = req.params;

    if(!id)
    return res.status(400).json({message:"Please send a valid id"});

    try{
        let conversations =await Conversation.find({
        members:{"$in":[id]}
    }).populate({
        path:"members",
        select:{"_id":1,"username":1}
    });
    return res.status(200).json(conversations);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json(err);
    }
}


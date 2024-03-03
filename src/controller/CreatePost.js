const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const CreatePost=async(req,res)=>{
 const post=req.body;
 console.log("data aagya")
 console.log(req.data);

 try {
    const addPost=new Blogpost(post);
    console.log("post added",addPost);
    await addPost.save();
    res.status(201).json(addPost);
 } catch (error) {
    res.status(500).send("error adding post")
 }
};
module.exports={CreatePost};
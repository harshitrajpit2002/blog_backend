const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const filterpost=async(req,res)=>{
    const {title}=req.body;
    try {
        const post=await Blogpost.find({title});
        console.log("these are the post",post);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send("error fetching post ");
    }
};
module.exports={filterpost};
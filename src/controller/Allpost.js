const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const allPost=async(req,res)=>{
    try {
        const post=await Blogpost.find();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).send("error fetching properties")
    }
};
module.exports={allPost}
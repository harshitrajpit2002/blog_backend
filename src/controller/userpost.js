const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const userpost=async(req,res)=>{
    const {userid}=req.params;

    try {
        const post=await Blogpost.find({userid});
        res.status(200).send(post)
    } catch (error) {
        res.status(500).send('error fecthing post')
    }
};
module.exports={userpost};   
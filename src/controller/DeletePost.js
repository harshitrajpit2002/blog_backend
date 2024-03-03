const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const DeletePost=async(req,res)=>{
    const {id}=req.params;

    try {
        const post=await Blogpost.findByIdAndDelete(id);
        if (!post) {
            return res.status(404).send("post not found");
        }
        res.status(200).send("post deleted succesfully");
    } catch (error) {
        console.log("Error deleting post",error);
    }
}
module.exports={DeletePost};
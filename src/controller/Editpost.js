const {Request,Response}=require('express');
const {Blogpost}=require('../Models/Post');

const EditPost=async(req,res)=>{
    const {id}=req.params;
    const {title,content,cover,summary}=req.body;

    try {
        const post1=await Blogpost.findByIdAndUpdate(id,{
            title,
            content,
            cover,
            summary,
        },{
            new:true
        })
        if (!post1) {
            return res.status(404).send("post not found");
        }
        res.status(200).json(post1)
    } 
    catch (error) {
       console.log("error upadting post",error)
       res.status(500).send("Internal server error")
    }
}
module.exports={EditPost};
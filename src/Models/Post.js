const mongoose=require('mongoose');
const postSchema=new mongoose.Schema({
    userid:{
        type:String,
    },
    title:{
      type:String,
    required:true,
    },
    summary:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    cover:{
        type:String,
        required:true,
    }



})
const Blogpost=mongoose.model('Blogpost',postSchema);
module.exports={Blogpost}
const router =  require("express").Router();
const { response } = require("express");
const { route } = require("express/lib/application");
const User = require("../models/User");
const Post = require("../models/Post")


//create
router.post("/", async (req,res)=>{
   const newPost = new Post(req.body);
   try {
       const savedPost = await newPost.save();
       res.status(200).json(savedPost);
   } catch (err) {
       res.status(500).json(err)
   }
   
});

//update
router.put("/:id", async (req,res)=>{
    try {
        const post = Post.findById(req.params.id);
        
            if(post.username === req.body.username){
                try {
                    const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                        $set :req.body
                    },{new:true}
                    );
                    res.status(200).json("updatedPost")
                } catch (err) {
            
                }

            }else{
                res.status(401).json("this is not a post you can update")
            }
        
    } catch (err) {
        res.status(500).json(err)
    }
   
});


//delete
router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
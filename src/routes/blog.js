const router = require('express').Router();
const bodyParser=require('body-parser');
const Blog = require('../models/Blog')

// Your routing code goes here


router.get('/blog', async(req,res)=>{
    try{
        const{page=1,search=""}=req.query;
        const blog=await Blog.find({topic:search}).skip((page-1)*5).limit(5);
        res.json({
            status:"ok",
            blog
        })
    }catch(e){
      res.json({
        status:"Failed",
        message:e.message
      })
    }
})

router.post('/blog', async(req,res)=>{
    try{
        const blog=await Blog.create(req.body)
        res.json({
            status:"Success",
            blog
        })
    }catch(e){
      res.json({
        status:"Failed",
        message:e.message
      })
    }
})

router.updateOne('/blog', async(req,res)=>{
    try{
        const blog=await Blog.updateOne({id:req.params.id},req.body)
        res.json({
            status:"Success",
            blog
        })
    }catch(e){
      res.json({
        status:"Failed",
        message:e.message
      })
    }
})


router.delete('/blog', async(req,res)=>{
    try{
        const blog=await Blog.deleteOne({id:req.params.id})
        res.json({
            status:"Success",
            blog
        })
    }catch(e){
      res.json({
        status:"Failed",
        message:e.message
      })
    }
})


module.exports = router;
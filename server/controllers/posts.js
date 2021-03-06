import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'


const getPosts = async (reg, res) => {
    try {
      const postMessages = await PostMessage.find();
      console.log(postMessages);
      res.status(200).json(postMessages);
    } catch (error) {
      res.status(400).json( {message: error.message})
    }
}


const createPost = async (reg, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

    try { 
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.send(409).json( { message: error.message })

    }
}

const updatePost = async(req,res) =>{
  const {id: _id} = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid()) return res.status(404).send('No post with that id');
  
  const  updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true});

  res.json(updatedPost)

}

const deletePost = async(req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid()) return res.status(404).send('No post with that id');

  await PostMessage.findByIdAndDelete(id);

  res.json({message:' Post deleted'})
}

export { getPosts, createPost, updatePost, deletePost }
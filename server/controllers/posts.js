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
  const id = req.params.id
}
export { getPosts, createPost, updatePost }
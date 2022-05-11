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


const createPost = (reg, res) => {
  res.send('Post Cration');

}
export { getPosts, createPost }
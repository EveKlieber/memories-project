import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String, 
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,  
    default: new Date()
  },

})

// we have to turn the schema into a model.
// 2 params: PostMessage und Schema
const PostMessage = mongoose.model('PostMessage', postSchema );

export default PostMessage;
// we can run with this model the crud things...
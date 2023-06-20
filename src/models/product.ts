import * as mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  
  name:{
    type: String,
    require
  },

  price:{
    type: Number,
    require
  },

  category:{
    type: String,
    require
  },

  isInStock:{
    type: Boolean,
    default: true
  },

  isFeatured:{
    type: Boolean,
    default: false
  },

  createdOn:{
    type: Date,
    default: new Date()
  }
})

export default mongoose.model("Post", PostSchema);
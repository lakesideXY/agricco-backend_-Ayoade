import * as mongoose from 'mongoose';

const DiscountSchema = new mongoose.Schema({
  name:{
    type: String,
    require
  },

  normalPrice:{
    type: Number,
    require
  },

  discountedPrice:{
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

  createdOn:{
    type: Date,
    default: new Date()
  }
})

export default mongoose.model("DiscountedProduct", DiscountSchema);
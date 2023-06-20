import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username:{
    type: String,
    require
  },

  email:{
    type: String,
    require
  },

  password:{
    type: String,
    require
  },

  passwordResetToken: String,

  passwordResetExpiry: Date,

  role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
    require
  },

  createdOn:{
    type: Date,
    default: new Date()
  }
})

export default mongoose.model("User", UserSchema);
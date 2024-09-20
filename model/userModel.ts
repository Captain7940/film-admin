import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  sex: {
    type: String,
  },
  status: {
    type: String,
  },
  role: {
    type: String,
  },

});

export default filmSchema;

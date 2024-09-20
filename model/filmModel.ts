import mongoose from 'mongoose';

const filmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
  },
  category: {
    // todo
    type: String,
  },
  description: {
    type: String,
  },


});

export default filmSchema;

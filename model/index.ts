import userSchema from './userModel';
const mongoose = require('mongoose');
var uri = "mongodb+srv://admin:admin@cluster0.iypxbdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function main() {
  mongoose.connect(uri);
}

main()
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

  const User = mongoose.model('User', userSchema);
export { User };

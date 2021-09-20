const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  const DB_URI = process.env.MONGO_DB_URI || 'mongodb+srv://staging-todo:i0PZDPnufKKgI50K@cluster0.rveoz.mongodb.net/todo?retryWrites=true&w=majority'
  await mongoose.connect(DB_URI);
}
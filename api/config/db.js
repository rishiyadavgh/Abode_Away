const mongoose = require('mongoose');

const connectWithDB = () => {
  console.log(process.env.DB_URL)
  mongoose.set('strictQuery', false);
  mongoose
    .connect(process.env.DB_URL)
    .then(console.log(`DB connected successfully`))
    .catch((err) => {
      console.log(`DB connection failed`);
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectWithDB;

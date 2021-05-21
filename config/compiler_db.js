const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.createConnection(process.env.MONGO_COMPILER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("Compiler MongoDB Connected");
};

module.exports = connectDB;

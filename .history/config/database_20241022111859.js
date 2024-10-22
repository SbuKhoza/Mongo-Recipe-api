import 

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.error(err));
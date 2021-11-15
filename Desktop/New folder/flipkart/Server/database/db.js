import mongoose from "mongoose";


const Connection = async (username, password) => {
    const URL =
  "mongodb+srv://${username}:${password}@website.1p1zq.mongodb.net/ PROJECT 0?retryWrites=true&w=majority";

    try {
      await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
      console.log(" connected sucessfully");
    } catch (error) {
      console.log("Error: ",error.message);
    }
  };

  export default Connection;
  
  
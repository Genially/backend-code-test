import mongoose from "mongoose";


/**
 * Create Database connection
 */
  export default (db: string) =>{
    const connect = () => {
        mongoose.connect(db,{useNewUrlParser:true, keepAlive:true, useUnifiedTopology:true, useFindAndModify:false})
        .then(()=>console.log("Success MongoDB Connected"))
        .catch(error => {
           console.log(`Error connecting to MongoDB:${error}`);
           return process.exit(1);
        });
    };
    connect();
  };
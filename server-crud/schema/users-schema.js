import mongoose from "mongoose";
import autoIncrement from'mongoose-auto-increment'

//data base document object
const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: String,
})

//auto increment
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'user');


//user collection name  and data
 const user =mongoose.model("user",userSchema);

 export default user;

 //for user id auto generate module is mongoose-auto-increment
 // fix the version problem
 // npm i --legacy-peer-deps mongoose-auto-increment
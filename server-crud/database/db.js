import mongoose from "mongoose"



const Connecton = async (username,password) => {

    const URL = `mongodb://${username}:${password}@ac-afd9ttr-shard-00-00.dztrakm.mongodb.net:27017,ac-afd9ttr-shard-00-01.dztrakm.mongodb.net:27017,ac-afd9ttr-shard-00-02.dztrakm.mongodb.net:27017/?ssl=true&replicaSet=atlas-tei7ri-shard-0&authSource=admin&retryWrites=true&w=majority`
    
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true },()=> console.log("clound storage is connected"));
           
    } catch {
        (err) => {
            console.log("error while connecting  database  with  mongoose :", err.message)
        }
    }

}
 export default Connecton;

 
import mongoose from "mongoose";

const Connection = () => {

    const DB_URI = `mongodb://sonu82256:sonu82256@ac-ob74yob-shard-00-00.11sn3gk.mongodb.net:27017,ac-ob74yob-shard-00-01.11sn3gk.mongodb.net:27017,ac-ob74yob-shard-00-02.11sn3gk.mongodb.net:27017/?ssl=true&replicaSet=atlas-chcpu9-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        mongoose.connect(DB_URI, { useNewUrlParser: true});
        console.log('Databse connected successfully');
    }catch(error){
        console.log('Error while connectiong with the database', error.message);
    }
}

export default Connection;
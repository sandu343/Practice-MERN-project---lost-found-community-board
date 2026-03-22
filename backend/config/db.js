const mongoose = require("mongoose")

const dburl = 
"mongodb://lumoracaptures_db_user:3BeBLSwM0HvkhBSr@ac-69f9pm5-shard-00-00.3gokvi4.mongodb.net:27017,ac-69f9pm5-shard-00-01.3gokvi4.mongodb.net:27017,ac-69f9pm5-shard-00-02.3gokvi4.mongodb.net:27017/?ssl=true&replicaSet=atlas-guu0lk-shard-0&authSource=admin&appName=Cluster0";

mongoose.set("strictQuery", true); //to maintain data integrity,minimize version conflicts , improve security   

//make connection
const connection = async ()=>{
    try{
        await mongoose.connect(dburl);
        console.log("MongoDB Connected");
    } catch(e){
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;
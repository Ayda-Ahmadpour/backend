import mongoose from "mongoose";
import 'dotenv/config'
// we have to use it for .env page





// we use below code to connect to the server
export const connectToMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Successfully connected to mongo')
    } catch(err) {
        console.log(err)
    }
}


// MVS architecture
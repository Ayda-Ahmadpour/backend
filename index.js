import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import routes from './src/routes/index.js'
import { connectToMongo } from "./src/config/mongoose.js";
import bodyParser from 'body-parser';
const app = express()

// Middlewares==> for validaton,  Middleware is software that provides common services and capabilities to applications outside of what's offered by the operating system.
app.use(bodyParser.json())

//permition:  make the flow between frontend and backend
app.use(cors())


app.use('/api', routes)

const port = process.env.PORT || 5000

try {
    await connectToMongo();
    app.listen(port, () => {
        console.log(`server is running on port: ${port}`)
    })
} catch(err) {
    console.log(err)
}




app.use('/api', routes)
// http://localhost:5000
// http://api.spotify.com
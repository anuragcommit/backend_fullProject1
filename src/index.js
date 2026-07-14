import dotenv from 'dotenv';
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import connectDB from "./db/db.js";


dotenv.config({
    path: './.env'
})
const app = express();
connectDB();











// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)

//         app.on("error", (error) => {
//             console.log(error);
//             throw error
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`server is running on Port: ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error(err);
//         throw err
//     }
// })();
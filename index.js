import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose' 
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import roomsRouter from './routes/rooms.js'
import hotelsRouter from './routes/hotels.js'
const app = express()
dotenv.config()

/********************! DataBAse connection !*************************** */
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connection Established From DataBase..")
    } catch (err) {
        throw err;
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("MOngoDB Disconnected!")
})
mongoose.connection.on("connected",()=>{
    console.log("MOngoDB Connected!")
})
/*********************! MiddileWare !*********************************** */
app.use("/api/auth",authRouter)
app.use("/api/users",usersRouter)
app.use("/api/hotels",roomsRouter)
app.use("/api/rooms",hotelsRouter)




/*******************! First end point !************************** */
app.get("/",(req, res)=>{
    res.send("Hello Start")
})








/***********************! Server Connection !********************************** */
app.listen(8800, () => {
    connect()
    console.log("Connection Established From BackEnd")
})

import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose' 
import authRouter from './routes/auth.js'
import usersRouter from './routes/users.js'
import roomsRouter from './routes/rooms.js'
import hotelsRouter from './routes/hotels.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
dotenv.config()

/********************! DataBase connection !*************************** */
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
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use("/auth",authRouter)
app.use("/users",usersRouter)
app.use("/hotels",hotelsRouter)
app.use("/rooms",roomsRouter)

app.use((err,req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something Went Wrong"
    return res.status(errorStatus).json({
        success:false,
        status:500,
        message:errorMessage,
        stack : err.stack
    })
})



/*******************! First end point !************************** */
app.get("/",(req, res)=>{
    res.send("Hello Start")
})








/***********************! Server Connection !********************************** */
app.listen(8800, () => {
    connect()
    console.log("Server is running on port 8800")
})

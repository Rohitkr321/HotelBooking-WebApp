import express from 'express'
import {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel
} from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

//create
router.post("/", verifyAdmin, createHotel);

//update
router.put("/:id", verifyAdmin, updateHotel)

//Delete
router.delete("/:id", verifyAdmin, deleteHotel)

//GET
router.get("/find/:id", getHotel)

//GET All
router.get("/", getHotels)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)  
router.get("/room/:id", getHotelRooms)    

export default router;